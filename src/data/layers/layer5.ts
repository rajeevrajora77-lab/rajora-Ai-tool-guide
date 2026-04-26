import type { LayerContent } from '../manualContent';

export const layer5Content: LayerContent = {
  id: 'fullstack',
  title: 'Layer 5: Full Stack Development (T5)',
  subtitle: 'Frontend, backend, databases, and deployment frameworks',
  description: 'Next.js, React, Supabase, NextAuth, shadcn/ui - Ship complete products.',
  intro: `Modern full stack development requires skills across frontend, backend, databases, and deployment—the T-shaped skill model. This layer covers everything you need to ship a complete product.`,
  tools: [
    {
      id: 'nextjs',
      name: 'Next.js Full Stack',
      description: 'React framework for production with SSR, SSG, and API routes',
      officialUrl: 'https://nextjs.org',
      freeTier: 'Free, open source (MIT)',
      tags: ['react', 'ssr', 'vercel'],
      sections: [
        {
          title: 'Create Next.js Project',
          code: [
            {
              language: 'bash',
              code: `npx create-next-app@latest my-app

# Prompts (recommended answers):
# TypeScript? Yes
# ESLint? Yes  
# Tailwind CSS? Yes
# src/ directory? No
# App Router? Yes
# Import alias? No

cd my-app
npm run dev
# Open http://localhost:3000`
            }
          ]
        },
        {
          title: 'Project Structure',
          code: [
            {
              language: 'text',
              code: `my-app/
├── app/
│   ├── page.tsx          ← Home page
│   ├── layout.tsx        ← Root layout
│   ├── api/              ← API routes
│   │   └── hello/
│   │       └── route.ts  ← API endpoint
│   └── dashboard/
│       └── page.tsx      ← /dashboard route
├── public/               ← Static files
├── components/           ← Reusable UI components
└── lib/                  ← Utilities, DB connections`
            }
          ]
        },
        {
          title: 'Create First Page',
          code: [
            {
              language: 'tsx',
              code: `// app/about/page.tsx
export default function About() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">About Page</h1>
      <p>This is the about page.</p>
    </div>
  )
}`
            }
          ],
          notes: ['Visit: http://localhost:3000/about']
        },
        {
          title: 'Create API Route',
          code: [
            {
              language: 'tsx',
              code: `// app/api/users/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]
  
  return NextResponse.json(users)
}

export async function POST(request: Request) {
  const body = await request.json()
  return NextResponse.json({ success: true, data: body })
}`
            }
          ],
          notes: ['Test: http://localhost:3000/api/users']
        },
        {
          title: 'Connect to Database (Prisma + PostgreSQL)',
          code: [
            {
              language: 'bash',
              code: `npm install prisma @prisma/client
npx prisma init`
            },
            {
              language: 'text',
              code: `# .env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"`
            },
            {
              language: 'prisma',
              code: `// prisma/schema.prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}`
            },
            {
              language: 'bash',
              code: `npx prisma migrate dev --name init
npx prisma generate`
            },
            {
              language: 'tsx',
              code: `// app/api/users/route.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}`
            }
          ]
        },
        {
          title: 'Deploy to Vercel',
          code: [
            {
              language: 'bash',
              code: `npm i -g vercel
vercel login
vercel --prod`
            }
          ],
          notes: ['Or push to GitHub → Connect repo in Vercel dashboard → Auto-deploy on every push!']
        }
      ]
    },
    {
      id: 'mern',
      name: 'MERN Stack',
      description: 'MongoDB + Express + React + Node.js - Popular full stack combination',
      officialUrl: 'https://mern.io',
      freeTier: 'All components free and open source',
      tags: ['mongodb', 'express', 'react', 'nodejs'],
      sections: [
        {
          title: 'Backend Setup (Node.js + Express)',
          code: [
            {
              language: 'bash',
              code: `mkdir mern-backend
cd mern-backend
npm init -y
npm install express mongoose cors dotenv`
            },
            {
              language: 'javascript',
              code: `// server.js
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err))

app.get('/api/users', async (req, res) => {
  res.json([{ id: 1, name: 'Alice' }])
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`))`
            },
            {
              language: 'text',
              code: `# .env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mydb
PORT=5000`
            },
            {
              language: 'bash',
              code: 'node server.js'
            }
          ]
        },
        {
          title: 'Frontend Setup (React with Vite)',
          code: [
            {
              language: 'bash',
              code: `npm create vite@latest mern-frontend -- --template react
cd mern-frontend
npm install
npm install axios
npm run dev`
            },
            {
              language: 'jsx',
              code: `// src/App.jsx
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App`
            }
          ]
        },
        {
          title: 'MongoDB Atlas Setup (Free Cloud Database)',
          steps: [
            'Sign up: https://www.mongodb.com/cloud/atlas/register',
            'Create cluster: Shared (free tier), AWS, closest region',
            'Wait 5 minutes for provisioning',
            'Security: Create database user, Network Access → Add IP: 0.0.0.0/0',
            'Connect: Click "Connect" → "Drivers" → Copy connection string',
            'Add to .env file'
          ],
          notes: ['Free tier: 512 MB storage forever!']
        }
      ]
    },
    {
      id: 'supabase',
      name: 'Supabase (Backend as a Service)',
      description: 'Open source Firebase alternative with PostgreSQL',
      officialUrl: 'https://supabase.com',
      freeTier: '500MB database, 1GB storage, 2GB transfer/month',
      tags: ['database', 'postgresql', 'firebase-alternative'],
      sections: [
        {
          title: 'Create Supabase Project',
          steps: [
            'Sign up with GitHub: https://supabase.com',
            '"New project"',
            'Organization: Create new',
            'Project name: my-app',
            'Database password: Strong password',
            'Region: Closest to you',
            'Click "Create new project"',
            'Wait 2 minutes for provisioning'
          ]
        },
        {
          title: 'Create Database Table',
          steps: [
            'Supabase Dashboard → "Table Editor"',
            'Click "New table"',
            'Name: todos',
            'Columns: id, task (text), completed (bool), created_at',
            'Click "Save"'
          ]
        },
        {
          title: 'Connect Next.js to Supabase',
          code: [
            {
              language: 'bash',
              code: 'npm install @supabase/supabase-js'
            },
            {
              language: 'text',
              code: `# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key`
            },
            {
              language: 'tsx',
              code: `// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)`
            },
            {
              language: 'tsx',
              code: `// app/todos/page.tsx
'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Todos() {
  const [todos, setTodos] = useState<any[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    const { data } = await supabase
      .from('todos')
      .select('*')
    
    if (data) setTodos(data)
  }

  async function addTodo(task: string) {
    await supabase.from('todos').insert({ task })
    fetchTodos()
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  )
}`
            }
          ]
        },
        {
          title: 'Supabase Includes',
          table: {
            headers: ['Feature', 'Description'],
            rows: [
              ['PostgreSQL database', '500 MB free'],
              ['Authentication', 'Email, Google, GitHub, etc.'],
              ['Storage', '1 GB files'],
              ['Real-time subscriptions', 'Live updates'],
              ['Auto-generated REST API', 'Instant backend'],
              ['Auto-generated GraphQL API', 'Alternative API']
            ]
          }
        }
      ]
    },
    {
      id: 'nextauth',
      name: 'NextAuth.js (Authentication)',
      description: 'Authentication for Next.js applications',
      officialUrl: 'https://next-auth.js.org',
      freeTier: 'Free, open source (ISC)',
      tags: ['nextjs', 'auth', 'oauth'],
      sections: [
        {
          title: 'Install NextAuth',
          code: [
            {
              language: 'bash',
              code: 'npm install next-auth'
            }
          ]
        },
        {
          title: 'Configure NextAuth',
          code: [
            {
              language: 'tsx',
              code: `// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
})

export { handler as GET, handler as POST }`
            }
          ]
        },
        {
          title: 'Get OAuth Credentials (GitHub)',
          steps: [
            'GitHub → Settings → Developer settings → OAuth Apps',
            '"New OAuth App"',
            'Application name: My App',
            'Homepage URL: http://localhost:3000',
            'Callback URL: http://localhost:3000/api/auth/callback/github',
            'Register application',
            'Copy Client ID and Client Secret'
          ]
        },
        {
          title: 'Get OAuth Credentials (Google)',
          steps: [
            'Google Cloud Console: https://console.cloud.google.com',
            'Create project',
            'APIs & Services → Credentials',
            'Create OAuth 2.0 Client ID',
            'Application type: Web application',
            'Authorized redirect URIs: http://localhost:3000/api/auth/callback/google',
            'Copy Client ID and Client Secret'
          ]
        },
        {
          title: 'Environment Variables',
          code: [
            {
              language: 'text',
              code: `# .env.local
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret
NEXTAUTH_SECRET=generate_random_string_here
NEXTAUTH_URL=http://localhost:3000`
            },
            {
              language: 'bash',
              code: `# Generate secret:
openssl rand -base64 32`
            }
          ]
        },
        {
          title: 'Add Login Button',
          code: [
            {
              language: 'tsx',
              code: `// components/LoginButton.tsx
'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function LoginButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        <p>Signed in as {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }

  return (
    <div>
      <button onClick={() => signIn('github')}>
        Sign in with GitHub
      </button>
      <button onClick={() => signIn('google')}>
        Sign in with Google
      </button>
    </div>
  )
}`
            }
          ]
        }
      ]
    },
    {
      id: 'shadcn',
      name: 'shadcn/ui (UI Components)',
      description: 'Beautifully designed components built with Radix UI and Tailwind CSS',
      officialUrl: 'https://ui.shadcn.com',
      freeTier: 'Free, open source (MIT)',
      tags: ['react', 'components', 'tailwind'],
      sections: [
        {
          title: 'Install',
          code: [
            {
              language: 'bash',
              code: `npx shadcn-ui@latest init

# Answer prompts:
# Style: Default
# Base color: Neutral
# CSS variables: Yes`
            }
          ]
        },
        {
          title: 'Add Components',
          code: [
            {
              language: 'bash',
              code: `npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add form`
            }
          ],
          notes: ['Components are copied to your project (not npm packages)—fully customizable!']
        },
        {
          title: 'Use Components',
          code: [
            {
              language: 'tsx',
              code: `import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Page() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold">Card Title</h2>
      <p>Card content here</p>
      <Button>Click me</Button>
    </Card>
  )
}`
            }
          ]
        }
      ]
    },
    {
      id: 'tailwindcss',
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development',
      officialUrl: 'https://tailwindcss.com',
      freeTier: 'Free, open source (MIT)',
      tags: ['css', 'utility-first', 'design'],
      sections: [
        {
          title: 'Install',
          code: [
            {
              language: 'bash',
              code: `npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`
            }
          ]
        },
        {
          title: 'Configure',
          code: [
            {
              language: 'javascript',
              code: `// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`
            },
            {
              language: 'css',
              code: `/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`
            }
          ]
        }
      ]
    }
  ]
};