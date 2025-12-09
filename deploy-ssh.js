const SftpClient = require('ssh2-sftp-client');
const path = require('path');
const fs = require('fs');

// Load SSH Configuration
let SSH_CONFIG;
try {
    SSH_CONFIG = require('./ssh-config.js');
    console.log('✅ Loaded SSH config from ssh-config.js');
} catch (error) {
    console.error('❌ Could not load ssh-config.js. Please create this file with your SSH credentials.');
    process.exit(1);
}

// Files and directories to upload
const UPLOAD_FILES = [
    'index.html',
    'index-modular.html',
    'styles.css',
    'script.js',
    'principles.json',
    'decision_tree.json',
    'components/',
    'assets/'
];

class SSHDeployer {
    constructor() {
        this.sftp = new SftpClient();
    }

    async connect() {
        try {
            console.log('🔗 Connecting via SSH/SFTP...');
            console.log(`Host: ${SSH_CONFIG.host}:${SSH_CONFIG.port}`);
            console.log(`User: ${SSH_CONFIG.username}`);
            console.log(`Remote Path: ${SSH_CONFIG.remotePath}`);
            
            await this.sftp.connect(SSH_CONFIG);
            console.log('✅ SSH connection established');
            
            // Test remote directory
            try {
                await this.sftp.list(SSH_CONFIG.remotePath);
                console.log(`✅ Remote directory accessible: ${SSH_CONFIG.remotePath}`);
            } catch (dirError) {
                console.warn(`⚠️ Remote directory not accessible: ${SSH_CONFIG.remotePath}`);
                console.log('📁 Available directories:');
                const rootList = await this.sftp.list('/');
                rootList.forEach(item => {
                    if (item.type === 'd') {
                        console.log(`  📁 /${item.name}`);
                    }
                });
            }
            
        } catch (error) {
            console.error('❌ SSH connection failed:', error.message);
            throw error;
        }
    }

    async uploadFile(localPath, remotePath) {
        try {
            const fullRemotePath = path.posix.join(SSH_CONFIG.remotePath, remotePath);
            console.log(`📤 Uploading: ${localPath} → ${fullRemotePath}`);
            
            // Ensure remote directory exists
            const remoteDir = path.posix.dirname(fullRemotePath);
            await this.sftp.mkdir(remoteDir, true);
            
            await this.sftp.fastPut(localPath, fullRemotePath);
            console.log(`✅ Uploaded: ${remotePath}`);
        } catch (error) {
            console.error(`❌ Failed to upload ${localPath}:`, error.message);
        }
    }

    async uploadDirectory(localDir, remoteDir) {
        try {
            const fullRemoteDir = path.posix.join(SSH_CONFIG.remotePath, remoteDir);
            console.log(`📁 Uploading directory: ${localDir} → ${fullRemoteDir}`);
            
            await this.sftp.uploadDir(localDir, fullRemoteDir);
            console.log(`✅ Uploaded directory: ${remoteDir}`);
        } catch (error) {
            console.error(`❌ Failed to upload directory ${localDir}:`, error.message);
        }
    }

    async deploy() {
        try {
            await this.connect();

            console.log('🚀 Starting SSH deployment...');

            for (const item of UPLOAD_FILES) {
                const localPath = path.join(__dirname, item);
                
                if (!fs.existsSync(localPath)) {
                    console.warn(`⚠️ File/directory not found: ${localPath}`);
                    continue;
                }

                const stats = fs.statSync(localPath);
                
                if (stats.isDirectory()) {
                    await this.uploadDirectory(localPath, item);
                } else {
                    await this.uploadFile(localPath, item);
                }
            }

            console.log('🎉 SSH deployment completed successfully!');
            
        } catch (error) {
            console.error('💥 Deployment failed:', error.message);
        } finally {
            await this.sftp.end();
            console.log('🔌 SSH connection closed');
        }
    }

    async deployModular() {
        try {
            await this.connect();

            console.log('🚀 Starting modular SSH deployment...');

            // Upload modular version as main index
            await this.uploadFile('index-modular.html', 'index.html');
            
            // Upload other files
            const files = ['styles.css', 'script.js', 'principles.json', 'decision_tree.json'];
            for (const file of files) {
                if (fs.existsSync(file)) {
                    await this.uploadFile(file, file);
                }
            }

            // Upload directories
            const dirs = ['components', 'assets'];
            for (const dir of dirs) {
                if (fs.existsSync(dir)) {
                    await this.uploadDirectory(dir, dir);
                }
            }

            console.log('🎉 Modular SSH deployment completed successfully!');
            
        } catch (error) {
            console.error('💥 Deployment failed:', error.message);
        } finally {
            await this.sftp.end();
            console.log('🔌 SSH connection closed');
        }
    }

    async deployBuild() {
        try {
            await this.connect();

            console.log('🚀 Starting build SSH deployment...');

            const buildDir = 'dist';
            if (!fs.existsSync(buildDir)) {
                throw new Error('Build directory not found. Run "npm run build" first.');
            }

            // Upload entire build directory content to remote root
            await this.sftp.uploadDir(buildDir, SSH_CONFIG.remotePath);

            console.log('🎉 Build SSH deployment completed successfully!');
            
        } catch (error) {
            console.error('💥 Deployment failed:', error.message);
        } finally {
            await this.sftp.end();
            console.log('🔌 SSH connection closed');
        }
    }

    async testConnection() {
        try {
            await this.connect();
            
            console.log('🧪 Testing SSH connection...');
            
            // List remote directory
            const list = await this.sftp.list(SSH_CONFIG.remotePath);
            console.log(`📁 Remote directory contents (${SSH_CONFIG.remotePath}):`);
            list.forEach(item => {
                const icon = item.type === 'd' ? '📁' : '📄';
                console.log(`  ${icon} ${item.name} (${item.size} bytes)`);
            });
            
            console.log('✅ SSH connection test successful!');
            
        } catch (error) {
            console.error('❌ SSH connection test failed:', error.message);
        } finally {
            await this.sftp.end();
            console.log('🔌 SSH connection closed');
        }
    }
}

// Command line interface
const args = process.argv.slice(2);
const deployer = new SSHDeployer();

if (args.includes('--modular')) {
    deployer.deployModular();
} else if (args.includes('--build')) {
    deployer.deployBuild();
} else if (args.includes('--test')) {
    deployer.testConnection();
} else if (args.includes('--help')) {
    console.log(`
🚀 SSH Deployment Script for Pragmatic UX

Usage:
  node deploy-ssh.js              # Deploy original version
  node deploy-ssh.js --modular    # Deploy modular version (recommended)
  node deploy-ssh.js --build      # Deploy built version from dist/
  node deploy-ssh.js --test       # Test SSH connection
  node deploy-ssh.js --help       # Show this help

Configuration:
  Edit ssh-config.js to set your SSH server details.
    `);
} else {
    deployer.deploy();
}
