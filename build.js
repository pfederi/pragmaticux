const fs = require('fs');
const path = require('path');

/**
 * Simple build script for Pragmatic UX
 * Optimizes the modular version for production
 */

class Builder {
    constructor() {
        this.buildDir = 'dist';
        this.sourceFiles = [
            'index.html',
            'styles.css',
            'script.js',
            'data/principles.json',
            'data/decision_tree.json'
        ];
        this.directories = ['components', 'assets', 'data'];
    }

    // Create build directory
    createBuildDir() {
        if (fs.existsSync(this.buildDir)) {
            fs.rmSync(this.buildDir, { recursive: true });
        }
        fs.mkdirSync(this.buildDir);
        console.log('📁 Created build directory');
    }

    // Copy file with optional processing
    copyFile(src, dest, process = false) {
        let content = fs.readFileSync(src, 'utf8');
        
        if (process && src.endsWith('.html')) {
            // Minify HTML (basic)
            content = content
                .replace(/\s+/g, ' ')
                .replace(/>\s+</g, '><')
                .trim();
        }
        
        fs.writeFileSync(dest, content);
        console.log(`📄 Copied: ${src} → ${dest}`);
    }

    // Copy directory recursively
    copyDirectory(src, dest) {
        if (!fs.existsSync(src)) {
            console.warn(`⚠️ Directory not found: ${src}`);
            return;
        }

        fs.mkdirSync(dest, { recursive: true });
        
        const items = fs.readdirSync(src);
        for (const item of items) {
            const srcPath = path.join(src, item);
            const destPath = path.join(dest, item);
            
            if (fs.statSync(srcPath).isDirectory()) {
                this.copyDirectory(srcPath, destPath);
            } else {
                this.copyFile(srcPath, destPath);
            }
        }
        console.log(`📁 Copied directory: ${src} → ${dest}`);
    }

    // Build production version
    build() {
        console.log('🔨 Starting build process...');
        
        // Create build directory
        this.createBuildDir();
        
        // Copy main HTML file
        if (fs.existsSync('index.html')) {
            this.copyFile('index.html', path.join(this.buildDir, 'index.html'), true);
        }
        
        // Copy directories first (to ensure they exist)
        for (const dir of this.directories) {
            if (fs.existsSync(dir)) {
                this.copyDirectory(dir, path.join(this.buildDir, dir));
            }
        }
        
        // Copy other files
        for (const file of this.sourceFiles) {
            if (file === 'index.html') continue; // Already handled
            
            if (fs.existsSync(file)) {
                this.copyFile(file, path.join(this.buildDir, file));
            }
        }
        
        // Create deployment info
        const deployInfo = {
            buildTime: new Date().toISOString(),
            version: '1.0.0',
            files: this.getFileList()
        };
        
        fs.writeFileSync(
            path.join(this.buildDir, 'build-info.json'), 
            JSON.stringify(deployInfo, null, 2)
        );
        
        console.log('✅ Build completed successfully!');
        console.log(`📦 Output directory: ${this.buildDir}/`);
    }

    // Get list of all files in build
    getFileList() {
        const files = [];
        const scanDir = (dir) => {
            const items = fs.readdirSync(dir);
            for (const item of items) {
                const fullPath = path.join(dir, item);
                if (fs.statSync(fullPath).isDirectory()) {
                    scanDir(fullPath);
                } else {
                    files.push(fullPath.replace(this.buildDir + '/', ''));
                }
            }
        };
        
        if (fs.existsSync(this.buildDir)) {
            scanDir(this.buildDir);
        }
        
        return files;
    }

    // Clean build directory
    clean() {
        if (fs.existsSync(this.buildDir)) {
            fs.rmSync(this.buildDir, { recursive: true });
            console.log('🧹 Cleaned build directory');
        }
    }
}

// Command line interface
const args = process.argv.slice(2);
const builder = new Builder();

if (args.includes('--clean')) {
    builder.clean();
} else if (args.includes('--help')) {
    console.log(`
🔨 Build Script for Pragmatic UX

Usage:
  node build.js           # Build production version
  node build.js --clean   # Clean build directory
  node build.js --help    # Show this help

Output:
  All files will be built to the 'dist/' directory
    `);
} else {
    builder.build();
}
