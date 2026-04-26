import type { LayerContent } from '../manualContent';

export const layer4Content: LayerContent = {
  id: 'analytics',
  title: 'Layer 4: Data Analytics Complete Guide (T4)',
  subtitle: 'SQL, Python analytics, visualization, and BI tools',
  description: 'Pandas, Plotly, Power BI, Looker Studio, Tableau - Turn data into insights.',
  intro: `Data analytics transforms raw data into actionable insights. This layer covers SQL fundamentals, Python data stack, visualization libraries, and business intelligence tools.`,
  tools: [
    {
      id: 'sql',
      name: 'SQL Fundamentals',
      description: 'Structured Query Language for managing and querying relational databases',
      officialUrl: 'https://sqliteonline.com',
      freeTier: '100% free with SQLite or online practice',
      tags: ['sql', 'database', 'query'],
      sections: [
        {
          title: 'SQLite Practice (Zero Setup)',
          content: 'Browser-based practice: Visit https://sqliteonline.com',
          code: [
            {
              language: 'bash',
              code: `# Or install locally
sqlite3 practice.db`
            }
          ]
        },
        {
          title: 'Essential SQL Commands',
          code: [
            {
              language: 'sql',
              code: `-- Create table
CREATE TABLE employees (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    department TEXT,
    salary INTEGER,
    hire_date TEXT
);

-- Insert data
INSERT INTO employees VALUES
    (1, 'Alice', 'Engineering', 75000, '2020-01-15'),
    (2, 'Bob', 'Marketing', 60000, '2019-06-20'),
    (3, 'Charlie', 'Engineering', 80000, '2021-03-10'),
    (4, 'Diana', 'Sales', 65000, '2018-11-05');

-- Basic queries
SELECT * FROM employees;
SELECT name, salary FROM employees WHERE salary > 70000;
SELECT department, COUNT(*) FROM employees GROUP BY department;`
            },
            {
              language: 'sql',
              code: `-- Joins
CREATE TABLE departments (
    id INTEGER PRIMARY KEY,
    name TEXT,
    manager TEXT
);

INSERT INTO departments VALUES
    (1, 'Engineering', 'Frank'),
    (2, 'Marketing', 'Grace'),
    (3, 'Sales', 'Henry');

SELECT e.name, e.department, d.manager
FROM employees e
JOIN departments d ON e.department = d.name;`
            },
            {
              language: 'sql',
              code: `-- Aggregations
SELECT 
    department,
    AVG(salary) as avg_salary,
    MAX(salary) as max_salary,
    COUNT(*) as employee_count
FROM employees
GROUP BY department
HAVING AVG(salary) > 60000;`
            }
          ]
        },
        {
          title: 'PostgreSQL Setup (Production Database)',
          code: [
            {
              language: 'bash',
              code: `# macOS
brew install postgresql@15
brew services start postgresql@15

# Linux
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql

# Create user
createuser myuser --createdb

# Create database
createdb mydb --owner=myuser

# Connect
psql -U myuser -d mydb`
            }
          ],
          notes: ['Or use cloud: Supabase free tier']
        }
      ]
    },
    {
      id: 'pandas',
      name: 'Python Data Analytics Stack',
      description: 'Pandas, NumPy, and essential data manipulation libraries',
      officialUrl: 'https://pandas.pydata.org',
      freeTier: 'Free, open source (BSD)',
      tags: ['python', 'dataframes', 'analysis'],
      sections: [
        {
          title: 'Pandas Essentials',
          code: [
            {
              language: 'python',
              code: `import pandas as pd
import numpy as np

# Create DataFrame
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'Age': [25, 30, 35, 28],
    'Salary': [50000, 60000, 70000, 55000],
    'Department': ['Eng', 'Marketing', 'Eng', 'Sales']
}
df = pd.DataFrame(data)

# Basic operations
print(df.head())
print(df.describe())
print(df.info())

# Filtering
high_earners = df[df['Salary'] > 55000]
print(high_earners)

# Grouping
avg_by_dept = df.groupby('Department')['Salary'].mean()
print(avg_by_dept)

# Sorting
sorted_df = df.sort_values('Salary', ascending=False)

# New columns
df['Salary_Monthly'] = df['Salary'] / 12`
            }
          ]
        },
        {
          title: 'Read/Write Files',
          code: [
            {
              language: 'python',
              code: `# Read from files
df = pd.read_csv('data.csv')
df = pd.read_excel('data.xlsx')
df = pd.read_sql('SELECT * FROM table', connection)

# Export
df.to_csv('output.csv', index=False)
df.to_excel('output.xlsx', index=False)`
            }
          ]
        }
      ]
    },
    {
      id: 'plotly',
      name: 'Data Visualization with Plotly',
      description: 'Interactive graphing library for Python',
      officialUrl: 'https://plotly.com/python/',
      freeTier: 'Free, open source (MIT)',
      tags: ['python', 'interactive', 'web'],
      sections: [
        {
          title: 'Install',
          code: [
            {
              language: 'bash',
              code: 'pip install plotly'
            }
          ]
        },
        {
          title: 'Sample Visualizations',
          code: [
            {
              language: 'python',
              code: `import plotly.express as px
import pandas as pd

# Sample data
df = pd.DataFrame({
    'Month': ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    'Sales': [12000, 15000, 13000, 17000, 19000],
    'Expenses': [8000, 9000, 8500, 10000, 11000]
})

# Line chart
fig = px.line(df, x='Month', y='Sales', title='Monthly Sales')
fig.show()

# Bar chart
fig = px.bar(df, x='Month', y=['Sales', 'Expenses'], 
             title='Sales vs Expenses', barmode='group')
fig.show()

# Pie chart
fig = px.pie(values=[30, 25, 20, 15, 10], 
             names=['A', 'B', 'C', 'D', 'E'],
             title='Market Share')
fig.show()

# Save as HTML
fig.write_html('chart.html')`
            }
          ]
        }
      ]
    },
    {
      id: 'powerbi',
      name: 'Power BI Desktop',
      description: 'Business analytics service by Microsoft',
      officialUrl: 'https://powerbi.microsoft.com/desktop',
      freeTier: 'Desktop app free, Pro $10/user/month',
      tags: ['bi', 'microsoft', 'dashboard'],
      sections: [
        {
          title: 'Download & Install',
          steps: [
            'Download (Windows only, ~500 MB): https://powerbi.microsoft.com/desktop',
            'Run installer',
            'Launch Power BI Desktop',
            'Skip sign-in (can use without account for local files)'
          ]
        },
        {
          title: 'First Dashboard',
          steps: [
            'Click "Get data" → Select "Excel" or "CSV"',
            'Navigate to your data file, click "Load"',
            'Data appears in right panel (Fields)',
            'Drag fields to canvas:',
            '  - Drag "Sales" to create chart',
            '  - Change visual type (bar, line, pie) from Visualizations panel',
            '  - Add filters from Filters panel',
            'Add multiple visuals to create dashboard',
            'Click "Publish" → Save locally or publish to Power BI Service'
          ]
        },
        {
          title: 'DAX Formula Basics',
          content: 'DAX = Data Analysis Expressions (Excel-like formulas)',
          code: [
            {
              language: 'dax',
              code: `// Create calculated column
Profit = Sales[Revenue] - Sales[Cost]

// Create measure
Total Sales = SUM(Sales[Revenue])

// Year-over-year growth
YoY Growth = 
DIVIDE(
    [Total Sales] - CALCULATE([Total Sales], DATEADD('Date'[Date], -1, YEAR)),
    CALCULATE([Total Sales], DATEADD('Date'[Date], -1, YEAR))
)

// Conditional column
Performance = IF(Sales[Revenue] > 10000, "High", "Low")`
            }
          ]
        }
      ]
    },
    {
      id: 'looker-studio',
      name: 'Google Looker Studio',
      description: 'Free business intelligence tool by Google',
      officialUrl: 'https://lookerstudio.google.com',
      freeTier: '100% free, no limits!',
      tags: ['bi', 'google', 'dashboard'],
      sections: [
        {
          title: 'Access Looker Studio',
          steps: [
            'Visit https://lookerstudio.google.com',
            'Sign in with Google account',
            'Click "Create" → "Report"',
            'Add data source:',
            '  - Google Sheets (easiest)',
            '  - BigQuery',
            '  - Google Analytics',
            '  - CSV upload',
            '  - MySQL/PostgreSQL (via connector)',
            'Drag fields to canvas',
            'Choose visualizations (charts, tables, scorecards)',
            'Publish and share link'
          ],
          notes: ['100% free, no limits!']
        },
        {
          title: 'Connect Google Sheets',
          steps: [
            'Create Google Sheet with data',
            'Looker Studio → Add data → Google Sheets',
            'Select your sheet',
            'Data auto-refreshes when sheet updates',
            'Build dashboard with drag-and-drop'
          ],
          notes: ['Perfect for team collaboration—everyone sees live data!']
        }
      ]
    },
    {
      id: 'tableau-public',
      name: 'Tableau Public',
      description: 'Free platform to explore, create, and publicly share data visualizations',
      officialUrl: 'https://public.tableau.com',
      freeTier: 'Free, work saved publicly',
      tags: ['bi', 'visualization', 'public'],
      sections: [
        {
          title: 'Download & Install',
          steps: [
            'Visit https://public.tableau.com',
            'Click "Download Tableau Public"',
            'Enter email (free account required)',
            'Download and install (~2 GB)',
            'Launch Tableau Public'
          ],
          notes: ['Note: All work saved publicly (good for portfolio, not for confidential data)']
        },
        {
          title: 'Create First Visualization',
          steps: [
            'Connect to data (Excel, CSV, Google Sheets)',
            'Drag "Dimension" to Columns',
            'Drag "Measure" to Rows',
            'Tableau auto-generates visualization',
            'Customize from "Show Me" panel (20+ chart types)',
            'Add filters, colors, labels',
            'Save to Tableau Public → Generates shareable URL'
          ]
        }
      ]
    },
    {
      id: 'dbt',
      name: 'dbt (Data Build Tool)',
      description: 'Transform data in your warehouse with SQL',
      officialUrl: 'https://www.getdbt.com',
      freeTier: 'Core is free and open source (Apache 2.0)',
      tags: ['sql', 'transformation', 'warehouse'],
      sections: [
        {
          title: 'Install',
          code: [
            {
              language: 'bash',
              code: 'pip install dbt-core'
            }
          ]
        }
      ]
    }
  ]
};