// Complete Tools Database - 150+ Free Tools for Developers
// Organized by Layers as per The Complete Free Tools Setup Manual 2026

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  layer: 'foundation' | 'cloud' | 'devops' | 'genai' | 'analytics' | 'fullstack';
  officialUrl: string;
  installCommand?: string;
  freeTierDetails: string;
  tags: string[];
  documentationUrl?: string;
  githubUrl?: string;
}

export const tools: Tool[] = [
  // ==================== LAYER 0: FOUNDATION ====================
  // Terminal & Shell
  {
    id: 'windows-terminal',
    name: 'Windows Terminal',
    description: 'Modern terminal application for Windows with tabs, panes, and GPU acceleration',
    category: 'Terminal',
    layer: 'foundation',
    officialUrl: 'https://aka.ms/terminal',
    freeTierDetails: 'Free, open source, built into Windows 11',
    tags: ['terminal', 'windows', 'cli'],
    documentationUrl: 'https://docs.microsoft.com/windows/terminal/',
    githubUrl: 'https://github.com/microsoft/terminal'
  },
  {
    id: 'powershell',
    name: 'PowerShell 7',
    description: 'Cross-platform automation and configuration tool/framework',
    category: 'Terminal',
    layer: 'foundation',
    officialUrl: 'https://github.com/PowerShell/PowerShell/releases',
    installCommand: 'winget install Microsoft.PowerShell',
    freeTierDetails: 'Free, open source, cross-platform',
    tags: ['terminal', 'scripting', 'automation'],
    documentationUrl: 'https://docs.microsoft.com/powershell/',
    githubUrl: 'https://github.com/PowerShell/PowerShell'
  },
  {
    id: 'wsl2',
    name: 'WSL2',
    description: 'Windows Subsystem for Linux - run Linux environment on Windows',
    category: 'Terminal',
    layer: 'foundation',
    officialUrl: 'https://learn.microsoft.com/windows/wsl/install',
    installCommand: 'wsl --install',
    freeTierDetails: 'Free, built into Windows 10/11',
    tags: ['linux', 'windows', 'terminal'],
    documentationUrl: 'https://docs.microsoft.com/windows/wsl/'
  },
  {
    id: 'iterm2',
    name: 'iTerm2',
    description: 'Terminal emulator for macOS with advanced features',
    category: 'Terminal',
    layer: 'foundation',
    officialUrl: 'https://iterm2.com',
    installCommand: 'brew install --cask iterm2',
    freeTierDetails: 'Free, open source',
    tags: ['terminal', 'macos'],
    documentationUrl: 'https://iterm2.com/documentation.html'
  },
  {
    id: 'oh-my-zsh',
    name: 'Oh My Zsh',
    description: 'Framework for managing Zsh configuration with plugins and themes',
    category: 'Terminal',
    layer: 'foundation',
    officialUrl: 'https://ohmyz.sh',
    installCommand: 'sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"',
    freeTierDetails: 'Free, open source',
    tags: ['terminal', 'zsh', 'shell'],
    documentationUrl: 'https://github.com/ohmyzsh/ohmyzsh/wiki',
    githubUrl: 'https://github.com/ohmyzsh/ohmyzsh'
  },
  {
    id: 'homebrew',
    name: 'Homebrew',
    description: 'Package manager for macOS and Linux',
    category: 'Terminal',
    layer: 'foundation',
    officialUrl: 'https://brew.sh',
    installCommand: '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
    freeTierDetails: 'Free, open source',
    tags: ['package-manager', 'macos', 'linux'],
    documentationUrl: 'https://docs.brew.sh',
    githubUrl: 'https://github.com/Homebrew/brew'
  },
  
  // Code Editors
  {
    id: 'vscode',
    name: 'Visual Studio Code',
    description: 'Lightweight but powerful source code editor with IntelliSense',
    category: 'Editor',
    layer: 'foundation',
    officialUrl: 'https://code.visualstudio.com',
    installCommand: 'brew install --cask visual-studio-code',
    freeTierDetails: 'Free, open source by Microsoft',
    tags: ['editor', 'ide', 'microsoft'],
    documentationUrl: 'https://code.visualstudio.com/docs',
    githubUrl: 'https://github.com/microsoft/vscode'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI-first code editor built on VS Code with GPT-4 integration',
    category: 'Editor',
    layer: 'foundation',
    officialUrl: 'https://cursor.sh',
    freeTierDetails: 'Free tier with 2000 completions/month, Pro at $20/month',
    tags: ['editor', 'ai', 'vscode-fork'],
    documentationUrl: 'https://cursor.sh/docs'
  },
  {
    id: 'vim',
    name: 'Vim',
    description: 'Highly configurable text editor built for efficient text editing',
    category: 'Editor',
    layer: 'foundation',
    officialUrl: 'https://www.vim.org',
    installCommand: 'brew install vim',
    freeTierDetails: 'Free, open source, charityware',
    tags: ['editor', 'terminal', 'modal'],
    documentationUrl: 'https://vimhelp.org'
  },
  {
    id: 'neovim',
    name: 'Neovim',
    description: 'Hyperextensible Vim-based text editor with modern features',
    category: 'Editor',
    layer: 'foundation',
    officialUrl: 'https://neovim.io',
    installCommand: 'brew install neovim',
    freeTierDetails: 'Free, open source',
    tags: ['editor', 'terminal', 'vim'],
    documentationUrl: 'https://neovim.io/doc/',
    githubUrl: 'https://github.com/neovim/neovim'
  },
  {
    id: 'sublime-text',
    name: 'Sublime Text',
    description: 'Sophisticated text editor for code, markup and prose',
    category: 'Editor',
    layer: 'foundation',
    officialUrl: 'https://www.sublimetext.com',
    freeTierDetails: 'Free to evaluate, $99 license',
    tags: ['editor', 'fast', 'lightweight'],
    documentationUrl: 'https://www.sublimetext.com/docs/'
  },
  
  // Version Control
  {
    id: 'git',
    name: 'Git',
    description: 'Distributed version control system',
    category: 'Version Control',
    layer: 'foundation',
    officialUrl: 'https://git-scm.com',
    installCommand: 'brew install git',
    freeTierDetails: 'Free, open source',
    tags: ['vcs', 'version-control', 'scm'],
    documentationUrl: 'https://git-scm.com/doc',
    githubUrl: 'https://github.com/git/git'
  },
  {
    id: 'github',
    name: 'GitHub',
    description: 'Platform for version control and collaboration',
    category: 'Version Control',
    layer: 'foundation',
    officialUrl: 'https://github.com',
    freeTierDetails: 'Unlimited public/private repos, 2,000 Actions minutes/month',
    tags: ['git', 'hosting', 'collaboration'],
    documentationUrl: 'https://docs.github.com'
  },
  {
    id: 'github-desktop',
    name: 'GitHub Desktop',
    description: 'Simple GUI for Git and GitHub workflows',
    category: 'Version Control',
    layer: 'foundation',
    officialUrl: 'https://desktop.github.com',
    freeTierDetails: 'Free, open source',
    tags: ['git', 'gui', 'github'],
    documentationUrl: 'https://docs.github.com/desktop',
    githubUrl: 'https://github.com/desktop/desktop'
  },
  {
    id: 'gitkraken',
    name: 'GitKraken',
    description: 'Git GUI with visual commit history and merge conflict resolution',
    category: 'Version Control',
    layer: 'foundation',
    officialUrl: 'https://www.gitkraken.com',
    freeTierDetails: 'Free for public repos, Pro for private repos',
    tags: ['git', 'gui', 'visual'],
    documentationUrl: 'https://support.gitkraken.com'
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    description: 'Complete DevOps platform with Git repository management',
    category: 'Version Control',
    layer: 'foundation',
    officialUrl: 'https://gitlab.com',
    freeTierDetails: 'Unlimited private repos, 400 CI/CD minutes/month',
    tags: ['git', 'hosting', 'devops'],
    documentationUrl: 'https://docs.gitlab.com'
  },
  {
    id: 'bitbucket',
    name: 'Bitbucket',
    description: 'Git repository hosting by Atlassian',
    category: 'Version Control',
    layer: 'foundation',
    officialUrl: 'https://bitbucket.org',
    freeTierDetails: 'Unlimited private repos for up to 5 users',
    tags: ['git', 'hosting', 'atlassian'],
    documentationUrl: 'https://support.atlassian.com/bitbucket-cloud/'
  },
  
  // Node.js & JavaScript
  {
    id: 'nodejs',
    name: 'Node.js',
    description: 'JavaScript runtime built on Chrome V8 engine',
    category: 'Runtime',
    layer: 'foundation',
    officialUrl: 'https://nodejs.org',
    installCommand: 'nvm install --lts',
    freeTierDetails: 'Free, open source',
    tags: ['javascript', 'runtime', 'backend'],
    documentationUrl: 'https://nodejs.org/docs/',
    githubUrl: 'https://github.com/nodejs/node'
  },
  {
    id: 'nvm',
    name: 'NVM',
    description: 'Node Version Manager - manage multiple Node.js versions',
    category: 'Runtime',
    layer: 'foundation',
    officialUrl: 'https://github.com/nvm-sh/nvm',
    installCommand: 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash',
    freeTierDetails: 'Free, open source',
    tags: ['nodejs', 'version-manager'],
    documentationUrl: 'https://github.com/nvm-sh/nvm#readme',
    githubUrl: 'https://github.com/nvm-sh/nvm'
  },
  {
    id: 'npm',
    name: 'npm',
    description: 'Node package manager - largest software registry',
    category: 'Package Manager',
    layer: 'foundation',
    officialUrl: 'https://www.npmjs.com',
    freeTierDetails: 'Free, included with Node.js',
    tags: ['javascript', 'package-manager', 'nodejs'],
    documentationUrl: 'https://docs.npmjs.com'
  },
  {
    id: 'pnpm',
    name: 'pnpm',
    description: 'Fast, disk space efficient package manager',
    category: 'Package Manager',
    layer: 'foundation',
    officialUrl: 'https://pnpm.io',
    installCommand: 'npm install -g pnpm',
    freeTierDetails: 'Free, open source',
    tags: ['javascript', 'package-manager', 'fast'],
    documentationUrl: 'https://pnpm.io/motivation',
    githubUrl: 'https://github.com/pnpm/pnpm'
  },
  {
    id: 'yarn',
    name: 'Yarn',
    description: 'Fast, reliable, and secure dependency management',
    category: 'Package Manager',
    layer: 'foundation',
    officialUrl: 'https://yarnpkg.com',
    installCommand: 'npm install -g yarn',
    freeTierDetails: 'Free, open source by Meta',
    tags: ['javascript', 'package-manager', 'facebook'],
    documentationUrl: 'https://yarnpkg.com/getting-started',
    githubUrl: 'https://github.com/yarnpkg/yarn'
  },
  {
    id: 'bun',
    name: 'Bun',
    description: 'Fast all-in-one JavaScript runtime & toolkit',
    category: 'Runtime',
    layer: 'foundation',
    officialUrl: 'https://bun.sh',
    installCommand: 'curl -fsSL https://bun.sh/install | bash',
    freeTierDetails: 'Free, open source',
    tags: ['javascript', 'runtime', 'fast'],
    documentationUrl: 'https://bun.sh/docs',
    githubUrl: 'https://github.com/oven-sh/bun'
  },
  
  // Python
  {
    id: 'python',
    name: 'Python',
    description: 'Programming language for web, data science, and automation',
    category: 'Programming Language',
    layer: 'foundation',
    officialUrl: 'https://www.python.org',
    installCommand: 'brew install python@3.12',
    freeTierDetails: 'Free, open source',
    tags: ['python', 'programming', 'data-science'],
    documentationUrl: 'https://docs.python.org/3/'
  },
  {
    id: 'anaconda',
    name: 'Anaconda',
    description: 'Python distribution for data science with package management',
    category: 'Programming Language',
    layer: 'foundation',
    officialUrl: 'https://www.anaconda.com/download',
    freeTierDetails: 'Free Individual Edition',
    tags: ['python', 'data-science', 'ml'],
    documentationUrl: 'https://docs.anaconda.com'
  },
  {
    id: 'miniconda',
    name: 'Miniconda',
    description: 'Minimal installer for conda with Python',
    category: 'Programming Language',
    layer: 'foundation',
    officialUrl: 'https://docs.conda.io/en/latest/miniconda.html',
    freeTierDetails: 'Free, open source',
    tags: ['python', 'conda', 'minimal'],
    documentationUrl: 'https://docs.conda.io'
  },
  {
    id: 'pip',
    name: 'pip',
    description: 'Python package installer',
    category: 'Package Manager',
    layer: 'foundation',
    officialUrl: 'https://pip.pypa.io',
    freeTierDetails: 'Free, included with Python',
    tags: ['python', 'package-manager'],
    documentationUrl: 'https://pip.pypa.io/en/stable/'
  },
  {
    id: 'poetry',
    name: 'Poetry',
    description: 'Python dependency management and packaging',
    category: 'Package Manager',
    layer: 'foundation',
    officialUrl: 'https://python-poetry.org',
    installCommand: 'curl -sSL https://install.python-poetry.org | python3 -',
    freeTierDetails: 'Free, open source',
    tags: ['python', 'package-manager', 'dependency'],
    documentationUrl: 'https://python-poetry.org/docs/',
    githubUrl: 'https://github.com/python-poetry/poetry'
  },
  {
    id: 'pyenv',
    name: 'pyenv',
    description: 'Simple Python version management',
    category: 'Runtime',
    layer: 'foundation',
    officialUrl: 'https://github.com/pyenv/pyenv',
    installCommand: 'brew install pyenv',
    freeTierDetails: 'Free, open source',
    tags: ['python', 'version-manager'],
    documentationUrl: 'https://github.com/pyenv/pyenv#readme',
    githubUrl: 'https://github.com/pyenv/pyenv'
  },
  
  // Docker & Containers
  {
    id: 'docker',
    name: 'Docker Desktop',
    description: 'Container platform for building, sharing, and running applications',
    category: 'Containerization',
    layer: 'foundation',
    officialUrl: 'https://www.docker.com/products/docker-desktop',
    freeTierDetails: 'Free for personal use, Pro for teams',
    tags: ['containers', 'docker', 'devops'],
    documentationUrl: 'https://docs.docker.com'
  },
  {
    id: 'docker-engine',
    name: 'Docker Engine',
    description: 'Open source containerization technology',
    category: 'Containerization',
    layer: 'foundation',
    officialUrl: 'https://docs.docker.com/engine/',
    installCommand: 'sudo apt install docker.io',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['containers', 'docker', 'linux'],
    documentationUrl: 'https://docs.docker.com/engine/',
    githubUrl: 'https://github.com/moby/moby'
  },
  {
    id: 'podman',
    name: 'Podman',
    description: 'Daemonless container engine for developing, managing, and running OCI Containers',
    category: 'Containerization',
    layer: 'foundation',
    officialUrl: 'https://podman.io',
    installCommand: 'brew install podman',
    freeTierDetails: 'Free, open source',
    tags: ['containers', 'docker-alternative', 'rootless'],
    documentationUrl: 'https://docs.podman.io',
    githubUrl: 'https://github.com/containers/podman'
  },
  {
    id: 'colima',
    name: 'Colima',
    description: 'Container runtimes on macOS (and Linux) with minimal setup',
    category: 'Containerization',
    layer: 'foundation',
    officialUrl: 'https://github.com/abiosoft/colima',
    installCommand: 'brew install colima',
    freeTierDetails: 'Free, open source',
    tags: ['containers', 'macos', 'docker'],
    documentationUrl: 'https://github.com/abiosoft/colima#readme',
    githubUrl: 'https://github.com/abiosoft/colima'
  },
  
  // Database Clients
  {
    id: 'dbeaver',
    name: 'DBeaver',
    description: 'Universal database tool for developers and database administrators',
    category: 'Database',
    layer: 'foundation',
    officialUrl: 'https://dbeaver.io/download',
    freeTierDetails: 'Community Edition free and open source',
    tags: ['database', 'sql', 'gui'],
    documentationUrl: 'https://dbeaver.com/docs/wiki/',
    githubUrl: 'https://github.com/dbeaver/dbeaver'
  },
  {
    id: 'tableplus',
    name: 'TablePlus',
    description: 'Modern, native database GUI for relational and NoSQL databases',
    category: 'Database',
    layer: 'foundation',
    officialUrl: 'https://tableplus.com',
    freeTierDetails: 'Free trial, license required for continued use',
    tags: ['database', 'sql', 'gui'],
    documentationUrl: 'https://docs.tableplus.com'
  },
  {
    id: 'sqlite',
    name: 'SQLite',
    description: 'Self-contained, serverless SQL database engine',
    category: 'Database',
    layer: 'foundation',
    officialUrl: 'https://sqlite.org',
    installCommand: 'brew install sqlite',
    freeTierDetails: 'Free, public domain',
    tags: ['database', 'sql', 'embedded'],
    documentationUrl: 'https://sqlite.org/docs.html'
  },
  {
    id: 'db-browser-sqlite',
    name: 'DB Browser for SQLite',
    description: 'Visual tool to create, design, and edit SQLite database files',
    category: 'Database',
    layer: 'foundation',
    officialUrl: 'https://sqlitebrowser.org',
    freeTierDetails: 'Free, open source',
    tags: ['database', 'sqlite', 'gui'],
    documentationUrl: 'https://github.com/sqlitebrowser/sqlitebrowser/wiki',
    githubUrl: 'https://github.com/sqlitebrowser/sqlitebrowser'
  },
  
  // API Testing
  {
    id: 'postman',
    name: 'Postman',
    description: 'Platform for building and using APIs',
    category: 'API Testing',
    layer: 'foundation',
    officialUrl: 'https://www.postman.com/downloads',
    freeTierDetails: 'Free tier with unlimited requests, 3 shared requests',
    tags: ['api', 'testing', 'rest'],
    documentationUrl: 'https://learning.postman.com'
  },
  {
    id: 'insomnia',
    name: 'Insomnia',
    description: 'Open source API client for REST and GraphQL',
    category: 'API Testing',
    layer: 'foundation',
    officialUrl: 'https://insomnia.rest',
    freeTierDetails: 'Free, open source',
    tags: ['api', 'testing', 'graphql'],
    documentationUrl: 'https://docs.insomnia.rest',
    githubUrl: 'https://github.com/Kong/insomnia'
  },
  {
    id: 'thunder-client',
    name: 'Thunder Client',
    description: 'Lightweight REST API client for VS Code',
    category: 'API Testing',
    layer: 'foundation',
    officialUrl: 'https://www.thunderclient.com',
    freeTierDetails: 'Free, VS Code extension',
    tags: ['api', 'testing', 'vscode'],
    documentationUrl: 'https://github.com/rangav/thunder-client-support'
  },
  {
    id: 'httpie',
    name: 'HTTPie',
    description: 'Command-line HTTP client with intuitive UI',
    category: 'API Testing',
    layer: 'foundation',
    officialUrl: 'https://httpie.io',
    installCommand: 'brew install httpie',
    freeTierDetails: 'Free, open source',
    tags: ['api', 'cli', 'http'],
    documentationUrl: 'https://httpie.io/docs',
    githubUrl: 'https://github.com/httpie/httpie'
  },
  
  // ==================== LAYER 1: CLOUD INFRASTRUCTURE ====================
  // AWS
  {
    id: 'aws',
    name: 'Amazon Web Services',
    description: 'Comprehensive cloud computing platform',
    category: 'Cloud Platform',
    layer: 'cloud',
    officialUrl: 'https://aws.amazon.com/free',
    freeTierDetails: '12 months free tier + always free services (Lambda, DynamoDB, S3 5GB)',
    tags: ['cloud', 'aws', 'infrastructure'],
    documentationUrl: 'https://docs.aws.amazon.com'
  },
  {
    id: 'aws-cli',
    name: 'AWS CLI',
    description: 'Command-line interface for AWS services',
    category: 'Cloud Platform',
    layer: 'cloud',
    officialUrl: 'https://aws.amazon.com/cli',
    installCommand: 'brew install awscli',
    freeTierDetails: 'Free, open source',
    tags: ['aws', 'cli', 'cloud'],
    documentationUrl: 'https://docs.aws.amazon.com/cli/',
    githubUrl: 'https://github.com/aws/aws-cli'
  },
  {
    id: 'terraform',
    name: 'Terraform',
    description: 'Infrastructure as Code tool for building, changing, and versioning infrastructure',
    category: 'IaC',
    layer: 'cloud',
    officialUrl: 'https://www.terraform.io',
    installCommand: 'brew install terraform',
    freeTierDetails: 'Free, open source (BSL license)',
    tags: ['iac', 'infrastructure', 'hcl'],
    documentationUrl: 'https://developer.hashicorp.com/terraform/docs',
    githubUrl: 'https://github.com/hashicorp/terraform'
  },
  {
    id: 'pulumi',
    name: 'Pulumi',
    description: 'Infrastructure as Code in any programming language',
    category: 'IaC',
    layer: 'cloud',
    officialUrl: 'https://www.pulumi.com',
    installCommand: 'brew install pulumi',
    freeTierDetails: 'Free for individuals, unlimited deployments',
    tags: ['iac', 'infrastructure', 'typescript'],
    documentationUrl: 'https://www.pulumi.com/docs/',
    githubUrl: 'https://github.com/pulumi/pulumi'
  },
  {
    id: 'aws-cdk',
    name: 'AWS CDK',
    description: 'Define cloud infrastructure using familiar programming languages',
    category: 'IaC',
    layer: 'cloud',
    officialUrl: 'https://aws.amazon.com/cdk',
    installCommand: 'npm install -g aws-cdk',
    freeTierDetails: 'Free, open source',
    tags: ['aws', 'iac', 'typescript'],
    documentationUrl: 'https://docs.aws.amazon.com/cdk/',
    githubUrl: 'https://github.com/aws/aws-cdk'
  },
  
  // Google Cloud
  {
    id: 'gcp',
    name: 'Google Cloud Platform',
    description: 'Suite of cloud computing services by Google',
    category: 'Cloud Platform',
    layer: 'cloud',
    officialUrl: 'https://cloud.google.com/free',
    freeTierDetails: '$300 free credits for 90 days + always free tier',
    tags: ['cloud', 'google', 'gcp'],
    documentationUrl: 'https://cloud.google.com/docs'
  },
  {
    id: 'gcloud-cli',
    name: 'gcloud CLI',
    description: 'Command-line interface for Google Cloud Platform',
    category: 'Cloud Platform',
    layer: 'cloud',
    officialUrl: 'https://cloud.google.com/sdk',
    installCommand: 'brew install google-cloud-sdk',
    freeTierDetails: 'Free, open source',
    tags: ['gcp', 'cli', 'cloud'],
    documentationUrl: 'https://cloud.google.com/sdk/docs'
  },
  
  // Azure
  {
    id: 'azure',
    name: 'Microsoft Azure',
    description: 'Cloud computing service by Microsoft',
    category: 'Cloud Platform',
    layer: 'cloud',
    officialUrl: 'https://azure.microsoft.com/free',
    freeTierDetails: '12 months free + $200 credit + 55+ always free services',
    tags: ['cloud', 'microsoft', 'azure'],
    documentationUrl: 'https://docs.microsoft.com/azure/'
  },
  {
    id: 'azure-cli',
    name: 'Azure CLI',
    description: 'Command-line interface for Azure',
    category: 'Cloud Platform',
    layer: 'cloud',
    officialUrl: 'https://docs.microsoft.com/cli/azure',
    installCommand: 'brew install azure-cli',
    freeTierDetails: 'Free, open source',
    tags: ['azure', 'cli', 'cloud'],
    documentationUrl: 'https://docs.microsoft.com/cli/azure/',
    githubUrl: 'https://github.com/Azure/azure-cli'
  },
  
  // Oracle Cloud
  {
    id: 'oci',
    name: 'Oracle Cloud Infrastructure',
    description: 'Cloud computing services by Oracle with generous free tier',
    category: 'Cloud Platform',
    layer: 'cloud',
    officialUrl: 'https://www.oracle.com/cloud/free',
    freeTierDetails: 'Always Free: 2 AMD VMs + 4 ARM cores + 24GB RAM + 200GB storage',
    tags: ['cloud', 'oracle', 'free-tier'],
    documentationUrl: 'https://docs.oracle.com/en-us/iaas/Content/home.htm'
  },
  {
    id: 'oci-cli',
    name: 'OCI CLI',
    description: 'Command-line interface for Oracle Cloud Infrastructure',
    category: 'Cloud Platform',
    layer: 'cloud',
    officialUrl: 'https://docs.oracle.com/en-us/iaas/Content/API/Concepts/cliconcepts.htm',
    installCommand: 'brew install oci-cli',
    freeTierDetails: 'Free, open source',
    tags: ['oracle', 'cli', 'cloud'],
    documentationUrl: 'https://docs.oracle.com/en-us/iaas/Content/API/Concepts/cliconcepts.htm'
  },
  
  // Deployment Platforms
  {
    id: 'vercel',
    name: 'Vercel',
    description: 'Platform for frontend frameworks and static sites',
    category: 'Deployment',
    layer: 'cloud',
    officialUrl: 'https://vercel.com',
    installCommand: 'npm i -g vercel',
    freeTierDetails: 'Unlimited hobby projects, 100GB bandwidth/month',
    tags: ['deployment', 'frontend', 'nextjs'],
    documentationUrl: 'https://vercel.com/docs'
  },
  {
    id: 'netlify',
    name: 'Netlify',
    description: 'Platform for modern web projects with CI/CD',
    category: 'Deployment',
    layer: 'cloud',
    officialUrl: 'https://www.netlify.com',
    freeTierDetails: 'Unlimited personal projects, 100GB bandwidth/month',
    tags: ['deployment', 'static', 'jamstack'],
    documentationUrl: 'https://docs.netlify.com'
  },
  {
    id: 'railway',
    name: 'Railway',
    description: 'Platform to build, ship, and scale applications',
    category: 'Deployment',
    layer: 'cloud',
    officialUrl: 'https://railway.app',
    freeTierDetails: '$5 credit/month + 500 hours (no card required)',
    tags: ['deployment', 'backend', 'fullstack'],
    documentationUrl: 'https://docs.railway.app'
  },
  {
    id: 'render',
    name: 'Render',
    description: 'Unified cloud to build and run all your apps and websites',
    category: 'Deployment',
    layer: 'cloud',
    officialUrl: 'https://render.com',
    freeTierDetails: '750 hours/month for web services, 90-day free PostgreSQL',
    tags: ['deployment', 'fullstack', 'databases'],
    documentationUrl: 'https://render.com/docs'
  },
  {
    id: 'flyio',
    name: 'Fly.io',
    description: 'Platform for running full stack apps and databases close to users',
    category: 'Deployment',
    layer: 'cloud',
    officialUrl: 'https://fly.io',
    freeTierDetails: 'Free allowance: 3 shared-cpu-1x VMs, 3GB storage',
    tags: ['deployment', 'edge', 'docker'],
    documentationUrl: 'https://fly.io/docs/'
  },
  {
    id: 'heroku',
    name: 'Heroku',
    description: 'Platform as a service enabling developers to build, run, and operate applications',
    category: 'Deployment',
    layer: 'cloud',
    officialUrl: 'https://www.heroku.com',
    freeTierDetails: 'Eco dynos from $5/month (no longer has free tier)',
    tags: ['deployment', 'paas', 'ruby'],
    documentationUrl: 'https://devcenter.heroku.com'
  },
  
  // Static Hosting
  {
    id: 'github-pages',
    name: 'GitHub Pages',
    description: 'Host static websites directly from GitHub repository',
    category: 'Deployment',
    layer: 'cloud',
    officialUrl: 'https://pages.github.com',
    freeTierDetails: 'Free for public repos, 1GB storage, 100GB bandwidth/month',
    tags: ['deployment', 'static', 'github'],
    documentationUrl: 'https://docs.github.com/pages'
  },
  {
    id: 'surge',
    name: 'Surge.sh',
    description: 'Static web publishing for front-end developers',
    category: 'Deployment',
    layer: 'cloud',
    officialUrl: 'https://surge.sh',
    installCommand: 'npm install -g surge',
    freeTierDetails: 'Free for basic features, custom domains supported',
    tags: ['deployment', 'static', 'cli'],
    documentationUrl: 'https://surge.sh/help/'
  },
  
  // Cloud Databases
  {
    id: 'supabase',
    name: 'Supabase',
    description: 'Open source Firebase alternative with PostgreSQL',
    category: 'Database',
    layer: 'cloud',
    officialUrl: 'https://supabase.com',
    freeTierDetails: '500MB database, 1GB storage, 2GB transfer/month',
    tags: ['database', 'postgresql', 'firebase-alternative'],
    documentationUrl: 'https://supabase.com/docs',
    githubUrl: 'https://github.com/supabase/supabase'
  },
  {
    id: 'planetscale',
    name: 'PlanetScale',
    description: 'MySQL-compatible serverless database platform',
    category: 'Database',
    layer: 'cloud',
    officialUrl: 'https://planetscale.com',
    freeTierDetails: '1 database, 5GB storage, 1 billion row reads/month',
    tags: ['database', 'mysql', 'serverless'],
    documentationUrl: 'https://planetscale.com/docs'
  },
  {
    id: 'neon',
    name: 'Neon',
    description: 'Serverless Postgres with branching and bottomless storage',
    category: 'Database',
    layer: 'cloud',
    officialUrl: 'https://neon.tech',
    freeTierDetails: '10GB storage, unlimited databases, 190 compute hours/month',
    tags: ['database', 'postgresql', 'serverless'],
    documentationUrl: 'https://neon.tech/docs/',
    githubUrl: 'https://github.com/neondatabase/neon'
  },
  {
    id: 'cockroachdb',
    name: 'CockroachDB',
    description: 'Distributed SQL database built for cloud-native applications',
    category: 'Database',
    layer: 'cloud',
    officialUrl: 'https://www.cockroachlabs.com',
    freeTierDetails: '5GB storage, 1M request units/month (serverless)',
    tags: ['database', 'sql', 'distributed'],
    documentationUrl: 'https://www.cockroachlabs.com/docs/'
  },
  {
    id: 'mongodb-atlas',
    name: 'MongoDB Atlas',
    description: 'Multi-cloud database service for MongoDB',
    category: 'Database',
    layer: 'cloud',
    officialUrl: 'https://www.mongodb.com/cloud/atlas/register',
    freeTierDetails: '512MB storage, shared RAM (M0 tier) forever free',
    tags: ['database', 'mongodb', 'nosql'],
    documentationUrl: 'https://docs.atlas.mongodb.com/'
  },
  {
    id: 'firebase',
    name: 'Firebase',
    description: 'Google platform for mobile and web application development',
    category: 'Backend',
    layer: 'cloud',
    officialUrl: 'https://firebase.google.com',
    freeTierDetails: 'Spark plan: 1GB storage, 10GB/month transfer, 50K reads/day',
    tags: ['backend', 'database', 'auth'],
    documentationUrl: 'https://firebase.google.com/docs'
  },
  
  // Cloud Storage
  {
    id: 'aws-s3',
    name: 'AWS S3',
    description: 'Object storage service offering industry-leading scalability',
    category: 'Storage',
    layer: 'cloud',
    officialUrl: 'https://aws.amazon.com/s3',
    freeTierDetails: '5GB standard storage, 20K GET, 2K PUT requests (12 months)',
    tags: ['storage', 'aws', 'objects'],
    documentationUrl: 'https://docs.aws.amazon.com/s3/'
  },
  {
    id: 'cloudflare-r2',
    name: 'Cloudflare R2',
    description: 'S3-compatible object storage with zero egress fees',
    category: 'Storage',
    layer: 'cloud',
    officialUrl: 'https://www.cloudflare.com/r2',
    freeTierDetails: '10GB storage, 1M Class A operations, 10M Class B operations/month',
    tags: ['storage', 's3-compatible', 'zero-egress'],
    documentationUrl: 'https://developers.cloudflare.com/r2/'
  },
  {
    id: 'backblaze-b2',
    name: 'Backblaze B2',
    description: 'Object storage with S3 compatibility at fraction of cost',
    category: 'Storage',
    layer: 'cloud',
    officialUrl: 'https://www.backblaze.com/b2/cloud-storage.html',
    freeTierDetails: '10GB free storage, 1GB/day download',
    tags: ['storage', 's3-compatible', 'cheap'],
    documentationUrl: 'https://www.backblaze.com/b2/docs/'
  },
  
  // CDN
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    description: 'CDN, DNS, DDoS protection and security services',
    category: 'CDN',
    layer: 'cloud',
    officialUrl: 'https://www.cloudflare.com',
    freeTierDetails: 'Unlimited bandwidth, global CDN, free SSL, DDoS protection',
    tags: ['cdn', 'dns', 'security'],
    documentationUrl: 'https://developers.cloudflare.com'
  },
  {
    id: 'jsdelivr',
    name: 'jsDelivr',
    description: 'Free CDN for open source projects',
    category: 'CDN',
    layer: 'cloud',
    officialUrl: 'https://www.jsdelivr.com',
    freeTierDetails: 'Free, unlimited for open source',
    tags: ['cdn', 'opensource', 'npm'],
    documentationUrl: 'https://www.jsdelivr.com/documentation'
  },
  
  // ==================== LAYER 2: DEVOPS & MLOPS ====================
  // Docker Compose
  {
    id: 'docker-compose',
    name: 'Docker Compose',
    description: 'Tool for defining and running multi-container Docker applications',
    category: 'Containerization',
    layer: 'devops',
    officialUrl: 'https://docs.docker.com/compose/',
    installCommand: 'docker compose version',
    freeTierDetails: 'Free, included with Docker Desktop',
    tags: ['docker', 'containers', 'orchestration'],
    documentationUrl: 'https://docs.docker.com/compose/',
    githubUrl: 'https://github.com/docker/compose'
  },
  
  // CI/CD
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    description: 'Automate workflows directly from GitHub repository',
    category: 'CI/CD',
    layer: 'devops',
    officialUrl: 'https://github.com/features/actions',
    freeTierDetails: '2,000 minutes/month for private repos, unlimited for public',
    tags: ['cicd', 'automation', 'github'],
    documentationUrl: 'https://docs.github.com/actions'
  },
  {
    id: 'gitlab-ci',
    name: 'GitLab CI/CD',
    description: 'Built-in CI/CD for GitLab repositories',
    category: 'CI/CD',
    layer: 'devops',
    officialUrl: 'https://docs.gitlab.com/ee/ci/',
    freeTierDetails: '400 minutes/month on GitLab.com free tier',
    tags: ['cicd', 'automation', 'gitlab'],
    documentationUrl: 'https://docs.gitlab.com/ee/ci/'
  },
  {
    id: 'jenkins',
    name: 'Jenkins',
    description: 'Open source automation server for CI/CD',
    category: 'CI/CD',
    layer: 'devops',
    officialUrl: 'https://www.jenkins.io',
    freeTierDetails: 'Free, open source (MIT license)',
    tags: ['cicd', 'automation', 'self-hosted'],
    documentationUrl: 'https://www.jenkins.io/doc/',
    githubUrl: 'https://github.com/jenkinsci/jenkins'
  },
  {
    id: 'circleci',
    name: 'CircleCI',
    description: 'Continuous integration and delivery platform',
    category: 'CI/CD',
    layer: 'devops',
    officialUrl: 'https://circleci.com',
    freeTierDetails: '6,000 build minutes/month on free tier',
    tags: ['cicd', 'automation', 'cloud'],
    documentationUrl: 'https://circleci.com/docs/'
  },
  {
    id: 'travis-ci',
    name: 'Travis CI',
    description: 'Hosted continuous integration service',
    category: 'CI/CD',
    layer: 'devops',
    officialUrl: 'https://www.travis-ci.com',
    freeTierDetails: 'Free for open source projects',
    tags: ['cicd', 'automation', 'github'],
    documentationUrl: 'https://docs.travis-ci.com'
  },
  {
    id: 'drone',
    name: 'Drone CI',
    description: 'Container-native continuous delivery platform',
    category: 'CI/CD',
    layer: 'devops',
    officialUrl: 'https://www.drone.io',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['cicd', 'docker', 'self-hosted'],
    documentationUrl: 'https://docs.drone.io',
    githubUrl: 'https://github.com/harness/drone'
  },
  
  // Kubernetes
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    description: 'Container orchestration platform for automating deployment',
    category: 'Orchestration',
    layer: 'devops',
    officialUrl: 'https://kubernetes.io',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['containers', 'orchestration', 'google'],
    documentationUrl: 'https://kubernetes.io/docs/',
    githubUrl: 'https://github.com/kubernetes/kubernetes'
  },
  {
    id: 'minikube',
    name: 'Minikube',
    description: 'Run Kubernetes locally',
    category: 'Orchestration',
    layer: 'devops',
    officialUrl: 'https://minikube.sigs.k8s.io',
    installCommand: 'brew install minikube',
    freeTierDetails: 'Free, open source',
    tags: ['kubernetes', 'local', 'development'],
    documentationUrl: 'https://minikube.sigs.k8s.io/docs/',
    githubUrl: 'https://github.com/kubernetes/minikube'
  },
  {
    id: 'kind',
    name: 'kind',
    description: 'Kubernetes IN Docker - local clusters using Docker',
    category: 'Orchestration',
    layer: 'devops',
    officialUrl: 'https://kind.sigs.k8s.io',
    installCommand: 'brew install kind',
    freeTierDetails: 'Free, open source',
    tags: ['kubernetes', 'docker', 'testing'],
    documentationUrl: 'https://kind.sigs.k8s.io/docs/',
    githubUrl: 'https://github.com/kubernetes-sigs/kind'
  },
  {
    id: 'kubectl',
    name: 'kubectl',
    description: 'Kubernetes command-line tool',
    category: 'Orchestration',
    layer: 'devops',
    officialUrl: 'https://kubernetes.io/docs/tasks/tools/',
    installCommand: 'brew install kubectl',
    freeTierDetails: 'Free, open source',
    tags: ['kubernetes', 'cli'],
    documentationUrl: 'https://kubernetes.io/docs/reference/kubectl/'
  },
  {
    id: 'helm',
    name: 'Helm',
    description: 'Package manager for Kubernetes',
    category: 'Orchestration',
    layer: 'devops',
    officialUrl: 'https://helm.sh',
    installCommand: 'brew install helm',
    freeTierDetails: 'Free, open source',
    tags: ['kubernetes', 'package-manager', 'charts'],
    documentationUrl: 'https://helm.sh/docs/',
    githubUrl: 'https://github.com/helm/helm'
  },
  {
    id: 'k9s',
    name: 'k9s',
    description: 'Kubernetes CLI to manage clusters in real-time',
    category: 'Orchestration',
    layer: 'devops',
    officialUrl: 'https://k9scli.io',
    installCommand: 'brew install k9s',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['kubernetes', 'cli', 'tui'],
    documentationUrl: 'https://k9scli.io/topics/commands/',
    githubUrl: 'https://github.com/derailed/k9s'
  },
  {
    id: 'lens',
    name: 'Lens',
    description: 'IDE for Kubernetes - desktop application',
    category: 'Orchestration',
    layer: 'devops',
    officialUrl: 'https://k8slens.dev',
    freeTierDetails: 'Free for personal use, Team features paid',
    tags: ['kubernetes', 'gui', 'ide'],
    documentationUrl: 'https://docs.k8slens.dev/'
  },
  
  // Monitoring & Observability
  {
    id: 'prometheus',
    name: 'Prometheus',
    description: 'Systems monitoring and alerting toolkit',
    category: 'Monitoring',
    layer: 'devops',
    officialUrl: 'https://prometheus.io',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['monitoring', 'metrics', 'alerting'],
    documentationUrl: 'https://prometheus.io/docs/',
    githubUrl: 'https://github.com/prometheus/prometheus'
  },
  {
    id: 'grafana',
    name: 'Grafana',
    description: 'Platform for monitoring and observability with dashboards',
    category: 'Monitoring',
    layer: 'devops',
    officialUrl: 'https://grafana.com',
    freeTierDetails: 'Free, open source (AGPL)',
    tags: ['monitoring', 'dashboards', 'visualization'],
    documentationUrl: 'https://grafana.com/docs/',
    githubUrl: 'https://github.com/grafana/grafana'
  },
  {
    id: 'loki',
    name: 'Grafana Loki',
    description: 'Log aggregation system designed to be cost-effective',
    category: 'Monitoring',
    layer: 'devops',
    officialUrl: 'https://grafana.com/oss/loki',
    freeTierDetails: 'Free, open source (AGPL)',
    tags: ['logging', 'grafana', 'aggregation'],
    documentationUrl: 'https://grafana.com/docs/loki/',
    githubUrl: 'https://github.com/grafana/loki'
  },
  {
    id: 'jaeger',
    name: 'Jaeger',
    description: 'Distributed tracing system for monitoring microservices',
    category: 'Monitoring',
    layer: 'devops',
    officialUrl: 'https://www.jaegertracing.io',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['tracing', 'observability', 'microservices'],
    documentationUrl: 'https://www.jaegertracing.io/docs/',
    githubUrl: 'https://github.com/jaegertracing/jaeger'
  },
  {
    id: 'datadog',
    name: 'Datadog',
    description: 'Cloud monitoring and security platform',
    category: 'Monitoring',
    layer: 'devops',
    officialUrl: 'https://www.datadoghq.com',
    freeTierDetails: '14-day free trial, then paid',
    tags: ['monitoring', 'apm', 'security'],
    documentationUrl: 'https://docs.datadoghq.com'
  },
  
  // MLOps
  {
    id: 'dvc',
    name: 'DVC',
    description: 'Data Version Control - Git for data and models',
    category: 'MLOps',
    layer: 'devops',
    officialUrl: 'https://dvc.org',
    installCommand: 'pip install dvc',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['mlops', 'version-control', 'data'],
    documentationUrl: 'https://dvc.org/doc',
    githubUrl: 'https://github.com/iterative/dvc'
  },
  {
    id: 'mlflow',
    name: 'MLflow',
    description: 'Platform for the machine learning lifecycle',
    category: 'MLOps',
    layer: 'devops',
    officialUrl: 'https://mlflow.org',
    installCommand: 'pip install mlflow',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['mlops', 'tracking', 'experiments'],
    documentationUrl: 'https://mlflow.org/docs/',
    githubUrl: 'https://github.com/mlflow/mlflow'
  },
  {
    id: 'kubeflow',
    name: 'Kubeflow',
    description: 'Machine learning toolkit for Kubernetes',
    category: 'MLOps',
    layer: 'devops',
    officialUrl: 'https://www.kubeflow.org',
    freeTierDetails: 'Free, open source',
    tags: ['mlops', 'kubernetes', 'ml-pipelines'],
    documentationUrl: 'https://www.kubeflow.org/docs/',
    githubUrl: 'https://github.com/kubeflow/kubeflow'
  },
  {
    id: 'weights-biases',
    name: 'Weights & Biases',
    description: 'MLOps platform for experiment tracking and model management',
    category: 'MLOps',
    layer: 'devops',
    officialUrl: 'https://wandb.ai',
    installCommand: 'pip install wandb',
    freeTierDetails: 'Free for academic and personal use, unlimited projects',
    tags: ['mlops', 'experiment-tracking', 'visualization'],
    documentationUrl: 'https://docs.wandb.ai'
  },
  {
    id: 'tensorboard',
    name: 'TensorBoard',
    description: 'Visualization toolkit for TensorFlow experiments',
    category: 'MLOps',
    layer: 'devops',
    officialUrl: 'https://www.tensorflow.org/tensorboard',
    installCommand: 'pip install tensorboard',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['mlops', 'visualization', 'tensorflow'],
    documentationUrl: 'https://www.tensorflow.org/tensorboard/get_started',
    githubUrl: 'https://github.com/tensorflow/tensorboard'
  },
  {
    id: 'clearml',
    name: 'ClearML',
    description: 'Open source ML platform for experiment management',
    category: 'MLOps',
    layer: 'devops',
    officialUrl: 'https://clear.ml',
    installCommand: 'pip install clearml',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['mlops', 'experiment-tracking', 'automation'],
    documentationUrl: 'https://clear.ml/docs/',
    githubUrl: 'https://github.com/allegroai/clearml'
  },
  
  // ==================== LAYER 3: GENAI & DATA SCIENCE ====================
  // Vector Databases
  {
    id: 'chromadb',
    name: 'ChromaDB',
    description: 'AI-native open-source embedding database',
    category: 'Vector Database',
    layer: 'genai',
    officialUrl: 'https://www.trychroma.com',
    installCommand: 'pip install chromadb',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['vectordb', 'embeddings', 'rag'],
    documentationUrl: 'https://docs.trychroma.com',
    githubUrl: 'https://github.com/chroma-core/chroma'
  },
  {
    id: 'pinecone',
    name: 'Pinecone',
    description: 'Managed vector database for ML applications',
    category: 'Vector Database',
    layer: 'genai',
    officialUrl: 'https://www.pinecone.io',
    freeTierDetails: 'Free tier: 100K vectors, 1 pod',
    tags: ['vectordb', 'managed', 'similarity-search'],
    documentationUrl: 'https://docs.pinecone.io'
  },
  {
    id: 'weaviate',
    name: 'Weaviate',
    description: 'Open source vector database with GraphQL interface',
    category: 'Vector Database',
    layer: 'genai',
    officialUrl: 'https://weaviate.io',
    installCommand: 'pip install weaviate-client',
    freeTierDetails: 'Free, open source (BSD-3)',
    tags: ['vectordb', 'graphql', 'semantic-search'],
    documentationUrl: 'https://weaviate.io/developers/weaviate',
    githubUrl: 'https://github.com/weaviate/weaviate'
  },
  {
    id: 'qdrant',
    name: 'Qdrant',
    description: 'Vector similarity search engine with extended filtering support',
    category: 'Vector Database',
    layer: 'genai',
    officialUrl: 'https://qdrant.tech',
    installCommand: 'pip install qdrant-client',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['vectordb', 'rust', 'filtering'],
    documentationUrl: 'https://qdrant.tech/documentation/',
    githubUrl: 'https://github.com/qdrant/qdrant'
  },
  {
    id: 'milvus',
    name: 'Milvus',
    description: 'Open source vector database for enterprise-grade AI',
    category: 'Vector Database',
    layer: 'genai',
    officialUrl: 'https://milvus.io',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['vectordb', 'enterprise', 'gpu'],
    documentationUrl: 'https://milvus.io/docs',
    githubUrl: 'https://github.com/milvus-io/milvus'
  },
  {
    id: 'pgvector',
    name: 'pgvector',
    description: 'Open-source vector similarity search for Postgres',
    category: 'Vector Database',
    layer: 'genai',
    officialUrl: 'https://github.com/pgvector/pgvector',
    installCommand: 'pip install pgvector',
    freeTierDetails: 'Free, open source',
    tags: ['vectordb', 'postgresql', 'sql'],
    documentationUrl: 'https://github.com/pgvector/pgvector#readme',
    githubUrl: 'https://github.com/pgvector/pgvector'
  },
  
  // LLM Frameworks
  {
    id: 'langchain',
    name: 'LangChain',
    description: 'Framework for developing applications powered by language models',
    category: 'LLM Framework',
    layer: 'genai',
    officialUrl: 'https://langchain.com',
    installCommand: 'pip install langchain',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['llm', 'framework', 'agents'],
    documentationUrl: 'https://python.langchain.com/docs/',
    githubUrl: 'https://github.com/langchain-ai/langchain'
  },
  {
    id: 'langgraph',
    name: 'LangGraph',
    description: 'Build stateful, multi-actor applications with LLMs',
    category: 'LLM Framework',
    layer: 'genai',
    officialUrl: 'https://langchain-ai.github.io/langgraph/',
    installCommand: 'pip install langgraph',
    freeTierDetails: 'Free, open source',
    tags: ['llm', 'agents', 'workflows'],
    documentationUrl: 'https://langchain-ai.github.io/langgraph/',
    githubUrl: 'https://github.com/langchain-ai/langgraph'
  },
  {
    id: 'llamaindex',
    name: 'LlamaIndex',
    description: 'Data framework for LLM applications with RAG',
    category: 'LLM Framework',
    layer: 'genai',
    officialUrl: 'https://www.llamaindex.ai',
    installCommand: 'pip install llama-index',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['llm', 'rag', 'data-loading'],
    documentationUrl: 'https://docs.llamaindex.ai',
    githubUrl: 'https://github.com/run-llama/llama_index'
  },
  {
    id: 'haystack',
    name: 'Haystack',
    description: 'End-to-end NLP framework for building search systems',
    category: 'LLM Framework',
    layer: 'genai',
    officialUrl: 'https://haystack.deepset.ai',
    installCommand: 'pip install farm-haystack',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['nlp', 'search', 'qa-systems'],
    documentationUrl: 'https://docs.haystack.deepset.ai',
    githubUrl: 'https://github.com/deepset-ai/haystack'
  },
  {
    id: 'semantic-kernel',
    name: 'Semantic Kernel',
    description: 'Microsoft SDK for integrating LLMs into applications',
    category: 'LLM Framework',
    layer: 'genai',
    officialUrl: 'https://github.com/microsoft/semantic-kernel',
    installCommand: 'pip install semantic-kernel',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['llm', 'microsoft', 'sdk'],
    documentationUrl: 'https://learn.microsoft.com/semantic-kernel/',
    githubUrl: 'https://github.com/microsoft/semantic-kernel'
  },
  
  // Free LLM APIs
  {
    id: 'groq',
    name: 'Groq',
    description: 'Fastest AI inference API with free tier',
    category: 'LLM API',
    layer: 'genai',
    officialUrl: 'https://console.groq.com',
    installCommand: 'pip install groq',
    freeTierDetails: '14,400 requests/day free tier',
    tags: ['llm', 'api', 'fast-inference'],
    documentationUrl: 'https://console.groq.com/docs'
  },
  {
    id: 'google-gemini',
    name: 'Google Gemini API',
    description: 'Access Google Gemini models via API',
    category: 'LLM API',
    layer: 'genai',
    officialUrl: 'https://aistudio.google.com',
    installCommand: 'pip install google-generativeai',
    freeTierDetails: '1,500 requests/day free tier',
    tags: ['llm', 'google', 'multimodal'],
    documentationUrl: 'https://ai.google.dev/docs'
  },
  {
    id: 'huggingface-inference',
    name: 'Hugging Face Inference API',
    description: 'Access 100K+ ML models via API',
    category: 'LLM API',
    layer: 'genai',
    officialUrl: 'https://huggingface.co/inference-api',
    installCommand: 'pip install huggingface_hub',
    freeTierDetails: 'Free tier with rate limits, serverless inference',
    tags: ['llm', 'opensource', 'models'],
    documentationUrl: 'https://huggingface.co/docs/inference-api/'
  },
  {
    id: 'openrouter',
    name: 'OpenRouter',
    description: 'Unified API for LLMs with pay-as-you-go pricing',
    category: 'LLM API',
    layer: 'genai',
    officialUrl: 'https://openrouter.ai',
    freeTierDetails: 'Some models free with rate limits',
    tags: ['llm', 'api', 'unified'],
    documentationUrl: 'https://openrouter.ai/docs'
  },
  {
    id: 'cohere',
    name: 'Cohere',
    description: 'LLM platform for enterprise with embed and generate APIs',
    category: 'LLM API',
    layer: 'genai',
    officialUrl: 'https://cohere.com',
    installCommand: 'pip install cohere',
    freeTierDetails: 'Trial: 1,000 API calls/month',
    tags: ['llm', 'embeddings', 'enterprise'],
    documentationUrl: 'https://docs.cohere.com'
  },
  {
    id: 'together-ai',
    name: 'Together AI',
    description: 'Fast inference API for open source models',
    category: 'LLM API',
    layer: 'genai',
    officialUrl: 'https://www.together.ai',
    freeTierDetails: '$5 free credits on signup',
    tags: ['llm', 'opensource', 'inference'],
    documentationUrl: 'https://docs.together.ai'
  },
  {
    id: 'replicate',
    name: 'Replicate',
    description: 'Run ML models in the cloud from your code',
    category: 'LLM API',
    layer: 'genai',
    officialUrl: 'https://replicate.com',
    installCommand: 'pip install replicate',
    freeTierDetails: 'Free tier with limited inference',
    tags: ['ml', 'models', 'cloud'],
    documentationUrl: 'https://replicate.com/docs'
  },
  
  // AI App Builders
  {
    id: 'streamlit',
    name: 'Streamlit',
    description: 'Fastest way to build and share data apps',
    category: 'AI App Builder',
    layer: 'genai',
    officialUrl: 'https://streamlit.io',
    installCommand: 'pip install streamlit',
    freeTierDetails: 'Free Community Cloud for unlimited public apps',
    tags: ['python', 'ui', 'data-apps'],
    documentationUrl: 'https://docs.streamlit.io',
    githubUrl: 'https://github.com/streamlit/streamlit'
  },
  {
    id: 'gradio',
    name: 'Gradio',
    description: 'Build and share delightful machine learning apps',
    category: 'AI App Builder',
    layer: 'genai',
    officialUrl: 'https://gradio.app',
    installCommand: 'pip install gradio',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['python', 'ml', 'demo'],
    documentationUrl: 'https://gradio.app/docs',
    githubUrl: 'https://github.com/gradio-app/gradio'
  },
  {
    id: 'chainlit',
    name: 'Chainlit',
    description: 'Build conversational AI interfaces in minutes',
    category: 'AI App Builder',
    layer: 'genai',
    officialUrl: 'https://chainlit.io',
    installCommand: 'pip install chainlit',
    freeTierDetails: 'Free, open source',
    tags: ['python', 'chat', 'llm-ui'],
    documentationUrl: 'https://docs.chainlit.io',
    githubUrl: 'https://github.com/Chainlit/chainlit'
  },
  {
    id: 'panel',
    name: 'Panel',
    description: 'Powerful data exploration and web app framework',
    category: 'AI App Builder',
    layer: 'genai',
    officialUrl: 'https://panel.holoviz.org',
    installCommand: 'pip install panel',
    freeTierDetails: 'Free, open source (BSD)',
    tags: ['python', 'dashboard', 'holoviz'],
    documentationUrl: 'https://panel.holoviz.org/getting_started/',
    githubUrl: 'https://github.com/holoviz/panel'
  },
  
  // ML Libraries
  {
    id: 'pytorch',
    name: 'PyTorch',
    description: 'Open source machine learning framework',
    category: 'ML Framework',
    layer: 'genai',
    officialUrl: 'https://pytorch.org',
    installCommand: 'pip install torch torchvision',
    freeTierDetails: 'Free, open source (BSD)',
    tags: ['ml', 'deep-learning', 'facebook'],
    documentationUrl: 'https://pytorch.org/docs/',
    githubUrl: 'https://github.com/pytorch/pytorch'
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    description: 'End-to-end open source platform for machine learning',
    category: 'ML Framework',
    layer: 'genai',
    officialUrl: 'https://www.tensorflow.org',
    installCommand: 'pip install tensorflow',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['ml', 'deep-learning', 'google'],
    documentationUrl: 'https://www.tensorflow.org/api_docs',
    githubUrl: 'https://github.com/tensorflow/tensorflow'
  },
  {
    id: 'jax',
    name: 'JAX',
    description: 'High-performance ML research by Google',
    category: 'ML Framework',
    layer: 'genai',
    officialUrl: 'https://jax.readthedocs.io',
    installCommand: 'pip install jax',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['ml', 'google', 'accelerated'],
    documentationUrl: 'https://jax.readthedocs.io/en/latest/',
    githubUrl: 'https://github.com/google/jax'
  },
  {
    id: 'scikit-learn',
    name: 'scikit-learn',
    description: 'Machine learning in Python - simple and efficient',
    category: 'ML Framework',
    layer: 'genai',
    officialUrl: 'https://scikit-learn.org',
    installCommand: 'pip install scikit-learn',
    freeTierDetails: 'Free, open source (BSD)',
    tags: ['ml', 'python', 'classic-ml'],
    documentationUrl: 'https://scikit-learn.org/stable/documentation.html',
    githubUrl: 'https://github.com/scikit-learn/scikit-learn'
  },
  {
    id: 'transformers',
    name: 'Hugging Face Transformers',
    description: 'State-of-the-art ML for PyTorch, TensorFlow, and JAX',
    category: 'ML Framework',
    layer: 'genai',
    officialUrl: 'https://huggingface.co/docs/transformers',
    installCommand: 'pip install transformers',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['nlp', 'llm', 'huggingface'],
    documentationUrl: 'https://huggingface.co/docs/transformers/',
    githubUrl: 'https://github.com/huggingface/transformers'
  },
  {
    id: 'diffusers',
    name: 'Diffusers',
    description: 'State-of-the-art diffusion models by Hugging Face',
    category: 'ML Framework',
    layer: 'genai',
    officialUrl: 'https://huggingface.co/docs/diffusers',
    installCommand: 'pip install diffusers',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['diffusion', 'image-generation', 'ai'],
    documentationUrl: 'https://huggingface.co/docs/diffusers/',
    githubUrl: 'https://github.com/huggingface/diffusers'
  },
  
  // Jupyter & Notebooks
  {
    id: 'jupyter',
    name: 'Jupyter Notebook',
    description: 'Web-based interactive computing environment',
    category: 'Notebook',
    layer: 'genai',
    officialUrl: 'https://jupyter.org',
    installCommand: 'pip install jupyter',
    freeTierDetails: 'Free, open source (BSD)',
    tags: ['python', 'notebook', 'interactive'],
    documentationUrl: 'https://jupyter-notebook.readthedocs.io',
    githubUrl: 'https://github.com/jupyter/notebook'
  },
  {
    id: 'jupyterlab',
    name: 'JupyterLab',
    description: 'Next-generation web-based user interface for Project Jupyter',
    category: 'Notebook',
    layer: 'genai',
    officialUrl: 'https://jupyterlab.readthedocs.io',
    installCommand: 'pip install jupyterlab',
    freeTierDetails: 'Free, open source (BSD)',
    tags: ['python', 'notebook', 'ide'],
    documentationUrl: 'https://jupyterlab.readthedocs.io/en/stable/',
    githubUrl: 'https://github.com/jupyterlab/jupyterlab'
  },
  {
    id: 'google-colab',
    name: 'Google Colab',
    description: 'Free Jupyter notebook environment with GPU/TPU access',
    category: 'Notebook',
    layer: 'genai',
    officialUrl: 'https://colab.research.google.com',
    freeTierDetails: 'Free tier with Tesla T4 GPU, 12 hours continuous runtime',
    tags: ['python', 'notebook', 'gpu', 'google'],
    documentationUrl: 'https://colab.research.google.com/notebooks/intro.ipynb'
  },
  {
    id: 'kaggle',
    name: 'Kaggle Notebooks',
    description: 'Free Jupyter notebooks with GPU/TPU for data science',
    category: 'Notebook',
    layer: 'genai',
    officialUrl: 'https://www.kaggle.com/code',
    freeTierDetails: 'Free, 30 hours GPU/week, 20 hours TPU/week',
    tags: ['python', 'notebook', 'competition', 'gpu'],
    documentationUrl: 'https://www.kaggle.com/docs/notebooks'
  },
  {
    id: 'deepnote',
    name: 'Deepnote',
    description: 'Collaborative data notebook for teams',
    category: 'Notebook',
    layer: 'genai',
    officialUrl: 'https://deepnote.com',
    freeTierDetails: 'Free tier: unlimited personal projects, 5GB storage',
    tags: ['python', 'notebook', 'collaboration'],
    documentationUrl: 'https://docs.deepnote.com'
  },
  
  // ==================== LAYER 4: DATA ANALYTICS ====================
  // SQL Databases
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    description: 'Advanced open source relational database',
    category: 'Database',
    layer: 'analytics',
    officialUrl: 'https://www.postgresql.org',
    installCommand: 'brew install postgresql@15',
    freeTierDetails: 'Free, open source (PostgreSQL License)',
    tags: ['sql', 'database', 'relational'],
    documentationUrl: 'https://www.postgresql.org/docs/',
    githubUrl: 'https://github.com/postgres/postgres'
  },
  {
    id: 'mysql',
    name: 'MySQL',
    description: 'World\'s most popular open source database',
    category: 'Database',
    layer: 'analytics',
    officialUrl: 'https://www.mysql.com',
    installCommand: 'brew install mysql',
    freeTierDetails: 'Free Community Edition (GPL)',
    tags: ['sql', 'database', 'oracle'],
    documentationUrl: 'https://dev.mysql.com/doc/'
  },
  {
    id: 'mariadb',
    name: 'MariaDB',
    description: 'Community-developed fork of MySQL',
    category: 'Database',
    layer: 'analytics',
    officialUrl: 'https://mariadb.org',
    installCommand: 'brew install mariadb',
    freeTierDetails: 'Free, open source (GPL v2)',
    tags: ['sql', 'database', 'mysql-compatible'],
    documentationUrl: 'https://mariadb.com/kb/en/documentation/'
  },
  
  // Python Data Stack
  {
    id: 'pandas',
    name: 'Pandas',
    description: 'Data analysis and manipulation library for Python',
    category: 'Data Analysis',
    layer: 'analytics',
    officialUrl: 'https://pandas.pydata.org',
    installCommand: 'pip install pandas',
    freeTierDetails: 'Free, open source (BSD)',
    tags: ['python', 'dataframes', 'analysis'],
    documentationUrl: 'https://pandas.pydata.org/docs/',
    githubUrl: 'https://github.com/pandas-dev/pandas'
  },
  {
    id: 'numpy',
    name: 'NumPy',
    description: 'Fundamental package for scientific computing with Python',
    category: 'Data Analysis',
    layer: 'analytics',
    officialUrl: 'https://numpy.org',
    installCommand: 'pip install numpy',
    freeTierDetails: 'Free, open source (BSD)',
    tags: ['python', 'arrays', 'math'],
    documentationUrl: 'https://numpy.org/doc/',
    githubUrl: 'https://github.com/numpy/numpy'
  },
  {
    id: 'polars',
    name: 'Polars',
    description: 'Fast DataFrame library for Rust and Python',
    category: 'Data Analysis',
    layer: 'analytics',
    officialUrl: 'https://pola.rs',
    installCommand: 'pip install polars',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['python', 'dataframes', 'fast', 'rust'],
    documentationUrl: 'https://pola-rs.github.io/polars-book/',
    githubUrl: 'https://github.com/pola-rs/polars'
  },
  {
    id: 'dask',
    name: 'Dask',
    description: 'Parallel computing library for analytics',
    category: 'Data Analysis',
    layer: 'analytics',
    officialUrl: 'https://www.dask.org',
    installCommand: 'pip install dask',
    freeTierDetails: 'Free, open source (BSD)',
    tags: ['python', 'parallel', 'big-data'],
    documentationUrl: 'https://docs.dask.org',
    githubUrl: 'https://github.com/dask/dask'
  },
  
  // Visualization
  {
    id: 'matplotlib',
    name: 'Matplotlib',
    description: 'Comprehensive library for creating static, animated, and interactive visualizations',
    category: 'Visualization',
    layer: 'analytics',
    officialUrl: 'https://matplotlib.org',
    installCommand: 'pip install matplotlib',
    freeTierDetails: 'Free, open source (PSF-based)',
    tags: ['python', 'plotting', 'static'],
    documentationUrl: 'https://matplotlib.org/stable/contents.html',
    githubUrl: 'https://github.com/matplotlib/matplotlib'
  },
  {
    id: 'seaborn',
    name: 'Seaborn',
    description: 'Statistical data visualization based on Matplotlib',
    category: 'Visualization',
    layer: 'analytics',
    officialUrl: 'https://seaborn.pydata.org',
    installCommand: 'pip install seaborn',
    freeTierDetails: 'Free, open source (BSD)',
    tags: ['python', 'plotting', 'statistical'],
    documentationUrl: 'https://seaborn.pydata.org/tutorial.html',
    githubUrl: 'https://github.com/mwaskom/seaborn'
  },
  {
    id: 'plotly',
    name: 'Plotly',
    description: 'Interactive graphing library for Python, R, and JavaScript',
    category: 'Visualization',
    layer: 'analytics',
    officialUrl: 'https://plotly.com/python/',
    installCommand: 'pip install plotly',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['python', 'interactive', 'web'],
    documentationUrl: 'https://plotly.com/python/getting-started/',
    githubUrl: 'https://github.com/plotly/plotly.py'
  },
  {
    id: 'bokeh',
    name: 'Bokeh',
    description: 'Interactive visualization library for modern web browsers',
    category: 'Visualization',
    layer: 'analytics',
    officialUrl: 'https://bokeh.org',
    installCommand: 'pip install bokeh',
    freeTierDetails: 'Free, open source (BSD)',
    tags: ['python', 'interactive', 'web'],
    documentationUrl: 'https://docs.bokeh.org',
    githubUrl: 'https://github.com/bokeh/bokeh'
  },
  {
    id: 'altair',
    name: 'Altair',
    description: 'Declarative statistical visualization library for Python',
    category: 'Visualization',
    layer: 'analytics',
    officialUrl: 'https://altair-viz.github.io',
    installCommand: 'pip install altair',
    freeTierDetails: 'Free, open source (BSD)',
    tags: ['python', 'declarative', 'vega-lite'],
    documentationUrl: 'https://altair-viz.github.io/getting_started/started.html',
    githubUrl: 'https://github.com/altair-viz/altair'
  },
  
  // BI Tools
  {
    id: 'powerbi',
    name: 'Power BI Desktop',
    description: 'Business analytics service by Microsoft',
    category: 'BI Tool',
    layer: 'analytics',
    officialUrl: 'https://powerbi.microsoft.com/desktop',
    freeTierDetails: 'Desktop app free, Pro $10/user/month',
    tags: ['bi', 'microsoft', 'dashboard'],
    documentationUrl: 'https://docs.microsoft.com/power-bi/'
  },
  {
    id: 'looker-studio',
    name: 'Looker Studio',
    description: 'Free business intelligence tool by Google',
    category: 'BI Tool',
    layer: 'analytics',
    officialUrl: 'https://lookerstudio.google.com',
    freeTierDetails: '100% free, no limits',
    tags: ['bi', 'google', 'dashboard'],
    documentationUrl: 'https://support.google.com/looker-studio'
  },
  {
    id: 'tableau-public',
    name: 'Tableau Public',
    description: 'Free platform to explore, create, and publicly share data visualizations',
    category: 'BI Tool',
    layer: 'analytics',
    officialUrl: 'https://public.tableau.com',
    freeTierDetails: 'Free, work saved publicly',
    tags: ['bi', 'visualization', 'public'],
    documentationUrl: 'https://help.tableau.com/current/public/en-us/gettingstarted.htm'
  },
  {
    id: 'metabase',
    name: 'Metabase',
    description: 'Open source business intelligence and analytics',
    category: 'BI Tool',
    layer: 'analytics',
    officialUrl: 'https://www.metabase.com',
    freeTierDetails: 'Open source edition free (AGPL)',
    tags: ['bi', 'opensource', 'sql'],
    documentationUrl: 'https://www.metabase.com/docs/',
    githubUrl: 'https://github.com/metabase/metabase'
  },
  {
    id: 'apache-superset',
    name: 'Apache Superset',
    description: 'Modern data exploration and visualization platform',
    category: 'BI Tool',
    layer: 'analytics',
    officialUrl: 'https://superset.apache.org',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['bi', 'apache', 'airbnb'],
    documentationUrl: 'https://superset.apache.org/docs/intro/',
    githubUrl: 'https://github.com/apache/superset'
  },
  {
    id: 'redash',
    name: 'Redash',
    description: 'Collaborate and visualize your data',
    category: 'BI Tool',
    layer: 'analytics',
    officialUrl: 'https://redash.io',
    freeTierDetails: 'Open source, self-hosted free (BSD)',
    tags: ['bi', 'sql', 'dashboard'],
    documentationUrl: 'https://redash.io/help/',
    githubUrl: 'https://github.com/getredash/redash'
  },
  
  // ETL & Data Processing
  {
    id: 'apache-airflow',
    name: 'Apache Airflow',
    description: 'Platform to programmatically author, schedule, and monitor workflows',
    category: 'Workflow',
    layer: 'analytics',
    officialUrl: 'https://airflow.apache.org',
    installCommand: 'pip install apache-airflow',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['workflow', 'orchestration', 'etl'],
    documentationUrl: 'https://airflow.apache.org/docs/',
    githubUrl: 'https://github.com/apache/airflow'
  },
  {
    id: 'prefect',
    name: 'Prefect',
    description: 'Modern workflow orchestration for data pipelines',
    category: 'Workflow',
    layer: 'analytics',
    officialUrl: 'https://www.prefect.io',
    installCommand: 'pip install prefect',
    freeTierDetails: 'Free tier: 10K task runs/month',
    tags: ['workflow', 'orchestration', 'python'],
    documentationUrl: 'https://docs.prefect.io',
    githubUrl: 'https://github.com/PrefectHQ/prefect'
  },
  {
    id: 'dagster',
    name: 'Dagster',
    description: 'Cloud-native data pipeline orchestrator',
    category: 'Workflow',
    layer: 'analytics',
    officialUrl: 'https://dagster.io',
    installCommand: 'pip install dagster',
    freeTierDetails: 'Open source free, Cloud has free tier',
    tags: ['workflow', 'data-pipelines', 'observability'],
    documentationUrl: 'https://docs.dagster.io',
    githubUrl: 'https://github.com/dagster-io/dagster'
  },
  {
    id: 'dbt',
    name: 'dbt',
    description: 'Transform data in your warehouse with SQL',
    category: 'Data Transformation',
    layer: 'analytics',
    officialUrl: 'https://www.getdbt.com',
    installCommand: 'pip install dbt-core',
    freeTierDetails: 'Core is free and open source (Apache 2.0)',
    tags: ['sql', 'transformation', 'warehouse'],
    documentationUrl: 'https://docs.getdbt.com',
    githubUrl: 'https://github.com/dbt-labs/dbt-core'
  },
  
  // ==================== LAYER 5: FULL STACK DEVELOPMENT ====================
  // Frontend Frameworks
  {
    id: 'react',
    name: 'React',
    description: 'JavaScript library for building user interfaces',
    category: 'Frontend Framework',
    layer: 'fullstack',
    officialUrl: 'https://react.dev',
    installCommand: 'npm install react react-dom',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['javascript', 'ui', 'facebook'],
    documentationUrl: 'https://react.dev/learn',
    githubUrl: 'https://github.com/facebook/react'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    description: 'React framework for production with SSR and SSG',
    category: 'Frontend Framework',
    layer: 'fullstack',
    officialUrl: 'https://nextjs.org',
    installCommand: 'npx create-next-app@latest',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['react', 'ssr', 'vercel'],
    documentationUrl: 'https://nextjs.org/docs',
    githubUrl: 'https://github.com/vercel/next.js'
  },
  {
    id: 'vue',
    name: 'Vue.js',
    description: 'Progressive JavaScript framework',
    category: 'Frontend Framework',
    layer: 'fullstack',
    officialUrl: 'https://vuejs.org',
    installCommand: 'npm create vue@latest',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['javascript', 'ui', 'progressive'],
    documentationUrl: 'https://vuejs.org/guide/introduction.html',
    githubUrl: 'https://github.com/vuejs/core'
  },
  {
    id: 'svelte',
    name: 'Svelte',
    description: 'Cybernetically enhanced web apps',
    category: 'Frontend Framework',
    layer: 'fullstack',
    officialUrl: 'https://svelte.dev',
    installCommand: 'npm create svelte@latest',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['javascript', 'compiler', 'fast'],
    documentationUrl: 'https://svelte.dev/docs',
    githubUrl: 'https://github.com/sveltejs/svelte'
  },
  {
    id: 'astro',
    name: 'Astro',
    description: 'Build faster websites with less client-side JavaScript',
    category: 'Frontend Framework',
    layer: 'fullstack',
    officialUrl: 'https://astro.build',
    installCommand: 'npm create astro@latest',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['static-site', 'mpa', 'fast'],
    documentationUrl: 'https://docs.astro.build',
    githubUrl: 'https://github.com/withastro/astro'
  },
  {
    id: 'remix',
    name: 'Remix',
    description: 'Full stack web framework focused on web fundamentals',
    category: 'Frontend Framework',
    layer: 'fullstack',
    officialUrl: 'https://remix.run',
    installCommand: 'npx create-remix@latest',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['react', 'fullstack', 'ssr'],
    documentationUrl: 'https://remix.run/docs',
    githubUrl: 'https://github.com/remix-run/remix'
  },
  
  // CSS Frameworks
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework for rapid UI development',
    category: 'CSS Framework',
    layer: 'fullstack',
    officialUrl: 'https://tailwindcss.com',
    installCommand: 'npm install -D tailwindcss',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['css', 'utility-first', 'design'],
    documentationUrl: 'https://tailwindcss.com/docs',
    githubUrl: 'https://github.com/tailwindlabs/tailwindcss'
  },
  {
    id: 'shadcn',
    name: 'shadcn/ui',
    description: 'Beautifully designed components built with Radix UI and Tailwind CSS',
    category: 'UI Library',
    layer: 'fullstack',
    officialUrl: 'https://ui.shadcn.com',
    installCommand: 'npx shadcn-ui@latest init',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['react', 'components', 'tailwind'],
    documentationUrl: 'https://ui.shadcn.com/docs'
  },
  {
    id: 'mui',
    name: 'Material UI',
    description: 'React components implementing Google\'s Material Design',
    category: 'UI Library',
    layer: 'fullstack',
    officialUrl: 'https://mui.com',
    installCommand: 'npm install @mui/material',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['react', 'components', 'material-design'],
    documentationUrl: 'https://mui.com/getting-started/',
    githubUrl: 'https://github.com/mui/material-ui'
  },
  {
    id: 'chakra-ui',
    name: 'Chakra UI',
    description: 'Modular and accessible component library for React',
    category: 'UI Library',
    layer: 'fullstack',
    officialUrl: 'https://chakra-ui.com',
    installCommand: 'npm install @chakra-ui/react',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['react', 'components', 'accessible'],
    documentationUrl: 'https://chakra-ui.com/getting-started',
    githubUrl: 'https://github.com/chakra-ui/chakra-ui'
  },
  {
    id: 'antd',
    name: 'Ant Design',
    description: 'Enterprise-class UI design language and React UI library',
    category: 'UI Library',
    layer: 'fullstack',
    officialUrl: 'https://ant.design',
    installCommand: 'npm install antd',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['react', 'components', 'enterprise'],
    documentationUrl: 'https://ant.design/docs/react/introduce',
    githubUrl: 'https://github.com/ant-design/ant-design'
  },
  
  // Backend Frameworks
  {
    id: 'express',
    name: 'Express.js',
    description: 'Fast, unopinionated, minimalist web framework for Node.js',
    category: 'Backend Framework',
    layer: 'fullstack',
    officialUrl: 'https://expressjs.com',
    installCommand: 'npm install express',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['nodejs', 'backend', 'api'],
    documentationUrl: 'https://expressjs.com/en/4x/api.html',
    githubUrl: 'https://github.com/expressjs/express'
  },
  {
    id: 'fastify',
    name: 'Fastify',
    description: 'Fast and low overhead web framework for Node.js',
    category: 'Backend Framework',
    layer: 'fullstack',
    officialUrl: 'https://www.fastify.io',
    installCommand: 'npm install fastify',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['nodejs', 'backend', 'fast'],
    documentationUrl: 'https://www.fastify.io/docs/',
    githubUrl: 'https://github.com/fastify/fastify'
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    description: 'Progressive Node.js framework for building efficient server-side applications',
    category: 'Backend Framework',
    layer: 'fullstack',
    officialUrl: 'https://nestjs.com',
    installCommand: 'npm install -g @nestjs/cli',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['nodejs', 'backend', 'typescript'],
    documentationUrl: 'https://docs.nestjs.com',
    githubUrl: 'https://github.com/nestjs/nest'
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    description: 'Modern, fast web framework for building APIs with Python',
    category: 'Backend Framework',
    layer: 'fullstack',
    officialUrl: 'https://fastapi.tiangolo.com',
    installCommand: 'pip install fastapi uvicorn',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['python', 'api', 'async'],
    documentationUrl: 'https://fastapi.tiangolo.com/tutorial/',
    githubUrl: 'https://github.com/tiangolo/fastapi'
  },
  {
    id: 'flask',
    name: 'Flask',
    description: 'Lightweight WSGI web application framework in Python',
    category: 'Backend Framework',
    layer: 'fullstack',
    officialUrl: 'https://flask.palletsprojects.com',
    installCommand: 'pip install flask',
    freeTierDetails: 'Free, open source (BSD)',
    tags: ['python', 'web', 'microframework'],
    documentationUrl: 'https://flask.palletsprojects.com/en/2.3.x/',
    githubUrl: 'https://github.com/pallets/flask'
  },
  {
    id: 'django',
    name: 'Django',
    description: 'High-level Python web framework encouraging rapid development',
    category: 'Backend Framework',
    layer: 'fullstack',
    officialUrl: 'https://www.djangoproject.com',
    installCommand: 'pip install django',
    freeTierDetails: 'Free, open source (BSD)',
    tags: ['python', 'web', 'fullstack'],
    documentationUrl: 'https://docs.djangoproject.com',
    githubUrl: 'https://github.com/django/django'
  },
  
  // Authentication
  {
    id: 'nextauth',
    name: 'NextAuth.js',
    description: 'Authentication for Next.js applications',
    category: 'Authentication',
    layer: 'fullstack',
    officialUrl: 'https://next-auth.js.org',
    installCommand: 'npm install next-auth',
    freeTierDetails: 'Free, open source (ISC)',
    tags: ['nextjs', 'auth', 'oauth'],
    documentationUrl: 'https://next-auth.js.org/getting-started/introduction',
    githubUrl: 'https://github.com/nextauthjs/next-auth'
  },
  {
    id: 'auth0',
    name: 'Auth0',
    description: 'Identity platform for developers',
    category: 'Authentication',
    layer: 'fullstack',
    officialUrl: 'https://auth0.com',
    freeTierDetails: '7,500 active users/month free',
    tags: ['auth', 'identity', 'oauth'],
    documentationUrl: 'https://auth0.com/docs'
  },
  {
    id: 'clerk',
    name: 'Clerk',
    description: 'Complete user management for React and Next.js',
    category: 'Authentication',
    layer: 'fullstack',
    officialUrl: 'https://clerk.com',
    freeTierDetails: '5,000 monthly active users free',
    tags: ['auth', 'react', 'nextjs'],
    documentationUrl: 'https://clerk.com/docs'
  },
  {
    id: 'firebase-auth',
    name: 'Firebase Authentication',
    description: 'Easy-to-use authentication by Google',
    category: 'Authentication',
    layer: 'fullstack',
    officialUrl: 'https://firebase.google.com/products/auth',
    freeTierDetails: '10,000 verifications/day on Spark plan',
    tags: ['auth', 'google', 'mobile'],
    documentationUrl: 'https://firebase.google.com/docs/auth'
  },
  
  // ORMs
  {
    id: 'prisma',
    name: 'Prisma',
    description: 'Next-generation ORM for Node.js and TypeScript',
    category: 'ORM',
    layer: 'fullstack',
    officialUrl: 'https://www.prisma.io',
    installCommand: 'npm install prisma @prisma/client',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['orm', 'database', 'typescript'],
    documentationUrl: 'https://www.prisma.io/docs',
    githubUrl: 'https://github.com/prisma/prisma'
  },
  {
    id: 'drizzle',
    name: 'Drizzle ORM',
    description: 'TypeScript ORM that feels like writing SQL',
    category: 'ORM',
    layer: 'fullstack',
    officialUrl: 'https://orm.drizzle.team',
    installCommand: 'npm install drizzle-orm',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['orm', 'typescript', 'sql-like'],
    documentationUrl: 'https://orm.drizzle.team/docs/overview',
    githubUrl: 'https://github.com/drizzle-team/drizzle-orm'
  },
  {
    id: 'typeorm',
    name: 'TypeORM',
    description: 'ORM for TypeScript and JavaScript',
    category: 'ORM',
    layer: 'fullstack',
    officialUrl: 'https://typeorm.io',
    installCommand: 'npm install typeorm',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['orm', 'typescript', 'decorators'],
    documentationUrl: 'https://typeorm.io/#/',
    githubUrl: 'https://github.com/typeorm/typeorm'
  },
  {
    id: 'sqlalchemy',
    name: 'SQLAlchemy',
    description: 'Python SQL toolkit and Object Relational Mapper',
    category: 'ORM',
    layer: 'fullstack',
    officialUrl: 'https://www.sqlalchemy.org',
    installCommand: 'pip install sqlalchemy',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['orm', 'python', 'sql'],
    documentationUrl: 'https://docs.sqlalchemy.org',
    githubUrl: 'https://github.com/sqlalchemy/sqlalchemy'
  },
  
  // Testing
  {
    id: 'jest',
    name: 'Jest',
    description: 'Delightful JavaScript testing framework',
    category: 'Testing',
    layer: 'fullstack',
    officialUrl: 'https://jestjs.io',
    installCommand: 'npm install --save-dev jest',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['testing', 'javascript', 'facebook'],
    documentationUrl: 'https://jestjs.io/docs/getting-started',
    githubUrl: 'https://github.com/facebook/jest'
  },
  {
    id: 'vitest',
    name: 'Vitest',
    description: 'Next generation testing framework powered by Vite',
    category: 'Testing',
    layer: 'fullstack',
    officialUrl: 'https://vitest.dev',
    installCommand: 'npm install -D vitest',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['testing', 'vite', 'fast'],
    documentationUrl: 'https://vitest.dev/guide/',
    githubUrl: 'https://github.com/vitest-dev/vitest'
  },
  {
    id: 'playwright',
    name: 'Playwright',
    description: 'Reliable end-to-end testing for modern web apps',
    category: 'Testing',
    layer: 'fullstack',
    officialUrl: 'https://playwright.dev',
    installCommand: 'npm init playwright@latest',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['testing', 'e2e', 'microsoft'],
    documentationUrl: 'https://playwright.dev/docs/intro',
    githubUrl: 'https://github.com/microsoft/playwright'
  },
  {
    id: 'cypress',
    name: 'Cypress',
    description: 'Fast, easy and reliable testing for anything that runs in a browser',
    category: 'Testing',
    layer: 'fullstack',
    officialUrl: 'https://www.cypress.io',
    installCommand: 'npm install cypress --save-dev',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['testing', 'e2e', 'browser'],
    documentationUrl: 'https://docs.cypress.io',
    githubUrl: 'https://github.com/cypress-io/cypress'
  },
  {
    id: 'pytest',
    name: 'pytest',
    description: 'Full-featured Python testing tool',
    category: 'Testing',
    layer: 'fullstack',
    officialUrl: 'https://docs.pytest.org',
    installCommand: 'pip install pytest',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['testing', 'python'],
    documentationUrl: 'https://docs.pytest.org/en/stable/',
    githubUrl: 'https://github.com/pytest-dev/pytest'
  },
  
  // Build Tools
  {
    id: 'vite',
    name: 'Vite',
    description: 'Next generation frontend tooling',
    category: 'Build Tool',
    layer: 'fullstack',
    officialUrl: 'https://vitejs.dev',
    installCommand: 'npm create vite@latest',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['build', 'bundler', 'fast'],
    documentationUrl: 'https://vitejs.dev/guide/',
    githubUrl: 'https://github.com/vitejs/vite'
  },
  {
    id: 'webpack',
    name: 'Webpack',
    description: 'Static module bundler for modern JavaScript applications',
    category: 'Build Tool',
    layer: 'fullstack',
    officialUrl: 'https://webpack.js.org',
    installCommand: 'npm install --save-dev webpack',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['build', 'bundler', 'javascript'],
    documentationUrl: 'https://webpack.js.org/concepts/',
    githubUrl: 'https://github.com/webpack/webpack'
  },
  {
    id: 'turbopack',
    name: 'Turbopack',
    description: 'Incremental bundler optimized for JavaScript and TypeScript',
    category: 'Build Tool',
    layer: 'fullstack',
    officialUrl: 'https://turbo.build/pack',
    freeTierDetails: 'Free, open source (MPL-2.0)',
    tags: ['build', 'bundler', 'rust'],
    documentationUrl: 'https://turbo.build/pack/docs',
    githubUrl: 'https://github.com/vercel/turbo'
  },
  {
    id: 'esbuild',
    name: 'esbuild',
    description: 'Extremely fast JavaScript bundler and minifier',
    category: 'Build Tool',
    layer: 'fullstack',
    officialUrl: 'https://esbuild.github.io',
    installCommand: 'npm install esbuild',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['build', 'bundler', 'fast'],
    documentationUrl: 'https://esbuild.github.io/api/',
    githubUrl: 'https://github.com/evanw/esbuild'
  },
  
  // TypeScript
  {
    id: 'typescript',
    name: 'TypeScript',
    description: 'Typed superset of JavaScript that compiles to plain JavaScript',
    category: 'Language',
    layer: 'fullstack',
    officialUrl: 'https://www.typescriptlang.org',
    installCommand: 'npm install -D typescript',
    freeTierDetails: 'Free, open source (Apache 2.0)',
    tags: ['javascript', 'types', 'microsoft'],
    documentationUrl: 'https://www.typescriptlang.org/docs/',
    githubUrl: 'https://github.com/microsoft/TypeScript'
  },
  
  // API Tools
  {
    id: 'trpc',
    name: 'tRPC',
    description: 'End-to-end typesafe APIs made easy',
    category: 'API Framework',
    layer: 'fullstack',
    officialUrl: 'https://trpc.io',
    installCommand: 'npm install @trpc/server @trpc/client',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['api', 'typescript', 'typesafe'],
    documentationUrl: 'https://trpc.io/docs',
    githubUrl: 'https://github.com/trpc/trpc'
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    description: 'Query language for APIs and runtime for fulfilling queries',
    category: 'API Framework',
    layer: 'fullstack',
    officialUrl: 'https://graphql.org',
    installCommand: 'npm install graphql',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['api', 'query-language', 'facebook'],
    documentationUrl: 'https://graphql.org/learn/',
    githubUrl: 'https://github.com/graphql/graphql-spec'
  },
  {
    id: 'apollo',
    name: 'Apollo Client',
    description: 'Comprehensive state management library for JavaScript',
    category: 'API Framework',
    layer: 'fullstack',
    officialUrl: 'https://www.apollographql.com',
    installCommand: 'npm install @apollo/client graphql',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['graphql', 'client', 'state-management'],
    documentationUrl: 'https://www.apollographql.com/docs/react/',
    githubUrl: 'https://github.com/apollographql/apollo-client'
  },
  {
    id: 'openapi',
    name: 'OpenAPI',
    description: 'Standard format for describing REST APIs',
    category: 'API Framework',
    layer: 'fullstack',
    officialUrl: 'https://www.openapis.org',
    freeTierDetails: 'Free, open standard',
    tags: ['api', 'specification', 'rest'],
    documentationUrl: 'https://swagger.io/specification/'
  },
  
  // Additional Tools
  {
    id: 'zod',
    name: 'Zod',
    description: 'TypeScript-first schema validation with static type inference',
    category: 'Validation',
    layer: 'fullstack',
    officialUrl: 'https://zod.dev',
    installCommand: 'npm install zod',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['typescript', 'validation', 'schema'],
    documentationUrl: 'https://zod.dev',
    githubUrl: 'https://github.com/colinhacks/zod'
  },
  {
    id: 'react-query',
    name: 'TanStack Query',
    description: 'Powerful asynchronous state management for TS/JS, React, Solid, Vue and Svelte',
    category: 'State Management',
    layer: 'fullstack',
    officialUrl: 'https://tanstack.com/query/latest',
    installCommand: 'npm install @tanstack/react-query',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['react', 'state', 'async', 'cache'],
    documentationUrl: 'https://tanstack.com/query/latest/docs/react/overview',
    githubUrl: 'https://github.com/TanStack/query'
  },
  {
    id: 'redux',
    name: 'Redux',
    description: 'Predictable state container for JavaScript apps',
    category: 'State Management',
    layer: 'fullstack',
    officialUrl: 'https://redux.js.org',
    installCommand: 'npm install @reduxjs/toolkit react-redux',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['react', 'state', 'flux'],
    documentationUrl: 'https://redux.js.org/tutorials/essentials',
    githubUrl: 'https://github.com/reduxjs/redux'
  },
  {
    id: 'zustand',
    name: 'Zustand',
    description: 'Small, fast and scalable bearbones state-management solution',
    category: 'State Management',
    layer: 'fullstack',
    officialUrl: 'https://github.com/pmndrs/zustand',
    installCommand: 'npm install zustand',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['react', 'state', 'minimal'],
    documentationUrl: 'https://docs.pmndrs.io/zustand/getting-started/introduction',
    githubUrl: 'https://github.com/pmndrs/zustand'
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    description: 'Production-ready motion library for React',
    category: 'Animation',
    layer: 'fullstack',
    officialUrl: 'https://www.framer.com/motion/',
    installCommand: 'npm install framer-motion',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['react', 'animation', 'gestures'],
    documentationUrl: 'https://www.framer.com/motion/introduction/',
    githubUrl: 'https://github.com/framer/motion'
  },
  {
    id: 'gsap',
    name: 'GSAP',
    description: 'Professional-grade JavaScript animation for the modern web',
    category: 'Animation',
    layer: 'fullstack',
    officialUrl: 'https://greensock.com/gsap/',
    installCommand: 'npm install gsap',
    freeTierDetails: 'Free for most uses, Club GreenSock for bonus plugins',
    tags: ['animation', 'javascript', 'professional'],
    documentationUrl: 'https://greensock.com/docs/',
    githubUrl: 'https://github.com/greensock/GSAP'
  },
  {
    id: 'storybook',
    name: 'Storybook',
    description: 'Frontend workshop for building UI components and pages in isolation',
    category: 'Development Tool',
    layer: 'fullstack',
    officialUrl: 'https://storybook.js.org',
    installCommand: 'npx storybook@latest init',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['react', 'components', 'documentation'],
    documentationUrl: 'https://storybook.js.org/docs/react/get-started/introduction',
    githubUrl: 'https://github.com/storybookjs/storybook'
  },
  {
    id: 'nx',
    name: 'Nx',
    description: 'Smart, fast and extensible build system with first class monorepo support',
    category: 'Development Tool',
    layer: 'fullstack',
    officialUrl: 'https://nx.dev',
    installCommand: 'npx create-nx-workspace@latest',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['monorepo', 'build', 'typescript'],
    documentationUrl: 'https://nx.dev/getting-started/intro',
    githubUrl: 'https://github.com/nrwl/nx'
  },
  {
    id: 'turborepo',
    name: 'Turborepo',
    description: 'High-performance build system for JavaScript and TypeScript codebases',
    category: 'Development Tool',
    layer: 'fullstack',
    officialUrl: 'https://turbo.build/repo',
    installCommand: 'npx create-turbo@latest',
    freeTierDetails: 'Free, open source (MPL-2.0)',
    tags: ['monorepo', 'build', 'vercel'],
    documentationUrl: 'https://turbo.build/repo/docs',
    githubUrl: 'https://github.com/vercel/turbo'
  },
  {
    id: 'eslint',
    name: 'ESLint',
    description: 'Find and fix problems in your JavaScript code',
    category: 'Development Tool',
    layer: 'fullstack',
    officialUrl: 'https://eslint.org',
    installCommand: 'npm install eslint --save-dev',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['linting', 'javascript', 'code-quality'],
    documentationUrl: 'https://eslint.org/docs/latest/',
    githubUrl: 'https://github.com/eslint/eslint'
  },
  {
    id: 'prettier',
    name: 'Prettier',
    description: 'Opinionated code formatter',
    category: 'Development Tool',
    layer: 'fullstack',
    officialUrl: 'https://prettier.io',
    installCommand: 'npm install --save-dev prettier',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['formatting', 'javascript', 'code-style'],
    documentationUrl: 'https://prettier.io/docs/en/',
    githubUrl: 'https://github.com/prettier/prettier'
  },
  {
    id: 'husky',
    name: 'Husky',
    description: 'Modern native Git hooks made easy',
    category: 'Development Tool',
    layer: 'fullstack',
    officialUrl: 'https://typicode.github.io/husky/',
    installCommand: 'npx husky-init && npm install',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['git', 'hooks', 'automation'],
    documentationUrl: 'https://typicode.github.io/husky/',
    githubUrl: 'https://github.com/typicode/husky'
  },
  {
    id: 'commitlint',
    name: 'commitlint',
    description: 'Lint commit messages',
    category: 'Development Tool',
    layer: 'fullstack',
    officialUrl: 'https://commitlint.js.org',
    installCommand: 'npm install --save-dev @commitlint/config-conventional @commitlint/cli',
    freeTierDetails: 'Free, open source (MIT)',
    tags: ['git', 'commits', 'conventional-commits'],
    documentationUrl: 'https://commitlint.js.org/#/',
    githubUrl: 'https://github.com/conventional-changelog/commitlint'
  },
  {
    id: 'google-chrome',
    name: 'Google Chrome',
    description: 'Cross-platform browser by Google with V8 engine',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://google.com/chrome',
    freeTierDetails: 'Free',
    tags: ['web-browsers']
  },
  {
    id: 'mozilla-firefox',
    name: 'Mozilla Firefox',
    description: 'Privacy-focused open-source browser',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://mozilla.org/firefox',
    freeTierDetails: 'Free/OSS',
    tags: ['web-browsers']
  },
  {
    id: 'microsoft-edge',
    name: 'Microsoft Edge',
    description: 'Chromium-based browser by Microsoft',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://microsoft.com/edge',
    freeTierDetails: 'Free',
    tags: ['web-browsers']
  },
  {
    id: 'apple-safari',
    name: 'Apple Safari',
    description: 'Default macOS/iOS browser with WebKit engine',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://apple.com/safari',
    freeTierDetails: 'Free',
    tags: ['web-browsers']
  },
  {
    id: 'opera',
    name: 'Opera',
    description: 'Feature-rich browser with built-in VPN',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://opera.com',
    freeTierDetails: 'Free',
    tags: ['web-browsers']
  },
  {
    id: 'opera-gx',
    name: 'Opera GX',
    description: 'Gaming-focused browser with RAM/CPU limiter',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://opera.com/gx',
    freeTierDetails: 'Free',
    tags: ['web-browsers']
  },
  {
    id: 'brave',
    name: 'Brave',
    description: 'Privacy-first browser with ad-blocking built-in',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://brave.com',
    freeTierDetails: 'Free/OSS',
    tags: ['web-browsers']
  },
  {
    id: 'vivaldi',
    name: 'Vivaldi',
    description: 'Highly customizable Chromium browser',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://vivaldi.com',
    freeTierDetails: 'Free',
    tags: ['web-browsers']
  },
  {
    id: 'tor-browser',
    name: 'Tor Browser',
    description: 'Anonymity browser routing through Tor network',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://torproject.org',
    freeTierDetails: 'Free/OSS',
    tags: ['web-browsers']
  },
  {
    id: 'waterfox',
    name: 'Waterfox',
    description: 'Firefox fork focused on privacy',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://waterfox.net',
    freeTierDetails: 'Free/OSS',
    tags: ['web-browsers']
  },
  {
    id: 'pale-moon',
    name: 'Pale Moon',
    description: 'Optimized Firefox fork, own Goanna engine',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://palemoon.org',
    freeTierDetails: 'Free/OSS',
    tags: ['web-browsers']
  },
  {
    id: 'librewolf',
    name: 'LibreWolf',
    description: 'Hardened Firefox fork, privacy-first',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://librewolf.net',
    freeTierDetails: 'Free/OSS',
    tags: ['web-browsers']
  },
  {
    id: 'ungoogled-chromium',
    name: 'Ungoogled Chromium',
    description: 'Chromium without Google integration',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://github.com/ungoogled-software',
    freeTierDetails: 'Free/OSS',
    tags: ['web-browsers']
  },
  {
    id: 'seamonkey',
    name: 'SeaMonkey',
    description: 'All-in-one internet suite',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://seamonkey-project.org',
    freeTierDetails: 'Free/OSS',
    tags: ['web-browsers']
  },
  {
    id: 'basilisk',
    name: 'Basilisk',
    description: 'XUL-based browser, Firefox-like',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://basilisk-browser.org',
    freeTierDetails: 'Free/OSS',
    tags: ['web-browsers']
  },
  {
    id: 'maxthon',
    name: 'Maxthon',
    description: 'Cloud browser with sync features',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://maxthon.com',
    freeTierDetails: 'Free',
    tags: ['web-browsers']
  },
  {
    id: 'yandex-browser',
    name: 'Yandex Browser',
    description: 'Russian browser with Protect technology',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://browser.yandex.com',
    freeTierDetails: 'Free',
    tags: ['web-browsers']
  },
  {
    id: 'avast-secure-browser',
    name: 'Avast Secure Browser',
    description: 'Security-focused browser with privacy tools',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://avast.com/browser',
    freeTierDetails: 'Free',
    tags: ['web-browsers']
  },
  {
    id: 'epic-privacy-browser',
    name: 'Epic Privacy Browser',
    description: 'Always-on private browsing',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://epicbrowser.com',
    freeTierDetails: 'Free',
    tags: ['web-browsers']
  },
  {
    id: 'iridium-browser',
    name: 'Iridium Browser',
    description: 'Chromium hardened for privacy',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://iridiumbrowser.de',
    freeTierDetails: 'Free/OSS',
    tags: ['web-browsers']
  },
  {
    id: 'beaker-browser',
    name: 'Beaker Browser',
    description: 'Peer-to-peer browser using Dat protocol',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://beakerbrowser.com',
    freeTierDetails: 'Free/OSS',
    tags: ['web-browsers']
  },
  {
    id: 'min-browser',
    name: 'Min Browser',
    description: 'Minimal distraction-free browser',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://minbrowser.org',
    freeTierDetails: 'Free/OSS',
    tags: ['web-browsers']
  },
  {
    id: 'qutebrowser',
    name: 'qutebrowser',
    description: 'Keyboard-driven browser with vi-like bindings',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://qutebrowser.org',
    freeTierDetails: 'Free/OSS',
    tags: ['web-browsers']
  },
  {
    id: 'midori',
    name: 'Midori',
    description: 'Lightweight GTK browser',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://astian.org/midori-browser',
    freeTierDetails: 'Free/OSS',
    tags: ['web-browsers']
  },
  {
    id: 'falkon',
    name: 'Falkon',
    description: 'KDE browser using QtWebEngine',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://falkon.org',
    freeTierDetails: 'Free/OSS',
    tags: ['web-browsers']
  },
  {
    id: 'lynx',
    name: 'Lynx',
    description: 'Text-only terminal browser',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://lynx.invisible-island.net',
    freeTierDetails: 'Free/OSS',
    tags: ['web-browsers']
  },
  {
    id: 'w3m',
    name: 'w3m',
    description: 'Terminal-based browser with image support',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://w3m.sourceforge.net',
    freeTierDetails: 'Free/OSS',
    tags: ['web-browsers']
  },
  {
    id: 'links2',
    name: 'Links2',
    description: 'Graphical and text-mode browser',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://jikos.cz/links',
    freeTierDetails: 'Free/OSS',
    tags: ['web-browsers']
  },
  {
    id: 'konqueror',
    name: 'Konqueror',
    description: 'KDE file manager and browser',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://konqueror.org',
    freeTierDetails: 'Free/OSS',
    tags: ['web-browsers']
  },
  {
    id: 'dillo',
    name: 'Dillo',
    description: 'Tiny, fast browser for low-resource systems',
    category: 'WEB BROWSERS',
    layer: 'foundation',
    officialUrl: 'https://dillo.org',
    freeTierDetails: 'Free/OSS',
    tags: ['web-browsers']
  },
  {
    id: 'chrome-for-android-ios',
    name: 'Chrome for Android/iOS',
    description: 'Google Chrome mobile version',
    category: 'Mobile Browsers',
    layer: 'foundation',
    officialUrl: 'https://google.com/chrome',
    freeTierDetails: 'Free',
    tags: ['mobile-browsers']
  },
  {
    id: 'firefox-for-android-ios',
    name: 'Firefox for Android/iOS',
    description: 'Mozilla Firefox mobile',
    category: 'Mobile Browsers',
    layer: 'foundation',
    officialUrl: 'https://mozilla.org/firefox/mobile',
    freeTierDetails: 'Free/OSS',
    tags: ['mobile-browsers']
  },
  {
    id: 'safari-for-ios',
    name: 'Safari for iOS',
    description: 'Apple\'s default iOS browser',
    category: 'Mobile Browsers',
    layer: 'foundation',
    officialUrl: 'https://apple.com/safari',
    freeTierDetails: 'Free',
    tags: ['mobile-browsers']
  },
  {
    id: 'samsung-internet',
    name: 'Samsung Internet',
    description: 'Browser for Samsung Galaxy devices',
    category: 'Mobile Browsers',
    layer: 'foundation',
    officialUrl: 'https://samsung.com/internet',
    freeTierDetails: 'Free',
    tags: ['mobile-browsers']
  },
  {
    id: 'uc-browser',
    name: 'UC Browser',
    description: 'Data-saving mobile browser popular in Asia',
    category: 'Mobile Browsers',
    layer: 'foundation',
    officialUrl: 'https://ucweb.com',
    freeTierDetails: 'Free',
    tags: ['mobile-browsers']
  },
  {
    id: 'duckduckgo-browser',
    name: 'DuckDuckGo Browser',
    description: 'Privacy browser with tracker blocking',
    category: 'Mobile Browsers',
    layer: 'foundation',
    officialUrl: 'https://duckduckgo.com/app',
    freeTierDetails: 'Free',
    tags: ['mobile-browsers']
  },
  {
    id: 'kiwi-browser',
    name: 'Kiwi Browser',
    description: 'Chromium browser supporting desktop extensions',
    category: 'Mobile Browsers',
    layer: 'foundation',
    officialUrl: 'https://kiwibrowser.com',
    freeTierDetails: 'Free',
    tags: ['mobile-browsers']
  },
  {
    id: 'puffin-browser',
    name: 'Puffin Browser',
    description: 'Cloud-rendering mobile browser',
    category: 'Mobile Browsers',
    layer: 'foundation',
    officialUrl: 'https://puffinbrowser.com',
    freeTierDetails: 'Freemium',
    tags: ['mobile-browsers']
  },
  {
    id: 'cake-browser',
    name: 'Cake Browser',
    description: 'Swipeable multi-tab mobile browser',
    category: 'Mobile Browsers',
    layer: 'foundation',
    officialUrl: 'https://cakebrowser.com',
    freeTierDetails: 'Free',
    tags: ['mobile-browsers']
  },
  {
    id: 'aloha-browser',
    name: 'Aloha Browser',
    description: 'Mobile browser with built-in VPN',
    category: 'Mobile Browsers',
    layer: 'foundation',
    officialUrl: 'https://alohabrowser.com',
    freeTierDetails: 'Free',
    tags: ['mobile-browsers']
  },
  {
    id: 'firefox-focus',
    name: 'Firefox Focus',
    description: 'Privacy browser, auto-erase history',
    category: 'Mobile Browsers',
    layer: 'foundation',
    officialUrl: 'https://mozilla.org/firefox/focus',
    freeTierDetails: 'Free/OSS',
    tags: ['mobile-browsers']
  },
  {
    id: 'onion-browser',
    name: 'Onion Browser',
    description: 'Tor-based browser for iOS',
    category: 'Mobile Browsers',
    layer: 'foundation',
    officialUrl: 'https://onionbrowser.com',
    freeTierDetails: 'Free',
    tags: ['mobile-browsers']
  },
  {
    id: 'brave-for-mobile',
    name: 'Brave for Mobile',
    description: 'Privacy browser for Android/iOS',
    category: 'Mobile Browsers',
    layer: 'foundation',
    officialUrl: 'https://brave.com',
    freeTierDetails: 'Free/OSS',
    tags: ['mobile-browsers']
  },
  {
    id: 'dolphin-browser',
    name: 'Dolphin Browser',
    description: 'Feature-rich mobile browser with gestures',
    category: 'Mobile Browsers',
    layer: 'foundation',
    officialUrl: 'https://dolphin.com',
    freeTierDetails: 'Free',
    tags: ['mobile-browsers']
  },
  {
    id: 'slack',
    name: 'Slack',
    description: 'The de-facto team chat platform',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://slack.com',
    freeTierDetails: 'Freemium',
    tags: ['team-messaging']
  },
  {
    id: 'microsoft-teams',
    name: 'Microsoft Teams',
    description: 'Office 365 integrated team hub',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://microsoft.com/teams',
    freeTierDetails: 'Freemium',
    tags: ['team-messaging']
  },
  {
    id: 'discord',
    name: 'Discord',
    description: 'Voice, video, text for communities & teams',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://discord.com',
    freeTierDetails: 'Freemium',
    tags: ['team-messaging']
  },
  {
    id: 'mattermost',
    name: 'Mattermost',
    description: 'Self-hosted Slack alternative',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://mattermost.com',
    freeTierDetails: 'Free/OSS',
    tags: ['team-messaging']
  },
  {
    id: 'rocket-chat',
    name: 'Rocket.Chat',
    description: 'Open-source team messaging platform',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://rocket.chat',
    freeTierDetails: 'Free/OSS',
    tags: ['team-messaging']
  },
  {
    id: 'zulip',
    name: 'Zulip',
    description: 'Topic-based team chat',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://zulip.com',
    freeTierDetails: 'Free/OSS',
    tags: ['team-messaging']
  },
  {
    id: 'twist',
    name: 'Twist',
    description: 'Async-first messaging by Doist',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://twist.com',
    freeTierDetails: 'Freemium',
    tags: ['team-messaging']
  },
  {
    id: 'flock',
    name: 'Flock',
    description: 'Team messaging with built-in productivity tools',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://flock.com',
    freeTierDetails: 'Freemium',
    tags: ['team-messaging']
  },
  {
    id: 'chanty',
    name: 'Chanty',
    description: 'Simple team chat with task management',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://chanty.com',
    freeTierDetails: 'Freemium',
    tags: ['team-messaging']
  },
  {
    id: 'glip-by-ringcentral',
    name: 'Glip by RingCentral',
    description: 'Team messaging with video',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://ringcentral.com/glip',
    freeTierDetails: 'Freemium',
    tags: ['team-messaging']
  },
  {
    id: 'workplace-by-meta',
    name: 'Workplace by Meta',
    description: 'Enterprise social network by Facebook',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://workplace.com',
    freeTierDetails: 'Paid',
    tags: ['team-messaging']
  },
  {
    id: 'google-chat',
    name: 'Google Chat',
    description: 'Google\'s team messaging app',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://chat.google.com',
    freeTierDetails: 'Freemium',
    tags: ['team-messaging']
  },
  {
    id: 'cisco-webex-teams',
    name: 'Cisco Webex Teams',
    description: 'Enterprise collaboration platform',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://webex.com',
    freeTierDetails: 'Freemium',
    tags: ['team-messaging']
  },
  {
    id: 'wire',
    name: 'Wire',
    description: 'Secure collaboration platform E2E encrypted',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://wire.com',
    freeTierDetails: 'Freemium',
    tags: ['team-messaging']
  },
  {
    id: 'element-matrix',
    name: 'Element (Matrix)',
    description: 'Decentralized Matrix protocol client',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://element.io',
    freeTierDetails: 'Free/OSS',
    tags: ['team-messaging']
  },
  {
    id: 'keybase',
    name: 'Keybase',
    description: 'Encrypted messaging with crypto identity',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://keybase.io',
    freeTierDetails: 'Free',
    tags: ['team-messaging']
  },
  {
    id: 'ryver',
    name: 'Ryver',
    description: 'Team messaging with workflow automation',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://ryver.com',
    freeTierDetails: 'Paid',
    tags: ['team-messaging']
  },
  {
    id: 'stride-discontinued',
    name: 'Stride (discontinued)',
    description: 'Atlassian\'s team messaging, now Teams',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://â€”',
    freeTierDetails: 'â€”',
    tags: ['team-messaging']
  },
  {
    id: 'blink',
    name: 'Blink',
    description: 'Frontline worker communication',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://joinblink.com',
    freeTierDetails: 'Freemium',
    tags: ['team-messaging']
  },
  {
    id: 'pumble',
    name: 'Pumble',
    description: 'Free team chat, unlimited history',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://pumble.com',
    freeTierDetails: 'Freemium',
    tags: ['team-messaging']
  },
  {
    id: 'spike',
    name: 'Spike',
    description: 'Email as chat, conversational email',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://spikenow.com',
    freeTierDetails: 'Freemium',
    tags: ['team-messaging']
  },
  {
    id: 'noysi',
    name: 'Noysi',
    description: 'Team messaging with file storage',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://noysi.com',
    freeTierDetails: 'Freemium',
    tags: ['team-messaging']
  },
  {
    id: 'zoho-cliq',
    name: 'Zoho Cliq',
    description: 'Team chat by Zoho suite',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://zoho.com/cliq',
    freeTierDetails: 'Freemium',
    tags: ['team-messaging']
  },
  {
    id: 'brosix',
    name: 'Brosix',
    description: 'Secure instant messaging for teams',
    category: 'Team Messaging',
    layer: 'foundation',
    officialUrl: 'https://brosix.com',
    freeTierDetails: 'Freemium',
    tags: ['team-messaging']
  },
  {
    id: 'zoom',
    name: 'Zoom',
    description: 'Leading video conferencing platform',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://zoom.us',
    freeTierDetails: 'Freemium',
    tags: ['video-conferencing']
  },
  {
    id: 'google-meet',
    name: 'Google Meet',
    description: 'Google\'s video calling platform',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://meet.google.com',
    freeTierDetails: 'Freemium',
    tags: ['video-conferencing']
  },
  {
    id: 'microsoft-teams',
    name: 'Microsoft Teams',
    description: 'Teams video conferencing',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://microsoft.com/teams',
    freeTierDetails: 'Freemium',
    tags: ['video-conferencing']
  },
  {
    id: 'cisco-webex',
    name: 'Cisco Webex',
    description: 'Enterprise video conferencing',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://webex.com',
    freeTierDetails: 'Freemium',
    tags: ['video-conferencing']
  },
  {
    id: 'gotomeeting',
    name: 'GoToMeeting',
    description: 'Professional video meetings',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://goto.com/meeting',
    freeTierDetails: 'Paid',
    tags: ['video-conferencing']
  },
  {
    id: 'jitsi-meet',
    name: 'Jitsi Meet',
    description: 'Open-source video conferencing',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://meet.jit.si',
    freeTierDetails: 'Free/OSS',
    tags: ['video-conferencing']
  },
  {
    id: 'bigbluebutton',
    name: 'BigBlueButton',
    description: 'Open-source web conferencing for education',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://bigbluebutton.org',
    freeTierDetails: 'Free/OSS',
    tags: ['video-conferencing']
  },
  {
    id: 'whereby',
    name: 'Whereby',
    description: 'Browser-based video meetings, no install',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://whereby.com',
    freeTierDetails: 'Freemium',
    tags: ['video-conferencing']
  },
  {
    id: 'around',
    name: 'Around',
    description: 'Floating video calls for remote teams',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://around.co',
    freeTierDetails: 'Freemium',
    tags: ['video-conferencing']
  },
  {
    id: 'loom',
    name: 'Loom',
    description: 'Async video messaging',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://loom.com',
    freeTierDetails: 'Freemium',
    tags: ['video-conferencing']
  },
  {
    id: 'dyte',
    name: 'Dyte',
    description: 'Embeddable video SDK',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://dyte.io',
    freeTierDetails: 'Freemium',
    tags: ['video-conferencing']
  },
  {
    id: 'daily-co',
    name: 'Daily.co',
    description: 'Video API for developers',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://daily.co',
    freeTierDetails: 'Freemium',
    tags: ['video-conferencing']
  },
  {
    id: 'whereby-embedded',
    name: 'Whereby Embedded',
    description: 'Embeddable video calls',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://whereby.com/embedded',
    freeTierDetails: 'Paid',
    tags: ['video-conferencing']
  },
  {
    id: 'amazon-chime',
    name: 'Amazon Chime',
    description: 'AWS video conferencing',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://aws.amazon.com/chime',
    freeTierDetails: 'Freemium',
    tags: ['video-conferencing']
  },
  {
    id: '8x8-meet',
    name: '8x8 Meet',
    description: 'Business video meetings',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://8x8.com',
    freeTierDetails: 'Freemium',
    tags: ['video-conferencing']
  },
  {
    id: 'bluejeans',
    name: 'BlueJeans',
    description: 'Enterprise video conferencing by Verizon',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://bluejeans.com',
    freeTierDetails: 'Paid',
    tags: ['video-conferencing']
  },
  {
    id: 'vonage-video-api',
    name: 'Vonage Video API',
    description: 'Programmable video',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://vonage.com/communications-apis/video',
    freeTierDetails: 'Paid',
    tags: ['video-conferencing']
  },
  {
    id: 'twilio-video',
    name: 'Twilio Video',
    description: 'Programmable video platform',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://twilio.com/video',
    freeTierDetails: 'Paid',
    tags: ['video-conferencing']
  },
  {
    id: 'stream-video',
    name: 'Stream Video',
    description: 'Video calling SDK',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://getstream.io/video',
    freeTierDetails: 'Freemium',
    tags: ['video-conferencing']
  },
  {
    id: 'agora',
    name: 'Agora',
    description: 'Real-time voice & video SDK',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://agora.io',
    freeTierDetails: 'Freemium',
    tags: ['video-conferencing']
  },
  {
    id: 'metered-video',
    name: 'Metered Video',
    description: 'WebRTC video SDK',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://metered.ca',
    freeTierDetails: 'Freemium',
    tags: ['video-conferencing']
  },
  {
    id: 'openvidu',
    name: 'OpenVidu',
    description: 'Open-source WebRTC platform',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://openvidu.io',
    freeTierDetails: 'Free/OSS',
    tags: ['video-conferencing']
  },
  {
    id: 'livekit',
    name: 'LiveKit',
    description: 'Open-source real-time video/audio',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://livekit.io',
    freeTierDetails: 'Free/OSS',
    tags: ['video-conferencing']
  },
  {
    id: 'gather-town',
    name: 'Gather.town',
    description: 'Virtual office with spatial video',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://gather.town',
    freeTierDetails: 'Freemium',
    tags: ['video-conferencing']
  },
  {
    id: 'teamflow',
    name: 'Teamflow',
    description: 'Virtual office platform',
    category: 'Video Conferencing',
    layer: 'foundation',
    officialUrl: 'https://teamflowhq.com',
    freeTierDetails: 'Freemium',
    tags: ['video-conferencing']
  },
  {
    id: 'gmail',
    name: 'Gmail',
    description: 'Google\'s web-based email service',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://gmail.com',
    freeTierDetails: 'Free',
    tags: ['email-clients']
  },
  {
    id: 'microsoft-outlook',
    name: 'Microsoft Outlook',
    description: 'Microsoft\'s email and calendar',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://outlook.microsoft.com',
    freeTierDetails: 'Freemium',
    tags: ['email-clients']
  },
  {
    id: 'apple-mail',
    name: 'Apple Mail',
    description: 'Default macOS/iOS email client',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://apple.com',
    freeTierDetails: 'Free',
    tags: ['email-clients']
  },
  {
    id: 'thunderbird',
    name: 'Thunderbird',
    description: 'Mozilla\'s cross-platform email client',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://thunderbird.net',
    freeTierDetails: 'Free/OSS',
    tags: ['email-clients']
  },
  {
    id: 'protonmail',
    name: 'ProtonMail',
    description: 'End-to-end encrypted email',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://proton.me',
    freeTierDetails: 'Freemium',
    tags: ['email-clients']
  },
  {
    id: 'tutanota',
    name: 'Tutanota',
    description: 'Encrypted email with calendar',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://tuta.com',
    freeTierDetails: 'Freemium',
    tags: ['email-clients']
  },
  {
    id: 'hey',
    name: 'Hey',
    description: 'Opinionated email by Basecamp',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://hey.com',
    freeTierDetails: 'Paid',
    tags: ['email-clients']
  },
  {
    id: 'fastmail',
    name: 'Fastmail',
    description: 'Privacy-focused email service',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://fastmail.com',
    freeTierDetails: 'Paid',
    tags: ['email-clients']
  },
  {
    id: 'zoho-mail',
    name: 'Zoho Mail',
    description: 'Business email by Zoho',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://zoho.com/mail',
    freeTierDetails: 'Freemium',
    tags: ['email-clients']
  },
  {
    id: 'superhuman',
    name: 'Superhuman',
    description: 'AI-powered fast email client',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://superhuman.com',
    freeTierDetails: 'Paid',
    tags: ['email-clients']
  },
  {
    id: 'spark',
    name: 'Spark',
    description: 'Smart email client by Readdle',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://sparkmailapp.com',
    freeTierDetails: 'Freemium',
    tags: ['email-clients']
  },
  {
    id: 'airmail',
    name: 'Airmail',
    description: 'Powerful email client for Apple devices',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://airmailapp.com',
    freeTierDetails: 'Paid',
    tags: ['email-clients']
  },
  {
    id: 'newton-mail',
    name: 'Newton Mail',
    description: 'Cross-platform email with read receipts',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://newtonhq.com',
    freeTierDetails: 'Paid',
    tags: ['email-clients']
  },
  {
    id: 'missive',
    name: 'Missive',
    description: 'Team email and chat inbox',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://missiveapp.com',
    freeTierDetails: 'Freemium',
    tags: ['email-clients']
  },
  {
    id: 'front',
    name: 'Front',
    description: 'Shared team inbox platform',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://front.com',
    freeTierDetails: 'Paid',
    tags: ['email-clients']
  },
  {
    id: 'helpscout',
    name: 'Helpscout',
    description: 'Shared inbox for customer support',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://helpscout.com',
    freeTierDetails: 'Paid',
    tags: ['email-clients']
  },
  {
    id: 'postmark',
    name: 'Postmark',
    description: 'Transactional email delivery',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://postmarkapp.com',
    freeTierDetails: 'Paid',
    tags: ['email-clients']
  },
  {
    id: 'sendgrid',
    name: 'SendGrid',
    description: 'Email delivery platform by Twilio',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://sendgrid.com',
    freeTierDetails: 'Freemium',
    tags: ['email-clients']
  },
  {
    id: 'mailgun',
    name: 'Mailgun',
    description: 'Developer-first email API',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://mailgun.com',
    freeTierDetails: 'Freemium',
    tags: ['email-clients']
  },
  {
    id: 'amazon-ses',
    name: 'Amazon SES',
    description: 'AWS email sending service',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://aws.amazon.com/ses',
    freeTierDetails: 'Freemium',
    tags: ['email-clients']
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    description: 'Email marketing platform',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://mailchimp.com',
    freeTierDetails: 'Freemium',
    tags: ['email-clients']
  },
  {
    id: 'activecampaign',
    name: 'ActiveCampaign',
    description: 'Email marketing and automation',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://activecampaign.com',
    freeTierDetails: 'Paid',
    tags: ['email-clients']
  },
  {
    id: 'convertkit',
    name: 'ConvertKit',
    description: 'Email platform for creators',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://convertkit.com',
    freeTierDetails: 'Freemium',
    tags: ['email-clients']
  },
  {
    id: 'klaviyo',
    name: 'Klaviyo',
    description: 'Email marketing for ecommerce',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://klaviyo.com',
    freeTierDetails: 'Freemium',
    tags: ['email-clients']
  },
  {
    id: 'brevo-sendinblue',
    name: 'Brevo (Sendinblue)',
    description: 'Email and SMS marketing',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://brevo.com',
    freeTierDetails: 'Freemium',
    tags: ['email-clients']
  },
  {
    id: 'constant-contact',
    name: 'Constant Contact',
    description: 'Email marketing for small business',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://constantcontact.com',
    freeTierDetails: 'Paid',
    tags: ['email-clients']
  },
  {
    id: 'campaign-monitor',
    name: 'Campaign Monitor',
    description: 'Email marketing platform',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://campaignmonitor.com',
    freeTierDetails: 'Paid',
    tags: ['email-clients']
  },
  {
    id: 'drip',
    name: 'Drip',
    description: 'Ecommerce email marketing',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://drip.com',
    freeTierDetails: 'Paid',
    tags: ['email-clients']
  },
  {
    id: 'moosend',
    name: 'Moosend',
    description: 'Email marketing and automation',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://moosend.com',
    freeTierDetails: 'Freemium',
    tags: ['email-clients']
  },
  {
    id: 'mailerlite',
    name: 'MailerLite',
    description: 'Simple email marketing platform',
    category: 'Email Clients',
    layer: 'foundation',
    officialUrl: 'https://mailerlite.com',
    freeTierDetails: 'Freemium',
    tags: ['email-clients']
  },
  {
    id: 'jira',
    name: 'Jira',
    description: 'Issue and project tracking by Atlassian',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://atlassian.com/jira',
    freeTierDetails: 'Freemium',
    tags: ['project-management']
  },
  {
    id: 'linear',
    name: 'Linear',
    description: 'Fast, keyboard-first issue tracker',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://linear.app',
    freeTierDetails: 'Freemium',
    tags: ['project-management']
  },
  {
    id: 'asana',
    name: 'Asana',
    description: 'Work and project management',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://asana.com',
    freeTierDetails: 'Freemium',
    tags: ['project-management']
  },
  {
    id: 'trello',
    name: 'Trello',
    description: 'Kanban-style project boards by Atlassian',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://trello.com',
    freeTierDetails: 'Freemium',
    tags: ['project-management']
  },
  {
    id: 'monday-com',
    name: 'Monday.com',
    description: 'Visual project and work management OS',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://monday.com',
    freeTierDetails: 'Freemium',
    tags: ['project-management']
  },
  {
    id: 'notion',
    name: 'Notion',
    description: 'All-in-one wiki, notes, and projects',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://notion.so',
    freeTierDetails: 'Freemium',
    tags: ['project-management']
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    description: 'All-in-one productivity platform',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://clickup.com',
    freeTierDetails: 'Freemium',
    tags: ['project-management']
  },
  {
    id: 'basecamp',
    name: 'Basecamp',
    description: 'Project management and team communication',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://basecamp.com',
    freeTierDetails: 'Paid',
    tags: ['project-management']
  },
  {
    id: 'wrike',
    name: 'Wrike',
    description: 'Work management platform',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://wrike.com',
    freeTierDetails: 'Freemium',
    tags: ['project-management']
  },
  {
    id: 'smartsheet',
    name: 'Smartsheet',
    description: 'Spreadsheet-based project management',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://smartsheet.com',
    freeTierDetails: 'Paid',
    tags: ['project-management']
  },
  {
    id: 'airtable',
    name: 'Airtable',
    description: 'Spreadsheet meets database platform',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://airtable.com',
    freeTierDetails: 'Freemium',
    tags: ['project-management']
  },
  {
    id: 'coda',
    name: 'Coda',
    description: 'Doc that works like an app',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://coda.io',
    freeTierDetails: 'Freemium',
    tags: ['project-management']
  },
  {
    id: 'height',
    name: 'Height',
    description: 'Collaborative project management tool',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://height.app',
    freeTierDetails: 'Freemium',
    tags: ['project-management']
  },
  {
    id: 'plane',
    name: 'Plane',
    description: 'Open-source Jira alternative',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://plane.so',
    freeTierDetails: 'Free/OSS',
    tags: ['project-management']
  },
  {
    id: 'gitlab-issues',
    name: 'GitLab Issues',
    description: 'Issue tracking within GitLab',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://gitlab.com',
    freeTierDetails: 'Freemium',
    tags: ['project-management']
  },
  {
    id: 'github-projects',
    name: 'GitHub Projects',
    description: 'Project boards in GitHub',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://github.com/features/project-management',
    freeTierDetails: 'Free',
    tags: ['project-management']
  },
  {
    id: 'youtrack',
    name: 'YouTrack',
    description: 'Issue tracking by JetBrains',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://jetbrains.com/youtrack',
    freeTierDetails: 'Freemium',
    tags: ['project-management']
  },
  {
    id: 'shortcut-clubhouse',
    name: 'Shortcut (Clubhouse)',
    description: 'Project management for software teams',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://shortcut.com',
    freeTierDetails: 'Freemium',
    tags: ['project-management']
  },
  {
    id: 'pivotal-tracker',
    name: 'Pivotal Tracker',
    description: 'Agile project management',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://pivotaltracker.com',
    freeTierDetails: 'Paid',
    tags: ['project-management']
  },
  {
    id: 'taiga',
    name: 'Taiga',
    description: 'Open-source agile project management',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://taiga.io',
    freeTierDetails: 'Free/OSS',
    tags: ['project-management']
  },
  {
    id: 'openproject',
    name: 'OpenProject',
    description: 'Open-source project management',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://openproject.org',
    freeTierDetails: 'Free/OSS',
    tags: ['project-management']
  },
  {
    id: 'redmine',
    name: 'Redmine',
    description: 'Open-source project management',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://redmine.org',
    freeTierDetails: 'Free/OSS',
    tags: ['project-management']
  },
  {
    id: 'projectlibre',
    name: 'ProjectLibre',
    description: 'Open-source MS Project alternative',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://projectlibre.com',
    freeTierDetails: 'Free/OSS',
    tags: ['project-management']
  },
  {
    id: 'ganttproject',
    name: 'GanttProject',
    description: 'Free Gantt chart software',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://ganttproject.biz',
    freeTierDetails: 'Free/OSS',
    tags: ['project-management']
  },
  {
    id: 'taskade',
    name: 'Taskade',
    description: 'AI-powered task lists and mind maps',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://taskade.com',
    freeTierDetails: 'Freemium',
    tags: ['project-management']
  },
  {
    id: 'teamwork',
    name: 'Teamwork',
    description: 'Project management for client work',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://teamwork.com',
    freeTierDetails: 'Freemium',
    tags: ['project-management']
  },
  {
    id: 'hive',
    name: 'Hive',
    description: 'AI-powered project management',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://hive.com',
    freeTierDetails: 'Freemium',
    tags: ['project-management']
  },
  {
    id: 'nifty',
    name: 'Nifty',
    description: 'Project management with milestones',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://niftypm.com',
    freeTierDetails: 'Freemium',
    tags: ['project-management']
  },
  {
    id: 'zoho-projects',
    name: 'Zoho Projects',
    description: 'Project management by Zoho',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://zoho.com/projects',
    freeTierDetails: 'Freemium',
    tags: ['project-management']
  },
  {
    id: 'proofhub',
    name: 'ProofHub',
    description: 'All-in-one project management',
    category: 'Project Management',
    layer: 'foundation',
    officialUrl: 'https://proofhub.com',
    freeTierDetails: 'Paid',
    tags: ['project-management']
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    description: 'Markdown-based knowledge graph',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://obsidian.md',
    freeTierDetails: 'Freemium',
    tags: ['note-taking']
  },
  {
    id: 'roam-research',
    name: 'Roam Research',
    description: 'Networked thought note-taking tool',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://roamresearch.com',
    freeTierDetails: 'Paid',
    tags: ['note-taking']
  },
  {
    id: 'logseq',
    name: 'Logseq',
    description: 'Open-source outliner and knowledge base',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://logseq.com',
    freeTierDetails: 'Free/OSS',
    tags: ['note-taking']
  },
  {
    id: 'onenote',
    name: 'OneNote',
    description: 'Microsoft\'s digital notebook',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://onenote.com',
    freeTierDetails: 'Free',
    tags: ['note-taking']
  },
  {
    id: 'evernote',
    name: 'Evernote',
    description: 'Note-taking and organizing',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://evernote.com',
    freeTierDetails: 'Freemium',
    tags: ['note-taking']
  },
  {
    id: 'bear',
    name: 'Bear',
    description: 'Beautiful writing app for Mac/iOS',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://bear.app',
    freeTierDetails: 'Freemium',
    tags: ['note-taking']
  },
  {
    id: 'apple-notes',
    name: 'Apple Notes',
    description: 'Built-in macOS/iOS notes app',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://apple.com/notes',
    freeTierDetails: 'Free',
    tags: ['note-taking']
  },
  {
    id: 'google-keep',
    name: 'Google Keep',
    description: 'Quick notes and reminders',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://keep.google.com',
    freeTierDetails: 'Free',
    tags: ['note-taking']
  },
  {
    id: 'joplin',
    name: 'Joplin',
    description: 'Open-source note-taking with sync',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://joplinapp.org',
    freeTierDetails: 'Free/OSS',
    tags: ['note-taking']
  },
  {
    id: 'standard-notes',
    name: 'Standard Notes',
    description: 'Encrypted notes, long-term focused',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://standardnotes.com',
    freeTierDetails: 'Freemium',
    tags: ['note-taking']
  },
  {
    id: 'simplenote',
    name: 'Simplenote',
    description: 'Simple, synced notes across devices',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://simplenote.com',
    freeTierDetails: 'Free',
    tags: ['note-taking']
  },
  {
    id: 'zettlr',
    name: 'Zettlr',
    description: 'Markdown editor for researchers',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://zettlr.com',
    freeTierDetails: 'Free/OSS',
    tags: ['note-taking']
  },
  {
    id: 'typora',
    name: 'Typora',
    description: 'Minimal distraction-free Markdown editor',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://typora.io',
    freeTierDetails: 'Paid',
    tags: ['note-taking']
  },
  {
    id: 'ia-writer',
    name: 'iA Writer',
    description: 'Focused writing environment',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://ia.net/writer',
    freeTierDetails: 'Paid',
    tags: ['note-taking']
  },
  {
    id: 'craft',
    name: 'Craft',
    description: 'Beautiful native docs app for Apple',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://craft.do',
    freeTierDetails: 'Freemium',
    tags: ['note-taking']
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'AI writing inside Notion',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://notion.so/product/ai',
    freeTierDetails: 'Paid add-on',
    tags: ['note-taking']
  },
  {
    id: 'mem',
    name: 'Mem',
    description: 'AI-first workspace for notes',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://mem.ai',
    freeTierDetails: 'Freemium',
    tags: ['note-taking']
  },
  {
    id: 'capacities',
    name: 'Capacities',
    description: 'Object-based note-taking',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://capacities.io',
    freeTierDetails: 'Freemium',
    tags: ['note-taking']
  },
  {
    id: 'tana',
    name: 'Tana',
    description: 'Supertag-based knowledge management',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://tana.inc',
    freeTierDetails: 'Free (beta)',
    tags: ['note-taking']
  },
  {
    id: 'anytype',
    name: 'Anytype',
    description: 'Local-first open-source knowledge tool',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://anytype.io',
    freeTierDetails: 'Free/OSS',
    tags: ['note-taking']
  },
  {
    id: 'supernotes',
    name: 'Supernotes',
    description: 'Card-based collaborative notes',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://supernotes.app',
    freeTierDetails: 'Freemium',
    tags: ['note-taking']
  },
  {
    id: 'reflect',
    name: 'Reflect',
    description: 'Fast networked note-taking',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://reflect.app',
    freeTierDetails: 'Paid',
    tags: ['note-taking']
  },
  {
    id: 'appflowy',
    name: 'Appflowy',
    description: 'Open-source Notion alternative',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://appflowy.io',
    freeTierDetails: 'Free/OSS',
    tags: ['note-taking']
  },
  {
    id: 'siyuan-notes',
    name: 'Siyuan Notes',
    description: 'Local-first personal knowledge base',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://b3log.org/siyuan',
    freeTierDetails: 'Free/OSS',
    tags: ['note-taking']
  },
  {
    id: 'remnote',
    name: 'RemNote',
    description: 'Notes with spaced repetition built-in',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://remnote.com',
    freeTierDetails: 'Freemium',
    tags: ['note-taking']
  },
  {
    id: 'foam',
    name: 'Foam',
    description: 'VS Code extension for personal wiki',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://foambubble.github.io',
    freeTierDetails: 'Free/OSS',
    tags: ['note-taking']
  },
  {
    id: 'dendron',
    name: 'Dendron',
    description: 'Developer-focused hierarchical notes',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://dendron.so',
    freeTierDetails: 'Free/OSS',
    tags: ['note-taking']
  },
  {
    id: 'confluence',
    name: 'Confluence',
    description: 'Team wiki by Atlassian',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://atlassian.com/confluence',
    freeTierDetails: 'Freemium',
    tags: ['note-taking']
  },
  {
    id: 'nuclino',
    name: 'Nuclino',
    description: 'Lightweight team wiki and docs',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://nuclino.com',
    freeTierDetails: 'Freemium',
    tags: ['note-taking']
  },
  {
    id: 'slite',
    name: 'Slite',
    description: 'Async docs and knowledge base',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://slite.com',
    freeTierDetails: 'Freemium',
    tags: ['note-taking']
  },
  {
    id: 'tettra',
    name: 'Tettra',
    description: 'Internal knowledge management',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://tettra.com',
    freeTierDetails: 'Freemium',
    tags: ['note-taking']
  },
  {
    id: 'bookstack',
    name: 'BookStack',
    description: 'Open-source documentation platform',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://bookstackapp.com',
    freeTierDetails: 'Free/OSS',
    tags: ['note-taking']
  },
  {
    id: 'wiki-js',
    name: 'Wiki.js',
    description: 'Open-source wiki with markdown',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://js.wiki',
    freeTierDetails: 'Free/OSS',
    tags: ['note-taking']
  },
  {
    id: 'mediawiki',
    name: 'MediaWiki',
    description: 'Software powering Wikipedia',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://mediawiki.org',
    freeTierDetails: 'Free/OSS',
    tags: ['note-taking']
  },
  {
    id: 'dokuwiki',
    name: 'DokuWiki',
    description: 'Simple file-based wiki',
    category: 'Note-Taking',
    layer: 'foundation',
    officialUrl: 'https://dokuwiki.org',
    freeTierDetails: 'Free/OSS',
    tags: ['note-taking']
  },
  {
    id: 'miro',
    name: 'Miro',
    description: 'Online collaborative whiteboard',
    category: 'Whiteboard',
    layer: 'foundation',
    officialUrl: 'https://miro.com',
    freeTierDetails: 'Freemium',
    tags: ['whiteboard']
  },
  {
    id: 'figjam',
    name: 'FigJam',
    description: 'Figma\'s online whiteboard',
    category: 'Whiteboard',
    layer: 'foundation',
    officialUrl: 'https://figma.com/figjam',
    freeTierDetails: 'Freemium',
    tags: ['whiteboard']
  },
  {
    id: 'mural',
    name: 'Mural',
    description: 'Digital workspace for visual collaboration',
    category: 'Whiteboard',
    layer: 'foundation',
    officialUrl: 'https://mural.co',
    freeTierDetails: 'Freemium',
    tags: ['whiteboard']
  },
  {
    id: 'excalidraw',
    name: 'Excalidraw',
    description: 'Virtual whiteboard with hand-drawn feel',
    category: 'Whiteboard',
    layer: 'foundation',
    officialUrl: 'https://excalidraw.com',
    freeTierDetails: 'Free/OSS',
    tags: ['whiteboard']
  },
  {
    id: 'lucidchart',
    name: 'Lucidchart',
    description: 'Web-based diagramming tool',
    category: 'Whiteboard',
    layer: 'foundation',
    officialUrl: 'https://lucidchart.com',
    freeTierDetails: 'Freemium',
    tags: ['whiteboard']
  },
  {
    id: 'draw-io',
    name: 'draw.io',
    description: 'Open-source diagramming',
    category: 'Whiteboard',
    layer: 'foundation',
    officialUrl: 'https://diagrams.net',
    freeTierDetails: 'Free/OSS',
    tags: ['whiteboard']
  },
  {
    id: 'whimsical',
    name: 'Whimsical',
    description: 'Flowcharts, wireframes, and mind maps',
    category: 'Whiteboard',
    layer: 'foundation',
    officialUrl: 'https://whimsical.com',
    freeTierDetails: 'Freemium',
    tags: ['whiteboard']
  },
  {
    id: 'creately',
    name: 'Creately',
    description: 'Visual collaboration platform',
    category: 'Whiteboard',
    layer: 'foundation',
    officialUrl: 'https://creately.com',
    freeTierDetails: 'Freemium',
    tags: ['whiteboard']
  },
  {
    id: 'cacoo',
    name: 'Cacoo',
    description: 'Online diagramming by Nulab',
    category: 'Whiteboard',
    layer: 'foundation',
    officialUrl: 'https://nulab.com/cacoo',
    freeTierDetails: 'Freemium',
    tags: ['whiteboard']
  },
  {
    id: 'omnigraffle',
    name: 'OmniGraffle',
    description: 'Professional diagramming for Mac',
    category: 'Whiteboard',
    layer: 'foundation',
    officialUrl: 'https://omnigroup.com/omnigraffle',
    freeTierDetails: 'Paid',
    tags: ['whiteboard']
  },
  {
    id: 'microsoft-visio',
    name: 'Microsoft Visio',
    description: 'Professional diagramming by Microsoft',
    category: 'Whiteboard',
    layer: 'foundation',
    officialUrl: 'https://microsoft.com/visio',
    freeTierDetails: 'Paid',
    tags: ['whiteboard']
  },
  {
    id: 'balsamiq',
    name: 'Balsamiq',
    description: 'Low-fidelity wireframing tool',
    category: 'Whiteboard',
    layer: 'foundation',
    officialUrl: 'https://balsamiq.com',
    freeTierDetails: 'Paid',
    tags: ['whiteboard']
  },
  {
    id: 'overflow',
    name: 'Overflow',
    description: 'User flow design tool',
    category: 'Whiteboard',
    layer: 'foundation',
    officialUrl: 'https://overflow.io',
    freeTierDetails: 'Freemium',
    tags: ['whiteboard']
  },
  {
    id: 'plectica',
    name: 'Plectica',
    description: 'System mapping platform',
    category: 'Whiteboard',
    layer: 'foundation',
    officialUrl: 'https://plectica.com',
    freeTierDetails: 'Freemium',
    tags: ['whiteboard']
  },
  {
    id: 'scapple',
    name: 'Scapple',
    description: 'Freeform idea mapping',
    category: 'Whiteboard',
    layer: 'foundation',
    officialUrl: 'https://literatureandlatte.com/scapple',
    freeTierDetails: 'Paid',
    tags: ['whiteboard']
  },
  {
    id: 'mindmeister',
    name: 'MindMeister',
    description: 'Online mind mapping',
    category: 'Whiteboard',
    layer: 'foundation',
    officialUrl: 'https://mindmeister.com',
    freeTierDetails: 'Freemium',
    tags: ['whiteboard']
  },
  {
    id: 'xmind',
    name: 'XMind',
    description: 'Mind mapping and brainstorming',
    category: 'Whiteboard',
    layer: 'foundation',
    officialUrl: 'https://xmind.net',
    freeTierDetails: 'Freemium',
    tags: ['whiteboard']
  },
  {
    id: 'freemind',
    name: 'FreeMind',
    description: 'Open-source mind mapping',
    category: 'Whiteboard',
    layer: 'foundation',
    officialUrl: 'https://freemind.sourceforge.io',
    freeTierDetails: 'Free/OSS',
    tags: ['whiteboard']
  },
  {
    id: 'coggle',
    name: 'Coggle',
    description: 'Simple collaborative mind maps',
    category: 'Whiteboard',
    layer: 'foundation',
    officialUrl: 'https://coggle.it',
    freeTierDetails: 'Freemium',
    tags: ['whiteboard']
  },
  {
    id: 'mindnode',
    name: 'MindNode',
    description: 'Mind mapping for Apple devices',
    category: 'Whiteboard',
    layer: 'foundation',
    officialUrl: 'https://mindnode.com',
    freeTierDetails: 'Paid',
    tags: ['whiteboard']
  },
  {
    id: 'figma',
    name: 'Figma',
    description: 'Collaborative interface design tool',
    category: 'UI/UX Design',
    layer: 'foundation',
    officialUrl: 'https://figma.com',
    freeTierDetails: 'Freemium',
    tags: ['ui-ux-design']
  },
  {
    id: 'adobe-xd',
    name: 'Adobe XD',
    description: 'UI/UX design by Adobe',
    category: 'UI/UX Design',
    layer: 'foundation',
    officialUrl: 'https://adobe.com/xd',
    freeTierDetails: 'Free/Paid',
    tags: ['ui-ux-design']
  },
  {
    id: 'sketch',
    name: 'Sketch',
    description: 'Vector UI design for macOS',
    category: 'UI/UX Design',
    layer: 'foundation',
    officialUrl: 'https://sketch.com',
    freeTierDetails: 'Paid',
    tags: ['ui-ux-design']
  },
  {
    id: 'invision',
    name: 'InVision',
    description: 'Prototyping and collaboration',
    category: 'UI/UX Design',
    layer: 'foundation',
    officialUrl: 'https://invisionapp.com',
    freeTierDetails: 'Freemium',
    tags: ['ui-ux-design']
  },
  {
    id: 'zeplin',
    name: 'Zeplin',
    description: 'Design handoff tool',
    category: 'UI/UX Design',
    layer: 'foundation',
    officialUrl: 'https://zeplin.io',
    freeTierDetails: 'Freemium',
    tags: ['ui-ux-design']
  },
  {
    id: 'marvel',
    name: 'Marvel',
    description: 'Design and prototype tool',
    category: 'UI/UX Design',
    layer: 'foundation',
    officialUrl: 'https://marvelapp.com',
    freeTierDetails: 'Freemium',
    tags: ['ui-ux-design']
  },
  {
    id: 'framer',
    name: 'Framer',
    description: 'Interactive design and prototyping',
    category: 'UI/UX Design',
    layer: 'foundation',
    officialUrl: 'https://framer.com',
    freeTierDetails: 'Freemium',
    tags: ['ui-ux-design']
  },
  {
    id: 'axure-rp',
    name: 'Axure RP',
    description: 'Advanced prototyping tool',
    category: 'UI/UX Design',
    layer: 'foundation',
    officialUrl: 'https://axure.com',
    freeTierDetails: 'Paid',
    tags: ['ui-ux-design']
  },
  {
    id: 'proto-io',
    name: 'Proto.io',
    description: 'Mobile prototype builder',
    category: 'UI/UX Design',
    layer: 'foundation',
    officialUrl: 'https://proto.io',
    freeTierDetails: 'Paid',
    tags: ['ui-ux-design']
  },
  {
    id: 'uxpin',
    name: 'UXPin',
    description: 'Design and prototype platform',
    category: 'UI/UX Design',
    layer: 'foundation',
    officialUrl: 'https://uxpin.com',
    freeTierDetails: 'Paid',
    tags: ['ui-ux-design']
  },
  {
    id: 'mockplus',
    name: 'Mockplus',
    description: 'Rapid prototyping tool',
    category: 'UI/UX Design',
    layer: 'foundation',
    officialUrl: 'https://mockplus.com',
    freeTierDetails: 'Freemium',
    tags: ['ui-ux-design']
  },
  {
    id: 'justinmind',
    name: 'Justinmind',
    description: 'All-in-one prototyping tool',
    category: 'UI/UX Design',
    layer: 'foundation',
    officialUrl: 'https://justinmind.com',
    freeTierDetails: 'Freemium',
    tags: ['ui-ux-design']
  },
  {
    id: 'origami-studio',
    name: 'Origami Studio',
    description: 'Meta\'s prototyping tool',
    category: 'UI/UX Design',
    layer: 'foundation',
    officialUrl: 'https://origami.design',
    freeTierDetails: 'Free',
    tags: ['ui-ux-design']
  },
  {
    id: 'principle',
    name: 'Principle',
    description: 'Animated prototyping for Mac',
    category: 'UI/UX Design',
    layer: 'foundation',
    officialUrl: 'https://principleformac.com',
    freeTierDetails: 'Paid',
    tags: ['ui-ux-design']
  },
  {
    id: 'flinto',
    name: 'Flinto',
    description: 'Prototyping tool for Mac',
    category: 'UI/UX Design',
    layer: 'foundation',
    officialUrl: 'https://flinto.com',
    freeTierDetails: 'Paid',
    tags: ['ui-ux-design']
  },
  {
    id: 'adobe-illustrator',
    name: 'Adobe Illustrator',
    description: 'Industry-standard vector graphics',
    category: 'UI/UX Design',
    layer: 'foundation',
    officialUrl: 'https://adobe.com/illustrator',
    freeTierDetails: 'Paid',
    tags: ['ui-ux-design']
  },
  {
    id: 'affinity-designer',
    name: 'Affinity Designer',
    description: 'Professional vector design',
    category: 'UI/UX Design',
    layer: 'foundation',
    officialUrl: 'https://affinity.serif.com/designer',
    freeTierDetails: 'Paid',
    tags: ['ui-ux-design']
  },
  {
    id: 'coreldraw',
    name: 'CorelDRAW',
    description: 'Vector illustration and design',
    category: 'UI/UX Design',
    layer: 'foundation',
    officialUrl: 'https://coreldraw.com',
    freeTierDetails: 'Paid',
    tags: ['ui-ux-design']
  },
  {
    id: 'inkscape',
    name: 'Inkscape',
    description: 'Open-source vector graphics editor',
    category: 'UI/UX Design',
    layer: 'foundation',
    officialUrl: 'https://inkscape.org',
    freeTierDetails: 'Free/OSS',
    tags: ['ui-ux-design']
  },
  {
    id: 'vectr',
    name: 'Vectr',
    description: 'Simple free vector graphics editor',
    category: 'UI/UX Design',
    layer: 'foundation',
    officialUrl: 'https://vectr.com',
    freeTierDetails: 'Free',
    tags: ['ui-ux-design']
  },
  {
    id: 'adobe-photoshop',
    name: 'Adobe Photoshop',
    description: 'Industry-standard photo editing',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://adobe.com/photoshop',
    freeTierDetails: 'Paid',
    tags: ['image-editing']
  },
  {
    id: 'gimp',
    name: 'GIMP',
    description: 'Open-source image manipulation',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://gimp.org',
    freeTierDetails: 'Free/OSS',
    tags: ['image-editing']
  },
  {
    id: 'pixelmator-pro',
    name: 'Pixelmator Pro',
    description: 'Professional image editor for Mac',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://pixelmator.com/pro',
    freeTierDetails: 'Paid',
    tags: ['image-editing']
  },
  {
    id: 'affinity-photo',
    name: 'Affinity Photo',
    description: 'Professional photo editing',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://affinity.serif.com/photo',
    freeTierDetails: 'Paid',
    tags: ['image-editing']
  },
  {
    id: 'lightroom',
    name: 'Lightroom',
    description: 'Photo management and editing',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://adobe.com/lightroom',
    freeTierDetails: 'Paid',
    tags: ['image-editing']
  },
  {
    id: 'capture-one',
    name: 'Capture One',
    description: 'Professional photo editing software',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://captureone.com',
    freeTierDetails: 'Paid',
    tags: ['image-editing']
  },
  {
    id: 'darktable',
    name: 'Darktable',
    description: 'Open-source Lightroom alternative',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://darktable.org',
    freeTierDetails: 'Free/OSS',
    tags: ['image-editing']
  },
  {
    id: 'rawtherapee',
    name: 'RawTherapee',
    description: 'RAW image processing',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://rawtherapee.com',
    freeTierDetails: 'Free/OSS',
    tags: ['image-editing']
  },
  {
    id: 'luminar-neo',
    name: 'Luminar Neo',
    description: 'AI-powered photo editor',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://skylum.com/luminar',
    freeTierDetails: 'Paid',
    tags: ['image-editing']
  },
  {
    id: 'on1-photo-raw',
    name: 'ON1 Photo RAW',
    description: 'Photo editing and management',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://on1.com',
    freeTierDetails: 'Paid',
    tags: ['image-editing']
  },
  {
    id: 'canva',
    name: 'Canva',
    description: 'Online graphic design platform',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://canva.com',
    freeTierDetails: 'Freemium',
    tags: ['image-editing']
  },
  {
    id: 'adobe-express',
    name: 'Adobe Express',
    description: 'Quick design for social media',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://adobe.com/express',
    freeTierDetails: 'Freemium',
    tags: ['image-editing']
  },
  {
    id: 'crello-vistacreate',
    name: 'Crello (VistaCreate)',
    description: 'Graphic design tool',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://create.vista.com',
    freeTierDetails: 'Freemium',
    tags: ['image-editing']
  },
  {
    id: 'snappa',
    name: 'Snappa',
    description: 'Online graphic design',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://snappa.com',
    freeTierDetails: 'Freemium',
    tags: ['image-editing']
  },
  {
    id: 'picmonkey',
    name: 'PicMonkey',
    description: 'Photo editing and design',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://picmonkey.com',
    freeTierDetails: 'Freemium',
    tags: ['image-editing']
  },
  {
    id: 'befunky',
    name: 'BeFunky',
    description: 'Photo editor and collage maker',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://befunky.com',
    freeTierDetails: 'Freemium',
    tags: ['image-editing']
  },
  {
    id: 'fotor',
    name: 'Fotor',
    description: 'Online photo editor',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://fotor.com',
    freeTierDetails: 'Freemium',
    tags: ['image-editing']
  },
  {
    id: 'remove-bg',
    name: 'Remove.bg',
    description: 'AI background removal',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://remove.bg',
    freeTierDetails: 'Freemium',
    tags: ['image-editing']
  },
  {
    id: 'cleanup-pictures',
    name: 'Cleanup.pictures',
    description: 'AI-powered object removal',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://cleanup.pictures',
    freeTierDetails: 'Freemium',
    tags: ['image-editing']
  },
  {
    id: 'upscayl',
    name: 'Upscayl',
    description: 'AI image upscaling tool',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://upscayl.org',
    freeTierDetails: 'Free/OSS',
    tags: ['image-editing']
  },
  {
    id: 'topaz-photo-ai',
    name: 'Topaz Photo AI',
    description: 'AI photo enhancement',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://topazlabs.com/topaz-photo-ai',
    freeTierDetails: 'Paid',
    tags: ['image-editing']
  },
  {
    id: 'luminar-ai',
    name: 'Luminar AI',
    description: 'AI image editing',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://skylum.com/luminar-ai',
    freeTierDetails: 'Paid',
    tags: ['image-editing']
  },
  {
    id: 'photoroom',
    name: 'Photoroom',
    description: 'AI product photo editor',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://photoroom.com',
    freeTierDetails: 'Freemium',
    tags: ['image-editing']
  },
  {
    id: 'clipdrop',
    name: 'Clipdrop',
    description: 'AI-powered creative tools',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://clipdrop.co',
    freeTierDetails: 'Freemium',
    tags: ['image-editing']
  },
  {
    id: 'photopea',
    name: 'Photopea',
    description: 'Free online Photoshop alternative',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://photopea.com',
    freeTierDetails: 'Free',
    tags: ['image-editing']
  },
  {
    id: 'polarr',
    name: 'Polarr',
    description: 'AI-powered photo editor',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://polarr.com',
    freeTierDetails: 'Freemium',
    tags: ['image-editing']
  },
  {
    id: 'vsco',
    name: 'VSCO',
    description: 'Photo editing and community',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://vsco.co',
    freeTierDetails: 'Freemium',
    tags: ['image-editing']
  },
  {
    id: 'snapseed',
    name: 'Snapseed',
    description: 'Google\'s mobile photo editor',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://snapseed.online',
    freeTierDetails: 'Free',
    tags: ['image-editing']
  },
  {
    id: 'pixlr',
    name: 'Pixlr',
    description: 'Online photo editing suite',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://pixlr.com',
    freeTierDetails: 'Freemium',
    tags: ['image-editing']
  },
  {
    id: 'paintshop-pro',
    name: 'PaintShop Pro',
    description: 'Photo editing by Corel',
    category: 'Image Editing',
    layer: 'foundation',
    officialUrl: 'https://paintshoppro.com',
    freeTierDetails: 'Paid',
    tags: ['image-editing']
  },
  {
    id: 'adobe-premiere-pro',
    name: 'Adobe Premiere Pro',
    description: 'Professional video editing by Adobe',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://adobe.com/premiere',
    freeTierDetails: 'Paid',
    tags: ['video-editing']
  },
  {
    id: 'final-cut-pro',
    name: 'Final Cut Pro',
    description: 'Professional video editing for Mac',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://apple.com/final-cut-pro',
    freeTierDetails: 'Paid',
    tags: ['video-editing']
  },
  {
    id: 'davinci-resolve',
    name: 'DaVinci Resolve',
    description: 'Color grading and video editing',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://blackmagicdesign.com/davinci',
    freeTierDetails: 'Free/Paid',
    tags: ['video-editing']
  },
  {
    id: 'avid-media-composer',
    name: 'Avid Media Composer',
    description: 'Industry-standard post-production',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://avid.com',
    freeTierDetails: 'Paid',
    tags: ['video-editing']
  },
  {
    id: 'imovie',
    name: 'iMovie',
    description: 'Simple video editing for Apple',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://apple.com/imovie',
    freeTierDetails: 'Free',
    tags: ['video-editing']
  },
  {
    id: 'kdenlive',
    name: 'Kdenlive',
    description: 'Open-source non-linear video editor',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://kdenlive.org',
    freeTierDetails: 'Free/OSS',
    tags: ['video-editing']
  },
  {
    id: 'openshot',
    name: 'OpenShot',
    description: 'Open-source video editor',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://openshot.org',
    freeTierDetails: 'Free/OSS',
    tags: ['video-editing']
  },
  {
    id: 'shotcut',
    name: 'Shotcut',
    description: 'Free cross-platform video editor',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://shotcut.org',
    freeTierDetails: 'Free/OSS',
    tags: ['video-editing']
  },
  {
    id: 'vegas-pro',
    name: 'Vegas Pro',
    description: 'Professional video/audio editing',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://vegascreativesoftware.com',
    freeTierDetails: 'Paid',
    tags: ['video-editing']
  },
  {
    id: 'hitfilm-express',
    name: 'HitFilm Express',
    description: 'VFX compositing and editing',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://fxhome.com/hitfilm',
    freeTierDetails: 'Free/Paid',
    tags: ['video-editing']
  },
  {
    id: 'filmora',
    name: 'Filmora',
    description: 'Easy video editing by Wondershare',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://filmora.wondershare.com',
    freeTierDetails: 'Freemium',
    tags: ['video-editing']
  },
  {
    id: 'powerdirector',
    name: 'PowerDirector',
    description: 'Video editing by CyberLink',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://cyberlink.com/powerdirector',
    freeTierDetails: 'Freemium',
    tags: ['video-editing']
  },
  {
    id: 'camtasia',
    name: 'Camtasia',
    description: 'Screen recording and video editing',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://techsmith.com/camtasia',
    freeTierDetails: 'Paid',
    tags: ['video-editing']
  },
  {
    id: 'screenflow',
    name: 'ScreenFlow',
    description: 'Screen recording for macOS',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://telestream.net/screenflow',
    freeTierDetails: 'Paid',
    tags: ['video-editing']
  },
  {
    id: 'loom',
    name: 'Loom',
    description: 'Quick async video recording',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://loom.com',
    freeTierDetails: 'Freemium',
    tags: ['video-editing']
  },
  {
    id: 'riverside-fm',
    name: 'Riverside.fm',
    description: 'Remote podcast/video recording',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://riverside.fm',
    freeTierDetails: 'Freemium',
    tags: ['video-editing']
  },
  {
    id: 'descript',
    name: 'Descript',
    description: 'Text-based video editing with AI',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://descript.com',
    freeTierDetails: 'Freemium',
    tags: ['video-editing']
  },
  {
    id: 'captions',
    name: 'Captions',
    description: 'AI-powered captions and video editing',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://captions.ai',
    freeTierDetails: 'Freemium',
    tags: ['video-editing']
  },
  {
    id: 'capcut',
    name: 'CapCut',
    description: 'TikTok\'s free video editing app',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://capcut.com',
    freeTierDetails: 'Free',
    tags: ['video-editing']
  },
  {
    id: 'inshot',
    name: 'InShot',
    description: 'Mobile video editor',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://inshot.com',
    freeTierDetails: 'Freemium',
    tags: ['video-editing']
  },
  {
    id: 'vllo',
    name: 'VLLO',
    description: 'Mobile video editor',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://vllo.app',
    freeTierDetails: 'Freemium',
    tags: ['video-editing']
  },
  {
    id: 'kinemaster',
    name: 'KineMaster',
    description: 'Professional mobile video editing',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://kinemaster.com',
    freeTierDetails: 'Freemium',
    tags: ['video-editing']
  },
  {
    id: 'splice',
    name: 'Splice',
    description: 'Simple mobile video editor',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://splice.com',
    freeTierDetails: 'Freemium',
    tags: ['video-editing']
  },
  {
    id: 'adobe-premiere-rush',
    name: 'Adobe Premiere Rush',
    description: 'Mobile-first video editing by Adobe',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://adobe.com/rush',
    freeTierDetails: 'Freemium',
    tags: ['video-editing']
  },
  {
    id: 'vn-video-editor',
    name: 'VN Video Editor',
    description: 'Simple versatile video editor',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://apps.apple.com/app/vn-video-editor',
    freeTierDetails: 'Free',
    tags: ['video-editing']
  },
  {
    id: 'runway-ml',
    name: 'Runway ML',
    description: 'AI-powered video generation and editing',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://runwayml.com',
    freeTierDetails: 'Freemium',
    tags: ['video-editing']
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'AI video generation from text',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://synthesia.io',
    freeTierDetails: 'Paid',
    tags: ['video-editing']
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    description: 'AI video with avatars',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://heygen.com',
    freeTierDetails: 'Freemium',
    tags: ['video-editing']
  },
  {
    id: 'pictory',
    name: 'Pictory',
    description: 'AI video creation from long-form content',
    category: 'Video Editing',
    layer: 'foundation',
    officialUrl: 'https://pictory.ai',
    freeTierDetails: 'Paid',
    tags: ['video-editing']
  },
  {
    id: 'blender',
    name: 'Blender',
    description: 'Open-source 3D creation suite',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://blender.org',
    freeTierDetails: 'Free/OSS',
    tags: ['3d-vfx']
  },
  {
    id: 'maya',
    name: 'Maya',
    description: '3D animation and VFX by Autodesk',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://autodesk.com/maya',
    freeTierDetails: 'Paid',
    tags: ['3d-vfx']
  },
  {
    id: '3ds-max',
    name: '3ds Max',
    description: '3D modeling and rendering by Autodesk',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://autodesk.com/3dsmax',
    freeTierDetails: 'Paid',
    tags: ['3d-vfx']
  },
  {
    id: 'cinema-4d',
    name: 'Cinema 4D',
    description: 'Professional 3D animation by Maxon',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://maxon.net/cinema-4d',
    freeTierDetails: 'Paid',
    tags: ['3d-vfx']
  },
  {
    id: 'houdini',
    name: 'Houdini',
    description: 'VFX and procedural 3D by SideFX',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://sidefx.com',
    freeTierDetails: 'Freemium',
    tags: ['3d-vfx']
  },
  {
    id: 'zbrush',
    name: 'ZBrush',
    description: 'Digital sculpting tool',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://maxon.net/zbrush',
    freeTierDetails: 'Paid',
    tags: ['3d-vfx']
  },
  {
    id: 'mudbox',
    name: 'Mudbox',
    description: '3D sculpting by Autodesk',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://autodesk.com/mudbox',
    freeTierDetails: 'Paid',
    tags: ['3d-vfx']
  },
  {
    id: 'substance-painter',
    name: 'Substance Painter',
    description: '3D texture painting by Adobe',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://adobe.com/substance3d',
    freeTierDetails: 'Paid',
    tags: ['3d-vfx']
  },
  {
    id: 'marvelous-designer',
    name: 'Marvelous Designer',
    description: '3D clothing simulation',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://marvelousdesigner.com',
    freeTierDetails: 'Paid',
    tags: ['3d-vfx']
  },
  {
    id: 'speedtree',
    name: 'SpeedTree',
    description: 'Procedural 3D vegetation modeling',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://speedtree.com',
    freeTierDetails: 'Paid',
    tags: ['3d-vfx']
  },
  {
    id: 'modo',
    name: 'Modo',
    description: '3D modeling and rendering',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://foundry.com/products/modo',
    freeTierDetails: 'Paid',
    tags: ['3d-vfx']
  },
  {
    id: 'lightwave-3d',
    name: 'LightWave 3D',
    description: '3D modeling, animation, rendering',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://lightwave3d.com',
    freeTierDetails: 'Paid',
    tags: ['3d-vfx']
  },
  {
    id: 'keyshot',
    name: 'Keyshot',
    description: 'Real-time 3D rendering and animation',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://keyshot.com',
    freeTierDetails: 'Paid',
    tags: ['3d-vfx']
  },
  {
    id: 'v-ray',
    name: 'V-Ray',
    description: 'Professional rendering software',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://chaosgroup.com/vray',
    freeTierDetails: 'Paid',
    tags: ['3d-vfx']
  },
  {
    id: 'arnold',
    name: 'Arnold',
    description: 'CPU/GPU renderer by Autodesk',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://autodesk.com/arnold',
    freeTierDetails: 'Paid',
    tags: ['3d-vfx']
  },
  {
    id: 'unreal-engine',
    name: 'Unreal Engine',
    description: 'Real-time 3D creation platform',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://unrealengine.com',
    freeTierDetails: 'Free (rev share)',
    tags: ['3d-vfx']
  },
  {
    id: 'unity',
    name: 'Unity',
    description: 'Cross-platform game engine',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://unity.com',
    freeTierDetails: 'Freemium',
    tags: ['3d-vfx']
  },
  {
    id: 'godot',
    name: 'Godot',
    description: 'Open-source game engine',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://godotengine.org',
    freeTierDetails: 'Free/OSS',
    tags: ['3d-vfx']
  },
  {
    id: 'adobe-after-effects',
    name: 'Adobe After Effects',
    description: 'Motion graphics and VFX',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://adobe.com/after-effects',
    freeTierDetails: 'Paid',
    tags: ['3d-vfx']
  },
  {
    id: 'nuke',
    name: 'Nuke',
    description: 'Compositing software by Foundry',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://foundry.com/products/nuke',
    freeTierDetails: 'Paid',
    tags: ['3d-vfx']
  },
  {
    id: 'natron',
    name: 'Natron',
    description: 'Open-source compositing application',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://natron.fr',
    freeTierDetails: 'Free/OSS',
    tags: ['3d-vfx']
  },
  {
    id: 'fusion-davinci',
    name: 'Fusion (DaVinci)',
    description: 'Node-based VFX compositing',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://blackmagicdesign.com/products/davinciresolve/fusion',
    freeTierDetails: 'Free/Paid',
    tags: ['3d-vfx']
  },
  {
    id: 'mocha-pro',
    name: 'Mocha Pro',
    description: 'Planar tracking and VFX',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://borisfx.com/mocha-pro',
    freeTierDetails: 'Paid',
    tags: ['3d-vfx']
  },
  {
    id: 'particle-illusion',
    name: 'Particle Illusion',
    description: 'Particle effects generator',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://borisfx.com/particle-illusion',
    freeTierDetails: 'Paid',
    tags: ['3d-vfx']
  },
  {
    id: 'adobe-animate',
    name: 'Adobe Animate',
    description: 'Animation for web and interactive content',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://adobe.com/animate',
    freeTierDetails: 'Paid',
    tags: ['3d-vfx']
  },
  {
    id: 'toon-boom-harmony',
    name: 'Toon Boom Harmony',
    description: 'Professional 2D animation',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://toonboom.com/harmony',
    freeTierDetails: 'Paid',
    tags: ['3d-vfx']
  },
  {
    id: 'opentoonz',
    name: 'OpenToonz',
    description: 'Open-source 2D animation',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://opentoonz.github.io',
    freeTierDetails: 'Free/OSS',
    tags: ['3d-vfx']
  },
  {
    id: 'pencil2d',
    name: 'Pencil2D',
    description: 'Open-source 2D hand-drawn animation',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://pencil2d.org',
    freeTierDetails: 'Free/OSS',
    tags: ['3d-vfx']
  },
  {
    id: 'synfig-studio',
    name: 'Synfig Studio',
    description: 'Open-source 2D vector animation',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://synfig.org',
    freeTierDetails: 'Free/OSS',
    tags: ['3d-vfx']
  },
  {
    id: 'rive',
    name: 'Rive',
    description: 'Interactive animation for apps and games',
    category: '3D & VFX',
    layer: 'foundation',
    officialUrl: 'https://rive.app',
    freeTierDetails: 'Freemium',
    tags: ['3d-vfx']
  },
  {
    id: 'ableton-live',
    name: 'Ableton Live',
    description: 'DAW for music production and performance',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://ableton.com',
    freeTierDetails: 'Paid',
    tags: ['audio-production']
  },
  {
    id: 'logic-pro',
    name: 'Logic Pro',
    description: 'Professional DAW by Apple',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://apple.com/logic-pro',
    freeTierDetails: 'Paid',
    tags: ['audio-production']
  },
  {
    id: 'fl-studio',
    name: 'FL Studio',
    description: 'Popular DAW, lifetime free updates',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://image-line.com',
    freeTierDetails: 'Paid',
    tags: ['audio-production']
  },
  {
    id: 'pro-tools',
    name: 'Pro Tools',
    description: 'Industry-standard recording DAW',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://avid.com/pro-tools',
    freeTierDetails: 'Paid',
    tags: ['audio-production']
  },
  {
    id: 'garageband',
    name: 'GarageBand',
    description: 'Beginner-friendly DAW by Apple',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://apple.com/garageband',
    freeTierDetails: 'Free',
    tags: ['audio-production']
  },
  {
    id: 'cubase',
    name: 'Cubase',
    description: 'Professional music production by Steinberg',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://steinberg.net/cubase',
    freeTierDetails: 'Paid',
    tags: ['audio-production']
  },
  {
    id: 'reaper',
    name: 'Reaper',
    description: 'Affordable, lightweight DAW',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://reaper.fm',
    freeTierDetails: 'Paid',
    tags: ['audio-production']
  },
  {
    id: 'studio-one',
    name: 'Studio One',
    description: 'Music production by PreSonus',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://presonus.com/products/studio-one',
    freeTierDetails: 'Paid',
    tags: ['audio-production']
  },
  {
    id: 'bitwig-studio',
    name: 'Bitwig Studio',
    description: 'Modern DAW with modular workflow',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://bitwig.com',
    freeTierDetails: 'Paid',
    tags: ['audio-production']
  },
  {
    id: 'reason',
    name: 'Reason',
    description: 'Rack-based music production',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://reasonstudios.com',
    freeTierDetails: 'Paid',
    tags: ['audio-production']
  },
  {
    id: 'cakewalk-by-bandlab',
    name: 'Cakewalk by BandLab',
    description: 'Free professional DAW for Windows',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://bandlab.com/cakewalk',
    freeTierDetails: 'Free',
    tags: ['audio-production']
  },
  {
    id: 'lmms',
    name: 'LMMS',
    description: 'Open-source music production',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://lmms.io',
    freeTierDetails: 'Free/OSS',
    tags: ['audio-production']
  },
  {
    id: 'ardour',
    name: 'Ardour',
    description: 'Open-source DAW for recording and editing',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://ardour.org',
    freeTierDetails: 'Free/OSS',
    tags: ['audio-production']
  },
  {
    id: 'audacity',
    name: 'Audacity',
    description: 'Free audio editor and recorder',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://audacityteam.org',
    freeTierDetails: 'Free/OSS',
    tags: ['audio-production']
  },
  {
    id: 'ocenaudio',
    name: 'Ocenaudio',
    description: 'Easy cross-platform audio editor',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://ocenaudio.com',
    freeTierDetails: 'Free',
    tags: ['audio-production']
  },
  {
    id: 'adobe-audition',
    name: 'Adobe Audition',
    description: 'Professional audio workstation by Adobe',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://adobe.com/audition',
    freeTierDetails: 'Paid',
    tags: ['audio-production']
  },
  {
    id: 'izotope-rx',
    name: 'Izotope RX',
    description: 'Audio repair and restoration suite',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://izotope.com/rx',
    freeTierDetails: 'Paid',
    tags: ['audio-production']
  },
  {
    id: 'izotope-ozone',
    name: 'Izotope Ozone',
    description: 'AI-powered mastering plugin',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://izotope.com/ozone',
    freeTierDetails: 'Paid',
    tags: ['audio-production']
  },
  {
    id: 'waves-audio',
    name: 'Waves Audio',
    description: 'Pro audio plugins',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://waves.com',
    freeTierDetails: 'Paid',
    tags: ['audio-production']
  },
  {
    id: 'looperman',
    name: 'Looperman',
    description: 'Royalty-free samples and loops',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://looperman.com',
    freeTierDetails: 'Free/Freemium',
    tags: ['audio-production']
  },
  {
    id: 'soundsnap',
    name: 'Soundsnap',
    description: 'Professional sound effects library',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://soundsnap.com',
    freeTierDetails: 'Paid',
    tags: ['audio-production']
  },
  {
    id: 'freesound',
    name: 'Freesound',
    description: 'Collaborative sound database',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://freesound.org',
    freeTierDetails: 'Free',
    tags: ['audio-production']
  },
  {
    id: 'earmaster',
    name: 'EarMaster',
    description: 'Ear training and sight singing',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://earmaster.com',
    freeTierDetails: 'Paid',
    tags: ['audio-production']
  },
  {
    id: 'suno-ai',
    name: 'Suno AI',
    description: 'AI music generation from text',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://suno.com',
    freeTierDetails: 'Freemium',
    tags: ['audio-production']
  },
  {
    id: 'udio',
    name: 'Udio',
    description: 'AI music creation platform',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://udio.com',
    freeTierDetails: 'Freemium',
    tags: ['audio-production']
  },
  {
    id: 'mubert',
    name: 'Mubert',
    description: 'AI-generated royalty-free music',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://mubert.com',
    freeTierDetails: 'Freemium',
    tags: ['audio-production']
  },
  {
    id: 'aiva',
    name: 'AIVA',
    description: 'AI music composition',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://aiva.ai',
    freeTierDetails: 'Freemium',
    tags: ['audio-production']
  },
  {
    id: 'soundraw',
    name: 'Soundraw',
    description: 'AI music generator for creators',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://soundraw.io',
    freeTierDetails: 'Freemium',
    tags: ['audio-production']
  },
  {
    id: 'boomy',
    name: 'Boomy',
    description: 'AI music creation platform',
    category: 'Audio Production',
    layer: 'foundation',
    officialUrl: 'https://boomy.com',
    freeTierDetails: 'Freemium',
    tags: ['audio-production']
  },
  {
    id: 'google-fonts',
    name: 'Google Fonts',
    description: 'Free web fonts by Google',
    category: 'Fonts & Typography',
    layer: 'foundation',
    officialUrl: 'https://fonts.google.com',
    freeTierDetails: 'Free',
    tags: ['fonts-typography']
  },
  {
    id: 'adobe-fonts',
    name: 'Adobe Fonts',
    description: 'Font subscription by Adobe',
    category: 'Fonts & Typography',
    layer: 'foundation',
    officialUrl: 'https://fonts.adobe.com',
    freeTierDetails: 'Paid (CC)',
    tags: ['fonts-typography']
  },
  {
    id: 'font-squirrel',
    name: 'Font Squirrel',
    description: 'Free commercial-use fonts',
    category: 'Fonts & Typography',
    layer: 'foundation',
    officialUrl: 'https://fontsquirrel.com',
    freeTierDetails: 'Free',
    tags: ['fonts-typography']
  },
  {
    id: 'dafont',
    name: 'DaFont',
    description: 'Free downloadable fonts',
    category: 'Fonts & Typography',
    layer: 'foundation',
    officialUrl: 'https://dafont.com',
    freeTierDetails: 'Free',
    tags: ['fonts-typography']
  },
  {
    id: '1001-fonts',
    name: '1001 Fonts',
    description: 'Free font download site',
    category: 'Fonts & Typography',
    layer: 'foundation',
    officialUrl: 'https://1001fonts.com',
    freeTierDetails: 'Free',
    tags: ['fonts-typography']
  },
  {
    id: 'fontshare',
    name: 'Fontshare',
    description: 'Quality fonts from Indian Type Foundry',
    category: 'Fonts & Typography',
    layer: 'foundation',
    officialUrl: 'https://fontshare.com',
    freeTierDetails: 'Free',
    tags: ['fonts-typography']
  },
  {
    id: 'klim-type-foundry',
    name: 'Klim Type Foundry',
    description: 'Independent type foundry NZ',
    category: 'Fonts & Typography',
    layer: 'foundation',
    officialUrl: 'https://klim.co.nz',
    freeTierDetails: 'Paid',
    tags: ['fonts-typography']
  },
  {
    id: 'hoefler-co',
    name: 'Hoefler&Co;',
    description: 'Premium typography fonts',
    category: 'Fonts & Typography',
    layer: 'foundation',
    officialUrl: 'https://typography.com',
    freeTierDetails: 'Paid',
    tags: ['fonts-typography']
  },
  {
    id: 'myfonts',
    name: 'MyFonts',
    description: 'Large font marketplace',
    category: 'Fonts & Typography',
    layer: 'foundation',
    officialUrl: 'https://myfonts.com',
    freeTierDetails: 'Paid',
    tags: ['fonts-typography']
  },
  {
    id: 'bunny-fonts',
    name: 'Bunny Fonts',
    description: 'Privacy-first font CDN',
    category: 'Fonts & Typography',
    layer: 'foundation',
    officialUrl: 'https://fonts.bunny.net',
    freeTierDetails: 'Free',
    tags: ['fonts-typography']
  },
  {
    id: 'fontsource',
    name: 'FontSource',
    description: 'Self-host open-source fonts',
    category: 'Fonts & Typography',
    layer: 'foundation',
    officialUrl: 'https://fontsource.org',
    freeTierDetails: 'Free/OSS',
    tags: ['fonts-typography']
  },
  {
    id: 'glyphs',
    name: 'Glyphs',
    description: 'Font editor for macOS',
    category: 'Fonts & Typography',
    layer: 'foundation',
    officialUrl: 'https://glyphsapp.com',
    freeTierDetails: 'Paid',
    tags: ['fonts-typography']
  },
  {
    id: 'fontforge',
    name: 'FontForge',
    description: 'Open-source font editor',
    category: 'Fonts & Typography',
    layer: 'foundation',
    officialUrl: 'https://fontforge.org',
    freeTierDetails: 'Free/OSS',
    tags: ['fonts-typography']
  },
  {
    id: 'birdfont',
    name: 'BirdFont',
    description: 'Font editor with SVG support',
    category: 'Fonts & Typography',
    layer: 'foundation',
    officialUrl: 'https://birdfont.org',
    freeTierDetails: 'Free/OSS',
    tags: ['fonts-typography']
  },
  {
    id: 'microsoft-365',
    name: 'Microsoft 365',
    description: 'Word, Excel, PowerPoint, etc.',
    category: 'Office Suites',
    layer: 'foundation',
    officialUrl: 'https://microsoft.com/microsoft-365',
    freeTierDetails: 'Paid/Freemium',
    tags: ['office-suites']
  },
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    description: 'Docs, Sheets, Slides, Drive',
    category: 'Office Suites',
    layer: 'foundation',
    officialUrl: 'https://workspace.google.com',
    freeTierDetails: 'Freemium',
    tags: ['office-suites']
  },
  {
    id: 'libreoffice',
    name: 'LibreOffice',
    description: 'Open-source office suite',
    category: 'Office Suites',
    layer: 'foundation',
    officialUrl: 'https://libreoffice.org',
    freeTierDetails: 'Free/OSS',
    tags: ['office-suites']
  },
  {
    id: 'apple-iwork',
    name: 'Apple iWork',
    description: 'Pages, Numbers, Keynote',
    category: 'Office Suites',
    layer: 'foundation',
    officialUrl: 'https://apple.com/iwork',
    freeTierDetails: 'Free',
    tags: ['office-suites']
  },
  {
    id: 'onlyoffice',
    name: 'OnlyOffice',
    description: 'Open-source office suite',
    category: 'Office Suites',
    layer: 'foundation',
    officialUrl: 'https://onlyoffice.com',
    freeTierDetails: 'Free/OSS',
    tags: ['office-suites']
  },
  {
    id: 'wps-office',
    name: 'WPS Office',
    description: 'Feature-rich office suite',
    category: 'Office Suites',
    layer: 'foundation',
    officialUrl: 'https://wps.com',
    freeTierDetails: 'Freemium',
    tags: ['office-suites']
  },
  {
    id: 'openoffice',
    name: 'OpenOffice',
    description: 'Apache OpenOffice suite',
    category: 'Office Suites',
    layer: 'foundation',
    officialUrl: 'https://openoffice.org',
    freeTierDetails: 'Free/OSS',
    tags: ['office-suites']
  },
  {
    id: 'zoho-docs',
    name: 'Zoho Docs',
    description: 'Online office suite by Zoho',
    category: 'Office Suites',
    layer: 'foundation',
    officialUrl: 'https://zoho.com/docs',
    freeTierDetails: 'Freemium',
    tags: ['office-suites']
  },
  {
    id: 'cryptpad',
    name: 'Cryptpad',
    description: 'Privacy-preserving online office',
    category: 'Office Suites',
    layer: 'foundation',
    officialUrl: 'https://cryptpad.fr',
    freeTierDetails: 'Free/OSS',
    tags: ['office-suites']
  },
  {
    id: 'calligra-suite',
    name: 'Calligra Suite',
    description: 'KDE office suite',
    category: 'Office Suites',
    layer: 'foundation',
    officialUrl: 'https://calligra.org',
    freeTierDetails: 'Free/OSS',
    tags: ['office-suites']
  },
  {
    id: 'softmaker-office',
    name: 'SoftMaker Office',
    description: 'Lightweight office suite',
    category: 'Office Suites',
    layer: 'foundation',
    officialUrl: 'https://softmaker.com/softmaker-office',
    freeTierDetails: 'Paid',
    tags: ['office-suites']
  },
  {
    id: 'polaris-office',
    name: 'Polaris Office',
    description: 'Cross-platform office suite',
    category: 'Office Suites',
    layer: 'foundation',
    officialUrl: 'https://polarisoffice.com',
    freeTierDetails: 'Freemium',
    tags: ['office-suites']
  },
  {
    id: 'officesuite',
    name: 'OfficeSuite',
    description: 'Mobile and desktop office',
    category: 'Office Suites',
    layer: 'foundation',
    officialUrl: 'https://officesuite.com',
    freeTierDetails: 'Freemium',
    tags: ['office-suites']
  },
  {
    id: 'collabora-online',
    name: 'Collabora Online',
    description: 'Cloud-based LibreOffice',
    category: 'Office Suites',
    layer: 'foundation',
    officialUrl: 'https://collaboraoffice.com',
    freeTierDetails: 'Freemium',
    tags: ['office-suites']
  },
  {
    id: 'hancom-office',
    name: 'Hancom Office',
    description: 'Korean office productivity suite',
    category: 'Office Suites',
    layer: 'foundation',
    officialUrl: 'https://hancom.com',
    freeTierDetails: 'Paid',
    tags: ['office-suites']
  },
  {
    id: 'todoist',
    name: 'Todoist',
    description: 'Task manager for individuals and teams',
    category: 'Task & To-Do',
    layer: 'foundation',
    officialUrl: 'https://todoist.com',
    freeTierDetails: 'Freemium',
    tags: ['task-to-do']
  },
  {
    id: 'things-3',
    name: 'Things 3',
    description: 'Beautiful task manager for Apple',
    category: 'Task & To-Do',
    layer: 'foundation',
    officialUrl: 'https://culturedcode.com/things',
    freeTierDetails: 'Paid',
    tags: ['task-to-do']
  },
  {
    id: 'omnifocus',
    name: 'OmniFocus',
    description: 'Powerful GTD task manager for Apple',
    category: 'Task & To-Do',
    layer: 'foundation',
    officialUrl: 'https://omnigroup.com/omnifocus',
    freeTierDetails: 'Paid',
    tags: ['task-to-do']
  },
  {
    id: 'microsoft-to-do',
    name: 'Microsoft To Do',
    description: 'Simple task manager by Microsoft',
    category: 'Task & To-Do',
    layer: 'foundation',
    officialUrl: 'https://todo.microsoft.com',
    freeTierDetails: 'Free',
    tags: ['task-to-do']
  },
  {
    id: 'tick-tick',
    name: 'Tick Tick',
    description: 'Task manager with calendar integration',
    category: 'Task & To-Do',
    layer: 'foundation',
    officialUrl: 'https://ticktick.com',
    freeTierDetails: 'Freemium',
    tags: ['task-to-do']
  },
  {
    id: 'any-do',
    name: 'Any.do',
    description: 'Task manager and calendar',
    category: 'Task & To-Do',
    layer: 'foundation',
    officialUrl: 'https://any.do',
    freeTierDetails: 'Freemium',
    tags: ['task-to-do']
  },
  {
    id: 'remember-the-milk',
    name: 'Remember The Milk',
    description: 'Classic task management service',
    category: 'Task & To-Do',
    layer: 'foundation',
    officialUrl: 'https://rememberthemilk.com',
    freeTierDetails: 'Freemium',
    tags: ['task-to-do']
  },
  {
    id: 'habitica',
    name: 'Habitica',
    description: 'Gamified habit and task tracker',
    category: 'Task & To-Do',
    layer: 'foundation',
    officialUrl: 'https://habitica.com',
    freeTierDetails: 'Free/OSS',
    tags: ['task-to-do']
  },
  {
    id: 'notion-tasks',
    name: 'Notion Tasks',
    description: 'Task management inside Notion',
    category: 'Task & To-Do',
    layer: 'foundation',
    officialUrl: 'https://notion.so',
    freeTierDetails: 'Freemium',
    tags: ['task-to-do']
  },
  {
    id: 'asana-personal',
    name: 'Asana (personal)',
    description: 'Task management for individuals',
    category: 'Task & To-Do',
    layer: 'foundation',
    officialUrl: 'https://asana.com',
    freeTierDetails: 'Freemium',
    tags: ['task-to-do']
  },
  {
    id: 'focusmate',
    name: 'Focusmate',
    description: 'Accountability coworking sessions',
    category: 'Task & To-Do',
    layer: 'foundation',
    officialUrl: 'https://focusmate.com',
    freeTierDetails: 'Freemium',
    tags: ['task-to-do']
  },
  {
    id: 'beedone',
    name: 'BeeDone',
    description: 'Gamified to-do list app',
    category: 'Task & To-Do',
    layer: 'foundation',
    officialUrl: 'https://beedone.com',
    freeTierDetails: 'Freemium',
    tags: ['task-to-do']
  },
  {
    id: 'amazing-marvin',
    name: 'Amazing Marvin',
    description: 'Customizable task manager',
    category: 'Task & To-Do',
    layer: 'foundation',
    officialUrl: 'https://amazingmarvin.com',
    freeTierDetails: 'Paid',
    tags: ['task-to-do']
  },
  {
    id: 'sunsama',
    name: 'Sunsama',
    description: 'Daily planner for professionals',
    category: 'Task & To-Do',
    layer: 'foundation',
    officialUrl: 'https://sunsama.com',
    freeTierDetails: 'Paid',
    tags: ['task-to-do']
  },
  {
    id: 'akiflow',
    name: 'Akiflow',
    description: 'Time blocking task management',
    category: 'Task & To-Do',
    layer: 'foundation',
    officialUrl: 'https://akiflow.com',
    freeTierDetails: 'Paid',
    tags: ['task-to-do']
  },
  {
    id: 'routine',
    name: 'Routine',
    description: 'Calendar and task integration',
    category: 'Task & To-Do',
    layer: 'foundation',
    officialUrl: 'https://routine.co',
    freeTierDetails: 'Freemium',
    tags: ['task-to-do']
  },
  {
    id: 'motion',
    name: 'Motion',
    description: 'AI automatic scheduling',
    category: 'Task & To-Do',
    layer: 'foundation',
    officialUrl: 'https://usemotion.com',
    freeTierDetails: 'Paid',
    tags: ['task-to-do']
  },
  {
    id: 'reclaim-ai',
    name: 'Reclaim.ai',
    description: 'AI calendar and task scheduling',
    category: 'Task & To-Do',
    layer: 'foundation',
    officialUrl: 'https://reclaim.ai',
    freeTierDetails: 'Freemium',
    tags: ['task-to-do']
  },
  {
    id: 'structured',
    name: 'Structured',
    description: 'Visual day planner',
    category: 'Task & To-Do',
    layer: 'foundation',
    officialUrl: 'https://structured.app',
    freeTierDetails: 'Freemium',
    tags: ['task-to-do']
  },
  {
    id: 'timo',
    name: 'Timo',
    description: 'Simple time tracker and Pomodoro',
    category: 'Task & To-Do',
    layer: 'foundation',
    officialUrl: 'https://timoapp.com',
    freeTierDetails: 'Free',
    tags: ['task-to-do']
  },
  {
    id: 'google-calendar',
    name: 'Google Calendar',
    description: 'Cloud calendar by Google',
    category: 'Calendar',
    layer: 'foundation',
    officialUrl: 'https://calendar.google.com',
    freeTierDetails: 'Free',
    tags: ['calendar']
  },
  {
    id: 'apple-calendar',
    name: 'Apple Calendar',
    description: 'Native macOS/iOS calendar',
    category: 'Calendar',
    layer: 'foundation',
    officialUrl: 'https://apple.com/ios/calendar',
    freeTierDetails: 'Free',
    tags: ['calendar']
  },
  {
    id: 'microsoft-outlook-calendar',
    name: 'Microsoft Outlook Calendar',
    description: 'Calendar in Outlook',
    category: 'Calendar',
    layer: 'foundation',
    officialUrl: 'https://outlook.microsoft.com',
    freeTierDetails: 'Freemium',
    tags: ['calendar']
  },
  {
    id: 'fantastical',
    name: 'Fantastical',
    description: 'Natural language calendar for Apple',
    category: 'Calendar',
    layer: 'foundation',
    officialUrl: 'https://flexibits.com/fantastical',
    freeTierDetails: 'Paid',
    tags: ['calendar']
  },
  {
    id: 'calendly',
    name: 'Calendly',
    description: 'Scheduling automation tool',
    category: 'Calendar',
    layer: 'foundation',
    officialUrl: 'https://calendly.com',
    freeTierDetails: 'Freemium',
    tags: ['calendar']
  },
  {
    id: 'cal-com',
    name: 'Cal.com',
    description: 'Open-source Calendly alternative',
    category: 'Calendar',
    layer: 'foundation',
    officialUrl: 'https://cal.com',
    freeTierDetails: 'Free/OSS',
    tags: ['calendar']
  },
  {
    id: 'acuity-scheduling',
    name: 'Acuity Scheduling',
    description: 'Appointment scheduling',
    category: 'Calendar',
    layer: 'foundation',
    officialUrl: 'https://acuityscheduling.com',
    freeTierDetails: 'Paid',
    tags: ['calendar']
  },
  {
    id: 'doodle',
    name: 'Doodle',
    description: 'Group scheduling polls',
    category: 'Calendar',
    layer: 'foundation',
    officialUrl: 'https://doodle.com',
    freeTierDetails: 'Freemium',
    tags: ['calendar']
  },
  {
    id: 'when2meet',
    name: 'When2meet',
    description: 'Simple group availability tool',
    category: 'Calendar',
    layer: 'foundation',
    officialUrl: 'https://when2meet.com',
    freeTierDetails: 'Free',
    tags: ['calendar']
  },
  {
    id: 'cron',
    name: 'Cron',
    description: 'Next-gen calendar for macOS',
    category: 'Calendar',
    layer: 'foundation',
    officialUrl: 'https://cron.com',
    freeTierDetails: 'Free',
    tags: ['calendar']
  },
  {
    id: 'vimcal',
    name: 'Vimcal',
    description: 'Speed-focused calendar app',
    category: 'Calendar',
    layer: 'foundation',
    officialUrl: 'https://vimcal.com',
    freeTierDetails: 'Paid',
    tags: ['calendar']
  },
  {
    id: 'savvy-cal',
    name: 'Savvy Cal',
    description: 'Flexible scheduling tool',
    category: 'Calendar',
    layer: 'foundation',
    officialUrl: 'https://savvycal.com',
    freeTierDetails: 'Paid',
    tags: ['calendar']
  },
  {
    id: 'meetsync',
    name: 'Meetsync',
    description: 'Smart meeting scheduler',
    category: 'Calendar',
    layer: 'foundation',
    officialUrl: 'https://meetsync.it',
    freeTierDetails: 'Free',
    tags: ['calendar']
  },
  {
    id: 'hubspot-meetings',
    name: 'HubSpot Meetings',
    description: 'Meeting scheduling in HubSpot',
    category: 'Calendar',
    layer: 'foundation',
    officialUrl: 'https://hubspot.com/products/meetings',
    freeTierDetails: 'Free',
    tags: ['calendar']
  },
  {
    id: 'zcal',
    name: 'Zcal',
    description: 'Minimal beautiful scheduling',
    category: 'Calendar',
    layer: 'foundation',
    officialUrl: 'https://zcal.co',
    freeTierDetails: 'Free',
    tags: ['calendar']
  },
  {
    id: 'bookwhen',
    name: 'Bookwhen',
    description: 'Event booking platform',
    category: 'Calendar',
    layer: 'foundation',
    officialUrl: 'https://bookwhen.com',
    freeTierDetails: 'Freemium',
    tags: ['calendar']
  },
  {
    id: 'setmore',
    name: 'Setmore',
    description: 'Online appointment scheduling',
    category: 'Calendar',
    layer: 'foundation',
    officialUrl: 'https://setmore.com',
    freeTierDetails: 'Freemium',
    tags: ['calendar']
  },
  {
    id: 'simplybook-me',
    name: 'SimplyBook.me',
    description: 'Online booking system',
    category: 'Calendar',
    layer: 'foundation',
    officialUrl: 'https://simplybook.me',
    freeTierDetails: 'Freemium',
    tags: ['calendar']
  },
  {
    id: 'toggl-track',
    name: 'Toggl Track',
    description: 'Simple time tracking',
    category: 'Time Tracking',
    layer: 'foundation',
    officialUrl: 'https://toggl.com/track',
    freeTierDetails: 'Freemium',
    tags: ['time-tracking']
  },
  {
    id: 'harvest',
    name: 'Harvest',
    description: 'Time tracking and invoicing',
    category: 'Time Tracking',
    layer: 'foundation',
    officialUrl: 'https://getharvest.com',
    freeTierDetails: 'Freemium',
    tags: ['time-tracking']
  },
  {
    id: 'clockify',
    name: 'Clockify',
    description: 'Free time tracker for teams',
    category: 'Time Tracking',
    layer: 'foundation',
    officialUrl: 'https://clockify.me',
    freeTierDetails: 'Free',
    tags: ['time-tracking']
  },
  {
    id: 'rescuetime',
    name: 'RescueTime',
    description: 'Automatic time tracking and focus',
    category: 'Time Tracking',
    layer: 'foundation',
    officialUrl: 'https://rescuetime.com',
    freeTierDetails: 'Freemium',
    tags: ['time-tracking']
  },
  {
    id: 'timely',
    name: 'Timely',
    description: 'AI-powered time tracking',
    category: 'Time Tracking',
    layer: 'foundation',
    officialUrl: 'https://timelyapp.com',
    freeTierDetails: 'Paid',
    tags: ['time-tracking']
  },
  {
    id: 'hubstaff',
    name: 'Hubstaff',
    description: 'Time tracking with screenshots',
    category: 'Time Tracking',
    layer: 'foundation',
    officialUrl: 'https://hubstaff.com',
    freeTierDetails: 'Paid',
    tags: ['time-tracking']
  },
  {
    id: 'time-doctor',
    name: 'Time Doctor',
    description: 'Employee time tracking',
    category: 'Time Tracking',
    layer: 'foundation',
    officialUrl: 'https://timedoctor.com',
    freeTierDetails: 'Paid',
    tags: ['time-tracking']
  },
  {
    id: 'desktime',
    name: 'DeskTime',
    description: 'Automatic time tracking',
    category: 'Time Tracking',
    layer: 'foundation',
    officialUrl: 'https://desktime.com',
    freeTierDetails: 'Freemium',
    tags: ['time-tracking']
  },
  {
    id: 'everhour',
    name: 'Everhour',
    description: 'Time tracking with project management',
    category: 'Time Tracking',
    layer: 'foundation',
    officialUrl: 'https://everhour.com',
    freeTierDetails: 'Freemium',
    tags: ['time-tracking']
  },
  {
    id: 'paymo',
    name: 'Paymo',
    description: 'Time tracking and invoicing',
    category: 'Time Tracking',
    layer: 'foundation',
    officialUrl: 'https://paymoapp.com',
    freeTierDetails: 'Freemium',
    tags: ['time-tracking']
  },
  {
    id: 'tmetric',
    name: 'TMetric',
    description: 'Time tracking for teams',
    category: 'Time Tracking',
    layer: 'foundation',
    officialUrl: 'https://tmetric.com',
    freeTierDetails: 'Freemium',
    tags: ['time-tracking']
  },
  {
    id: 'timing',
    name: 'Timing',
    description: 'Automatic time tracking for Mac',
    category: 'Time Tracking',
    layer: 'foundation',
    officialUrl: 'https://timingapp.com',
    freeTierDetails: 'Paid',
    tags: ['time-tracking']
  },
  {
    id: 'manictime',
    name: 'ManicTime',
    description: 'Desktop time tracker',
    category: 'Time Tracking',
    layer: 'foundation',
    officialUrl: 'https://manictime.com',
    freeTierDetails: 'Freemium',
    tags: ['time-tracking']
  },
  {
    id: 'time-tracker-by-ebillity',
    name: 'Time Tracker by eBillity',
    description: 'Time tracking and billing',
    category: 'Time Tracking',
    layer: 'foundation',
    officialUrl: 'https://ebillity.com',
    freeTierDetails: 'Paid',
    tags: ['time-tracking']
  },
  {
    id: 'worksnaps',
    name: 'Worksnaps',
    description: 'Time tracking with screenshots',
    category: 'Time Tracking',
    layer: 'foundation',
    officialUrl: 'https://worksnaps.net',
    freeTierDetails: 'Paid',
    tags: ['time-tracking']
  },
  {
    id: 'forest',
    name: 'Forest',
    description: 'Focus app, plant trees while working',
    category: 'Time Tracking',
    layer: 'foundation',
    officialUrl: 'https://forestapp.cc',
    freeTierDetails: 'Freemium',
    tags: ['time-tracking']
  },
  {
    id: 'be-focused',
    name: 'Be Focused',
    description: 'Pomodoro timer for Apple',
    category: 'Time Tracking',
    layer: 'foundation',
    officialUrl: 'https://xwavesoft.com/be-focused-pro',
    freeTierDetails: 'Freemium',
    tags: ['time-tracking']
  },
  {
    id: 'focus-will',
    name: 'Focus@Will',
    description: 'Neuroscience-based focus music',
    category: 'Time Tracking',
    layer: 'foundation',
    officialUrl: 'https://focusatwill.com',
    freeTierDetails: 'Paid',
    tags: ['time-tracking']
  },
  {
    id: 'flow',
    name: 'Flow',
    description: 'Pomodoro-based focus app for Mac',
    category: 'Time Tracking',
    layer: 'foundation',
    officialUrl: 'https://flowapp.com',
    freeTierDetails: 'Paid',
    tags: ['time-tracking']
  },
  {
    id: 'serene',
    name: 'Serene',
    description: 'Daily planning and focus tool',
    category: 'Time Tracking',
    layer: 'foundation',
    officialUrl: 'https://sereneapp.com',
    freeTierDetails: 'Paid',
    tags: ['time-tracking']
  },
  {
    id: '1password',
    name: '1Password',
    description: 'Premium password manager for teams',
    category: 'Password Managers',
    layer: 'foundation',
    officialUrl: 'https://1password.com',
    freeTierDetails: 'Paid',
    tags: ['password-managers']
  },
  {
    id: 'bitwarden',
    name: 'Bitwarden',
    description: 'Open-source password manager',
    category: 'Password Managers',
    layer: 'foundation',
    officialUrl: 'https://bitwarden.com',
    freeTierDetails: 'Free/OSS',
    tags: ['password-managers']
  },
  {
    id: 'dashlane',
    name: 'Dashlane',
    description: 'Password manager with VPN',
    category: 'Password Managers',
    layer: 'foundation',
    officialUrl: 'https://dashlane.com',
    freeTierDetails: 'Freemium',
    tags: ['password-managers']
  },
  {
    id: 'lastpass',
    name: 'LastPass',
    description: 'Popular password manager',
    category: 'Password Managers',
    layer: 'foundation',
    officialUrl: 'https://lastpass.com',
    freeTierDetails: 'Freemium',
    tags: ['password-managers']
  },
  {
    id: 'keeper',
    name: 'Keeper',
    description: 'Zero-knowledge password vault',
    category: 'Password Managers',
    layer: 'foundation',
    officialUrl: 'https://keepersecurity.com',
    freeTierDetails: 'Paid',
    tags: ['password-managers']
  },
  {
    id: 'nordpass',
    name: 'NordPass',
    description: 'Password manager by Nord',
    category: 'Password Managers',
    layer: 'foundation',
    officialUrl: 'https://nordpass.com',
    freeTierDetails: 'Freemium',
    tags: ['password-managers']
  },
  {
    id: 'roboform',
    name: 'RoboForm',
    description: 'Password manager and form filler',
    category: 'Password Managers',
    layer: 'foundation',
    officialUrl: 'https://roboform.com',
    freeTierDetails: 'Freemium',
    tags: ['password-managers']
  },
  {
    id: 'enpass',
    name: 'Enpass',
    description: 'Cross-platform password manager',
    category: 'Password Managers',
    layer: 'foundation',
    officialUrl: 'https://enpass.io',
    freeTierDetails: 'Freemium',
    tags: ['password-managers']
  },
  {
    id: 'keepass',
    name: 'KeePass',
    description: 'Open-source local password manager',
    category: 'Password Managers',
    layer: 'foundation',
    officialUrl: 'https://keepass.info',
    freeTierDetails: 'Free/OSS',
    tags: ['password-managers']
  },
  {
    id: 'keepassxc',
    name: 'KeePassXC',
    description: 'KeePass cross-platform fork',
    category: 'Password Managers',
    layer: 'foundation',
    officialUrl: 'https://keepassxc.org',
    freeTierDetails: 'Free/OSS',
    tags: ['password-managers']
  },
  {
    id: 'passbolt',
    name: 'Passbolt',
    description: 'Open-source team password manager',
    category: 'Password Managers',
    layer: 'foundation',
    officialUrl: 'https://passbolt.com',
    freeTierDetails: 'Free/OSS',
    tags: ['password-managers']
  },
  {
    id: 'vaultwarden',
    name: 'Vaultwarden',
    description: 'Self-hosted Bitwarden server',
    category: 'Password Managers',
    layer: 'foundation',
    officialUrl: 'https://github.com/dani-garcia/vaultwarden',
    freeTierDetails: 'Free/OSS',
    tags: ['password-managers']
  },
  {
    id: 'apple-passwords',
    name: 'Apple Passwords',
    description: 'Built-in password manager for Apple',
    category: 'Password Managers',
    layer: 'foundation',
    officialUrl: 'https://apple.com/ios',
    freeTierDetails: 'Free',
    tags: ['password-managers']
  },
  {
    id: 'google-password-manager',
    name: 'Google Password Manager',
    description: 'Built-in browser password manager',
    category: 'Password Managers',
    layer: 'foundation',
    officialUrl: 'https://passwords.google.com',
    freeTierDetails: 'Free',
    tags: ['password-managers']
  },
  {
    id: 'sticky-password',
    name: 'Sticky Password',
    description: 'Password manager with USB sync',
    category: 'Password Managers',
    layer: 'foundation',
    officialUrl: 'https://stickypassword.com',
    freeTierDetails: 'Freemium',
    tags: ['password-managers']
  },
  {
    id: 'google-drive',
    name: 'Google Drive',
    description: '15GB free cloud storage by Google',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://drive.google.com',
    freeTierDetails: 'Freemium',
    tags: ['file-management']
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    description: 'File sync and cloud storage',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://dropbox.com',
    freeTierDetails: 'Freemium',
    tags: ['file-management']
  },
  {
    id: 'onedrive',
    name: 'OneDrive',
    description: 'Microsoft cloud storage',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://onedrive.microsoft.com',
    freeTierDetails: 'Freemium',
    tags: ['file-management']
  },
  {
    id: 'icloud-drive',
    name: 'iCloud Drive',
    description: '5GB free storage by Apple',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://apple.com/icloud',
    freeTierDetails: 'Freemium',
    tags: ['file-management']
  },
  {
    id: 'box',
    name: 'Box',
    description: 'Enterprise cloud content management',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://box.com',
    freeTierDetails: 'Freemium',
    tags: ['file-management']
  },
  {
    id: 'pcloud',
    name: 'pCloud',
    description: 'Cloud storage with lifetime plans',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://pcloud.com',
    freeTierDetails: 'Freemium',
    tags: ['file-management']
  },
  {
    id: 'mega',
    name: 'MEGA',
    description: '20GB free encrypted cloud storage',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://mega.nz',
    freeTierDetails: 'Freemium',
    tags: ['file-management']
  },
  {
    id: 'sync-com',
    name: 'Sync.com',
    description: 'End-to-end encrypted file sync',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://sync.com',
    freeTierDetails: 'Freemium',
    tags: ['file-management']
  },
  {
    id: 'tresorit',
    name: 'Tresorit',
    description: 'Swiss-based encrypted cloud storage',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://tresorit.com',
    freeTierDetails: 'Paid',
    tags: ['file-management']
  },
  {
    id: 'nextcloud',
    name: 'Nextcloud',
    description: 'Self-hosted cloud platform',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://nextcloud.com',
    freeTierDetails: 'Free/OSS',
    tags: ['file-management']
  },
  {
    id: 'seafile',
    name: 'Seafile',
    description: 'Open-source file sync',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://seafile.com',
    freeTierDetails: 'Free/OSS',
    tags: ['file-management']
  },
  {
    id: 'syncthing',
    name: 'Syncthing',
    description: 'P2P file synchronization',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://syncthing.net',
    freeTierDetails: 'Free/OSS',
    tags: ['file-management']
  },
  {
    id: 'rsync',
    name: 'rsync',
    description: 'Efficient file transfer utility',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://rsync.samba.org',
    freeTierDetails: 'Free/OSS',
    tags: ['file-management']
  },
  {
    id: 'filezilla',
    name: 'FileZilla',
    description: 'FTP client and server',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://filezilla-project.org',
    freeTierDetails: 'Free/OSS',
    tags: ['file-management']
  },
  {
    id: 'winscp',
    name: 'WinSCP',
    description: 'Windows SFTP and FTP client',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://winscp.net',
    freeTierDetails: 'Free/OSS',
    tags: ['file-management']
  },
  {
    id: 'cyberduck',
    name: 'Cyberduck',
    description: 'Cross-platform FTP/cloud browser',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://cyberduck.io',
    freeTierDetails: 'Free/OSS',
    tags: ['file-management']
  },
  {
    id: 'mountain-duck',
    name: 'Mountain Duck',
    description: 'Mount cloud storage as disk',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://mountainduck.io',
    freeTierDetails: 'Paid',
    tags: ['file-management']
  },
  {
    id: 'expandrive',
    name: 'ExpanDrive',
    description: 'Cloud storage as network drive',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://expandrive.com',
    freeTierDetails: 'Paid',
    tags: ['file-management']
  },
  {
    id: 'arq-backup',
    name: 'Arq Backup',
    description: 'Local backup to cloud',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://arqbackup.com',
    freeTierDetails: 'Paid',
    tags: ['file-management']
  },
  {
    id: 'backblaze',
    name: 'Backblaze',
    description: 'Unlimited cloud backup',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://backblaze.com',
    freeTierDetails: 'Paid',
    tags: ['file-management']
  },
  {
    id: 'acronis-true-image',
    name: 'Acronis True Image',
    description: 'Backup and recovery solution',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://acronis.com',
    freeTierDetails: 'Paid',
    tags: ['file-management']
  },
  {
    id: 'carbon-copy-cloner',
    name: 'Carbon Copy Cloner',
    description: 'Mac backup and cloning',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://bombich.com',
    freeTierDetails: 'Paid',
    tags: ['file-management']
  },
  {
    id: 'time-machine',
    name: 'Time Machine',
    description: 'Built-in macOS backup',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://apple.com/timemachine',
    freeTierDetails: 'Free',
    tags: ['file-management']
  },
  {
    id: 'macrium-reflect',
    name: 'Macrium Reflect',
    description: 'Disk imaging and backup',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://macrium.com/reflect',
    freeTierDetails: 'Free/Paid',
    tags: ['file-management']
  },
  {
    id: 'veeam',
    name: 'Veeam',
    description: 'Enterprise backup and recovery',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://veeam.com',
    freeTierDetails: 'Free/Paid',
    tags: ['file-management']
  },
  {
    id: 'restic',
    name: 'Restic',
    description: 'Fast, encrypted backup program',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://restic.net',
    freeTierDetails: 'Free/OSS',
    tags: ['file-management']
  },
  {
    id: 'rclone',
    name: 'Rclone',
    description: 'Cloud storage command-line sync',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://rclone.org',
    freeTierDetails: 'Free/OSS',
    tags: ['file-management']
  },
  {
    id: 'duplicati',
    name: 'Duplicati',
    description: 'Free backup software with encryption',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://duplicati.com',
    freeTierDetails: 'Free/OSS',
    tags: ['file-management']
  },
  {
    id: 'borgbackup',
    name: 'BorgBackup',
    description: 'Deduplicating backup program',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://borgbackup.org',
    freeTierDetails: 'Free/OSS',
    tags: ['file-management']
  },
  {
    id: 'bacula',
    name: 'Bacula',
    description: 'Enterprise backup system',
    category: 'File Management',
    layer: 'foundation',
    officialUrl: 'https://bacula.org',
    freeTierDetails: 'Free/OSS',
    tags: ['file-management']
  },
  {
    id: 'nordvpn',
    name: 'NordVPN',
    description: 'Popular VPN with 5000+ servers',
    category: 'VPN Services',
    layer: 'foundation',
    officialUrl: 'https://nordvpn.com',
    freeTierDetails: 'Paid',
    tags: ['vpn-services']
  },
  {
    id: 'expressvpn',
    name: 'ExpressVPN',
    description: 'Fast premium VPN service',
    category: 'VPN Services',
    layer: 'foundation',
    officialUrl: 'https://expressvpn.com',
    freeTierDetails: 'Paid',
    tags: ['vpn-services']
  },
  {
    id: 'surfshark',
    name: 'Surfshark',
    description: 'Budget VPN with unlimited devices',
    category: 'VPN Services',
    layer: 'foundation',
    officialUrl: 'https://surfshark.com',
    freeTierDetails: 'Paid',
    tags: ['vpn-services']
  },
  {
    id: 'protonvpn',
    name: 'ProtonVPN',
    description: 'Privacy-first VPN by Proton',
    category: 'VPN Services',
    layer: 'foundation',
    officialUrl: 'https://protonvpn.com',
    freeTierDetails: 'Freemium',
    tags: ['vpn-services']
  },
  {
    id: 'mullvad',
    name: 'Mullvad',
    description: 'Anonymous VPN, accepts cash',
    category: 'VPN Services',
    layer: 'foundation',
    officialUrl: 'https://mullvad.net',
    freeTierDetails: 'Paid',
    tags: ['vpn-services']
  },
  {
    id: 'windscribe',
    name: 'Windscribe',
    description: '10GB/mo free VPN',
    category: 'VPN Services',
    layer: 'foundation',
    officialUrl: 'https://windscribe.com',
    freeTierDetails: 'Freemium',
    tags: ['vpn-services']
  },
  {
    id: 'tunnelbear',
    name: 'TunnelBear',
    description: 'User-friendly VPN',
    category: 'VPN Services',
    layer: 'foundation',
    officialUrl: 'https://tunnelbear.com',
    freeTierDetails: 'Freemium',
    tags: ['vpn-services']
  },
  {
    id: 'private-internet-access',
    name: 'Private Internet Access',
    description: 'Open-source VPN',
    category: 'VPN Services',
    layer: 'foundation',
    officialUrl: 'https://privateinternetaccess.com',
    freeTierDetails: 'Paid',
    tags: ['vpn-services']
  },
  {
    id: 'cyberghost',
    name: 'CyberGhost',
    description: 'Romania-based VPN with streaming',
    category: 'VPN Services',
    layer: 'foundation',
    officialUrl: 'https://cyberghost.com',
    freeTierDetails: 'Paid',
    tags: ['vpn-services']
  },
  {
    id: 'ipvanish',
    name: 'IPVanish',
    description: 'US-based VPN with SOCKS5 proxy',
    category: 'VPN Services',
    layer: 'foundation',
    officialUrl: 'https://ipvanish.com',
    freeTierDetails: 'Paid',
    tags: ['vpn-services']
  },
  {
    id: 'hide-me',
    name: 'Hide.me',
    description: 'No-log VPN service',
    category: 'VPN Services',
    layer: 'foundation',
    officialUrl: 'https://hide.me',
    freeTierDetails: 'Freemium',
    tags: ['vpn-services']
  },
  {
    id: 'hotspot-shield',
    name: 'Hotspot Shield',
    description: 'Fast VPN with Catapult Hydra',
    category: 'VPN Services',
    layer: 'foundation',
    officialUrl: 'https://hotspotshield.com',
    freeTierDetails: 'Freemium',
    tags: ['vpn-services']
  },
  {
    id: 'openvpn',
    name: 'OpenVPN',
    description: 'Open-source VPN protocol and software',
    category: 'VPN Services',
    layer: 'foundation',
    officialUrl: 'https://openvpn.net',
    freeTierDetails: 'Free/OSS',
    tags: ['vpn-services']
  },
  {
    id: 'wireguard',
    name: 'WireGuard',
    description: 'Modern, fast VPN protocol',
    category: 'VPN Services',
    layer: 'foundation',
    officialUrl: 'https://wireguard.com',
    freeTierDetails: 'Free/OSS',
    tags: ['vpn-services']
  },
  {
    id: 'tailscale',
    name: 'Tailscale',
    description: 'Zero-config WireGuard mesh VPN',
    category: 'VPN Services',
    layer: 'foundation',
    officialUrl: 'https://tailscale.com',
    freeTierDetails: 'Freemium',
    tags: ['vpn-services']
  },
  {
    id: 'zerotier',
    name: 'ZeroTier',
    description: 'Virtual Ethernet networking',
    category: 'VPN Services',
    layer: 'foundation',
    officialUrl: 'https://zerotier.com',
    freeTierDetails: 'Freemium',
    tags: ['vpn-services']
  },
  {
    id: 'nebula-slack',
    name: 'Nebula (Slack)',
    description: 'Open-source overlay network',
    category: 'VPN Services',
    layer: 'foundation',
    officialUrl: 'https://github.com/slackhq/nebula',
    freeTierDetails: 'Free/OSS',
    tags: ['vpn-services']
  },
  {
    id: 'algo-vpn',
    name: 'Algo VPN',
    description: 'Self-hosted WireGuard/IKEv2 VPN',
    category: 'VPN Services',
    layer: 'foundation',
    officialUrl: 'https://github.com/trailofbits/algo',
    freeTierDetails: 'Free/OSS',
    tags: ['vpn-services']
  },
  {
    id: 'outline-vpn',
    name: 'Outline VPN',
    description: 'Shadowsocks-based VPN by Jigsaw',
    category: 'VPN Services',
    layer: 'foundation',
    officialUrl: 'https://getoutline.org',
    freeTierDetails: 'Free/OSS',
    tags: ['vpn-services']
  },
  {
    id: 'psiphon',
    name: 'Psiphon',
    description: 'Censorship circumvention VPN',
    category: 'VPN Services',
    layer: 'foundation',
    officialUrl: 'https://psiphon.ca',
    freeTierDetails: 'Free',
    tags: ['vpn-services']
  },
  {
    id: 'windows-defender',
    name: 'Windows Defender',
    description: 'Built-in Windows antivirus',
    category: 'Antivirus',
    layer: 'foundation',
    officialUrl: 'https://microsoft.com/windows-defender',
    freeTierDetails: 'Free',
    tags: ['antivirus']
  },
  {
    id: 'malwarebytes',
    name: 'Malwarebytes',
    description: 'Anti-malware for consumers',
    category: 'Antivirus',
    layer: 'foundation',
    officialUrl: 'https://malwarebytes.com',
    freeTierDetails: 'Freemium',
    tags: ['antivirus']
  },
  {
    id: 'norton-360',
    name: 'Norton 360',
    description: 'Comprehensive security suite',
    category: 'Antivirus',
    layer: 'foundation',
    officialUrl: 'https://norton.com',
    freeTierDetails: 'Paid',
    tags: ['antivirus']
  },
  {
    id: 'mcafee-total-protection',
    name: 'McAfee Total Protection',
    description: 'Antivirus by McAfee',
    category: 'Antivirus',
    layer: 'foundation',
    officialUrl: 'https://mcafee.com',
    freeTierDetails: 'Paid',
    tags: ['antivirus']
  },
  {
    id: 'bitdefender',
    name: 'Bitdefender',
    description: 'Award-winning antivirus',
    category: 'Antivirus',
    layer: 'foundation',
    officialUrl: 'https://bitdefender.com',
    freeTierDetails: 'Freemium',
    tags: ['antivirus']
  },
  {
    id: 'kaspersky',
    name: 'Kaspersky',
    description: 'Russian antivirus software',
    category: 'Antivirus',
    layer: 'foundation',
    officialUrl: 'https://kaspersky.com',
    freeTierDetails: 'Freemium',
    tags: ['antivirus']
  },
  {
    id: 'eset',
    name: 'ESET',
    description: 'Slovak antivirus and security',
    category: 'Antivirus',
    layer: 'foundation',
    officialUrl: 'https://eset.com',
    freeTierDetails: 'Paid',
    tags: ['antivirus']
  },
  {
    id: 'avast',
    name: 'Avast',
    description: 'Popular antivirus suite',
    category: 'Antivirus',
    layer: 'foundation',
    officialUrl: 'https://avast.com',
    freeTierDetails: 'Freemium',
    tags: ['antivirus']
  },
  {
    id: 'avg-antivirus',
    name: 'AVG Antivirus',
    description: 'Antivirus owned by Avast',
    category: 'Antivirus',
    layer: 'foundation',
    officialUrl: 'https://avg.com',
    freeTierDetails: 'Free/Paid',
    tags: ['antivirus']
  },
  {
    id: 'avira',
    name: 'Avira',
    description: 'German antivirus software',
    category: 'Antivirus',
    layer: 'foundation',
    officialUrl: 'https://avira.com',
    freeTierDetails: 'Freemium',
    tags: ['antivirus']
  },
  {
    id: 'sophos',
    name: 'Sophos',
    description: 'Enterprise endpoint security',
    category: 'Antivirus',
    layer: 'foundation',
    officialUrl: 'https://sophos.com',
    freeTierDetails: 'Freemium',
    tags: ['antivirus']
  },
  {
    id: 'crowdstrike-falcon',
    name: 'CrowdStrike Falcon',
    description: 'Cloud-native endpoint security',
    category: 'Antivirus',
    layer: 'foundation',
    officialUrl: 'https://crowdstrike.com',
    freeTierDetails: 'Paid',
    tags: ['antivirus']
  },
  {
    id: 'sentinelone',
    name: 'SentinelOne',
    description: 'AI-powered endpoint protection',
    category: 'Antivirus',
    layer: 'foundation',
    officialUrl: 'https://sentinelone.com',
    freeTierDetails: 'Paid',
    tags: ['antivirus']
  },
  {
    id: 'carbon-black',
    name: 'Carbon Black',
    description: 'VMware endpoint security',
    category: 'Antivirus',
    layer: 'foundation',
    officialUrl: 'https://carbonblack.com',
    freeTierDetails: 'Paid',
    tags: ['antivirus']
  },
  {
    id: 'trend-micro',
    name: 'Trend Micro',
    description: 'Enterprise security solutions',
    category: 'Antivirus',
    layer: 'foundation',
    officialUrl: 'https://trendmicro.com',
    freeTierDetails: 'Paid',
    tags: ['antivirus']
  },
  {
    id: 'f-secure',
    name: 'F-Secure',
    description: 'Finnish cybersecurity company',
    category: 'Antivirus',
    layer: 'foundation',
    officialUrl: 'https://f-secure.com',
    freeTierDetails: 'Paid',
    tags: ['antivirus']
  },
  {
    id: 'cylance-blackberry',
    name: 'Cylance (BlackBerry)',
    description: 'AI-based endpoint security',
    category: 'Antivirus',
    layer: 'foundation',
    officialUrl: 'https://blackberry.com/cylance',
    freeTierDetails: 'Paid',
    tags: ['antivirus']
  },
  {
    id: 'cortex-xdr',
    name: 'Cortex XDR',
    description: 'Palo Alto extended detection',
    category: 'Antivirus',
    layer: 'foundation',
    officialUrl: 'https://paloaltonetworks.com/cortex/cortex-xdr',
    freeTierDetails: 'Paid',
    tags: ['antivirus']
  },
  {
    id: 'huntress',
    name: 'Huntress',
    description: 'MDR for SMBs',
    category: 'Antivirus',
    layer: 'foundation',
    officialUrl: 'https://huntress.com',
    freeTierDetails: 'Paid',
    tags: ['antivirus']
  },
  {
    id: 'webroot',
    name: 'Webroot',
    description: 'Cloud-based antivirus',
    category: 'Antivirus',
    layer: 'foundation',
    officialUrl: 'https://webroot.com',
    freeTierDetails: 'Paid',
    tags: ['antivirus']
  },
  {
    id: 'kali-linux',
    name: 'Kali Linux',
    description: 'Penetration testing Linux distro',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://kali.org',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'parrot-os',
    name: 'Parrot OS',
    description: 'Security-focused Linux distro',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://parrotsec.org',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'metasploit',
    name: 'Metasploit',
    description: 'Penetration testing framework',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://metasploit.com',
    freeTierDetails: 'Free/Paid',
    tags: ['penetration-testing']
  },
  {
    id: 'burp-suite',
    name: 'Burp Suite',
    description: 'Web security testing platform',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://portswigger.net/burp',
    freeTierDetails: 'Freemium',
    tags: ['penetration-testing']
  },
  {
    id: 'nmap',
    name: 'Nmap',
    description: 'Network discovery and security auditing',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://nmap.org',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'wireshark',
    name: 'Wireshark',
    description: 'Network protocol analyzer',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://wireshark.org',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'john-the-ripper',
    name: 'John the Ripper',
    description: 'Password cracking tool',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://openwall.com/john',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'hashcat',
    name: 'Hashcat',
    description: 'Advanced password recovery',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://hashcat.net',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'aircrack-ng',
    name: 'Aircrack-ng',
    description: 'Wi-Fi security auditing',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://aircrack-ng.org',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'hydra',
    name: 'Hydra',
    description: 'Network login cracker',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://github.com/vanhauser-thc/thc-hydra',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'sqlmap',
    name: 'sqlmap',
    description: 'Automatic SQL injection tool',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://sqlmap.org',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'owasp-zap',
    name: 'OWASP ZAP',
    description: 'Web application security scanner',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://zaproxy.org',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'nikto',
    name: 'Nikto',
    description: 'Web server scanner',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://cirt.net/nikto2',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'shodan',
    name: 'Shodan',
    description: 'Internet device search engine',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://shodan.io',
    freeTierDetails: 'Freemium',
    tags: ['penetration-testing']
  },
  {
    id: 'censys',
    name: 'Censys',
    description: 'Internet asset discovery',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://censys.io',
    freeTierDetails: 'Freemium',
    tags: ['penetration-testing']
  },
  {
    id: 'theharvester',
    name: 'theHarvester',
    description: 'OSINT gathering tool',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://github.com/laramies/theHarvester',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'maltego',
    name: 'Maltego',
    description: 'OSINT and link analysis',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://maltego.com',
    freeTierDetails: 'Freemium',
    tags: ['penetration-testing']
  },
  {
    id: 'spiderfoot',
    name: 'SpiderFoot',
    description: 'Automated OSINT tool',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://spiderfoot.net',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'recon-ng',
    name: 'Recon-ng',
    description: 'Web reconnaissance framework',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://github.com/lanmaster53/recon-ng',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'social-engineer-toolkit',
    name: 'Social-Engineer Toolkit',
    description: 'Social engineering framework',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://github.com/trustedsec/social-engineer-toolkit',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'gobuster',
    name: 'Gobuster',
    description: 'Directory and DNS brute-forcer',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://github.com/OJ/gobuster',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'ffuf',
    name: 'ffuf',
    description: 'Fast web fuzzer',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://github.com/ffuf/ffuf',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'nuclei',
    name: 'Nuclei',
    description: 'Vulnerability scanner',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://projectdiscovery.io/nuclei',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'amass',
    name: 'Amass',
    description: 'Attack surface mapping',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://github.com/owasp-amass/amass',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'subfinder',
    name: 'Subfinder',
    description: 'Subdomain discovery tool',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://projectdiscovery.io/subfinder',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'httpx',
    name: 'httpx',
    description: 'HTTP toolkit for probing',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://projectdiscovery.io/httpx',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'ghauri',
    name: 'ghauri',
    description: 'Advanced SQL injection tool',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://github.com/r0oth3x49/ghauri',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'nessus',
    name: 'Nessus',
    description: 'Vulnerability scanner by Tenable',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://tenable.com/products/nessus',
    freeTierDetails: 'Free/Paid',
    tags: ['penetration-testing']
  },
  {
    id: 'openvas',
    name: 'OpenVAS',
    description: 'Open vulnerability assessment system',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://openvas.org',
    freeTierDetails: 'Free/OSS',
    tags: ['penetration-testing']
  },
  {
    id: 'qualys',
    name: 'Qualys',
    description: 'Cloud-based vulnerability management',
    category: 'Penetration Testing',
    layer: 'foundation',
    officialUrl: 'https://qualys.com',
    freeTierDetails: 'Paid',
    tags: ['penetration-testing']
  },
  {
    id: 'pfsense',
    name: 'pfSense',
    description: 'Open-source firewall/router',
    category: 'Firewall',
    layer: 'foundation',
    officialUrl: 'https://pfsense.org',
    freeTierDetails: 'Free/OSS',
    tags: ['firewall']
  },
  {
    id: 'opnsense',
    name: 'OPNsense',
    description: 'Open-source firewall platform',
    category: 'Firewall',
    layer: 'foundation',
    officialUrl: 'https://opnsense.org',
    freeTierDetails: 'Free/OSS',
    tags: ['firewall']
  },
  {
    id: 'sophos-xg-firewall',
    name: 'Sophos XG Firewall',
    description: 'Next-gen firewall',
    category: 'Firewall',
    layer: 'foundation',
    officialUrl: 'https://sophos.com/xg-firewall',
    freeTierDetails: 'Freemium',
    tags: ['firewall']
  },
  {
    id: 'cisco-asa',
    name: 'Cisco ASA',
    description: 'Adaptive security appliance',
    category: 'Firewall',
    layer: 'foundation',
    officialUrl: 'https://cisco.com/asa',
    freeTierDetails: 'Paid',
    tags: ['firewall']
  },
  {
    id: 'palo-alto-networks-ngfw',
    name: 'Palo Alto Networks NGFW',
    description: 'Next-gen firewall by Palo Alto',
    category: 'Firewall',
    layer: 'foundation',
    officialUrl: 'https://paloaltonetworks.com',
    freeTierDetails: 'Paid',
    tags: ['firewall']
  },
  {
    id: 'fortinet-fortigate',
    name: 'Fortinet FortiGate',
    description: 'Enterprise firewall appliance',
    category: 'Firewall',
    layer: 'foundation',
    officialUrl: 'https://fortinet.com/fortigate',
    freeTierDetails: 'Paid',
    tags: ['firewall']
  },
  {
    id: 'snort',
    name: 'Snort',
    description: 'Open-source intrusion detection',
    category: 'Firewall',
    layer: 'foundation',
    officialUrl: 'https://snort.org',
    freeTierDetails: 'Free/OSS',
    tags: ['firewall']
  },
  {
    id: 'suricata',
    name: 'Suricata',
    description: 'High-performance IDS/IPS',
    category: 'Firewall',
    layer: 'foundation',
    officialUrl: 'https://suricata.io',
    freeTierDetails: 'Free/OSS',
    tags: ['firewall']
  },
  {
    id: 'zeek-bro',
    name: 'Zeek (Bro)',
    description: 'Network analysis framework',
    category: 'Firewall',
    layer: 'foundation',
    officialUrl: 'https://zeek.org',
    freeTierDetails: 'Free/OSS',
    tags: ['firewall']
  },
  {
    id: 'fail2ban',
    name: 'Fail2ban',
    description: 'Intrusion prevention system',
    category: 'Firewall',
    layer: 'foundation',
    officialUrl: 'https://fail2ban.org',
    freeTierDetails: 'Free/OSS',
    tags: ['firewall']
  },
  {
    id: 'pi-hole',
    name: 'Pi-hole',
    description: 'Network-wide ad blocking DNS',
    category: 'Firewall',
    layer: 'foundation',
    officialUrl: 'https://pi-hole.net',
    freeTierDetails: 'Free/OSS',
    tags: ['firewall']
  },
  {
    id: 'adguard-home',
    name: 'AdGuard Home',
    description: 'DNS ad blocker',
    category: 'Firewall',
    layer: 'foundation',
    officialUrl: 'https://adguard.com/adguard-home.html',
    freeTierDetails: 'Free/OSS',
    tags: ['firewall']
  },
  {
    id: 'cloudflare-gateway',
    name: 'Cloudflare Gateway',
    description: 'DNS filtering service',
    category: 'Firewall',
    layer: 'foundation',
    officialUrl: 'https://cloudflare.com/zero-trust/gateway',
    freeTierDetails: 'Freemium',
    tags: ['firewall']
  },
  {
    id: 'nextdns',
    name: 'NextDNS',
    description: 'Privacy DNS with filtering',
    category: 'Firewall',
    layer: 'foundation',
    officialUrl: 'https://nextdns.io',
    freeTierDetails: 'Freemium',
    tags: ['firewall']
  },
  {
    id: 'little-snitch',
    name: 'Little Snitch',
    description: 'macOS outbound firewall',
    category: 'Firewall',
    layer: 'foundation',
    officialUrl: 'https://obdev.at/little-snitch',
    freeTierDetails: 'Paid',
    tags: ['firewall']
  },
  {
    id: 'lulu',
    name: 'Lulu',
    description: 'Free macOS firewall',
    category: 'Firewall',
    layer: 'foundation',
    officialUrl: 'https://objective-see.org/products/lulu.html',
    freeTierDetails: 'Free/OSS',
    tags: ['firewall']
  },
  {
    id: 'glasswire',
    name: 'GlassWire',
    description: 'Network monitor and firewall',
    category: 'Firewall',
    layer: 'foundation',
    officialUrl: 'https://glasswire.com',
    freeTierDetails: 'Freemium',
    tags: ['firewall']
  },
  {
    id: 'portmaster',
    name: 'Portmaster',
    description: 'Application firewall for Windows',
    category: 'Firewall',
    layer: 'foundation',
    officialUrl: 'https://safing.io',
    freeTierDetails: 'Free/OSS',
    tags: ['firewall']
  },
  {
    id: 'veracrypt',
    name: 'VeraCrypt',
    description: 'Disk encryption software',
    category: 'Encryption',
    layer: 'foundation',
    officialUrl: 'https://veracrypt.fr',
    freeTierDetails: 'Free/OSS',
    tags: ['encryption']
  },
  {
    id: 'bitlocker',
    name: 'BitLocker',
    description: 'Windows built-in disk encryption',
    category: 'Encryption',
    layer: 'foundation',
    officialUrl: 'https://microsoft.com/bitlocker',
    freeTierDetails: 'Free (Win)',
    tags: ['encryption']
  },
  {
    id: 'filevault',
    name: 'FileVault',
    description: 'macOS disk encryption',
    category: 'Encryption',
    layer: 'foundation',
    officialUrl: 'https://apple.com/filevault',
    freeTierDetails: 'Free',
    tags: ['encryption']
  },
  {
    id: 'gpg-gnupg',
    name: 'GPG (GnuPG)',
    description: 'OpenPGP encryption standard',
    category: 'Encryption',
    layer: 'foundation',
    officialUrl: 'https://gnupg.org',
    freeTierDetails: 'Free/OSS',
    tags: ['encryption']
  },
  {
    id: 'age',
    name: 'age',
    description: 'Simple modern file encryption',
    category: 'Encryption',
    layer: 'foundation',
    officialUrl: 'https://age-encryption.org',
    freeTierDetails: 'Free/OSS',
    tags: ['encryption']
  },
  {
    id: 'signal',
    name: 'Signal',
    description: 'Encrypted messaging and calls',
    category: 'Encryption',
    layer: 'foundation',
    officialUrl: 'https://signal.org',
    freeTierDetails: 'Free/OSS',
    tags: ['encryption']
  },
  {
    id: 'wickr',
    name: 'Wickr',
    description: 'Secure enterprise messaging',
    category: 'Encryption',
    layer: 'foundation',
    officialUrl: 'https://wickr.com',
    freeTierDetails: 'Freemium',
    tags: ['encryption']
  },
  {
    id: 'threema',
    name: 'Threema',
    description: 'Privacy-first messaging app',
    category: 'Encryption',
    layer: 'foundation',
    officialUrl: 'https://threema.ch',
    freeTierDetails: 'Paid',
    tags: ['encryption']
  },
  {
    id: 'session',
    name: 'Session',
    description: 'Decentralized encrypted messenger',
    category: 'Encryption',
    layer: 'foundation',
    officialUrl: 'https://getsession.org',
    freeTierDetails: 'Free/OSS',
    tags: ['encryption']
  },
  {
    id: 'briar',
    name: 'Briar',
    description: 'P2P encrypted messenger',
    category: 'Encryption',
    layer: 'foundation',
    officialUrl: 'https://briarproject.org',
    freeTierDetails: 'Free/OSS',
    tags: ['encryption']
  },
  {
    id: 'simplex-chat',
    name: 'SimpleX Chat',
    description: 'No user IDs encrypted chat',
    category: 'Encryption',
    layer: 'foundation',
    officialUrl: 'https://simplex.chat',
    freeTierDetails: 'Free/OSS',
    tags: ['encryption']
  },
  {
    id: 'cryptomator',
    name: 'Cryptomator',
    description: 'Encrypts files in cloud storage',
    category: 'Encryption',
    layer: 'foundation',
    officialUrl: 'https://cryptomator.org',
    freeTierDetails: 'Free/OSS',
    tags: ['encryption']
  },
  {
    id: 'boxcryptor',
    name: 'BoxCryptor',
    description: 'End-to-end cloud file encryption',
    category: 'Encryption',
    layer: 'foundation',
    officialUrl: 'https://boxcryptor.com',
    freeTierDetails: 'Freemium',
    tags: ['encryption']
  },
  {
    id: 'kleopatra',
    name: 'Kleopatra',
    description: 'Certificate manager for GPG',
    category: 'Encryption',
    layer: 'foundation',
    officialUrl: 'https://kde.org/applications/utilities/org.kde.kleopatra',
    freeTierDetails: 'Free/OSS',
    tags: ['encryption']
  },
  {
    id: 'openssl',
    name: 'OpenSSL',
    description: 'TLS/SSL toolkit',
    category: 'Encryption',
    layer: 'foundation',
    officialUrl: 'https://openssl.org',
    freeTierDetails: 'Free/OSS',
    tags: ['encryption']
  },
  {
    id: 'tor-browser',
    name: 'Tor Browser',
    description: 'Anonymity browser',
    category: 'Encryption',
    layer: 'foundation',
    officialUrl: 'https://torproject.org',
    freeTierDetails: 'Free/OSS',
    tags: ['encryption']
  },
  {
    id: 'i2p',
    name: 'I2P',
    description: 'Anonymous peer-to-peer network',
    category: 'Encryption',
    layer: 'foundation',
    officialUrl: 'https://geti2p.net',
    freeTierDetails: 'Free/OSS',
    tags: ['encryption']
  },
  {
    id: 'tails-os',
    name: 'Tails OS',
    description: 'Live OS leaving no trace',
    category: 'Encryption',
    layer: 'foundation',
    officialUrl: 'https://tails.boum.org',
    freeTierDetails: 'Free/OSS',
    tags: ['encryption']
  },
  {
    id: 'whonix',
    name: 'Whonix',
    description: 'Desktop OS designed for Tor',
    category: 'Encryption',
    layer: 'foundation',
    officialUrl: 'https://whonix.org',
    freeTierDetails: 'Free/OSS',
    tags: ['encryption']
  },
  {
    id: 'qubes-os',
    name: 'Qubes OS',
    description: 'Compartmentalization-based security OS',
    category: 'Encryption',
    layer: 'foundation',
    officialUrl: 'https://qubes-os.org',
    freeTierDetails: 'Free/OSS',
    tags: ['encryption']
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer by GitHub/OpenAI',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://github.com/copilot',
    freeTierDetails: 'Paid',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI-first code editor',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://cursor.sh',
    freeTierDetails: 'Freemium',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    description: 'AI code completion',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://tabnine.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'codeium',
    name: 'Codeium',
    description: 'Free AI coding assistant',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://codeium.com',
    freeTierDetails: 'Free',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'amazon-codewhisperer',
    name: 'Amazon CodeWhisperer',
    description: 'AI coding by AWS',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://aws.amazon.com/codewhisperer',
    freeTierDetails: 'Free/Paid',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'google-gemini-code-assist',
    name: 'Google Gemini Code Assist',
    description: 'AI code help by Google',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://cloud.google.com/products/gemini/code-assist',
    freeTierDetails: 'Freemium',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'replit-ai-ghostwriter',
    name: 'Replit AI (Ghostwriter)',
    description: 'AI coding in Replit IDE',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://replit.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'sourcegraph-cody',
    name: 'Sourcegraph Cody',
    description: 'AI code assistant with codebase context',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://sourcegraph.com/cody',
    freeTierDetails: 'Freemium',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'continue',
    name: 'Continue',
    description: 'Open-source AI coding assistant extension',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://continue.dev',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'claude-anthropic',
    name: 'Claude (Anthropic)',
    description: 'Anthropic\'s AI for coding',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://claude.ai',
    freeTierDetails: 'Freemium',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'chatgpt-coding',
    name: 'ChatGPT (coding)',
    description: 'OpenAI ChatGPT for code',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://chatgpt.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'phind',
    name: 'Phind',
    description: 'AI search for developers',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://phind.com',
    freeTierDetails: 'Free',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'perplexity-for-devs',
    name: 'Perplexity for Devs',
    description: 'AI search and coding help',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://perplexity.ai',
    freeTierDetails: 'Freemium',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'pieces-for-developers',
    name: 'Pieces for Developers',
    description: 'AI snippet manager for devs',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://pieces.app',
    freeTierDetails: 'Freemium',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'mintlify-writer',
    name: 'Mintlify Writer',
    description: 'AI documentation writer',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://mintlify.com/writer',
    freeTierDetails: 'Freemium',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'swimm',
    name: 'Swimm',
    description: 'AI-powered code documentation',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://swimm.io',
    freeTierDetails: 'Freemium',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'bito-ai',
    name: 'Bito AI',
    description: 'AI code review and generation',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://bito.ai',
    freeTierDetails: 'Freemium',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'codegpt',
    name: 'CodeGPT',
    description: 'GPT-powered coding extension',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://codegpt.co',
    freeTierDetails: 'Freemium',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'blackbox-ai',
    name: 'Blackbox AI',
    description: 'AI coding assistant',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://blackbox.ai',
    freeTierDetails: 'Free',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'askcodi',
    name: 'AskCodi',
    description: 'AI coding assistant',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://askcodi.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'mutable-ai',
    name: 'Mutable AI',
    description: 'AI-accelerated software development',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://mutable.ai',
    freeTierDetails: 'Freemium',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'aider',
    name: 'Aider',
    description: 'AI pair programming in terminal',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://aider.chat',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    description: 'Anthropic\'s agentic coding CLI',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://claude.ai/code',
    freeTierDetails: 'Paid',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'devin',
    name: 'Devin',
    description: 'Fully autonomous AI software engineer',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://cognition.ai',
    freeTierDetails: 'Paid',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'bolt-new',
    name: 'Bolt.new',
    description: 'AI full-stack web dev in browser',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://bolt.new',
    freeTierDetails: 'Freemium',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'v0-by-vercel',
    name: 'v0 by Vercel',
    description: 'AI UI generation by Vercel',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://v0.dev',
    freeTierDetails: 'Freemium',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'lovable',
    name: 'Lovable',
    description: 'AI full-stack app builder',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://lovable.dev',
    freeTierDetails: 'Freemium',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'replit-agent',
    name: 'Replit Agent',
    description: 'AI agent that builds apps',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://replit.com/agent',
    freeTierDetails: 'Freemium',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'windsurf-codeium',
    name: 'Windsurf (Codeium)',
    description: 'AI-first code editor',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://codeium.com/windsurf',
    freeTierDetails: 'Freemium',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'zed',
    name: 'Zed',
    description: 'High-performance multiplayer editor with AI',
    category: 'AI Coding Assistants',
    layer: 'foundation',
    officialUrl: 'https://zed.dev',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-coding-assistants']
  },
  {
    id: 'jetbrains-intellij-idea',
    name: 'JetBrains IntelliJ IDEA',
    description: 'Java/Kotlin IDE',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://jetbrains.com/idea',
    freeTierDetails: 'Freemium',
    tags: ['ides-editors']
  },
  {
    id: 'jetbrains-pycharm',
    name: 'JetBrains PyCharm',
    description: 'Python IDE',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://jetbrains.com/pycharm',
    freeTierDetails: 'Freemium',
    tags: ['ides-editors']
  },
  {
    id: 'jetbrains-webstorm',
    name: 'JetBrains WebStorm',
    description: 'JavaScript IDE',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://jetbrains.com/webstorm',
    freeTierDetails: 'Paid',
    tags: ['ides-editors']
  },
  {
    id: 'jetbrains-goland',
    name: 'JetBrains GoLand',
    description: 'Go IDE',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://jetbrains.com/goland',
    freeTierDetails: 'Paid',
    tags: ['ides-editors']
  },
  {
    id: 'jetbrains-rider',
    name: 'JetBrains Rider',
    description: '.NET IDE',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://jetbrains.com/rider',
    freeTierDetails: 'Paid',
    tags: ['ides-editors']
  },
  {
    id: 'jetbrains-clion',
    name: 'JetBrains CLion',
    description: 'C/C++ IDE',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://jetbrains.com/clion',
    freeTierDetails: 'Paid',
    tags: ['ides-editors']
  },
  {
    id: 'jetbrains-datagrip',
    name: 'JetBrains DataGrip',
    description: 'Database IDE',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://jetbrains.com/datagrip',
    freeTierDetails: 'Paid',
    tags: ['ides-editors']
  },
  {
    id: 'jetbrains-rubymine',
    name: 'JetBrains RubyMine',
    description: 'Ruby and Rails IDE',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://jetbrains.com/rubymine',
    freeTierDetails: 'Paid',
    tags: ['ides-editors']
  },
  {
    id: 'eclipse-ide',
    name: 'Eclipse IDE',
    description: 'Open-source Java IDE',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://eclipse.org',
    freeTierDetails: 'Free/OSS',
    tags: ['ides-editors']
  },
  {
    id: 'netbeans',
    name: 'NetBeans',
    description: 'Apache NetBeans IDE',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://netbeans.apache.org',
    freeTierDetails: 'Free/OSS',
    tags: ['ides-editors']
  },
  {
    id: 'android-studio',
    name: 'Android Studio',
    description: 'Official Android IDE by Google',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://developer.android.com/studio',
    freeTierDetails: 'Free',
    tags: ['ides-editors']
  },
  {
    id: 'xcode',
    name: 'Xcode',
    description: 'Apple\'s iOS/macOS IDE',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://developer.apple.com/xcode',
    freeTierDetails: 'Free',
    tags: ['ides-editors']
  },
  {
    id: 'visual-studio',
    name: 'Visual Studio',
    description: 'Full-featured IDE by Microsoft',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://visualstudio.microsoft.com',
    freeTierDetails: 'Freemium',
    tags: ['ides-editors']
  },
  {
    id: 'codeblocks',
    name: 'CodeBlocks',
    description: 'C/C++ IDE',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://codeblocks.org',
    freeTierDetails: 'Free/OSS',
    tags: ['ides-editors']
  },
  {
    id: 'dev-c',
    name: 'Dev-C++',
    description: 'Lightweight C/C++ IDE',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://sourceforge.net/projects/orwelldevcpp',
    freeTierDetails: 'Free/OSS',
    tags: ['ides-editors']
  },
  {
    id: 'geany',
    name: 'Geany',
    description: 'Lightweight IDE',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://geany.org',
    freeTierDetails: 'Free/OSS',
    tags: ['ides-editors']
  },
  {
    id: 'kate',
    name: 'Kate',
    description: 'KDE advanced text editor',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://kate-editor.org',
    freeTierDetails: 'Free/OSS',
    tags: ['ides-editors']
  },
  {
    id: 'emacs',
    name: 'Emacs',
    description: 'Extensible self-documenting editor',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://gnu.org/software/emacs',
    freeTierDetails: 'Free/OSS',
    tags: ['ides-editors']
  },
  {
    id: 'helix',
    name: 'Helix',
    description: 'Post-modern text editor',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://helix-editor.com',
    freeTierDetails: 'Free/OSS',
    tags: ['ides-editors']
  },
  {
    id: 'lapce',
    name: 'Lapce',
    description: 'Lightning-fast code editor in Rust',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://lapce.dev',
    freeTierDetails: 'Free/OSS',
    tags: ['ides-editors']
  },
  {
    id: 'nova-panic',
    name: 'Nova (Panic)',
    description: 'Native macOS code editor',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://nova.app',
    freeTierDetails: 'Paid',
    tags: ['ides-editors']
  },
  {
    id: 'bbedit',
    name: 'BBEdit',
    description: 'Professional text editor for Mac',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://barebones.com/bbedit',
    freeTierDetails: 'Paid',
    tags: ['ides-editors']
  },
  {
    id: 'textmate',
    name: 'TextMate',
    description: 'macOS text editor',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://macromates.com',
    freeTierDetails: 'Free/OSS',
    tags: ['ides-editors']
  },
  {
    id: 'komodo-ide',
    name: 'Komodo IDE',
    description: 'Dynamic language IDE',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://komodoide.com',
    freeTierDetails: 'Paid',
    tags: ['ides-editors']
  },
  {
    id: 'cloud9-aws',
    name: 'Cloud9 (AWS)',
    description: 'Cloud IDE by AWS',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://aws.amazon.com/cloud9',
    freeTierDetails: 'Paid',
    tags: ['ides-editors']
  },
  {
    id: 'gitpod',
    name: 'Gitpod',
    description: 'Cloud development environments',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://gitpod.io',
    freeTierDetails: 'Freemium',
    tags: ['ides-editors']
  },
  {
    id: 'github-codespaces',
    name: 'GitHub Codespaces',
    description: 'Cloud dev environments',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://github.com/codespaces',
    freeTierDetails: 'Freemium',
    tags: ['ides-editors']
  },
  {
    id: 'replit',
    name: 'Replit',
    description: 'Browser-based collaborative IDE',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://replit.com',
    freeTierDetails: 'Freemium',
    tags: ['ides-editors']
  },
  {
    id: 'stackblitz',
    name: 'StackBlitz',
    description: 'Online IDE for web projects',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://stackblitz.com',
    freeTierDetails: 'Freemium',
    tags: ['ides-editors']
  },
  {
    id: 'codesandbox',
    name: 'CodeSandbox',
    description: 'Online code editor for web',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://codesandbox.io',
    freeTierDetails: 'Freemium',
    tags: ['ides-editors']
  },
  {
    id: 'glitch',
    name: 'Glitch',
    description: 'Collaborative coding platform',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://glitch.com',
    freeTierDetails: 'Free',
    tags: ['ides-editors']
  },
  {
    id: 'jsfiddle',
    name: 'JSFiddle',
    description: 'Online JS/HTML/CSS playground',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://jsfiddle.net',
    freeTierDetails: 'Free',
    tags: ['ides-editors']
  },
  {
    id: 'codepen',
    name: 'CodePen',
    description: 'Front-end code playground',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://codepen.io',
    freeTierDetails: 'Freemium',
    tags: ['ides-editors']
  },
  {
    id: 'playcode',
    name: 'PlayCode',
    description: 'Online JavaScript playground',
    category: 'IDEs & Editors',
    layer: 'foundation',
    officialUrl: 'https://playcode.io',
    freeTierDetails: 'Freemium',
    tags: ['ides-editors']
  },
  {
    id: 'ansible',
    name: 'Ansible',
    description: 'IT automation and configuration management',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://ansible.com',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'chef',
    name: 'Chef',
    description: 'Infrastructure automation',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://chef.io',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'puppet',
    name: 'Puppet',
    description: 'Configuration management tool',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://puppet.com',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'saltstack',
    name: 'SaltStack',
    description: 'Infrastructure automation',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://saltproject.io',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'vagrant',
    name: 'Vagrant',
    description: 'Development environment management',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://vagrantup.com',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'packer',
    name: 'Packer',
    description: 'Machine image builder by HashiCorp',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://packer.io',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'vault',
    name: 'Vault',
    description: 'Secrets management by HashiCorp',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://vaultproject.io',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'consul',
    name: 'Consul',
    description: 'Service mesh and discovery',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://consul.io',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'nomad',
    name: 'Nomad',
    description: 'Workload orchestration by HashiCorp',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://nomadproject.io',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'istio',
    name: 'Istio',
    description: 'Service mesh for Kubernetes',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://istio.io',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'linkerd',
    name: 'Linkerd',
    description: 'Ultralight service mesh',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://linkerd.io',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'argocd',
    name: 'ArgoCD',
    description: 'GitOps CD for Kubernetes',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://argoproj.github.io/cd',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'fluxcd',
    name: 'FluxCD',
    description: 'GitOps tool for Kubernetes',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://fluxcd.io',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'tekton',
    name: 'Tekton',
    description: 'Kubernetes-native CI/CD pipelines',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://tekton.dev',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'spinnaker',
    name: 'Spinnaker',
    description: 'Multi-cloud CD platform',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://spinnaker.io',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'crossplane',
    name: 'Crossplane',
    description: 'Cloud infrastructure as code',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://crossplane.io',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'opentofu',
    name: 'OpenTofu',
    description: 'Open-source Terraform fork',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://opentofu.org',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'pulumi',
    name: 'Pulumi',
    description: 'Infrastructure as code in real languages',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://pulumi.com',
    freeTierDetails: 'Freemium',
    tags: ['devops-infra']
  },
  {
    id: 'cdk8s',
    name: 'CDK8s',
    description: 'Kubernetes manifests in code',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://cdk8s.io',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'skaffold',
    name: 'Skaffold',
    description: 'Local Kubernetes development',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://skaffold.dev',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'tilt',
    name: 'Tilt',
    description: 'Dev environment for microservices',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://tilt.dev',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'telepresence',
    name: 'Telepresence',
    description: 'Remote Kubernetes development',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://telepresence.io',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'okteto',
    name: 'Okteto',
    description: 'Dev environments for Kubernetes',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://okteto.com',
    freeTierDetails: 'Freemium',
    tags: ['devops-infra']
  },
  {
    id: 'nix',
    name: 'Nix',
    description: 'Reproducible package manager and OS',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://nixos.org',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'nixos',
    name: 'NixOS',
    description: 'Declarative Linux distribution',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://nixos.org',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'guix',
    name: 'Guix',
    description: 'GNU package manager and OS',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://guix.gnu.org',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'flake8',
    name: 'Flake8',
    description: 'Python style checker',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://flake8.pycqa.org',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'black',
    name: 'Black',
    description: 'Python code formatter',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://black.readthedocs.io',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'isort',
    name: 'isort',
    description: 'Python import sorter',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://pycqa.github.io/isort',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'mypy',
    name: 'mypy',
    description: 'Python static type checker',
    category: 'DevOps & Infra',
    layer: 'foundation',
    officialUrl: 'https://mypy-lang.org',
    freeTierDetails: 'Free/OSS',
    tags: ['devops-infra']
  },
  {
    id: 'apache-kafka',
    name: 'Apache Kafka',
    description: 'Distributed event streaming platform',
    category: 'Message Queues',
    layer: 'foundation',
    officialUrl: 'https://kafka.apache.org',
    freeTierDetails: 'Free/OSS',
    tags: ['message-queues']
  },
  {
    id: 'rabbitmq',
    name: 'RabbitMQ',
    description: 'Open-source message broker',
    category: 'Message Queues',
    layer: 'foundation',
    officialUrl: 'https://rabbitmq.com',
    freeTierDetails: 'Free/OSS',
    tags: ['message-queues']
  },
  {
    id: 'redis-streams',
    name: 'Redis Streams',
    description: 'Stream data type in Redis',
    category: 'Message Queues',
    layer: 'foundation',
    officialUrl: 'https://redis.io',
    freeTierDetails: 'Free/OSS',
    tags: ['message-queues']
  },
  {
    id: 'nats',
    name: 'NATS',
    description: 'High-performance messaging system',
    category: 'Message Queues',
    layer: 'foundation',
    officialUrl: 'https://nats.io',
    freeTierDetails: 'Free/OSS',
    tags: ['message-queues']
  },
  {
    id: 'apache-pulsar',
    name: 'Apache Pulsar',
    description: 'Cloud-native messaging streaming',
    category: 'Message Queues',
    layer: 'foundation',
    officialUrl: 'https://pulsar.apache.org',
    freeTierDetails: 'Free/OSS',
    tags: ['message-queues']
  },
  {
    id: 'amazon-sqs',
    name: 'Amazon SQS',
    description: 'Managed message queuing service',
    category: 'Message Queues',
    layer: 'foundation',
    officialUrl: 'https://aws.amazon.com/sqs',
    freeTierDetails: 'Freemium',
    tags: ['message-queues']
  },
  {
    id: 'amazon-sns',
    name: 'Amazon SNS',
    description: 'Pub/sub messaging by AWS',
    category: 'Message Queues',
    layer: 'foundation',
    officialUrl: 'https://aws.amazon.com/sns',
    freeTierDetails: 'Freemium',
    tags: ['message-queues']
  },
  {
    id: 'google-cloud-pub-sub',
    name: 'Google Cloud Pub/Sub',
    description: 'Managed pub/sub by GCP',
    category: 'Message Queues',
    layer: 'foundation',
    officialUrl: 'https://cloud.google.com/pubsub',
    freeTierDetails: 'Freemium',
    tags: ['message-queues']
  },
  {
    id: 'azure-service-bus',
    name: 'Azure Service Bus',
    description: 'Enterprise messaging by Azure',
    category: 'Message Queues',
    layer: 'foundation',
    officialUrl: 'https://azure.microsoft.com/service-bus',
    freeTierDetails: 'Freemium',
    tags: ['message-queues']
  },
  {
    id: 'confluent-platform',
    name: 'Confluent Platform',
    description: 'Enterprise Kafka platform',
    category: 'Message Queues',
    layer: 'foundation',
    officialUrl: 'https://confluent.io',
    freeTierDetails: 'Freemium',
    tags: ['message-queues']
  },
  {
    id: 'redpanda',
    name: 'Redpanda',
    description: 'Kafka-compatible C++ streaming',
    category: 'Message Queues',
    layer: 'foundation',
    officialUrl: 'https://redpanda.com',
    freeTierDetails: 'Free/OSS',
    tags: ['message-queues']
  },
  {
    id: 'upstash-kafka',
    name: 'Upstash Kafka',
    description: 'Serverless Kafka',
    category: 'Message Queues',
    layer: 'foundation',
    officialUrl: 'https://upstash.com/kafka',
    freeTierDetails: 'Freemium',
    tags: ['message-queues']
  },
  {
    id: 'upstash-qstash',
    name: 'Upstash QStash',
    description: 'Serverless message queue',
    category: 'Message Queues',
    layer: 'foundation',
    officialUrl: 'https://upstash.com/qstash',
    freeTierDetails: 'Freemium',
    tags: ['message-queues']
  },
  {
    id: 'inngest',
    name: 'Inngest',
    description: 'Event-driven durable functions',
    category: 'Message Queues',
    layer: 'foundation',
    officialUrl: 'https://inngest.com',
    freeTierDetails: 'Freemium',
    tags: ['message-queues']
  },
  {
    id: 'trigger-dev',
    name: 'Trigger.dev',
    description: 'Background jobs for developers',
    category: 'Message Queues',
    layer: 'foundation',
    officialUrl: 'https://trigger.dev',
    freeTierDetails: 'Freemium',
    tags: ['message-queues']
  },
  {
    id: 'bullmq',
    name: 'BullMQ',
    description: 'Node.js queue library based on Redis',
    category: 'Message Queues',
    layer: 'foundation',
    officialUrl: 'https://bullmq.io',
    freeTierDetails: 'Free/OSS',
    tags: ['message-queues']
  },
  {
    id: 'celery',
    name: 'Celery',
    description: 'Python distributed task queue',
    category: 'Message Queues',
    layer: 'foundation',
    officialUrl: 'https://celeryproject.org',
    freeTierDetails: 'Free/OSS',
    tags: ['message-queues']
  },
  {
    id: 'sidekiq',
    name: 'Sidekiq',
    description: 'Ruby background job processing',
    category: 'Message Queues',
    layer: 'foundation',
    officialUrl: 'https://sidekiq.org',
    freeTierDetails: 'Free/OSS',
    tags: ['message-queues']
  },
  {
    id: 'resque',
    name: 'Resque',
    description: 'Redis-backed Ruby jobs',
    category: 'Message Queues',
    layer: 'foundation',
    officialUrl: 'https://github.com/resque/resque',
    freeTierDetails: 'Free/OSS',
    tags: ['message-queues']
  },
  {
    id: 'faktory',
    name: 'Faktory',
    description: 'Language-agnostic background jobs',
    category: 'Message Queues',
    layer: 'foundation',
    officialUrl: 'https://contribsys.com/faktory',
    freeTierDetails: 'Free/OSS',
    tags: ['message-queues']
  },
  {
    id: 'redis',
    name: 'Redis',
    description: 'In-memory data structure store',
    category: 'Caching',
    layer: 'foundation',
    officialUrl: 'https://redis.io',
    freeTierDetails: 'Free/OSS',
    tags: ['caching']
  },
  {
    id: 'memcached',
    name: 'Memcached',
    description: 'High-performance caching system',
    category: 'Caching',
    layer: 'foundation',
    officialUrl: 'https://memcached.org',
    freeTierDetails: 'Free/OSS',
    tags: ['caching']
  },
  {
    id: 'varnish-cache',
    name: 'Varnish Cache',
    description: 'HTTP accelerator for dynamic websites',
    category: 'Caching',
    layer: 'foundation',
    officialUrl: 'https://varnish-cache.org',
    freeTierDetails: 'Free/OSS',
    tags: ['caching']
  },
  {
    id: 'nginx-proxy-cache',
    name: 'Nginx (proxy/cache)',
    description: 'Web server, reverse proxy and cache',
    category: 'Caching',
    layer: 'foundation',
    officialUrl: 'https://nginx.org',
    freeTierDetails: 'Free/OSS',
    tags: ['caching']
  },
  {
    id: 'hazelcast',
    name: 'Hazelcast',
    description: 'In-memory data grid',
    category: 'Caching',
    layer: 'foundation',
    officialUrl: 'https://hazelcast.com',
    freeTierDetails: 'Freemium',
    tags: ['caching']
  },
  {
    id: 'apache-ignite',
    name: 'Apache Ignite',
    description: 'Distributed in-memory computing',
    category: 'Caching',
    layer: 'foundation',
    officialUrl: 'https://ignite.apache.org',
    freeTierDetails: 'Free/OSS',
    tags: ['caching']
  },
  {
    id: 'ehcache',
    name: 'Ehcache',
    description: 'Java distributed cache',
    category: 'Caching',
    layer: 'foundation',
    officialUrl: 'https://ehcache.org',
    freeTierDetails: 'Free/OSS',
    tags: ['caching']
  },
  {
    id: 'infinispan',
    name: 'Infinispan',
    description: 'Distributed in-memory key-value store',
    category: 'Caching',
    layer: 'foundation',
    officialUrl: 'https://infinispan.org',
    freeTierDetails: 'Free/OSS',
    tags: ['caching']
  },
  {
    id: 'dragonfly',
    name: 'Dragonfly',
    description: 'Redis-compatible, multithreaded',
    category: 'Caching',
    layer: 'foundation',
    officialUrl: 'https://dragonflydb.io',
    freeTierDetails: 'Free/OSS',
    tags: ['caching']
  },
  {
    id: 'keydb',
    name: 'KeyDB',
    description: 'Multi-threaded Redis fork',
    category: 'Caching',
    layer: 'foundation',
    officialUrl: 'https://keydb.dev',
    freeTierDetails: 'Free/OSS',
    tags: ['caching']
  },
  {
    id: 'garnet-microsoft',
    name: 'Garnet (Microsoft)',
    description: 'Remote cache by Microsoft',
    category: 'Caching',
    layer: 'foundation',
    officialUrl: 'https://github.com/microsoft/garnet',
    freeTierDetails: 'Free/OSS',
    tags: ['caching']
  },
  {
    id: 'cloudflare-kv',
    name: 'Cloudflare KV',
    description: 'Edge key-value storage',
    category: 'Caching',
    layer: 'foundation',
    officialUrl: 'https://cloudflare.com/kv',
    freeTierDetails: 'Freemium',
    tags: ['caching']
  },
  {
    id: 'upstash-redis',
    name: 'Upstash Redis',
    description: 'Serverless Redis',
    category: 'Caching',
    layer: 'foundation',
    officialUrl: 'https://upstash.com',
    freeTierDetails: 'Freemium',
    tags: ['caching']
  },
  {
    id: 'amazon-elasticache',
    name: 'Amazon ElastiCache',
    description: 'Managed Redis/Memcached',
    category: 'Caching',
    layer: 'foundation',
    officialUrl: 'https://aws.amazon.com/elasticache',
    freeTierDetails: 'Paid',
    tags: ['caching']
  },
  {
    id: 'google-cloud-memorystore',
    name: 'Google Cloud Memorystore',
    description: 'Managed Redis on GCP',
    category: 'Caching',
    layer: 'foundation',
    officialUrl: 'https://cloud.google.com/memorystore',
    freeTierDetails: 'Paid',
    tags: ['caching']
  },
  {
    id: 'elasticsearch',
    name: 'Elasticsearch',
    description: 'Distributed search and analytics',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://elastic.co/elasticsearch',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'opensearch',
    name: 'OpenSearch',
    description: 'Open-source Elasticsearch fork',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://opensearch.org',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'apache-solr',
    name: 'Apache Solr',
    description: 'Open-source enterprise search',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://solr.apache.org',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'typesense',
    name: 'Typesense',
    description: 'Typo-tolerant search engine',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://typesense.org',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'meilisearch',
    name: 'Meilisearch',
    description: 'Fast developer-first search',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://meilisearch.com',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'algolia',
    name: 'Algolia',
    description: 'Search-as-a-service platform',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://algolia.com',
    freeTierDetails: 'Freemium',
    tags: ['search-engines']
  },
  {
    id: 'sphinx-search',
    name: 'Sphinx Search',
    description: 'Full-text search engine',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://sphinxsearch.com',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'manticore-search',
    name: 'Manticore Search',
    description: 'Sphinx fork, faster',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://manticoresearch.com',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'zincsearch',
    name: 'ZincSearch',
    description: 'Lightweight Elasticsearch alternative',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://zincsearch.com',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'quickwit',
    name: 'Quickwit',
    description: 'Cloud-native search for logs',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://quickwit.io',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'qdrant',
    name: 'Qdrant',
    description: 'Vector similarity search',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://qdrant.tech',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'weaviate',
    name: 'Weaviate',
    description: 'Vector database',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://weaviate.io',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'vespa',
    name: 'Vespa',
    description: 'Big data serving engine by Yahoo',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://vespa.ai',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'xapian',
    name: 'Xapian',
    description: 'Probabilistic search library',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://xapian.org',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'tantivy',
    name: 'Tantivy',
    description: 'Full-text search library in Rust',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://github.com/quickwit-oss/tantivy',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'lancedb',
    name: 'LanceDB',
    description: 'Vector database for ML workloads',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://lancedb.com',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'chroma',
    name: 'Chroma',
    description: 'Open-source embedding database',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://trychroma.com',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'marqo',
    name: 'Marqo',
    description: 'Tensor search engine',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://marqo.ai',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'faunadb',
    name: 'FaunaDB',
    description: 'Distributed document-relational DB',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://fauna.com',
    freeTierDetails: 'Freemium',
    tags: ['search-engines']
  },
  {
    id: 'couchbase',
    name: 'Couchbase',
    description: 'Distributed multi-model database',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://couchbase.com',
    freeTierDetails: 'Freemium',
    tags: ['search-engines']
  },
  {
    id: 'apache-cassandra',
    name: 'Apache Cassandra',
    description: 'Scalable NoSQL database',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://cassandra.apache.org',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'scylladb',
    name: 'ScyllaDB',
    description: 'Cassandra-compatible C++ database',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://scylladb.com',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'hbase',
    name: 'HBase',
    description: 'Non-relational distributed database',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://hbase.apache.org',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'amazon-dynamodb',
    name: 'Amazon DynamoDB',
    description: 'Managed NoSQL by AWS',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://aws.amazon.com/dynamodb',
    freeTierDetails: 'Freemium',
    tags: ['search-engines']
  },
  {
    id: 'google-firestore',
    name: 'Google Firestore',
    description: 'Serverless NoSQL by Google',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://firebase.google.com/firestore',
    freeTierDetails: 'Freemium',
    tags: ['search-engines']
  },
  {
    id: 'realm-mongodb',
    name: 'Realm (MongoDB)',
    description: 'Mobile-first database',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://realm.io',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'pocketbase',
    name: 'PocketBase',
    description: 'Open-source backend in one file',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://pocketbase.io',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'surrealdb',
    name: 'SurrealDB',
    description: 'Multi-model database',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://surrealdb.com',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'edgedb',
    name: 'EdgeDB',
    description: 'Graph-relational database',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://edgedb.com',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'tigerbeetle',
    name: 'TigerBeetle',
    description: 'High-performance financial database',
    category: 'Search Engines',
    layer: 'foundation',
    officialUrl: 'https://tigerbeetle.com',
    freeTierDetails: 'Free/OSS',
    tags: ['search-engines']
  },
  {
    id: 'swagger-openapi',
    name: 'Swagger (OpenAPI)',
    description: 'API design and documentation',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://swagger.io',
    freeTierDetails: 'Free/OSS',
    tags: ['api-development']
  },
  {
    id: 'postman',
    name: 'Postman',
    description: 'API development platform',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://postman.com',
    freeTierDetails: 'Freemium',
    tags: ['api-development']
  },
  {
    id: 'insomnia',
    name: 'Insomnia',
    description: 'API design and testing',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://insomnia.rest',
    freeTierDetails: 'Free/OSS',
    tags: ['api-development']
  },
  {
    id: 'httpie',
    name: 'HTTPie',
    description: 'Human-friendly HTTP client',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://httpie.io',
    freeTierDetails: 'Free/OSS',
    tags: ['api-development']
  },
  {
    id: 'bruno',
    name: 'Bruno',
    description: 'Offline API client',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://usebruno.com',
    freeTierDetails: 'Free/OSS',
    tags: ['api-development']
  },
  {
    id: 'paw-rapidapi',
    name: 'Paw (RapidAPI)',
    description: 'API tool for Mac',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://paw.cloud',
    freeTierDetails: 'Paid',
    tags: ['api-development']
  },
  {
    id: 'api-blueprint',
    name: 'API Blueprint',
    description: 'Markdown API documentation',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://apiblueprint.org',
    freeTierDetails: 'Free/OSS',
    tags: ['api-development']
  },
  {
    id: 'raml',
    name: 'RAML',
    description: 'RESTful API modeling language',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://raml.org',
    freeTierDetails: 'Free/OSS',
    tags: ['api-development']
  },
  {
    id: 'graphql-playground',
    name: 'GraphQL Playground',
    description: 'GraphQL IDE',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://github.com/graphql/graphql-playground',
    freeTierDetails: 'Free/OSS',
    tags: ['api-development']
  },
  {
    id: 'graphiql',
    name: 'GraphiQL',
    description: 'In-browser GraphQL IDE',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://github.com/graphql/graphiql',
    freeTierDetails: 'Free/OSS',
    tags: ['api-development']
  },
  {
    id: 'hasura',
    name: 'Hasura',
    description: 'Instant GraphQL on your database',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://hasura.io',
    freeTierDetails: 'Freemium',
    tags: ['api-development']
  },
  {
    id: 'postgraphile',
    name: 'Postgraphile',
    description: 'GraphQL API from PostgreSQL',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://graphile.org/postgraphile',
    freeTierDetails: 'Free/OSS',
    tags: ['api-development']
  },
  {
    id: 'apollo-studio',
    name: 'Apollo Studio',
    description: 'GraphQL management platform',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://studio.apollographql.com',
    freeTierDetails: 'Freemium',
    tags: ['api-development']
  },
  {
    id: 'kong-gateway',
    name: 'Kong Gateway',
    description: 'Open-source API gateway',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://konghq.com/products/kong-gateway',
    freeTierDetails: 'Free/OSS',
    tags: ['api-development']
  },
  {
    id: 'tyk',
    name: 'Tyk',
    description: 'Open-source API gateway',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://tyk.io',
    freeTierDetails: 'Free/OSS',
    tags: ['api-development']
  },
  {
    id: 'aws-api-gateway',
    name: 'AWS API Gateway',
    description: 'Managed API gateway by AWS',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://aws.amazon.com/api-gateway',
    freeTierDetails: 'Freemium',
    tags: ['api-development']
  },
  {
    id: 'azure-api-management',
    name: 'Azure API Management',
    description: 'API management by Azure',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://azure.microsoft.com/api-management',
    freeTierDetails: 'Freemium',
    tags: ['api-development']
  },
  {
    id: 'apigee',
    name: 'Apigee',
    description: 'API management by Google',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://cloud.google.com/apigee',
    freeTierDetails: 'Paid',
    tags: ['api-development']
  },
  {
    id: 'mulesoft-anypoint',
    name: 'Mulesoft Anypoint',
    description: 'Enterprise API integration',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://mulesoft.com',
    freeTierDetails: 'Paid',
    tags: ['api-development']
  },
  {
    id: 'readme-io',
    name: 'readme.io',
    description: 'Developer documentation portal',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://readme.com',
    freeTierDetails: 'Paid',
    tags: ['api-development']
  },
  {
    id: 'stoplight',
    name: 'Stoplight',
    description: 'API design and documentation',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://stoplight.io',
    freeTierDetails: 'Freemium',
    tags: ['api-development']
  },
  {
    id: 'apidog',
    name: 'Apidog',
    description: 'All-in-one API tool',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://apidog.com',
    freeTierDetails: 'Freemium',
    tags: ['api-development']
  },
  {
    id: 'mockoon',
    name: 'Mockoon',
    description: 'API mock server',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://mockoon.com',
    freeTierDetails: 'Free/OSS',
    tags: ['api-development']
  },
  {
    id: 'wiremock',
    name: 'WireMock',
    description: 'Mock HTTP server',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://wiremock.org',
    freeTierDetails: 'Free/OSS',
    tags: ['api-development']
  },
  {
    id: 'prism-stoplight',
    name: 'Prism (Stoplight)',
    description: 'HTTP mock server from OpenAPI',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://stoplight.io/open-source/prism',
    freeTierDetails: 'Free/OSS',
    tags: ['api-development']
  },
  {
    id: 'json-server',
    name: 'json-server',
    description: 'Fake REST API from JSON',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://github.com/typicode/json-server',
    freeTierDetails: 'Free/OSS',
    tags: ['api-development']
  },
  {
    id: 'hoppscotch',
    name: 'Hoppscotch',
    description: 'Open-source API development',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://hoppscotch.io',
    freeTierDetails: 'Free/OSS',
    tags: ['api-development']
  },
  {
    id: 'rapidapi-hub',
    name: 'RapidAPI Hub',
    description: 'API marketplace',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://rapidapi.com',
    freeTierDetails: 'Freemium',
    tags: ['api-development']
  },
  {
    id: 'zapier-webhooks',
    name: 'Zapier Webhooks',
    description: 'Webhook automation',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://zapier.com/apps/webhooks',
    freeTierDetails: 'Freemium',
    tags: ['api-development']
  },
  {
    id: 'webhook-site',
    name: 'Webhook.site',
    description: 'Test webhooks and HTTP requests',
    category: 'API Development',
    layer: 'foundation',
    officialUrl: 'https://webhook.site',
    freeTierDetails: 'Free',
    tags: ['api-development']
  },
  {
    id: 'selenium',
    name: 'Selenium',
    description: 'Browser automation framework',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://selenium.dev',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'webdriverio',
    name: 'WebdriverIO',
    description: 'Node.js browser automation',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://webdriver.io',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'puppeteer',
    name: 'Puppeteer',
    description: 'Headless Chrome/Firefox automation',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://pptr.dev',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'playwright',
    name: 'Playwright',
    description: 'Cross-browser automation by Microsoft',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://playwright.dev',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'cypress',
    name: 'Cypress',
    description: 'End-to-end testing framework',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://cypress.io',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'testcafe',
    name: 'TestCafe',
    description: 'Cross-browser automated testing',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://testcafe.io',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'nightwatch-js',
    name: 'Nightwatch.js',
    description: 'End-to-end testing framework',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://nightwatchjs.org',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'appium',
    name: 'Appium',
    description: 'Mobile app automation',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://appium.io',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'detox',
    name: 'Detox',
    description: 'Gray-box mobile E2E testing',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://wix.github.io/Detox',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Android UI testing',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://developer.android.com/training/testing/espresso',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'xctest',
    name: 'XCTest',
    description: 'Apple\'s testing framework',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://developer.apple.com/documentation/xctest',
    freeTierDetails: 'Free',
    tags: ['testing-qa']
  },
  {
    id: 'jest',
    name: 'Jest',
    description: 'JavaScript testing framework',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://jestjs.io',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'vitest',
    name: 'Vitest',
    description: 'Vite-native testing framework',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://vitest.dev',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'mocha',
    name: 'Mocha',
    description: 'JavaScript test framework',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://mochajs.org',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'jasmine',
    name: 'Jasmine',
    description: 'BDD testing framework',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://jasmine.github.io',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'ava',
    name: 'AVA',
    description: 'Concurrent test runner',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://github.com/avajs/ava',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'pytest',
    name: 'pytest',
    description: 'Python testing framework',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://pytest.org',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'unittest-python',
    name: 'unittest (Python)',
    description: 'Python built-in test framework',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://docs.python.org/unittest',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'nose2',
    name: 'nose2',
    description: 'Python test runner',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://docs.nose2.io',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'junit',
    name: 'JUnit',
    description: 'Java testing framework',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://junit.org',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'testng',
    name: 'TestNG',
    description: 'Java testing framework',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://testng.org',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'cucumber',
    name: 'Cucumber',
    description: 'BDD testing framework',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://cucumber.io',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'specflow',
    name: 'SpecFlow',
    description: '.NET BDD framework',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://specflow.org',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'ginkgo',
    name: 'Ginkgo',
    description: 'Go BDD testing framework',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://onsi.github.io/ginkgo',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'rspec',
    name: 'RSpec',
    description: 'BDD testing for Ruby',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://rspec.info',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'karate',
    name: 'Karate',
    description: 'API testing with BDD',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://karatelabs.github.io/karate',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'k6',
    name: 'k6',
    description: 'Load testing tool for developers',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://k6.io',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'locust',
    name: 'Locust',
    description: 'Python-based load testing',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://locust.io',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'artillery',
    name: 'Artillery',
    description: 'Cloud-native load testing',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://artillery.io',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'gatling',
    name: 'Gatling',
    description: 'High-performance load testing',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://gatling.io',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'apache-jmeter',
    name: 'Apache JMeter',
    description: 'Java load testing tool',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://jmeter.apache.org',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'vegeta',
    name: 'Vegeta',
    description: 'HTTP load testing tool',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://github.com/tsenart/vegeta',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'wrk',
    name: 'wrk',
    description: 'HTTP benchmarking tool',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://github.com/wg/wrk',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'autocannon',
    name: 'Autocannon',
    description: 'Node.js HTTP benchmarking',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://github.com/mcollina/autocannon',
    freeTierDetails: 'Free/OSS',
    tags: ['testing-qa']
  },
  {
    id: 'browserstack',
    name: 'BrowserStack',
    description: 'Cloud testing platform',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://browserstack.com',
    freeTierDetails: 'Paid',
    tags: ['testing-qa']
  },
  {
    id: 'sauce-labs',
    name: 'Sauce Labs',
    description: 'Cloud testing platform',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://saucelabs.com',
    freeTierDetails: 'Paid',
    tags: ['testing-qa']
  },
  {
    id: 'lambdatest',
    name: 'LambdaTest',
    description: 'Cross-browser cloud testing',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://lambdatest.com',
    freeTierDetails: 'Freemium',
    tags: ['testing-qa']
  },
  {
    id: 'percy-browserstack',
    name: 'Percy (BrowserStack)',
    description: 'Visual regression testing',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://percy.io',
    freeTierDetails: 'Freemium',
    tags: ['testing-qa']
  },
  {
    id: 'chromatic',
    name: 'Chromatic',
    description: 'Visual testing for Storybook',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://chromatic.com',
    freeTierDetails: 'Freemium',
    tags: ['testing-qa']
  },
  {
    id: 'applitools',
    name: 'Applitools',
    description: 'AI-powered visual testing',
    category: 'Testing & QA',
    layer: 'foundation',
    officialUrl: 'https://applitools.com',
    freeTierDetails: 'Freemium',
    tags: ['testing-qa']
  },
  {
    id: 'sonarqube',
    name: 'SonarQube',
    description: 'Code quality and security analysis',
    category: 'Static Analysis',
    layer: 'foundation',
    officialUrl: 'https://sonarqube.org',
    freeTierDetails: 'Free/OSS',
    tags: ['static-analysis']
  },
  {
    id: 'sonarcloud',
    name: 'SonarCloud',
    description: 'Cloud-based code analysis',
    category: 'Static Analysis',
    layer: 'foundation',
    officialUrl: 'https://sonarcloud.io',
    freeTierDetails: 'Freemium',
    tags: ['static-analysis']
  },
  {
    id: 'codeclimate',
    name: 'CodeClimate',
    description: 'Automated code review',
    category: 'Static Analysis',
    layer: 'foundation',
    officialUrl: 'https://codeclimate.com',
    freeTierDetails: 'Freemium',
    tags: ['static-analysis']
  },
  {
    id: 'deepsource',
    name: 'DeepSource',
    description: 'Static analysis for 12 languages',
    category: 'Static Analysis',
    layer: 'foundation',
    officialUrl: 'https://deepsource.io',
    freeTierDetails: 'Freemium',
    tags: ['static-analysis']
  },
  {
    id: 'snyk',
    name: 'Snyk',
    description: 'Security scanning for code and deps',
    category: 'Static Analysis',
    layer: 'foundation',
    officialUrl: 'https://snyk.io',
    freeTierDetails: 'Freemium',
    tags: ['static-analysis']
  },
  {
    id: 'checkmarx',
    name: 'Checkmarx',
    description: 'Enterprise SAST/DAST platform',
    category: 'Static Analysis',
    layer: 'foundation',
    officialUrl: 'https://checkmarx.com',
    freeTierDetails: 'Paid',
    tags: ['static-analysis']
  },
  {
    id: 'veracode',
    name: 'Veracode',
    description: 'Application security platform',
    category: 'Static Analysis',
    layer: 'foundation',
    officialUrl: 'https://veracode.com',
    freeTierDetails: 'Paid',
    tags: ['static-analysis']
  },
  {
    id: 'semgrep',
    name: 'Semgrep',
    description: 'Fast lightweight static analysis',
    category: 'Static Analysis',
    layer: 'foundation',
    officialUrl: 'https://semgrep.dev',
    freeTierDetails: 'Freemium',
    tags: ['static-analysis']
  },
  {
    id: 'owasp-dependency-check',
    name: 'OWASP Dependency-Check',
    description: 'Dependency vulnerability scanner',
    category: 'Static Analysis',
    layer: 'foundation',
    officialUrl: 'https://owasp.org/www-project-dependency-check',
    freeTierDetails: 'Free/OSS',
    tags: ['static-analysis']
  },
  {
    id: 'bandit',
    name: 'Bandit',
    description: 'Python security linter',
    category: 'Static Analysis',
    layer: 'foundation',
    officialUrl: 'https://bandit.readthedocs.io',
    freeTierDetails: 'Free/OSS',
    tags: ['static-analysis']
  },
  {
    id: 'brakeman',
    name: 'Brakeman',
    description: 'Ruby on Rails security scanner',
    category: 'Static Analysis',
    layer: 'foundation',
    officialUrl: 'https://brakemanscanner.org',
    freeTierDetails: 'Free/OSS',
    tags: ['static-analysis']
  },
  {
    id: 'gosec',
    name: 'GoSec',
    description: 'Go security checker',
    category: 'Static Analysis',
    layer: 'foundation',
    officialUrl: 'https://github.com/securego/gosec',
    freeTierDetails: 'Free/OSS',
    tags: ['static-analysis']
  },
  {
    id: 'eslint-security-plugin',
    name: 'ESLint Security Plugin',
    description: 'JS security linting',
    category: 'Static Analysis',
    layer: 'foundation',
    officialUrl: 'https://npmjs.com/package/eslint-plugin-security',
    freeTierDetails: 'Free/OSS',
    tags: ['static-analysis']
  },
  {
    id: 'trivy',
    name: 'Trivy',
    description: 'Container and code vulnerability scanner',
    category: 'Static Analysis',
    layer: 'foundation',
    officialUrl: 'https://trivy.dev',
    freeTierDetails: 'Free/OSS',
    tags: ['static-analysis']
  },
  {
    id: 'grype',
    name: 'Grype',
    description: 'Vulnerability scanner for containers',
    category: 'Static Analysis',
    layer: 'foundation',
    officialUrl: 'https://github.com/anchore/grype',
    freeTierDetails: 'Free/OSS',
    tags: ['static-analysis']
  },
  {
    id: 'syft',
    name: 'Syft',
    description: 'SBOM generator',
    category: 'Static Analysis',
    layer: 'foundation',
    officialUrl: 'https://github.com/anchore/syft',
    freeTierDetails: 'Free/OSS',
    tags: ['static-analysis']
  },
  {
    id: 'dependabot',
    name: 'Dependabot',
    description: 'Automated dependency updates',
    category: 'Static Analysis',
    layer: 'foundation',
    officialUrl: 'https://github.com/dependabot',
    freeTierDetails: 'Free',
    tags: ['static-analysis']
  },
  {
    id: 'renovate',
    name: 'Renovate',
    description: 'Automated dependency updates',
    category: 'Static Analysis',
    layer: 'foundation',
    officialUrl: 'https://renovatebot.com',
    freeTierDetails: 'Free/OSS',
    tags: ['static-analysis']
  },
  {
    id: 'fossa',
    name: 'FOSSA',
    description: 'License compliance and security',
    category: 'Static Analysis',
    layer: 'foundation',
    officialUrl: 'https://fossa.com',
    freeTierDetails: 'Freemium',
    tags: ['static-analysis']
  },
  {
    id: 'licensee',
    name: 'Licensee',
    description: 'Detect project open-source license',
    category: 'Static Analysis',
    layer: 'foundation',
    officialUrl: 'https://licensee.github.io',
    freeTierDetails: 'Free/OSS',
    tags: ['static-analysis']
  },
  {
    id: 'docusaurus',
    name: 'Docusaurus',
    description: 'React-powered documentation websites',
    category: 'Documentation Tools',
    layer: 'foundation',
    officialUrl: 'https://docusaurus.io',
    freeTierDetails: 'Free/OSS',
    tags: ['documentation-tools']
  },
  {
    id: 'mkdocs',
    name: 'MkDocs',
    description: 'Python static site from Markdown',
    category: 'Documentation Tools',
    layer: 'foundation',
    officialUrl: 'https://mkdocs.org',
    freeTierDetails: 'Free/OSS',
    tags: ['documentation-tools']
  },
  {
    id: 'gitbook',
    name: 'GitBook',
    description: 'Beautiful documentation platform',
    category: 'Documentation Tools',
    layer: 'foundation',
    officialUrl: 'https://gitbook.com',
    freeTierDetails: 'Freemium',
    tags: ['documentation-tools']
  },
  {
    id: 'sphinx',
    name: 'Sphinx',
    description: 'Python documentation generator',
    category: 'Documentation Tools',
    layer: 'foundation',
    officialUrl: 'https://sphinx-doc.org',
    freeTierDetails: 'Free/OSS',
    tags: ['documentation-tools']
  },
  {
    id: 'read-the-docs',
    name: 'Read the Docs',
    description: 'Hosting for software docs',
    category: 'Documentation Tools',
    layer: 'foundation',
    officialUrl: 'https://readthedocs.org',
    freeTierDetails: 'Free/OSS',
    tags: ['documentation-tools']
  },
  {
    id: 'mintlify',
    name: 'Mintlify',
    description: 'Beautiful API documentation',
    category: 'Documentation Tools',
    layer: 'foundation',
    officialUrl: 'https://mintlify.com',
    freeTierDetails: 'Freemium',
    tags: ['documentation-tools']
  },
  {
    id: 'starlight-astro',
    name: 'Starlight (Astro)',
    description: 'Documentation theme for Astro',
    category: 'Documentation Tools',
    layer: 'foundation',
    officialUrl: 'https://starlight.astro.build',
    freeTierDetails: 'Free/OSS',
    tags: ['documentation-tools']
  },
  {
    id: 'nextra',
    name: 'Nextra',
    description: 'Next.js documentation framework',
    category: 'Documentation Tools',
    layer: 'foundation',
    officialUrl: 'https://nextra.site',
    freeTierDetails: 'Free/OSS',
    tags: ['documentation-tools']
  },
  {
    id: 'vitepress',
    name: 'VitePress',
    description: 'Vite-powered static site generator',
    category: 'Documentation Tools',
    layer: 'foundation',
    officialUrl: 'https://vitepress.dev',
    freeTierDetails: 'Free/OSS',
    tags: ['documentation-tools']
  },
  {
    id: 'docsify',
    name: 'Docsify',
    description: 'Markdown docs without build step',
    category: 'Documentation Tools',
    layer: 'foundation',
    officialUrl: 'https://docsify.js.org',
    freeTierDetails: 'Free/OSS',
    tags: ['documentation-tools']
  },
  {
    id: 'docus',
    name: 'Docus',
    description: 'Nuxt-based documentation framework',
    category: 'Documentation Tools',
    layer: 'foundation',
    officialUrl: 'https://docus.dev',
    freeTierDetails: 'Free/OSS',
    tags: ['documentation-tools']
  },
  {
    id: 'storybook',
    name: 'Storybook',
    description: 'UI component documentation',
    category: 'Documentation Tools',
    layer: 'foundation',
    officialUrl: 'https://storybook.js.org',
    freeTierDetails: 'Free/OSS',
    tags: ['documentation-tools']
  },
  {
    id: 'swagger-ui',
    name: 'Swagger UI',
    description: 'Interactive API documentation',
    category: 'Documentation Tools',
    layer: 'foundation',
    officialUrl: 'https://swagger.io/tools/swagger-ui',
    freeTierDetails: 'Free/OSS',
    tags: ['documentation-tools']
  },
  {
    id: 'redoc',
    name: 'Redoc',
    description: 'OpenAPI documentation generator',
    category: 'Documentation Tools',
    layer: 'foundation',
    officialUrl: 'https://redoc.ly',
    freeTierDetails: 'Free/OSS',
    tags: ['documentation-tools']
  },
  {
    id: 'scalar',
    name: 'Scalar',
    description: 'Beautiful API documentation',
    category: 'Documentation Tools',
    layer: 'foundation',
    officialUrl: 'https://scalar.com',
    freeTierDetails: 'Free/OSS',
    tags: ['documentation-tools']
  },
  {
    id: 'zudoku',
    name: 'Zudoku',
    description: 'API documentation built on React',
    category: 'Documentation Tools',
    layer: 'foundation',
    officialUrl: 'https://zuplo.com/docs/zudoku',
    freeTierDetails: 'Free/OSS',
    tags: ['documentation-tools']
  },
  {
    id: 'archbee',
    name: 'Archbee',
    description: 'Developer-focused documentation',
    category: 'Documentation Tools',
    layer: 'foundation',
    officialUrl: 'https://archbee.com',
    freeTierDetails: 'Freemium',
    tags: ['documentation-tools']
  },
  {
    id: 'outline',
    name: 'Outline',
    description: 'Team knowledge base and wiki',
    category: 'Documentation Tools',
    layer: 'foundation',
    officialUrl: 'https://getoutline.com',
    freeTierDetails: 'Free/OSS',
    tags: ['documentation-tools']
  },
  {
    id: 'notion-docs',
    name: 'Notion (docs)',
    description: 'Docs and wikis in Notion',
    category: 'Documentation Tools',
    layer: 'foundation',
    officialUrl: 'https://notion.so',
    freeTierDetails: 'Freemium',
    tags: ['documentation-tools']
  },
  {
    id: 'confluence',
    name: 'Confluence',
    description: 'Team documentation by Atlassian',
    category: 'Documentation Tools',
    layer: 'foundation',
    officialUrl: 'https://atlassian.com/confluence',
    freeTierDetails: 'Freemium',
    tags: ['documentation-tools']
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'OpenAI\'s conversational AI',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://chatgpt.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-assistants']
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'Anthropic\'s AI assistant',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://claude.ai',
    freeTierDetails: 'Freemium',
    tags: ['ai-assistants']
  },
  {
    id: 'google-gemini',
    name: 'Google Gemini',
    description: 'Google\'s multimodal AI',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://gemini.google.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-assistants']
  },
  {
    id: 'microsoft-copilot',
    name: 'Microsoft Copilot',
    description: 'Microsoft\'s AI with Bing search',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://copilot.microsoft.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-assistants']
  },
  {
    id: 'meta-ai',
    name: 'Meta AI',
    description: 'Meta\'s AI assistant',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://meta.ai',
    freeTierDetails: 'Free',
    tags: ['ai-assistants']
  },
  {
    id: 'perplexity-ai',
    name: 'Perplexity AI',
    description: 'AI-powered search engine',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://perplexity.ai',
    freeTierDetails: 'Freemium',
    tags: ['ai-assistants']
  },
  {
    id: 'mistral-le-chat',
    name: 'Mistral Le Chat',
    description: 'Mistral\'s chat interface',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://chat.mistral.ai',
    freeTierDetails: 'Free',
    tags: ['ai-assistants']
  },
  {
    id: 'grok-xai',
    name: 'Grok (xAI)',
    description: 'Elon Musk\'s AI by xAI',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://grok.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-assistants']
  },
  {
    id: 'pi-ai',
    name: 'Pi AI',
    description: 'Personal AI companion by Inflection',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://heypi.com',
    freeTierDetails: 'Free',
    tags: ['ai-assistants']
  },
  {
    id: 'you-com',
    name: 'You.com',
    description: 'AI-integrated search engine',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://you.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-assistants']
  },
  {
    id: 'poe',
    name: 'Poe',
    description: 'Multi-model AI chat by Quora',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://poe.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-assistants']
  },
  {
    id: 'huggingchat',
    name: 'HuggingChat',
    description: 'Open-source chatbots by HuggingFace',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://huggingface.co/chat',
    freeTierDetails: 'Free',
    tags: ['ai-assistants']
  },
  {
    id: 'cohere-coral',
    name: 'Cohere Coral',
    description: 'Enterprise AI assistant',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://cohere.com/coral',
    freeTierDetails: 'Paid',
    tags: ['ai-assistants']
  },
  {
    id: 'kagi-assistant',
    name: 'Kagi Assistant',
    description: 'Privacy-first AI assistant',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://kagi.com/assistant',
    freeTierDetails: 'Paid',
    tags: ['ai-assistants']
  },
  {
    id: 'phind',
    name: 'Phind',
    description: 'AI search for developers',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://phind.com',
    freeTierDetails: 'Free',
    tags: ['ai-assistants']
  },
  {
    id: 'aria-opera',
    name: 'Aria (Opera)',
    description: 'Built-in AI in Opera browser',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://opera.com/features/aria',
    freeTierDetails: 'Free',
    tags: ['ai-assistants']
  },
  {
    id: 'monica-ai',
    name: 'Monica AI',
    description: 'AI assistant browser extension',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://monica.im',
    freeTierDetails: 'Freemium',
    tags: ['ai-assistants']
  },
  {
    id: 'merlin-ai',
    name: 'Merlin AI',
    description: 'Browser AI assistant',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://getmerlin.in',
    freeTierDetails: 'Freemium',
    tags: ['ai-assistants']
  },
  {
    id: 'chatsonic',
    name: 'Chatsonic',
    description: 'AI chatbot with web access',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://writesonic.com/chat',
    freeTierDetails: 'Freemium',
    tags: ['ai-assistants']
  },
  {
    id: 'jasper-chat',
    name: 'Jasper Chat',
    description: 'AI writing and chat',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://jasper.ai',
    freeTierDetails: 'Paid',
    tags: ['ai-assistants']
  },
  {
    id: 'character-ai',
    name: 'Character.ai',
    description: 'AI character roleplay',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://character.ai',
    freeTierDetails: 'Freemium',
    tags: ['ai-assistants']
  },
  {
    id: 'replika',
    name: 'Replika',
    description: 'AI companion chatbot',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://replika.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-assistants']
  },
  {
    id: 'inflection-pi',
    name: 'Inflection Pi',
    description: 'Personal AI assistant',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://inflection.ai',
    freeTierDetails: 'Free',
    tags: ['ai-assistants']
  },
  {
    id: 'openai-playground',
    name: 'OpenAI Playground',
    description: 'OpenAI API playground',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://platform.openai.com/playground',
    freeTierDetails: 'Freemium',
    tags: ['ai-assistants']
  },
  {
    id: 'together-ai-playground',
    name: 'Together AI Playground',
    description: 'Open-source model playground',
    category: 'AI Assistants',
    layer: 'foundation',
    officialUrl: 'https://api.together.ai/playground',
    freeTierDetails: 'Freemium',
    tags: ['ai-assistants']
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Popular AI art generation via Discord',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://midjourney.com',
    freeTierDetails: 'Paid',
    tags: ['ai-image-gen']
  },
  {
    id: 'dall-e-3-openai',
    name: 'DALL-E 3 (OpenAI)',
    description: 'Image generation by OpenAI',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://openai.com/dall-e-3',
    freeTierDetails: 'Paid',
    tags: ['ai-image-gen']
  },
  {
    id: 'stable-diffusion-sdxl',
    name: 'Stable Diffusion (SDXL)',
    description: 'Open-source image generation',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://stability.ai',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-image-gen']
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    description: 'AI image generation by Adobe',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://firefly.adobe.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-image-gen']
  },
  {
    id: 'canva-ai-image',
    name: 'Canva AI Image',
    description: 'Image generation in Canva',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://canva.com/ai-image-generator',
    freeTierDetails: 'Freemium',
    tags: ['ai-image-gen']
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo AI',
    description: 'AI image generation for creators',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://leonardo.ai',
    freeTierDetails: 'Freemium',
    tags: ['ai-image-gen']
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    description: 'AI image gen with good text rendering',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://ideogram.ai',
    freeTierDetails: 'Freemium',
    tags: ['ai-image-gen']
  },
  {
    id: 'playground-ai',
    name: 'Playground AI',
    description: 'AI image creation platform',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://playground.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-image-gen']
  },
  {
    id: 'nightcafe-creator',
    name: 'NightCafe Creator',
    description: 'AI art generator',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://nightcafe.studio',
    freeTierDetails: 'Freemium',
    tags: ['ai-image-gen']
  },
  {
    id: 'artbreeder',
    name: 'Artbreeder',
    description: 'Blend and create AI images',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://artbreeder.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-image-gen']
  },
  {
    id: 'dream-by-wombo',
    name: 'Dream by WOMBO',
    description: 'Mobile AI art generator',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://dream.ai',
    freeTierDetails: 'Freemium',
    tags: ['ai-image-gen']
  },
  {
    id: 'starryai',
    name: 'StarryAI',
    description: 'AI art generation app',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://starryai.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-image-gen']
  },
  {
    id: 'craiyon',
    name: 'Craiyon',
    description: 'Free AI image generator',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://craiyon.com',
    freeTierDetails: 'Free',
    tags: ['ai-image-gen']
  },
  {
    id: 'bing-image-creator',
    name: 'Bing Image Creator',
    description: 'DALL-E powered by Microsoft Bing',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://bing.com/images/create',
    freeTierDetails: 'Free',
    tags: ['ai-image-gen']
  },
  {
    id: 'google-imagefx',
    name: 'Google ImageFX',
    description: 'AI image generation by Google',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://aitestkitchen.withgoogle.com/tools/image-fx',
    freeTierDetails: 'Free',
    tags: ['ai-image-gen']
  },
  {
    id: 'recraft',
    name: 'Recraft',
    description: 'AI design tool for vectors and icons',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://recraft.ai',
    freeTierDetails: 'Freemium',
    tags: ['ai-image-gen']
  },
  {
    id: 'flux-black-forest-labs',
    name: 'Flux (Black Forest Labs)',
    description: 'Open-weight image generation model',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://blackforestlabs.ai',
    freeTierDetails: 'Freemium',
    tags: ['ai-image-gen']
  },
  {
    id: 'invoke-ai',
    name: 'Invoke AI',
    description: 'Local open-source image generation',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://invoke.ai',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-image-gen']
  },
  {
    id: 'comfyui',
    name: 'ComfyUI',
    description: 'Node-based Stable Diffusion UI',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://comfyui.org',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-image-gen']
  },
  {
    id: 'automatic1111-sd-webui',
    name: 'Automatic1111 (SD WebUI)',
    description: 'Popular SD web interface',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-image-gen']
  },
  {
    id: 'seaart-ai',
    name: 'Seaart AI',
    description: 'AI art generator',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://seaart.ai',
    freeTierDetails: 'Freemium',
    tags: ['ai-image-gen']
  },
  {
    id: 'piclumen',
    name: 'PicLumen',
    description: 'AI image generation platform',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://piclumen.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-image-gen']
  },
  {
    id: 'adobe-generative-fill',
    name: 'Adobe Generative Fill',
    description: 'AI inpainting in Photoshop',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://adobe.com/photoshop/generative-fill',
    freeTierDetails: 'Paid',
    tags: ['ai-image-gen']
  },
  {
    id: 'genie-luma-ai',
    name: 'Genie (Luma AI)',
    description: '3D asset generation from text',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://lumalabs.ai/genie',
    freeTierDetails: 'Freemium',
    tags: ['ai-image-gen']
  },
  {
    id: 'scenario',
    name: 'Scenario',
    description: 'AI art for game development',
    category: 'AI Image Gen',
    layer: 'foundation',
    officialUrl: 'https://scenario.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-image-gen']
  },
  {
    id: 'runway-gen-3',
    name: 'Runway Gen-3',
    description: 'AI video generation by Runway',
    category: 'AI Video Gen',
    layer: 'foundation',
    officialUrl: 'https://runwayml.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-video-gen']
  },
  {
    id: 'sora-openai',
    name: 'Sora (OpenAI)',
    description: 'Text-to-video by OpenAI',
    category: 'AI Video Gen',
    layer: 'foundation',
    officialUrl: 'https://openai.com/sora',
    freeTierDetails: 'Paid',
    tags: ['ai-video-gen']
  },
  {
    id: 'google-veo-2',
    name: 'Google Veo 2',
    description: 'Google\'s video generation model',
    category: 'AI Video Gen',
    layer: 'foundation',
    officialUrl: 'https://deepmind.google/technologies/veo',
    freeTierDetails: 'Limited',
    tags: ['ai-video-gen']
  },
  {
    id: 'kling-ai',
    name: 'Kling AI',
    description: 'Chinese AI video generation',
    category: 'AI Video Gen',
    layer: 'foundation',
    officialUrl: 'https://klingai.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-video-gen']
  },
  {
    id: 'hailuo-ai-minimax',
    name: 'Hailuo AI (MiniMax)',
    description: 'AI video generation by MiniMax',
    category: 'AI Video Gen',
    layer: 'foundation',
    officialUrl: 'https://hailuoai.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-video-gen']
  },
  {
    id: 'luma-dream-machine',
    name: 'Luma Dream Machine',
    description: 'High-quality AI video',
    category: 'AI Video Gen',
    layer: 'foundation',
    officialUrl: 'https://lumalabs.ai/dream-machine',
    freeTierDetails: 'Freemium',
    tags: ['ai-video-gen']
  },
  {
    id: 'pika-labs',
    name: 'Pika Labs',
    description: 'AI video creation from images/text',
    category: 'AI Video Gen',
    layer: 'foundation',
    officialUrl: 'https://pika.art',
    freeTierDetails: 'Freemium',
    tags: ['ai-video-gen']
  },
  {
    id: 'stability-video-diffusion',
    name: 'Stability Video Diffusion',
    description: 'Open-source video diffusion',
    category: 'AI Video Gen',
    layer: 'foundation',
    officialUrl: 'https://stability.ai',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-video-gen']
  },
  {
    id: 'cogvideox',
    name: 'CogVideoX',
    description: 'Open-source video generation',
    category: 'AI Video Gen',
    layer: 'foundation',
    officialUrl: 'https://github.com/THUDM/CogVideo',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-video-gen']
  },
  {
    id: 'mochi-1-genmo',
    name: 'Mochi 1 (Genmo)',
    description: 'Open-source video generation',
    category: 'AI Video Gen',
    layer: 'foundation',
    officialUrl: 'https://genmo.ai',
    freeTierDetails: 'Freemium',
    tags: ['ai-video-gen']
  },
  {
    id: 'haiper-ai',
    name: 'Haiper AI',
    description: 'AI video generation platform',
    category: 'AI Video Gen',
    layer: 'foundation',
    officialUrl: 'https://haiper.ai',
    freeTierDetails: 'Freemium',
    tags: ['ai-video-gen']
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    description: 'AI video with avatars',
    category: 'AI Video Gen',
    layer: 'foundation',
    officialUrl: 'https://heygen.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-video-gen']
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'AI video generation from text',
    category: 'AI Video Gen',
    layer: 'foundation',
    officialUrl: 'https://synthesia.io',
    freeTierDetails: 'Paid',
    tags: ['ai-video-gen']
  },
  {
    id: 'd-id',
    name: 'D-ID',
    description: 'AI talking portraits',
    category: 'AI Video Gen',
    layer: 'foundation',
    officialUrl: 'https://d-id.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-video-gen']
  },
  {
    id: 'colossyan',
    name: 'Colossyan',
    description: 'AI video for workplace learning',
    category: 'AI Video Gen',
    layer: 'foundation',
    officialUrl: 'https://colossyan.com',
    freeTierDetails: 'Paid',
    tags: ['ai-video-gen']
  },
  {
    id: 'invideo-ai',
    name: 'InVideo AI',
    description: 'AI-powered video maker',
    category: 'AI Video Gen',
    layer: 'foundation',
    officialUrl: 'https://invideo.ai',
    freeTierDetails: 'Freemium',
    tags: ['ai-video-gen']
  },
  {
    id: 'pictory-ai',
    name: 'Pictory AI',
    description: 'Convert scripts to video with AI',
    category: 'AI Video Gen',
    layer: 'foundation',
    officialUrl: 'https://pictory.ai',
    freeTierDetails: 'Paid',
    tags: ['ai-video-gen']
  },
  {
    id: 'elai-io',
    name: 'Elai.io',
    description: 'AI video generation with avatars',
    category: 'AI Video Gen',
    layer: 'foundation',
    officialUrl: 'https://elai.io',
    freeTierDetails: 'Paid',
    tags: ['ai-video-gen']
  },
  {
    id: 'typeframes',
    name: 'Typeframes',
    description: 'AI product video creation',
    category: 'AI Video Gen',
    layer: 'foundation',
    officialUrl: 'https://typeframes.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-video-gen']
  },
  {
    id: 'captions-ai',
    name: 'Captions AI',
    description: 'AI video editing and captions',
    category: 'AI Video Gen',
    layer: 'foundation',
    officialUrl: 'https://captions.ai',
    freeTierDetails: 'Freemium',
    tags: ['ai-video-gen']
  },
  {
    id: 'jasper-ai',
    name: 'Jasper AI',
    description: 'AI writing for marketing teams',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://jasper.ai',
    freeTierDetails: 'Paid',
    tags: ['ai-writing-content']
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    description: 'AI copywriting tool',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://copy.ai',
    freeTierDetails: 'Freemium',
    tags: ['ai-writing-content']
  },
  {
    id: 'writesonic',
    name: 'Writesonic',
    description: 'AI content generation',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://writesonic.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-writing-content']
  },
  {
    id: 'rytr',
    name: 'Rytr',
    description: 'AI writing assistant',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://rytr.me',
    freeTierDetails: 'Freemium',
    tags: ['ai-writing-content']
  },
  {
    id: 'anyword',
    name: 'Anyword',
    description: 'Predictive AI copywriting',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://anyword.com',
    freeTierDetails: 'Paid',
    tags: ['ai-writing-content']
  },
  {
    id: 'hypotenuse-ai',
    name: 'Hypotenuse AI',
    description: 'AI for ecommerce content',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://hypotenuse.ai',
    freeTierDetails: 'Paid',
    tags: ['ai-writing-content']
  },
  {
    id: 'scalenut',
    name: 'Scalenut',
    description: 'AI SEO and content platform',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://scalenut.com',
    freeTierDetails: 'Paid',
    tags: ['ai-writing-content']
  },
  {
    id: 'frase',
    name: 'Frase',
    description: 'AI content optimization',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://frase.io',
    freeTierDetails: 'Paid',
    tags: ['ai-writing-content']
  },
  {
    id: 'surfer-seo',
    name: 'Surfer SEO',
    description: 'AI content and SEO optimization',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://surferseo.com',
    freeTierDetails: 'Paid',
    tags: ['ai-writing-content']
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    description: 'AI grammar and writing assistant',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://grammarly.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-writing-content']
  },
  {
    id: 'prowritingaid',
    name: 'ProWritingAid',
    description: 'Writing style improvement',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://prowritingaid.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-writing-content']
  },
  {
    id: 'hemingway-editor',
    name: 'Hemingway Editor',
    description: 'Readability improvement tool',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://hemingwayapp.com',
    freeTierDetails: 'Free/Paid',
    tags: ['ai-writing-content']
  },
  {
    id: 'quillbot',
    name: 'QuillBot',
    description: 'AI paraphrasing and summarization',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://quillbot.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-writing-content']
  },
  {
    id: 'wordtune',
    name: 'Wordtune',
    description: 'AI writing rewriting tool',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://wordtune.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-writing-content']
  },
  {
    id: 'paragraph-ai',
    name: 'Paragraph AI',
    description: 'AI writing assistant',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://paragraphai.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-writing-content']
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'AI writing inside Notion',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://notion.so/product/ai',
    freeTierDetails: 'Paid add-on',
    tags: ['ai-writing-content']
  },
  {
    id: 'google-duet-ai-workspace',
    name: 'Google Duet AI (Workspace)',
    description: 'AI in Google Workspace',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://workspace.google.com/duet-ai',
    freeTierDetails: 'Paid add-on',
    tags: ['ai-writing-content']
  },
  {
    id: 'microsoft-365-copilot',
    name: 'Microsoft 365 Copilot',
    description: 'AI in Office 365',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://microsoft.com/microsoft-365/copilot',
    freeTierDetails: 'Paid',
    tags: ['ai-writing-content']
  },
  {
    id: 'ai-writer',
    name: 'AI Writer',
    description: 'Research-based AI article writing',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://ai-writer.com',
    freeTierDetails: 'Paid',
    tags: ['ai-writing-content']
  },
  {
    id: 'longshot-ai',
    name: 'Longshot AI',
    description: 'AI content for blogs and SEO',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://longshot.ai',
    freeTierDetails: 'Paid',
    tags: ['ai-writing-content']
  },
  {
    id: 'compose-ai',
    name: 'Compose AI',
    description: 'AI autocompletion Chrome extension',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://compose.ai',
    freeTierDetails: 'Free',
    tags: ['ai-writing-content']
  },
  {
    id: 'ghostwriter-replit',
    name: 'GhostWriter (Replit)',
    description: 'AI writing in Replit',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://replit.com/site/ghostwriter',
    freeTierDetails: 'Freemium',
    tags: ['ai-writing-content']
  },
  {
    id: 'sudowrite',
    name: 'Sudowrite',
    description: 'AI creative fiction writing',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://sudowrite.com',
    freeTierDetails: 'Paid',
    tags: ['ai-writing-content']
  },
  {
    id: 'novelai',
    name: 'NovelAI',
    description: 'AI-assisted storytelling and writing',
    category: 'AI Writing & Content',
    layer: 'foundation',
    officialUrl: 'https://novelai.net',
    freeTierDetails: 'Paid',
    tags: ['ai-writing-content']
  },
  {
    id: 'autogpt',
    name: 'AutoGPT',
    description: 'Autonomous GPT-4 agent',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://agpt.co',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'babyagi',
    name: 'BabyAGI',
    description: 'AI task management agent',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://github.com/yoheinakajima/babyagi',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'agentgpt',
    name: 'AgentGPT',
    description: 'Browser-based autonomous agent',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://agentgpt.reworkd.ai',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'superagi',
    name: 'SuperAGI',
    description: 'Open-source autonomous AI framework',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://superagi.com',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'crewai',
    name: 'CrewAI',
    description: 'Multi-agent orchestration framework',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://crewai.com',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'autogen-microsoft',
    name: 'AutoGen (Microsoft)',
    description: 'Multi-agent framework by Microsoft',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://microsoft.github.io/autogen',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'langchain-agents',
    name: 'LangChain Agents',
    description: 'Agent framework by LangChain',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://langchain.com/agents',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'langgraph',
    name: 'LangGraph',
    description: 'Stateful agent workflows',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://langchain-ai.github.io/langgraph',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'haystack-agents',
    name: 'Haystack Agents',
    description: 'Agent pipelines by deepset',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://haystack.deepset.ai/agents',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'dspy',
    name: 'DSPy',
    description: 'Programming language for LLM pipelines',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://dspy.ai',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'semantic-kernel-agents',
    name: 'Semantic Kernel Agents',
    description: 'AI agents by Microsoft',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://learn.microsoft.com/semantic-kernel/agents',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'phidata',
    name: 'Phidata',
    description: 'AI agent platform',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://phidata.com',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'swarm-openai',
    name: 'Swarm (OpenAI)',
    description: 'Multi-agent orchestration by OpenAI',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://github.com/openai/swarm',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'n8n',
    name: 'n8n',
    description: 'Workflow automation with AI',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://n8n.io',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'make-integromat',
    name: 'Make (Integromat)',
    description: 'Visual workflow automation',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://make.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-agents-automation']
  },
  {
    id: 'zapier',
    name: 'Zapier',
    description: 'No-code automation platform',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://zapier.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-agents-automation']
  },
  {
    id: 'zapier-ai',
    name: 'Zapier AI',
    description: 'AI-powered automation',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://zapier.com/ai',
    freeTierDetails: 'Freemium',
    tags: ['ai-agents-automation']
  },
  {
    id: 'activepieces',
    name: 'Activepieces',
    description: 'Open-source Zapier alternative',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://activepieces.com',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'pabbly-connect',
    name: 'Pabbly Connect',
    description: 'Workflow automation tool',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://pabbly.com/connect',
    freeTierDetails: 'Paid',
    tags: ['ai-agents-automation']
  },
  {
    id: 'pipedream',
    name: 'Pipedream',
    description: 'Integration platform for developers',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://pipedream.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-agents-automation']
  },
  {
    id: 'flowise',
    name: 'Flowise',
    description: 'Low-code AI workflow builder',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://flowiseai.com',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'langflow',
    name: 'Langflow',
    description: 'Visual LangChain builder',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://langflow.org',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'rivet',
    name: 'Rivet',
    description: 'Visual AI programming environment',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://rivet.ironcladapp.com',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'promptflow-azure',
    name: 'PromptFlow (Azure)',
    description: 'LLM app development tool',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://azure.microsoft.com/promptflow',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'dify',
    name: 'Dify',
    description: 'LLM app development platform',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://dify.ai',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'botpress',
    name: 'Botpress',
    description: 'Open-source chatbot platform',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://botpress.com',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'rasa',
    name: 'Rasa',
    description: 'Open-source conversational AI',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://rasa.com',
    freeTierDetails: 'Free/OSS',
    tags: ['ai-agents-automation']
  },
  {
    id: 'voiceflow',
    name: 'Voiceflow',
    description: 'Conversational AI design platform',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://voiceflow.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-agents-automation']
  },
  {
    id: 'relevance-ai',
    name: 'Relevance AI',
    description: 'AI agent and tool builder',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://relevanceai.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-agents-automation']
  },
  {
    id: 'stack-ai',
    name: 'Stack AI',
    description: 'No-code AI workflow builder',
    category: 'AI Agents & Automation',
    layer: 'foundation',
    officialUrl: 'https://stack-ai.com',
    freeTierDetails: 'Freemium',
    tags: ['ai-agents-automation']
  },
  {
    id: 'ollama',
    name: 'Ollama',
    description: 'Run LLMs locally on your machine',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://ollama.com',
    freeTierDetails: 'Free/OSS',
    tags: ['llm-hosting']
  },
  {
    id: 'lm-studio',
    name: 'LM Studio',
    description: 'GUI for local LLMs',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://lmstudio.ai',
    freeTierDetails: 'Free',
    tags: ['llm-hosting']
  },
  {
    id: 'gpt4all',
    name: 'GPT4All',
    description: 'Local LLM runner',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://gpt4all.io',
    freeTierDetails: 'Free/OSS',
    tags: ['llm-hosting']
  },
  {
    id: 'jan-ai',
    name: 'Jan.ai',
    description: 'Open-source local AI assistant',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://jan.ai',
    freeTierDetails: 'Free/OSS',
    tags: ['llm-hosting']
  },
  {
    id: 'open-webui-ollama-ui',
    name: 'Open WebUI (Ollama UI)',
    description: 'Web UI for Ollama',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://openwebui.com',
    freeTierDetails: 'Free/OSS',
    tags: ['llm-hosting']
  },
  {
    id: 'hugging-face-hub',
    name: 'Hugging Face Hub',
    description: 'Model hub and spaces',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://huggingface.co',
    freeTierDetails: 'Freemium',
    tags: ['llm-hosting']
  },
  {
    id: 'replicate',
    name: 'Replicate',
    description: 'Run ML models in the cloud',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://replicate.com',
    freeTierDetails: 'Freemium',
    tags: ['llm-hosting']
  },
  {
    id: 'modal',
    name: 'Modal',
    description: 'Serverless ML compute',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://modal.com',
    freeTierDetails: 'Freemium',
    tags: ['llm-hosting']
  },
  {
    id: 'baseten',
    name: 'Baseten',
    description: 'ML model serving platform',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://baseten.co',
    freeTierDetails: 'Paid',
    tags: ['llm-hosting']
  },
  {
    id: 'together-ai',
    name: 'Together AI',
    description: 'Cloud inference for open models',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://together.ai',
    freeTierDetails: 'Freemium',
    tags: ['llm-hosting']
  },
  {
    id: 'fireworks-ai',
    name: 'Fireworks AI',
    description: 'Fast inference for open-source LLMs',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://fireworks.ai',
    freeTierDetails: 'Freemium',
    tags: ['llm-hosting']
  },
  {
    id: 'groq',
    name: 'Groq',
    description: 'LPU-powered ultra-fast inference',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://groq.com',
    freeTierDetails: 'Freemium',
    tags: ['llm-hosting']
  },
  {
    id: 'cerebras',
    name: 'Cerebras',
    description: 'WSE-powered inference',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://cerebras.ai',
    freeTierDetails: 'Freemium',
    tags: ['llm-hosting']
  },
  {
    id: 'perplexity-api',
    name: 'Perplexity API',
    description: 'Online LLM API with web access',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://docs.perplexity.ai',
    freeTierDetails: 'Paid',
    tags: ['llm-hosting']
  },
  {
    id: 'mistral-api',
    name: 'Mistral API',
    description: 'Mistral models API',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://mistral.ai',
    freeTierDetails: 'Freemium',
    tags: ['llm-hosting']
  },
  {
    id: 'cohere-api',
    name: 'Cohere API',
    description: 'Enterprise NLP API',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://cohere.com',
    freeTierDetails: 'Freemium',
    tags: ['llm-hosting']
  },
  {
    id: 'anyscale-endpoints',
    name: 'Anyscale Endpoints',
    description: 'Ray-based LLM serving',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://anyscale.com',
    freeTierDetails: 'Freemium',
    tags: ['llm-hosting']
  },
  {
    id: 'xinference',
    name: 'Xinference',
    description: 'Open-source model serving',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://github.com/xorbitsai/inference',
    freeTierDetails: 'Free/OSS',
    tags: ['llm-hosting']
  },
  {
    id: 'text-generation-webui',
    name: 'Text Generation WebUI',
    description: 'Gradio WebUI for LLMs',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://github.com/oobabooga/text-generation-webui',
    freeTierDetails: 'Free/OSS',
    tags: ['llm-hosting']
  },
  {
    id: 'vllm',
    name: 'vLLM',
    description: 'High-throughput LLM serving',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://vllm.ai',
    freeTierDetails: 'Free/OSS',
    tags: ['llm-hosting']
  },
  {
    id: 'tgi-hugging-face',
    name: 'TGI (Hugging Face)',
    description: 'HF text generation inference',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://huggingface.co/docs/text-generation-inference',
    freeTierDetails: 'Free/OSS',
    tags: ['llm-hosting']
  },
  {
    id: 'ray-serve',
    name: 'Ray Serve',
    description: 'Scalable ML serving by Ray',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://docs.ray.io/en/latest/serve',
    freeTierDetails: 'Free/OSS',
    tags: ['llm-hosting']
  },
  {
    id: 'bentoml',
    name: 'BentoML',
    description: 'ML model serving framework',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://bentoml.com',
    freeTierDetails: 'Free/OSS',
    tags: ['llm-hosting']
  },
  {
    id: 'triton-inference-server',
    name: 'Triton Inference Server',
    description: 'NVIDIA\'s ML inference server',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://developer.nvidia.com/triton-inference-server',
    freeTierDetails: 'Free/OSS',
    tags: ['llm-hosting']
  },
  {
    id: 'torchserve',
    name: 'TorchServe',
    description: 'PyTorch model serving',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://pytorch.org/serve',
    freeTierDetails: 'Free/OSS',
    tags: ['llm-hosting']
  },
  {
    id: 'axolotl',
    name: 'Axolotl',
    description: 'LLM fine-tuning framework',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://github.com/OpenAccess-AI-Collective/axolotl',
    freeTierDetails: 'Free/OSS',
    tags: ['llm-hosting']
  },
  {
    id: 'unsloth',
    name: 'Unsloth',
    description: 'Fast LLM fine-tuning',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://unsloth.ai',
    freeTierDetails: 'Free/OSS',
    tags: ['llm-hosting']
  },
  {
    id: 'llama-factory',
    name: 'LLaMA Factory',
    description: 'Easy fine-tuning for LLMs',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://github.com/hiyouga/LLaMA-Factory',
    freeTierDetails: 'Free/OSS',
    tags: ['llm-hosting']
  },
  {
    id: 'ludwig',
    name: 'Ludwig',
    description: 'Low-code ML framework',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://ludwig.ai',
    freeTierDetails: 'Free/OSS',
    tags: ['llm-hosting']
  },
  {
    id: 'fastchat',
    name: 'FastChat',
    description: 'LLM serving and training',
    category: 'LLM Hosting',
    layer: 'foundation',
    officialUrl: 'https://github.com/lm-sys/FastChat',
    freeTierDetails: 'Free/OSS',
    tags: ['llm-hosting']
  },
  {
    id: 'react-native',
    name: 'React Native',
    description: 'Cross-platform mobile with React',
    category: 'Mobile Dev',
    layer: 'foundation',
    officialUrl: 'https://reactnative.dev',
    freeTierDetails: 'Free/OSS',
    tags: ['mobile-dev']
  },
  {
    id: 'flutter',
    name: 'Flutter',
    description: 'Google\'s UI toolkit for mobile',
    category: 'Mobile Dev',
    layer: 'foundation',
    officialUrl: 'https://flutter.dev',
    freeTierDetails: 'Free/OSS',
    tags: ['mobile-dev']
  },
  {
    id: 'ionic',
    name: 'Ionic',
    description: 'Web technologies for mobile apps',
    category: 'Mobile Dev',
    layer: 'foundation',
    officialUrl: 'https://ionicframework.com',
    freeTierDetails: 'Free/OSS',
    tags: ['mobile-dev']
  },
  {
    id: 'expo',
    name: 'Expo',
    description: 'Platform for React Native apps',
    category: 'Mobile Dev',
    layer: 'foundation',
    officialUrl: 'https://expo.dev',
    freeTierDetails: 'Freemium',
    tags: ['mobile-dev']
  },
  {
    id: 'capacitor',
    name: 'Capacitor',
    description: 'Native runtime for web apps',
    category: 'Mobile Dev',
    layer: 'foundation',
    officialUrl: 'https://capacitorjs.com',
    freeTierDetails: 'Free/OSS',
    tags: ['mobile-dev']
  },
  {
    id: 'nativescript',
    name: 'NativeScript',
    description: 'Native apps with JavaScript',
    category: 'Mobile Dev',
    layer: 'foundation',
    officialUrl: 'https://nativescript.org',
    freeTierDetails: 'Free/OSS',
    tags: ['mobile-dev']
  },
  {
    id: 'xamarin',
    name: 'Xamarin',
    description: '.NET cross-platform mobile',
    category: 'Mobile Dev',
    layer: 'foundation',
    officialUrl: 'https://dotnet.microsoft.com/xamarin',
    freeTierDetails: 'Free/OSS',
    tags: ['mobile-dev']
  },
  {
    id: 'maui',
    name: 'MAUI',
    description: 'Multi-platform app UI by Microsoft',
    category: 'Mobile Dev',
    layer: 'foundation',
    officialUrl: 'https://dotnet.microsoft.com/maui',
    freeTierDetails: 'Free/OSS',
    tags: ['mobile-dev']
  },
  {
    id: 'kotlin-multiplatform',
    name: 'Kotlin Multiplatform',
    description: 'Kotlin for iOS and Android',
    category: 'Mobile Dev',
    layer: 'foundation',
    officialUrl: 'https://kotlinlang.org/multiplatform',
    freeTierDetails: 'Free/OSS',
    tags: ['mobile-dev']
  },
  {
    id: 'compose-multiplatform',
    name: 'Compose Multiplatform',
    description: 'JetBrains cross-platform UI',
    category: 'Mobile Dev',
    layer: 'foundation',
    officialUrl: 'https://jetbrains.com/lp/compose-multiplatform',
    freeTierDetails: 'Free/OSS',
    tags: ['mobile-dev']
  },
  {
    id: 'framework7',
    name: 'Framework7',
    description: 'HTML framework for mobile apps',
    category: 'Mobile Dev',
    layer: 'foundation',
    officialUrl: 'https://framework7.io',
    freeTierDetails: 'Free/OSS',
    tags: ['mobile-dev']
  },
  {
    id: 'cordova',
    name: 'Cordova',
    description: 'Apache HTML mobile framework',
    category: 'Mobile Dev',
    layer: 'foundation',
    officialUrl: 'https://cordova.apache.org',
    freeTierDetails: 'Free/OSS',
    tags: ['mobile-dev']
  },
  {
    id: 'tauri-mobile',
    name: 'Tauri (mobile)',
    description: 'Rust desktop and mobile apps',
    category: 'Mobile Dev',
    layer: 'foundation',
    officialUrl: 'https://tauri.app',
    freeTierDetails: 'Free/OSS',
    tags: ['mobile-dev']
  },
  {
    id: 'quasar-framework',
    name: 'Quasar Framework',
    description: 'Vue.js for all platforms',
    category: 'Mobile Dev',
    layer: 'foundation',
    officialUrl: 'https://quasar.dev',
    freeTierDetails: 'Free/OSS',
    tags: ['mobile-dev']
  },
  {
    id: 'firebase',
    name: 'Firebase',
    description: 'Google\'s BaaS platform',
    category: 'Backend (BaaS)',
    layer: 'foundation',
    officialUrl: 'https://firebase.google.com',
    freeTierDetails: 'Freemium',
    tags: ['backend-baas-']
  },
  {
    id: 'supabase',
    name: 'Supabase',
    description: 'Open-source Firebase alternative',
    category: 'Backend (BaaS)',
    layer: 'foundation',
    officialUrl: 'https://supabase.com',
    freeTierDetails: 'Freemium',
    tags: ['backend-baas-']
  },
  {
    id: 'appwrite',
    name: 'Appwrite',
    description: 'Open-source BaaS',
    category: 'Backend (BaaS)',
    layer: 'foundation',
    officialUrl: 'https://appwrite.io',
    freeTierDetails: 'Free/OSS',
    tags: ['backend-baas-']
  },
  {
    id: 'parse-platform',
    name: 'Parse Platform',
    description: 'Open-source BaaS',
    category: 'Backend (BaaS)',
    layer: 'foundation',
    officialUrl: 'https://parseplatform.org',
    freeTierDetails: 'Free/OSS',
    tags: ['backend-baas-']
  },
  {
    id: 'aws-amplify',
    name: 'AWS Amplify',
    description: 'AWS BaaS for mobile/web',
    category: 'Backend (BaaS)',
    layer: 'foundation',
    officialUrl: 'https://aws.amazon.com/amplify',
    freeTierDetails: 'Freemium',
    tags: ['backend-baas-']
  },
  {
    id: 'back4app',
    name: 'Back4App',
    description: 'Cloud BaaS based on Parse',
    category: 'Backend (BaaS)',
    layer: 'foundation',
    officialUrl: 'https://back4app.com',
    freeTierDetails: 'Freemium',
    tags: ['backend-baas-']
  },
  {
    id: 'backendless',
    name: 'Backendless',
    description: 'No-code/low-code BaaS',
    category: 'Backend (BaaS)',
    layer: 'foundation',
    officialUrl: 'https://backendless.com',
    freeTierDetails: 'Freemium',
    tags: ['backend-baas-']
  },
  {
    id: 'nhost',
    name: 'Nhost',
    description: 'Open-source BaaS with GraphQL',
    category: 'Backend (BaaS)',
    layer: 'foundation',
    officialUrl: 'https://nhost.io',
    freeTierDetails: 'Freemium',
    tags: ['backend-baas-']
  },
  {
    id: 'hasura-cloud',
    name: 'Hasura Cloud',
    description: 'GraphQL BaaS',
    category: 'Backend (BaaS)',
    layer: 'foundation',
    officialUrl: 'https://hasura.io/cloud',
    freeTierDetails: 'Freemium',
    tags: ['backend-baas-']
  },
  {
    id: 'convex',
    name: 'Convex',
    description: 'Reactive serverless database',
    category: 'Backend (BaaS)',
    layer: 'foundation',
    officialUrl: 'https://convex.dev',
    freeTierDetails: 'Freemium',
    tags: ['backend-baas-']
  },
  {
    id: 'pocketbase',
    name: 'Pocketbase',
    description: 'One-file open-source BaaS',
    category: 'Backend (BaaS)',
    layer: 'foundation',
    officialUrl: 'https://pocketbase.io',
    freeTierDetails: 'Free/OSS',
    tags: ['backend-baas-']
  },
  {
    id: 'xano',
    name: 'Xano',
    description: 'No-code backend builder',
    category: 'Backend (BaaS)',
    layer: 'foundation',
    officialUrl: 'https://xano.com',
    freeTierDetails: 'Freemium',
    tags: ['backend-baas-']
  },
  {
    id: 'directus',
    name: 'Directus',
    description: 'Open-source data platform',
    category: 'Backend (BaaS)',
    layer: 'foundation',
    officialUrl: 'https://directus.io',
    freeTierDetails: 'Free/OSS',
    tags: ['backend-baas-']
  },
  {
    id: 'strapi',
    name: 'Strapi',
    description: 'Open-source headless CMS/BaaS',
    category: 'Backend (BaaS)',
    layer: 'foundation',
    officialUrl: 'https://strapi.io',
    freeTierDetails: 'Free/OSS',
    tags: ['backend-baas-']
  },
  {
    id: 'payload-cms',
    name: 'Payload CMS',
    description: 'Code-first headless CMS',
    category: 'Backend (BaaS)',
    layer: 'foundation',
    officialUrl: 'https://payloadcms.com',
    freeTierDetails: 'Free/OSS',
    tags: ['backend-baas-']
  },
  {
    id: 'apple-app-store-connect',
    name: 'Apple App Store Connect',
    description: 'iOS app distribution',
    category: 'App Distribution',
    layer: 'foundation',
    officialUrl: 'https://appstoreconnect.apple.com',
    freeTierDetails: 'Free',
    tags: ['app-distribution']
  },
  {
    id: 'google-play-console',
    name: 'Google Play Console',
    description: 'Android app distribution',
    category: 'App Distribution',
    layer: 'foundation',
    officialUrl: 'https://play.google.com/console',
    freeTierDetails: 'Free',
    tags: ['app-distribution']
  },
  {
    id: 'testflight',
    name: 'TestFlight',
    description: 'iOS beta testing by Apple',
    category: 'App Distribution',
    layer: 'foundation',
    officialUrl: 'https://developer.apple.com/testflight',
    freeTierDetails: 'Free',
    tags: ['app-distribution']
  },
  {
    id: 'firebase-app-distribution',
    name: 'Firebase App Distribution',
    description: 'Mobile beta testing',
    category: 'App Distribution',
    layer: 'foundation',
    officialUrl: 'https://firebase.google.com/app-distribution',
    freeTierDetails: 'Free',
    tags: ['app-distribution']
  },
  {
    id: 'diawi',
    name: 'Diawi',
    description: 'Mobile app distribution tool',
    category: 'App Distribution',
    layer: 'foundation',
    officialUrl: 'https://diawi.com',
    freeTierDetails: 'Freemium',
    tags: ['app-distribution']
  },
  {
    id: 'crashlytics',
    name: 'Crashlytics',
    description: 'Mobile crash reporting',
    category: 'App Distribution',
    layer: 'foundation',
    officialUrl: 'https://firebase.google.com/crashlytics',
    freeTierDetails: 'Free',
    tags: ['app-distribution']
  },
  {
    id: 'sentry-mobile',
    name: 'Sentry Mobile',
    description: 'Error tracking for mobile',
    category: 'App Distribution',
    layer: 'foundation',
    officialUrl: 'https://sentry.io',
    freeTierDetails: 'Freemium',
    tags: ['app-distribution']
  },
  {
    id: 'instabug',
    name: 'Instabug',
    description: 'Bug reporting in mobile apps',
    category: 'App Distribution',
    layer: 'foundation',
    officialUrl: 'https://instabug.com',
    freeTierDetails: 'Freemium',
    tags: ['app-distribution']
  },
  {
    id: 'shake-sdk',
    name: 'Shake SDK',
    description: 'Bug reporting SDK',
    category: 'App Distribution',
    layer: 'foundation',
    officialUrl: 'https://shakebugs.com',
    freeTierDetails: 'Freemium',
    tags: ['app-distribution']
  },
  {
    id: 'appsflyer',
    name: 'AppsFlyer',
    description: 'Mobile attribution and analytics',
    category: 'App Distribution',
    layer: 'foundation',
    officialUrl: 'https://appsflyer.com',
    freeTierDetails: 'Paid',
    tags: ['app-distribution']
  },
  {
    id: 'adjust',
    name: 'Adjust',
    description: 'Mobile analytics and attribution',
    category: 'App Distribution',
    layer: 'foundation',
    officialUrl: 'https://adjust.com',
    freeTierDetails: 'Paid',
    tags: ['app-distribution']
  },
  {
    id: 'branch',
    name: 'Branch',
    description: 'Deep linking and attribution',
    category: 'App Distribution',
    layer: 'foundation',
    officialUrl: 'https://branch.io',
    freeTierDetails: 'Freemium',
    tags: ['app-distribution']
  },
  {
    id: 'mixpanel',
    name: 'Mixpanel',
    description: 'Product analytics platform',
    category: 'App Distribution',
    layer: 'foundation',
    officialUrl: 'https://mixpanel.com',
    freeTierDetails: 'Freemium',
    tags: ['app-distribution']
  },
  {
    id: 'amplitude',
    name: 'Amplitude',
    description: 'Product analytics and insights',
    category: 'App Distribution',
    layer: 'foundation',
    officialUrl: 'https://amplitude.com',
    freeTierDetails: 'Freemium',
    tags: ['app-distribution']
  },
  {
    id: 'firebase-analytics',
    name: 'Firebase Analytics',
    description: 'Mobile analytics by Google',
    category: 'App Distribution',
    layer: 'foundation',
    officialUrl: 'https://firebase.google.com/analytics',
    freeTierDetails: 'Free',
    tags: ['app-distribution']
  },
  {
    id: 'clevertap',
    name: 'CleverTap',
    description: 'Mobile engagement platform',
    category: 'App Distribution',
    layer: 'foundation',
    officialUrl: 'https://clevertap.com',
    freeTierDetails: 'Paid',
    tags: ['app-distribution']
  },
  {
    id: 'onesignal',
    name: 'OneSignal',
    description: 'Push notifications service',
    category: 'App Distribution',
    layer: 'foundation',
    officialUrl: 'https://onesignal.com',
    freeTierDetails: 'Freemium',
    tags: ['app-distribution']
  },
  {
    id: 'airship',
    name: 'Airship',
    description: 'Mobile engagement platform',
    category: 'App Distribution',
    layer: 'foundation',
    officialUrl: 'https://airship.com',
    freeTierDetails: 'Paid',
    tags: ['app-distribution']
  },
  {
    id: 'braze',
    name: 'Braze',
    description: 'Customer engagement platform',
    category: 'App Distribution',
    layer: 'foundation',
    officialUrl: 'https://braze.com',
    freeTierDetails: 'Paid',
    tags: ['app-distribution']
  },
  {
    id: 'unity',
    name: 'Unity',
    description: 'Most popular cross-platform engine',
    category: 'Game Engines',
    layer: 'foundation',
    officialUrl: 'https://unity.com',
    freeTierDetails: 'Freemium',
    tags: ['game-engines']
  },
  {
    id: 'unreal-engine-5',
    name: 'Unreal Engine 5',
    description: 'AAA game engine by Epic',
    category: 'Game Engines',
    layer: 'foundation',
    officialUrl: 'https://unrealengine.com',
    freeTierDetails: 'Free (rev share)',
    tags: ['game-engines']
  },
  {
    id: 'godot-engine',
    name: 'Godot Engine',
    description: 'Open-source 2D/3D engine',
    category: 'Game Engines',
    layer: 'foundation',
    officialUrl: 'https://godotengine.org',
    freeTierDetails: 'Free/OSS',
    tags: ['game-engines']
  },
  {
    id: 'gamemaker',
    name: 'GameMaker',
    description: '2D game engine by YoYo Games',
    category: 'Game Engines',
    layer: 'foundation',
    officialUrl: 'https://gamemaker.io',
    freeTierDetails: 'Freemium',
    tags: ['game-engines']
  },
  {
    id: 'pygame',
    name: 'Pygame',
    description: 'Python library for games',
    category: 'Game Engines',
    layer: 'foundation',
    officialUrl: 'https://pygame.org',
    freeTierDetails: 'Free/OSS',
    tags: ['game-engines']
  },
  {
    id: 'phaser',
    name: 'Phaser',
    description: '2D HTML5 game framework',
    category: 'Game Engines',
    layer: 'foundation',
    officialUrl: 'https://phaser.io',
    freeTierDetails: 'Free/OSS',
    tags: ['game-engines']
  },
  {
    id: 'construct-3',
    name: 'Construct 3',
    description: 'No-code game builder',
    category: 'Game Engines',
    layer: 'foundation',
    officialUrl: 'https://construct.net',
    freeTierDetails: 'Freemium',
    tags: ['game-engines']
  }
];

// Helper functions
export const getToolsByLayer = (layer: Tool['layer']) => {
  return tools.filter(tool => tool.layer === layer);
};

export const getToolsByCategory = (category: string) => {
  return tools.filter(tool => tool.category === category);
};

export const searchTools = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return tools.filter(tool => 
    tool.name.toLowerCase().includes(lowercaseQuery) ||
    tool.description.toLowerCase().includes(lowercaseQuery) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getAllCategories = () => {
  const categories = new Set(tools.map(tool => tool.category));
  return Array.from(categories).sort();
};

export const getAllTags = () => {
  const tags = new Set(tools.flatMap(tool => tool.tags));
  return Array.from(tags).sort();
};

export const layerInfo = {
  foundation: {
    name: 'Layer 0: Foundation',
    description: 'Essential tools every developer needs to get started',
    color: '#B6FF2E',
    tools: getToolsByLayer('foundation')
  },
  cloud: {
    name: 'Layer 1: Cloud Infrastructure',
    description: 'Cloud platforms and deployment services',
    color: '#00D4FF',
    tools: getToolsByLayer('cloud')
  },
  devops: {
    name: 'Layer 2: DevOps & MLOps',
    description: 'CI/CD, containers, orchestration, and ML operations',
    color: '#FF6B6B',
    tools: getToolsByLayer('devops')
  },
  genai: {
    name: 'Layer 3: GenAI & Data Science',
    description: 'LLMs, vector databases, ML frameworks, and AI APIs',
    color: '#A855F7',
    tools: getToolsByLayer('genai')
  },
  analytics: {
    name: 'Layer 4: Data Analytics',
    description: 'SQL, Python analytics, visualization, and BI tools',
    color: '#F59E0B',
    tools: getToolsByLayer('analytics')
  },
  fullstack: {
    name: 'Layer 5: Full Stack Development',
    description: 'Frontend, backend, databases, and deployment frameworks',
    color: '#EC4899',
    tools: getToolsByLayer('fullstack')
  }
};

export const totalToolsCount = tools.length;