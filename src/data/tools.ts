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