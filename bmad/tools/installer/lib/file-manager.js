const fs = require("fs-extra");
const path = require("path");
const crypto = require("crypto");
const glob = require("glob");
const chalk = require("chalk");

class FileManager {
  constructor() {
    this.manifestDir = ".bmad-core";
    this.manifestFile = "install-manifest.yml";
  }

  async copyFile(source, destination) {
    try {
      await fs.ensureDir(path.dirname(destination));
      await fs.copy(source, destination);
      return true;
    } catch (error) {
      console.error(chalk.red(`Failed to copy ${source}:`), error.message);
      return false;
    }
  }

  async copyDirectory(source, destination) {
    try {
      await fs.ensureDir(destination);
      await fs.copy(source, destination);
      return true;
    } catch (error) {
      console.error(
        chalk.red(`Failed to copy directory ${source}:`),
        error.message
      );
      return false;
    }
  }

  async copyGlobPattern(pattern, sourceDir, destDir) {
    const files = glob.sync(pattern, { cwd: sourceDir });
    const copied = [];

    for (const file of files) {
      const sourcePath = path.join(sourceDir, file);
      const destPath = path.join(destDir, file);

      if (await this.copyFile(sourcePath, destPath)) {
        copied.push(file);
      }
    }

    return copied;
  }

  async calculateFileHash(filePath) {
    try {
      const content = await fs.readFile(filePath);
      return crypto
        .createHash("sha256")
        .update(content)
        .digest("hex")
        .slice(0, 16);
    } catch (error) {
      return null;
    }
  }

  async createManifest(installDir, config, files) {
    const manifestPath = path.join(
      installDir,
      this.manifestDir,
      this.manifestFile
    );

    const manifest = {
      version: require("../package.json").version,
      installed_at: new Date().toISOString(),
      install_type: config.installType,
      agent: config.agent || null,
      ide_setup: config.ide || null,
      files: [],
    };

    // Add file information
    for (const file of files) {
      const filePath = path.join(installDir, file);
      const hash = await this.calculateFileHash(filePath);

      manifest.files.push({
        path: file,
        hash: hash,
        modified: false,
      });
    }

    // Write manifest
    await fs.ensureDir(path.dirname(manifestPath));
    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));

    return manifest;
  }

  async readManifest(installDir) {
    const manifestPath = path.join(
      installDir,
      this.manifestDir,
      this.manifestFile
    );

    try {
      const content = await fs.readFile(manifestPath, "utf8");
      return JSON.parse(content);
    } catch (error) {
      return null;
    }
  }

  async checkModifiedFiles(installDir, manifest) {
    const modified = [];

    for (const file of manifest.files) {
      const filePath = path.join(installDir, file.path);
      const currentHash = await this.calculateFileHash(filePath);

      if (currentHash && currentHash !== file.hash) {
        modified.push(file.path);
      }
    }

    return modified;
  }

  async backupFile(filePath) {
    const backupPath = filePath + ".bak";
    let counter = 1;
    let finalBackupPath = backupPath;

    // Find a unique backup filename
    while (await fs.pathExists(finalBackupPath)) {
      finalBackupPath = `${filePath}.bak${counter}`;
      counter++;
    }

    await fs.copy(filePath, finalBackupPath);
    return finalBackupPath;
  }

  async ensureDirectory(dirPath) {
    await fs.ensureDir(dirPath);
  }

  async pathExists(filePath) {
    return fs.pathExists(filePath);
  }

  async readFile(filePath) {
    return fs.readFile(filePath, "utf8");
  }

  async writeFile(filePath, content) {
    await fs.ensureDir(path.dirname(filePath));
    await fs.writeFile(filePath, content);
  }

  async removeDirectory(dirPath) {
    await fs.remove(dirPath);
  }
}

module.exports = new FileManager();
