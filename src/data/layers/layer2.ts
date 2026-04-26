import type { LayerContent } from '../manualContent';

export const layer2Content: LayerContent = {
  id: 'devops',
  title: 'Layer 2: DevOps & MLOps Tools (T2)',
  subtitle: 'CI/CD, containers, orchestration, and ML operations',
  description: 'Docker Compose, GitHub Actions, Kubernetes, DVC, Weights & Biases - Automate everything.',
  intro: `DevOps integrates development and operations through automated CI/CD pipelines, infrastructure as code, and continuous monitoring. MLOps extends these practices to machine learning workflows.`,
  tools: [
    {
      id: 'docker-compose',
      name: 'Docker Compose (Multi-Container Apps)',
      description: 'Tool for defining and running multi-container Docker applications with one command',
      officialUrl: 'https://docs.docker.com/compose/',
      freeTier: 'Free, included with Docker Desktop',
      tags: ['docker', 'containers', 'orchestration'],
      sections: [
        {
          title: 'Verify Docker Compose Installation',
          code: [
            {
              language: 'bash',
              code: `docker compose version
# Should show version 2.x (bundled with Docker Desktop)

# If not installed (Linux):
sudo apt install docker-compose-plugin`
            }
          ]
        },
        {
          title: 'First Docker Compose Project',
          content: 'Create full-stack app (frontend + backend + database):',
          code: [
            {
              language: 'yaml',
              code: `# docker-compose.yml
version: '3.8'

services:
  frontend:
    image: nginx:alpine
    ports:
      - "3000:80"
    volumes:
      - ./frontend:/usr/share/nginx/html

  backend:
    image: node:20-alpine
    working_dir: /app
    command: node server.js
    ports:
      - "5000:5000"
    volumes:
      - ./backend:/app
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`
            },
            {
              language: 'bash',
              code: `# Create directories
mkdir frontend backend
echo "<h1>Frontend works!</h1>" > frontend/index.html

# backend/server.js
import express from 'express';
const app = express();
app.get('/api', (req, res) => res.json({message: "Backend works!"}));
app.listen(5000, () => console.log('Backend on port 5000'));

# Start all services
docker compose up

# Open:
# - Frontend: http://localhost:3000
# - Backend: http://localhost:5000/api

# Stop: Ctrl+C, then docker compose down`
            }
          ]
        }
      ]
    },
    {
      id: 'github-actions',
      name: 'GitHub Actions (CI/CD)',
      description: 'Automate testing and deployment on every git push',
      officialUrl: 'https://github.com/features/actions',
      freeTier: '2,000 minutes/month for private repos, unlimited for public',
      tags: ['cicd', 'automation', 'github'],
      sections: [
        {
          title: 'First GitHub Actions Workflow',
          steps: [
            'Create GitHub repo',
            'Clone locally',
            'Create workflow file: .github/workflows/deploy.yml',
            'Get Vercel token: Vercel Dashboard → Settings → Tokens',
            'Add secrets to GitHub: Repo → Settings → Secrets → Actions',
            'Add: VERCEL_TOKEN, ORG_ID, PROJECT_ID',
            'Push to GitHub',
            'Go to repo → "Actions" tab → Watch deployment!'
          ],
          code: [
            {
              language: 'yaml',
              code: `# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  test-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm install
      
      - name: Run tests
        run: npm test
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.ORG_ID }}
          vercel-project-id: \${{ secrets.PROJECT_ID }}`
            }
          ]
        },
        {
          title: 'Node.js CI Template',
          code: [
            {
              language: 'yaml',
              code: `name: Node.js CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm test
      - run: npm run build`
            }
          ]
        },
        {
          title: 'Python CI Template',
          code: [
            {
              language: 'yaml',
              code: `name: Python CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'
      - run: pip install -r requirements.txt
      - run: pytest`
            }
          ]
        }
      ]
    },
    {
      id: 'kubernetes',
      name: 'Kubernetes Basics (Minikube)',
      description: 'Container orchestration platform for automating deployment, scaling, and management',
      officialUrl: 'https://kubernetes.io',
      freeTier: 'Free, open source (Apache 2.0)',
      tags: ['containers', 'orchestration', 'google'],
      sections: [
        {
          title: 'Install Minikube',
          code: [
            {
              language: 'bash',
              code: `# macOS
brew install minikube

# Linux
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube`
            }
          ]
        },
        {
          title: 'Install kubectl',
          code: [
            {
              language: 'bash',
              code: `# macOS
brew install kubectl

# Linux
sudo snap install kubectl --classic`
            }
          ]
        },
        {
          title: 'Start Minikube Cluster',
          code: [
            {
              language: 'bash',
              code: `minikube start

# Verify
kubectl cluster-info
kubectl get nodes
# Should show minikube node in Ready state`
            }
          ]
        },
        {
          title: 'Deploy First App',
          code: [
            {
              language: 'bash',
              code: `# Create deployment
kubectl create deployment hello-node --image=k8s.gcr.io/echoserver:1.4

# Expose as service
kubectl expose deployment hello-node --type=LoadBalancer --port=8080

# Check status
kubectl get deployments
kubectl get pods
kubectl get services

# Access service (opens browser)
minikube service hello-node

# Dashboard
minikube dashboard

# Stop when done
minikube stop`
            }
          ]
        }
      ]
    },
    {
      id: 'dvc',
      name: 'DVC (Data Version Control)',
      description: 'Git for data and models - track datasets and models like Git tracks code',
      officialUrl: 'https://dvc.org',
      freeTier: 'Free, open source (Apache 2.0)',
      tags: ['mlops', 'version-control', 'data'],
      sections: [
        {
          title: 'Install DVC',
          code: [
            {
              language: 'bash',
              code: 'pip install dvc'
            }
          ]
        },
        {
          title: 'Initialize DVC Project',
          code: [
            {
              language: 'bash',
              code: `# In your Git repo
git init
dvc init
git add .dvc .dvcignore
git commit -m "Initialize DVC"`
            }
          ]
        },
        {
          title: 'Track Large Dataset',
          code: [
            {
              language: 'bash',
              code: `# Add large file to DVC (not Git)
dvc add data/large-dataset.csv

# DVC creates .dvc file (small pointer)
git add data/large-dataset.csv.dvc data/.gitignore
git commit -m "Track dataset with DVC"`
            }
          ]
        },
        {
          title: 'Configure Remote Storage (AWS S3)',
          code: [
            {
              language: 'bash',
              code: `# Add S3 bucket as remote
dvc remote add -d myremote s3://my-bucket/dvcstore

# Configure AWS credentials
dvc remote modify myremote credentialpath ~/.aws/credentials

# Push data to S3
dvc push`
            }
          ]
        },
        {
          title: 'Collaborator Workflow',
          code: [
            {
              language: 'bash',
              code: `# Clone repo
git clone <repo-url>
cd repo

# Pull data tracked by DVC
dvc pull
# Large files downloaded from remote storage`
            }
          ]
        }
      ]
    },
    {
      id: 'weights-biases',
      name: 'Weights & Biases (Experiment Tracking)',
      description: 'MLOps platform for experiment tracking, hyperparameter tuning, and model management',
      officialUrl: 'https://wandb.ai',
      freeTier: 'Free for academic and personal use, unlimited projects',
      tags: ['mlops', 'experiment-tracking', 'visualization'],
      sections: [
        {
          title: 'Create W&B Account',
          steps: [
            'Visit https://wandb.ai/signup',
            'Sign up with email or GitHub',
            'Free tier: Unlimited personal projects',
            'Dashboard opens'
          ]
        },
        {
          title: 'Install and Login',
          code: [
            {
              language: 'bash',
              code: `pip install wandb
wandb login
# Browser opens, copy API key, paste in terminal`
            }
          ]
        },
        {
          title: 'First W&B Experiment',
          code: [
            {
              language: 'python',
              code: `import wandb
import random

# Initialize run
wandb.init(project="my-first-project", config={
    "learning_rate": 0.01,
    "epochs": 10,
    "batch_size": 32
})

# Simulate training loop
for epoch in range(10):
    loss = random.random()
    accuracy = random.random()
    
    # Log metrics
    wandb.log({
        "epoch": epoch,
        "loss": loss,
        "accuracy": accuracy
    })

wandb.finish()`
            }
          ],
          notes: ['Run script → Check W&B dashboard → See beautiful visualizations!']
        },
        {
          title: 'Track PyTorch Training',
          code: [
            {
              language: 'python',
              code: `import torch
import torch.nn as nn
import wandb

wandb.init(project="pytorch-mnist")

model = nn.Sequential(
    nn.Linear(784, 128),
    nn.ReLU(),
    nn.Linear(128, 10)
)

# Watch model (track gradients)
wandb.watch(model, log="all")

# Training loop
for epoch in range(10):
    loss = train_one_epoch(model, train_loader)
    wandb.log({"train_loss": loss})

wandb.finish()`
            }
          ],
          notes: ['W&B auto-logs: gradients, system metrics (GPU/CPU), model architecture!']
        }
      ]
    }
  ]
};