import type { LayerContent } from '../manualContent';

export const layer0Content: LayerContent = {
  id: 'foundation',
  title: 'Layer 0: Foundation Setup (T0)',
  subtitle: 'Essential tools every developer needs',
  description: 'Terminal, Git, VS Code, Node.js, Python, Docker - Get your environment right once, then build anything.',
  intro: `The command-line interface (terminal/shell) is the foundation of modern development. Every tool installation, deployment, and automation task uses terminal commands. This layer covers the essential foundation tools that are prerequisites for everything else.`,
  prerequisites: [
    'Basic computer literacy (file management, installing software)',
    'Ability to read English technical documentation',
    'Patience for troubleshooting (some installations may need debugging)',
    'Willingness to use command-line interfaces'
  ],
  tools: [
    {
      id: 'windows-terminal',
      name: 'Windows Terminal Setup',
      description: 'Modern terminal application for Windows with tabs, panes, and GPU acceleration',
      officialUrl: 'https://aka.ms/terminal',
      freeTier: 'Free, open source, built into Windows 11',
      tags: ['terminal', 'windows', 'cli'],
      sections: [
        {
          title: 'Step 1: Install Windows Terminal (Modern UI)',
          steps: [
            'Open Microsoft Store (Win + S → type "Store")',
            'Search for "Windows Terminal"',
            'Click "Install" (free, official Microsoft app)',
            'Pin to taskbar for quick access'
          ]
        },
        {
          title: 'Step 2: Install PowerShell 7+ (Recommended)',
          steps: [
            'Visit https://github.com/PowerShell/PowerShell/releases',
            'Download latest .msi installer for Windows',
            'Run installer with default settings',
            'Verify: Open Windows Terminal → Click dropdown → Select "PowerShell 7"',
            'Check version: pwsh --version (should show 7.x)'
          ]
        },
        {
          title: 'Step 3: Install Windows Subsystem for Linux (WSL2) [CRITICAL]',
          content: 'WSL2 provides a full Linux environment inside Windows—essential for Docker, Node.js development, and Unix tools.',
          steps: [
            'Open PowerShell as Administrator (Right-click → "Run as Administrator")',
            'Run: wsl --install',
            'Restart computer when prompted',
            'After restart, Ubuntu will auto-install',
            'Create Linux username and password (remember these!)',
            'Update packages: sudo apt update && sudo apt upgrade -y'
          ],
          code: [
            {
              language: 'powershell',
              code: `wsl --list --verbose
# Should show Ubuntu with VERSION 2`
            }
          ]
        },
        {
          title: 'Troubleshooting WSL2',
          table: {
            headers: ['Problem', 'Solution'],
            rows: [
              ['Error: "Virtualization not enabled"', 'Enable VT-x/AMD-V in BIOS settings'],
              ['Ubuntu stuck on "Installing..."', 'Restart computer, run wsl --install -d Ubuntu manually']
            ]
          }
        }
      ]
    },
    {
      id: 'macos-terminal',
      name: 'macOS Terminal Setup',
      description: 'macOS includes a Unix terminal by default with Homebrew package manager',
      officialUrl: 'https://support.apple.com/guide/terminal/welcome/mac',
      freeTier: 'Free, built into macOS',
      tags: ['terminal', 'macos', 'unix'],
      sections: [
        {
          title: 'Step 1: Open Native Terminal',
          steps: [
            'Press Cmd + Space → type "Terminal" → Enter',
            'Pin to Dock: Right-click Terminal icon → "Options" → "Keep in Dock"'
          ]
        },
        {
          title: 'Step 2: Install Homebrew (Package Manager) [ESSENTIAL]',
          content: 'Homebrew is the macOS equivalent of Linux\'s apt/yum—it installs developer tools with one command.',
          steps: [
            'Visit https://brew.sh',
            'Copy the installation command (starts with /bin/bash -c)',
            'Paste in Terminal, press Enter',
            'Enter your macOS password when prompted',
            'Installation takes 5-10 minutes',
            'Add Homebrew to PATH (installer shows commands for your system)'
          ],
          code: [
            {
              language: 'bash',
              code: `brew --version
# Should show Homebrew 4.x.x`
            }
          ]
        },
        {
          title: 'Step 3: Install Xcode Command Line Tools',
          code: [
            {
              language: 'bash',
              code: `xcode-select --install
# Click "Install" in popup window
# Takes 10-15 minutes

xcode-select -p
# Should show: /Library/Developer/CommandLineTools`
            }
          ]
        },
        {
          title: 'Optional: Install iTerm2 (Better Terminal)',
          code: [
            {
              language: 'bash',
              code: 'brew install --cask iterm2'
            }
          ],
          notes: ['iTerm2 offers split panes, better search, and customization. Official: https://iterm2.com']
        },
        {
          title: 'Install Oh My Zsh (Optional but Recommended)',
          code: [
            {
              language: 'bash',
              code: `sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`
            }
          ],
          notes: ['Official: https://ohmyz.sh']
        }
      ]
    },
    {
      id: 'vscode',
      name: 'Visual Studio Code Setup',
      description: 'Lightweight but powerful source code editor with IntelliSense, debugging, and Git integration',
      officialUrl: 'https://code.visualstudio.com',
      freeTier: 'Free, open source by Microsoft',
      tags: ['editor', 'ide', 'microsoft'],
      sections: [
        {
          title: 'Installation (All Platforms)',
          steps: [
            'Visit https://code.visualstudio.com',
            'Click "Download" → Select your OS',
            'Run installer with default settings',
            '[Windows] Check "Add to PATH" during installation',
            '[macOS] Drag VS Code.app to Applications folder'
          ]
        },
        {
          title: 'Linux Installation',
          code: [
            {
              language: 'bash',
              code: `# Ubuntu/Debian
sudo snap install code --classic

# Or via .deb package
wget -O vscode.deb 'https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64'
sudo dpkg -i vscode.deb`
            }
          ]
        },
        {
          title: 'Verify Installation',
          code: [
            {
              language: 'bash',
              code: `code --version
# Should show version number`
            }
          ]
        },
        {
          title: 'Essential Extensions (Must-Have)',
          content: 'Install Extensions Method: Open VS Code → Press Ctrl+Shift+X (Windows/Linux) or Cmd+Shift+X (macOS) → Search for extension name → Click "Install"',
          table: {
            headers: ['Extension', 'Purpose'],
            rows: [
              ['Prettier', 'Auto-format code on save'],
              ['ESLint', 'JavaScript error checking'],
              ['Python', 'Python development support'],
              ['GitLens', 'Enhanced Git integration'],
              ['Live Server', 'Local web server for HTML'],
              ['Docker', 'Container management UI'],
              ['Remote - SSH', 'Edit files on remote servers'],
              ['WSL', 'Work inside Linux (Windows only)'],
              ['Thunder Client', 'API testing (Postman alternative)'],
              ['Error Lens', 'Inline error highlighting']
            ]
          }
        },
        {
          title: 'Quick Install Command (Copy-Paste)',
          code: [
            {
              language: 'bash',
              code: `code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension ms-python.python
code --install-extension eamodio.gitlens
code --install-extension ritwickdey.LiveServer
code --install-extension ms-azuretools.vscode-docker
code --install-extension ms-vscode-remote.remote-ssh
code --install-extension rangav.vscode-thunder-client
code --install-extension usernamehw.errorlens`
            }
          ]
        },
        {
          title: 'Configuration (Settings Sync)',
          steps: [
            'Click gear icon (bottom left) → "Turn on Settings Sync"',
            'Sign in with GitHub or Microsoft account',
            'Select what to sync (check all)',
            'Click "Sign in & Turn on"'
          ],
          notes: ['Your settings, extensions, and keybindings now sync across all devices.']
        },
        {
          title: 'Recommended Settings',
          content: 'Press Ctrl+, (Settings) and search for each setting:',
          table: {
            headers: ['Setting', 'Value'],
            rows: [
              ['editor.formatOnSave', 'Enable (auto-format with Prettier)'],
              ['editor.tabSize', 'Set to 2 (modern standard)'],
              ['files.autoSave', 'Set to "afterDelay" (auto-save files)'],
              ['terminal.integrated.defaultProfile', 'Set to WSL (Windows) or zsh (macOS/Linux)'],
              ['editor.minimap.enabled', 'Disable if distraction (personal preference)']
            ]
          }
        },
        {
          title: 'Keyboard Shortcuts (Must Know)',
          table: {
            headers: ['Action', 'Windows/Linux', 'macOS'],
            rows: [
              ['Command Palette', 'Ctrl+Shift+P', 'Cmd+Shift+P'],
              ['Quick Open File', 'Ctrl+P', 'Cmd+P'],
              ['Toggle Terminal', 'Ctrl+`', 'Cmd+`'],
              ['Split Editor', 'Ctrl+\\', 'Cmd+\\'],
              ['Go to Line', 'Ctrl+G', 'Cmd+G'],
              ['Find in Files', 'Ctrl+Shift+F', 'Cmd+Shift+F'],
              ['Rename Symbol', 'F2', 'F2'],
              ['Format Document', 'Shift+Alt+F', 'Shift+Option+F']
            ]
          }
        }
      ]
    },
    {
      id: 'git',
      name: 'Git & GitHub Setup',
      description: 'Distributed version control system and collaboration platform',
      officialUrl: 'https://git-scm.com',
      freeTier: 'Free, open source',
      tags: ['vcs', 'version-control', 'github'],
      sections: [
        {
          title: 'Install Git (Windows)',
          steps: [
            'Download from https://git-scm.com/download/win',
            'Run installer',
            'Important options during install:',
            '  - "Git from the command line and also from 3rd-party software" (default)',
            '  - "Use Visual Studio Code as Git\'s default editor"',
            '  - "Override the default branch name for new repositories" → main',
            '  - "Git Credential Manager" → Enable'
          ]
        },
        {
          title: 'Install Git (macOS)',
          code: [
            {
              language: 'bash',
              code: 'brew install git'
            }
          ]
        },
        {
          title: 'Install Git (Linux)',
          code: [
            {
              language: 'bash',
              code: `# Ubuntu/Debian
sudo apt install git

# Fedora
sudo dnf install git`
            }
          ]
        },
        {
          title: 'Verify Installation',
          code: [
            {
              language: 'bash',
              code: `git --version
# Should show git version 2.40+`
            }
          ]
        },
        {
          title: 'Configure Git Identity (CRITICAL)',
          content: 'Configure your name and email (used in every commit):',
          code: [
            {
              language: 'bash',
              code: `git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"
git config --global init.defaultBranch main

# Verify Configuration
git config --list
# Should show your name and email`
            }
          ]
        },
        {
          title: 'Create GitHub Account',
          steps: [
            'Visit https://github.com/signup',
            'Enter email, create password, choose username',
            'Username matters: Use professional name (rajeev-rajora, not coolcoder123)',
            'Complete email verification',
            'Choose Free plan',
            'Skip survey questions (optional)'
          ]
        },
        {
          title: 'Enable Two-Factor Authentication (2FA) [CRITICAL]',
          steps: [
            'Click your profile picture → "Settings"',
            'Sidebar: "Password and authentication"',
            '"Enable two-factor authentication"',
            'Choose "Authenticator app" (more secure than SMS)',
            'Install Google Authenticator or Microsoft Authenticator on phone',
            'Scan QR code with app',
            'Save recovery codes in secure location (password manager or encrypted file)',
            'Enter 6-digit code to verify'
          ]
        },
        {
          title: 'Generate SSH Key (Secure Authentication)',
          content: 'SSH keys let you push/pull code without entering passwords.',
          steps: [
            'Generate SSH key (use your GitHub email)',
            'Press Enter for default location (~/.ssh/id_ed25519)',
            'Enter passphrase (optional but recommended)',
            'Press Enter again to confirm'
          ],
          code: [
            {
              language: 'bash',
              code: `# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@github.com"

# Start SSH agent
eval "$(ssh-agent -s)"

# Add key to agent
ssh-add ~/.ssh/id_ed25519

# Copy Public Key
cat ~/.ssh/id_ed25519.pub
# Copy the entire output (starts with ssh-ed25519)`
            }
          ]
        },
        {
          title: 'Add SSH Key to GitHub',
          steps: [
            'Go to https://github.com/settings/keys',
            'Click "New SSH key"',
            'Title: "My Laptop" (or descriptive name)',
            'Key type: Authentication Key',
            'Paste the public key',
            'Click "Add SSH key"',
            'Enter GitHub password to confirm'
          ]
        },
        {
          title: 'Test SSH Connection',
          code: [
            {
              language: 'bash',
              code: `ssh -T git@github.com
# Should show: "Hi username! You've successfully authenticated..."`
            }
          ]
        },
        {
          title: 'First Repository Exercise',
          content: 'Create your first repo to verify everything works:',
          code: [
            {
              language: 'bash',
              code: `# Create project folder
mkdir my-first-repo
cd my-first-repo

# Initialize git
git init

# Create README file
echo "# My First Repository" > README.md

# Stage file
git add README.md

# Commit
git commit -m "Initial commit"

# Create repo on GitHub (via web interface):
# 1. Go to github.com
# 2. Click "+" → "New repository"
# 3. Name: my-first-repo
# 4. Keep "Public"
# 5. DON'T initialize with README
# 6. Click "Create repository"

# Connect local to GitHub (use SSH URL from GitHub)
git remote add origin git@github.com:YOUR_USERNAME/my-first-repo.git

# Push code
git branch -M main
git push -u origin main`
            }
          ],
          notes: ['Refresh GitHub page—you should see your README file!']
        }
      ]
    },
    {
      id: 'nodejs',
      name: 'Node.js & npm Setup',
      description: 'JavaScript runtime built on Chrome V8 engine - essential for modern web development',
      officialUrl: 'https://nodejs.org',
      freeTier: 'Free, open source',
      tags: ['javascript', 'runtime', 'backend'],
      sections: [
        {
          title: 'Recommended Method: Using Version Manager (nvm)',
          content: 'Version managers let you install multiple Node versions and switch easily.',
          steps: [
            'Download nvm-windows from https://github.com/coreybutler/nvm-windows/releases',
            'Download nvm-setup.exe',
            'Run installer with admin privileges',
            'Restart terminal'
          ]
        },
        {
          title: 'Install nvm (macOS/Linux)',
          code: [
            {
              language: 'bash',
              code: `# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Restart terminal or run:
source ~/.bashrc  # or ~/.zshrc if using zsh

# Verify
nvm --version`
            }
          ],
          notes: ['Official: https://github.com/nvm-sh/nvm']
        },
        {
          title: 'Install Node.js LTS',
          code: [
            {
              language: 'bash',
              code: `# List available versions
nvm list available  # Windows
nvm ls-remote       # macOS/Linux

# Install latest LTS (recommended for stability)
nvm install --lts

# Use installed version
nvm use --lts

# Set as default
nvm alias default node`
            }
          ]
        },
        {
          title: 'Verify Installation',
          code: [
            {
              language: 'bash',
              code: `node --version
# Should show v20.x.x or v22.x.x

npm --version
# Should show 10.x.x or higher`
            }
          ]
        },
        {
          title: 'Configure npm',
          content: 'Set up npm global directory (prevents permission errors):',
          code: [
            {
              language: 'bash',
              code: `# Windows
mkdir "%APPDATA%\\npm"
npm config set prefix "%APPDATA%\\npm"

# macOS/Linux
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'

# Add to PATH (add to ~/.bashrc or ~/.zshrc)
export PATH=~/.npm-global/bin:$PATH
source ~/.bashrc  # or source ~/.zshrc`
            }
          ]
        },
        {
          title: 'Install Essential Global Packages',
          code: [
            {
              language: 'bash',
              code: `# pnpm - faster npm alternative
npm install -g pnpm

# Vercel CLI - deployment tool
npm install -g vercel

# TypeScript compiler
npm install -g typescript

# Nodemon - auto-restart server during development
npm install -g nodemon`
            }
          ]
        },
        {
          title: 'Verify Global Installs',
          code: [
            {
              language: 'bash',
              code: `pnpm --version
vercel --version
tsc --version`
            }
          ]
        },
        {
          title: 'First Node.js Program',
          content: 'Create a simple server to verify everything works:',
          code: [
            {
              language: 'bash',
              code: `# Create project folder
mkdir node-test
cd node-test

# Initialize npm project
npm init -y`
            },
            {
              language: 'javascript',
              code: `// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Node.js!\\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`
            },
            {
              language: 'bash',
              code: `# Run server
node server.js

# Open browser: http://localhost:3000
# Should display: "Hello from Node.js!"
# Press Ctrl+C in terminal to stop server.`
            }
          ]
        }
      ]
    },
    {
      id: 'python',
      name: 'Python Setup',
      description: 'Programming language essential for AI, data science, and backend development',
      officialUrl: 'https://www.python.org',
      freeTier: 'Free, open source',
      tags: ['python', 'programming', 'data-science'],
      sections: [
        {
          title: 'Recommended Method: Anaconda (Includes Data Science Libraries)',
          steps: [
            'Visit https://www.anaconda.com/download',
            'Download installer for your OS (free Individual Edition)',
            'Run installer:',
            '  [Windows] Check "Add Anaconda to PATH" during install',
            '  [macOS/Linux] Installer auto-configures PATH',
            'Installation takes 10-15 minutes (downloads 500+ MB)'
          ]
        },
        {
          title: 'Verify Python Installation',
          code: [
            {
              language: 'bash',
              code: `python --version
# Should show Python 3.11+ or 3.12+

pip --version
# Should show pip 24.x

# Note: On some systems, use python3 and pip3 instead of python and pip.`
            }
          ]
        },
        {
          title: 'Create Virtual Environments',
          content: 'Virtual environments isolate project dependencies—critical for avoiding conflicts.',
          code: [
            {
              language: 'bash',
              code: `# Method 1: venv (Built-in)
# Create virtual environment
python -m venv myenv

# Activate
# Windows:
myenv\\Scripts\\activate

# macOS/Linux:
source myenv/bin/activate

# Your prompt should now show (myenv)

# Install packages
pip install pandas numpy matplotlib

# Deactivate when done
deactivate`
            },
            {
              language: 'bash',
              code: `# Method 2: conda (If using Anaconda)
# Create environment with specific Python version
conda create -n myenv python=3.12

# Activate
conda activate myenv

# Install packages
conda install pandas numpy matplotlib

# Deactivate
conda deactivate`
            }
          ]
        },
        {
          title: 'Install Essential Data Science Libraries',
          code: [
            {
              language: 'bash',
              code: `# Activate your virtual environment first

# Data manipulation
pip install pandas numpy

# Visualization
pip install matplotlib seaborn plotly

# Machine learning
pip install scikit-learn

# Deep learning
pip install torch torchvision  # PyTorch
# OR
pip install tensorflow         # TensorFlow

# Jupyter notebooks
pip install jupyter jupyterlab

# API development
pip install fastapi uvicorn

# GenAI tools
pip install langchain openai anthropic`
            }
          ]
        },
        {
          title: 'Jupyter Notebook Setup',
          code: [
            {
              language: 'bash',
              code: `# Install Jupyter
pip install jupyter

# Launch
jupyter notebook
# Browser opens automatically at http://localhost:8888

# Or use JupyterLab (modern interface)
jupyter lab`
            }
          ],
          steps: [
            'Click "New" → "Python 3"',
            'In first cell, type: print("Hello Jupyter!")',
            'Press Shift+Enter to run',
            'Cell output appears below'
          ]
        }
      ]
    },
    {
      id: 'docker',
      name: 'Docker Desktop Setup',
      description: 'Container platform for building, sharing, and running applications',
      officialUrl: 'https://www.docker.com/products/docker-desktop',
      freeTier: 'Free for personal use',
      tags: ['containers', 'docker', 'devops'],
      sections: [
        {
          title: 'Installation (Windows - WSL2 Required)',
          steps: [
            'Verify WSL2 installed (from Section 3.1.1)',
            'Download Docker Desktop from official site',
            'Run installer',
            'Check "Use WSL 2 instead of Hyper-V" during install',
            'Restart computer',
            'Launch Docker Desktop',
            'Accept terms, skip tutorial (optional)',
            'Docker icon appears in system tray'
          ]
        },
        {
          title: 'Installation (macOS)',
          steps: [
            'Download Docker Desktop for Mac (Intel or Apple Silicon version)',
            'Open .dmg file',
            'Drag Docker to Applications',
            'Launch Docker from Applications',
            'Grant permissions when prompted',
            'Wait for Docker engine to start (whale icon in menu bar)'
          ]
        },
        {
          title: 'Verify Docker Installation',
          code: [
            {
              language: 'bash',
              code: `# Check version
docker --version
# Should show Docker version 24.x or higher

# Test installation
docker run hello-world

# Should download and run a test container showing "Hello from Docker!"`
            }
          ]
        },
        {
          title: 'Docker Desktop Configuration',
          content: 'Open Docker Desktop → Settings:',
          table: {
            headers: ['Resource', 'Recommendation'],
            rows: [
              ['CPU', 'Allocate 50-70% of total cores'],
              ['Memory', 'Allocate 4-8 GB (depending on total RAM)'],
              ['Disk', 'Increase if working with large images']
            ]
          }
        },
        {
          title: 'First Docker Container',
          code: [
            {
              language: 'bash',
              code: `# Pull official Node.js image
docker pull node:20-alpine

# Run interactive container
docker run -it node:20-alpine

# Now you're inside container - try Node.js
> console.log("Running inside Docker!")
> .exit

# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Remove container
docker rm <container_id>`
            }
          ]
        },
        {
          title: 'Create Dockerfile Example',
          code: [
            {
              language: 'bash',
              code: `# Create project folder
mkdir docker-test
cd docker-test`
            },
            {
              language: 'javascript',
              code: `// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Dockerized App!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`
            },
            {
              language: 'json',
              code: `// package.json
{
  "name": "docker-test",
  "version": "1.0.0",
  "main": "app.js",
  "dependencies": {
    "express": "^4.18.2"
  }
}`
            },
            {
              language: 'dockerfile',
              code: `# Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]`
            },
            {
              language: 'bash',
              code: `# Build image
docker build -t my-app .

# Run container
docker run -p 3000:3000 my-app

# Open browser: http://localhost:3000
# Should display: "Hello from Dockerized App!"`
            }
          ]
        }
      ]
    }
  ]
};