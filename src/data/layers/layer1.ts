import type { LayerContent } from '../manualContent';

export const layer1Content: LayerContent = {
  id: 'cloud',
  title: 'Layer 1: Cloud Infrastructure Setup (T1)',
  subtitle: 'Cloud platforms and deployment services',
  description: 'AWS, GCP, Azure, Oracle Cloud, Vercel, Railway, Render - Deploy anywhere with generous free tiers.',
  intro: `Cloud platforms provide on-demand computing resources—servers, databases, storage—without buying physical hardware. The "free tier" model lets you learn and build production apps at zero cost.`,
  tools: [
    {
      id: 'aws',
      name: 'AWS Free Tier Setup',
      description: 'Amazon Web Services - market leader with comprehensive service catalog',
      officialUrl: 'https://aws.amazon.com/free',
      freeTier: '12 months free tier + always free services (Lambda, DynamoDB, S3 5GB)',
      tags: ['cloud', 'aws', 'infrastructure'],
      sections: [
        {
          title: 'Create AWS Account',
          steps: [
            'Visit https://aws.amazon.com/free',
            'Click "Create a Free Account"',
            'Enter email (use dedicated email for AWS)',
            'Choose AWS account name (e.g., "Rajeev-Dev-Account")',
            'Select "Personal" account type',
            'Fill contact information (accurate—used for billing)',
            'Enter credit/debit card details:',
            '  - $1 verification charge (refunded immediately)',
            '  - Required for identity verification only',
            '  - Won\'t be charged if you stay in free tier limits',
            'Phone verification (OTP sent to your number)',
            'Select "Basic Support - Free" plan',
            'Account creation complete (takes 5-10 minutes for activation)'
          ]
        },
        {
          title: 'CRITICAL: Set Up Billing Alerts',
          content: 'This step prevents surprise charges—do immediately after account creation!',
          steps: [
            'Sign in to AWS Console: https://console.aws.amazon.com',
            'Search bar → type "Billing" → click "Billing"',
            'Left sidebar → "Billing Preferences"',
            'Enable these options:',
            '  - "Receive Free Tier Usage Alerts"',
            '  - "Receive Billing Alerts"',
            'Enter your email address',
            'Click "Save preferences"'
          ]
        },
        {
          title: 'Set Up Zero Spend Budget',
          steps: [
            'AWS Console → search "Budgets"',
            'Click "Create budget"',
            'Select "Customize (advanced)"',
            'Budget type: "Cost budget"',
            'Name: "Zero-Spend-Alert"',
            'Period: Monthly',
            'Budgeted amount: $0.01 (one cent)',
            'Click "Next"',
            'Threshold: 100% of budgeted amount',
            'Alert contact: Your email',
            'Click "Create budget"'
          ],
          notes: ['You\'ll now receive email if spending exceeds $0.01—instant warning of free tier violations.']
        },
        {
          title: 'Enable MFA (Multi-Factor Authentication)',
          content: 'Critical security measure:',
          steps: [
            'AWS Console top-right → Click account name → "Security credentials"',
            'Scroll to "Multi-factor authentication (MFA)"',
            'Click "Assign MFA device"',
            'Device name: "MyPhoneMFA"',
            'MFA device type: "Authenticator app"',
            'Click "Next"',
            'Open Google Authenticator / Microsoft Authenticator on phone',
            'Scan QR code shown on screen',
            'Enter two consecutive MFA codes',
            'Click "Add MFA"'
          ],
          notes: ['Root account now requires phone code for login—much more secure.']
        },
        {
          title: 'Create IAM User (Best Practice)',
          content: 'Never use root account for daily operations. Create IAM user instead:',
          steps: [
            'AWS Console → search "IAM"',
            'Left sidebar → "Users" → "Create user"',
            'Username: "rajeev-admin" (or your name)',
            'Check "Provide user access to AWS Management Console"',
            'Password: Choose "Custom password", create strong password',
            'Uncheck "Users must create a new password at next sign-in"',
            'Click "Next"',
            'Permissions: "Attach policies directly"',
            'Search and check: "AdministratorAccess"',
            'Click "Next" → "Create user"',
            'SAVE the Console sign-in URL',
            'Save username and password securely'
          ],
          notes: ['From now on, always log in as IAM user, not root account.']
        },
        {
          title: 'Install AWS CLI',
          code: [
            {
              language: 'bash',
              code: `# macOS
brew install awscli

# Linux
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# Verify
aws --version
# Should show aws-cli/2.x`
            }
          ]
        },
        {
          title: 'Configure AWS CLI',
          steps: [
            'AWS Console → IAM → Users → Click your IAM user',
            '"Security credentials" tab',
            'Scroll to "Access keys"',
            'Click "Create access key"',
            'Use case: "Command Line Interface (CLI)"',
            'Check acknowledgment → "Next"',
            'Description: "My laptop CLI"',
            'Click "Create access key"',
            'Copy both Access Key ID and Secret Access Key',
            'IMPORTANT: Secret key shown only once—save securely!',
            'Click "Download .csv file" (backup)'
          ],
          code: [
            {
              language: 'bash',
              code: `aws configure
# AWS Access Key ID: [paste your key]
# AWS Secret Access Key: [paste secret]
# Default region name: us-east-1
# Default output format: json

# Test
aws s3 ls
aws sts get-caller-identity`
            }
          ]
        },
        {
          title: 'AWS Free Tier Services Overview',
          table: {
            headers: ['Service', 'Free Tier Limit', 'Duration'],
            rows: [
              ['EC2 (Virtual Server)', '750 hrs/month t2.micro', '12 months'],
              ['S3 (Storage)', '5 GB standard storage', '12 months'],
              ['RDS (Database)', '750 hrs db.t2.micro', '12 months'],
              ['Lambda (Serverless)', '1M requests/month', 'Always Free'],
              ['DynamoDB (NoSQL)', '25 GB storage', 'Always Free'],
              ['CloudFront (CDN)', '1 TB data transfer out', '12 months'],
              ['SNS (Notifications)', '1M publishes', 'Always Free'],
              ['SQS (Queuing)', '1M requests', 'Always Free']
            ]
          }
        },
        {
          title: 'Launch First EC2 Instance',
          steps: [
            'AWS Console → search "EC2"',
            'Click "Launch instance"',
            'Name: my-first-server',
            'AMI: Amazon Linux 2023 (free tier eligible)',
            'Instance type: t2.micro (free tier eligible—only this type!)',
            'Key pair: Click "Create new key pair"',
            '  - Name: my-ec2-key, Type: RSA, Format: .pem',
            '  - Click "Create key pair" → File downloads—save securely!',
            'Network: Keep defaults',
            'Storage: 8 GiB gp3 (free tier includes 30 GB total)',
            'Review → Click "Launch instance"',
            'Wait 2 minutes for instance to start'
          ]
        },
        {
          title: 'Connect to EC2 Instance',
          code: [
            {
              language: 'bash',
              code: `# macOS/Linux
chmod 400 ~/Downloads/my-ec2-key.pem
ssh -i ~/Downloads/my-ec2-key.pem ec2-user@<PUBLIC_IP>

# Inside server:
cat /etc/os-release
sudo yum update -y
sudo yum install -y nodejs npm
node --version`
            }
          ],
          warnings: ['IMPORTANT: Stop instance when not using to conserve free tier hours!']
        },
        {
          title: 'AWS S3 (Storage) Quick Setup',
          steps: [
            'AWS Console → search "S3"',
            'Click "Create bucket"',
            'Bucket name: my-unique-bucket-rajeev-2026 (must be globally unique)',
            'Region: us-east-1',
            'Keep all defaults',
            'Click "Create bucket"'
          ],
          code: [
            {
              language: 'bash',
              code: `echo "Hello from S3!" > test.txt
aws s3 cp test.txt s3://my-unique-bucket-rajeev-2026/
aws s3 ls s3://my-unique-bucket-rajeev-2026/`
            }
          ]
        }
      ]
    },
    {
      id: 'gcp',
      name: 'Google Cloud Platform (GCP)',
      description: 'Suite of cloud computing services by Google with $300 free credits',
      officialUrl: 'https://cloud.google.com/free',
      freeTier: '$300 free credits for 90 days + always-free tier',
      tags: ['cloud', 'google', 'gcp'],
      sections: [
        {
          title: 'Create GCP Account',
          steps: [
            'Visit https://cloud.google.com/free',
            'Click "Get started for free"',
            'Sign in with Google account',
            'Country: Select your country',
            'Account type: "Individual"',
            'Payment verification: Enter credit/debit card',
            '  - $0 charge for verification',
            '  - Won\'t charge without explicit upgrade',
            'Complete verification',
            'Free trial activated: $300 credit shown in console'
          ]
        },
        {
          title: 'Install gcloud CLI',
          code: [
            {
              language: 'bash',
              code: `# macOS
brew install google-cloud-sdk

# Linux
curl https://sdk.cloud.google.com | bash
exec -l $SHELL

gcloud --version`
            }
          ]
        },
        {
          title: 'Authenticate gcloud',
          code: [
            {
              language: 'bash',
              code: `gcloud auth login
gcloud config set project PROJECT_ID
gcloud config set compute/region us-central1

# Test
gcloud compute zones list`
            }
          ]
        },
        {
          title: 'Launch Compute Engine VM',
          steps: [
            'GCP Console → "Compute Engine" → "VM instances"',
            'Click "Create Instance"',
            'Name: my-first-vm',
            'Region: us-central1, Zone: us-central1-a',
            'Machine type: e2-micro (free tier eligible)',
            'Boot disk: Debian GNU/Linux 12, 30 GB',
            'Firewall: Check "Allow HTTP traffic"',
            'Click "Create"'
          ]
        },
        {
          title: 'Connect via SSH',
          code: [
            {
              language: 'bash',
              code: `# Click "SSH" button in console (browser SSH)
# Or via CLI:
gcloud compute ssh my-first-vm --zone=us-central1-a

# Install nginx test
sudo apt update
sudo apt install -y nginx
sudo systemctl start nginx

# Visit External IP - should show nginx welcome page!`
            }
          ]
        }
      ]
    },
    {
      id: 'oci',
      name: 'Oracle Cloud Infrastructure (OCI)',
      description: 'Oracle offers the most generous permanent free tier—no time limit!',
      officialUrl: 'https://www.oracle.com/cloud/free',
      freeTier: 'Always Free: 2 AMD VMs + 4 ARM cores + 24GB RAM + 200GB storage - FOREVER!',
      tags: ['cloud', 'oracle', 'free-tier'],
      sections: [
        {
          title: 'Create OCI Account',
          steps: [
            'Visit https://www.oracle.com/cloud/free',
            'Click "Start for free"',
            'Enter name and email',
            'Email verification',
            'Cloud Account Name: Choose unique name (becomes subdomain)',
            'Home Region: Choose carefully—cannot change later!',
            '  - India: ap-mumbai-1 (Mumbai)',
            '  - US: us-ashburn-1 (Virginia)',
            'Payment verification: $0-1 verification charge',
            'Account ready in 5-10 minutes'
          ]
        },
        {
          title: 'OCI Always Free Resources',
          table: {
            headers: ['Resource', 'Free Limit'],
            rows: [
              ['Compute VMs', '2x AMD VMs (1/8 OCPU, 1 GB RAM each)'],
              ['Ampere A1', '4 OCPU, 24 GB RAM total (Arm processor)'],
              ['Block Storage', '200 GB total'],
              ['Object Storage', '20 GB total'],
              ['Outbound Data', '10 TB/month'],
              ['Autonomous Database', '2 databases (20 GB each)'],
              ['Load Balancer', '1 instance (10 Mbps)']
            ]
          },
          notes: ['This is exceptional value—4 ARM cores and 24 GB RAM free forever!']
        },
        {
          title: 'Create Compute Instance',
          steps: [
            'Sign in: https://cloud.oracle.com',
            'Menu → "Compute" → "Instances"',
            'Click "Create Instance"',
            'Name: my-free-server',
            'Image: Ubuntu 22.04',
            'Shape: VM.Standard.A1.Flex',
            '  - OCPUs: 4, Memory: 24 GB',
            'SSH Key: Paste your public SSH key',
            'Click "Create"'
          ]
        },
        {
          title: 'Connect to Instance',
          code: [
            {
              language: 'bash',
              code: `ssh ubuntu@<PUBLIC_IP>

# You now have a powerful 4-core, 24 GB RAM server—completely free, forever!`
            }
          ]
        }
      ]
    },
    {
      id: 'vercel',
      name: 'Vercel (Frontend Deployment)',
      description: 'Platform for frontend frameworks and static sites by the creators of Next.js',
      officialUrl: 'https://vercel.com',
      freeTier: 'Unlimited hobby projects, 100GB bandwidth/month - No credit card required!',
      tags: ['deployment', 'frontend', 'nextjs'],
      sections: [
        {
          title: 'Create Vercel Account',
          steps: [
            'Visit https://vercel.com/signup',
            'Click "Sign Up"',
            'Choose: "Continue with GitHub" (recommended)',
            'Authorize Vercel to access GitHub',
            'Hobby plan selected automatically (free forever)',
            'No credit card required!'
          ]
        },
        {
          title: 'Deploy First App (60 Seconds!)',
          steps: [
            'Create GitHub repo with any web project (HTML, React, Next.js)',
            'Vercel Dashboard → Click "Add New Project"',
            'Click "Import" next to your repository',
            'Framework detected automatically',
            'Click "Deploy"',
            'Wait 1-2 minutes',
            'Live URL provided: https://yourproject.vercel.app'
          ],
          notes: ['Every git push auto-deploys: Vercel watches GitHub repo, redeploys on every push!']
        },
        {
          title: 'Deploy via CLI',
          code: [
            {
              language: 'bash',
              code: `npm i -g vercel
vercel login
cd your-project
vercel
# Answer prompts (mostly just press Enter)
# Project deployed instantly!`
            }
          ]
        }
      ]
    },
    {
      id: 'railway',
      name: 'Railway (Backend Deployment)',
      description: 'Platform to build, ship, and scale applications with backend + database support',
      officialUrl: 'https://railway.app',
      freeTier: '$5 credit/month + 500 hours (no card required!)',
      tags: ['deployment', 'backend', 'fullstack'],
      sections: [
        {
          title: 'Create Railway Account',
          steps: [
            'Visit https://railway.app',
            'Click "Sign up"',
            'Choose "GitHub" login',
            'Authorize Railway',
            'Free trial: $5 credit/month + 500 hours'
          ]
        },
        {
          title: 'Deploy Backend App',
          steps: [
            'Railway Dashboard → "New Project"',
            '"Deploy from GitHub repo"',
            'Select repository (Node.js/Python/etc.)',
            'Railway detects language automatically',
            'Generates domain: https://yourproject.up.railway.app',
            'Click "Deploy"',
            'Backend live in 2-3 minutes!'
          ]
        },
        {
          title: 'Add Database',
          steps: [
            'Inside project → Click "New"',
            'Select "Database" → Choose PostgreSQL/MongoDB/Redis',
            'Database provisions in 30 seconds',
            'Connection string auto-injected as environment variable'
          ],
          notes: ['Railway Strength: One platform for backend + database + cron jobs!']
        }
      ]
    }
  ]
};