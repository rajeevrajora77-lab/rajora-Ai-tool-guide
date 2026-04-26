import type { LayerContent } from '../manualContent';

export const layer3Content: LayerContent = {
  id: 'genai',
  title: 'Layer 3: GenAI & Data Science (T3)',
  subtitle: 'LLMs, vector databases, ML frameworks, and AI APIs',
  description: 'LangChain, ChromaDB, Pinecone, Groq, Gemini, Hugging Face - Build AI-powered applications.',
  intro: `Generative AI tools accelerate coding, automate documentation, and enhance data analysis workflows. This layer covers everything from vector databases to free LLM APIs.`,
  tools: [
    {
      id: 'chromadb',
      name: 'ChromaDB (Local Vector DB)',
      description: 'AI-native open-source embedding database for RAG applications',
      officialUrl: 'https://www.trychroma.com',
      freeTier: 'Free, open source (Apache 2.0)',
      tags: ['vectordb', 'embeddings', 'rag'],
      sections: [
        {
          title: 'Install',
          code: [
            {
              language: 'bash',
              code: 'pip install chromadb'
            }
          ]
        },
        {
          title: 'Quick Start',
          code: [
            {
              language: 'python',
              code: `import chromadb

# Create client
client = chromadb.Client()

# Create collection
collection = client.create_collection("my_docs")

# Add documents
collection.add(
    documents=[
        "Python is a programming language",
        "JavaScript runs in browsers",
        "Rust is memory safe"
    ],
    ids=["doc1", "doc2", "doc3"]
)

# Query
results = collection.query(
    query_texts=["What language is memory safe?"],
    n_results=2
)

print(results)
# Returns: Rust document ranked first`
            }
          ]
        }
      ]
    },
    {
      id: 'pinecone',
      name: 'Pinecone (Cloud Vector DB)',
      description: 'Managed vector database for ML applications with similarity search',
      officialUrl: 'https://www.pinecone.io',
      freeTier: 'Free tier: 100K vectors, 1 pod',
      tags: ['vectordb', 'managed', 'similarity-search'],
      sections: [
        {
          title: 'Setup',
          steps: [
            'Create account (free tier: 100K vectors)',
            'Create index in dashboard',
            'Get API key'
          ]
        },
        {
          title: 'Install',
          code: [
            {
              language: 'bash',
              code: 'pip install pinecone-client openai'
            }
          ]
        },
        {
          title: 'Usage',
          code: [
            {
              language: 'python',
              code: `from pinecone import Pinecone
from openai import OpenAI

# Initialize
pc = Pinecone(api_key="YOUR_PINECONE_KEY")
openai_client = OpenAI(api_key="YOUR_OPENAI_KEY")

# Connect to index
index = pc.Index("my-index")

# Create embeddings
text = "Machine learning is a subset of AI"
response = openai_client.embeddings.create(
    model="text-embedding-ada-002",
    input=text
)
embedding = response.data[0].embedding

# Upsert to Pinecone
index.upsert(vectors=[
    ("id1", embedding, {"text": text})
])

# Query
query_embedding = openai_client.embeddings.create(
    model="text-embedding-ada-002",
    input="What is AI?"
).data[0].embedding

results = index.query(vector=query_embedding, top_k=5)
print(results)`
            }
          ]
        }
      ]
    },
    {
      id: 'langchain',
      name: 'LangChain (LLM Application Framework)',
      description: 'Framework for developing applications powered by language models',
      officialUrl: 'https://langchain.com',
      freeTier: 'Free, open source (MIT)',
      tags: ['llm', 'framework', 'agents'],
      sections: [
        {
          title: 'Install',
          code: [
            {
              language: 'bash',
              code: 'pip install langchain langchain-openai langchain-community'
            }
          ]
        },
        {
          title: 'Simple Prompt Template',
          code: [
            {
              language: 'python',
              code: `from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI

# Create template
template = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant."),
    ("user", "{question}")
])

# Create LLM
llm = ChatOpenAI(model="gpt-3.5-turbo", api_key="YOUR_KEY")

# Chain together
chain = template | llm

# Use
response = chain.invoke({"question": "What is Python?"})
print(response.content)`
            }
          ]
        },
        {
          title: 'Simple RAG System',
          code: [
            {
              language: 'python',
              code: `from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.document_loaders import TextLoader

# Load documents
loader = TextLoader("document.txt")
documents = loader.load()

# Split into chunks
text_splitter = CharacterTextSplitter(chunk_size=1000)
docs = text_splitter.split_documents(documents)

# Create embeddings and vector store
embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(docs, embeddings)

# Create retrieval chain
qa = RetrievalQA.from_chain_type(
    llm=ChatOpenAI(model="gpt-3.5-turbo"),
    retriever=vectorstore.as_retriever()
)

# Ask question
answer = qa.run("What does the document say about AI?")
print(answer)`
            }
          ]
        }
      ]
    },
    {
      id: 'groq',
      name: 'Groq (Fastest Free LLM API)',
      description: 'Fastest AI inference API with generous free tier',
      officialUrl: 'https://console.groq.com',
      freeTier: '14,400 requests/day free tier!',
      tags: ['llm', 'api', 'fast-inference'],
      sections: [
        {
          title: 'Setup',
          steps: [
            'Sign up (GitHub login): https://console.groq.com',
            'Dashboard → API Keys → Create key',
            'Free tier: 14,400 requests/day!'
          ]
        },
        {
          title: 'Install',
          code: [
            {
              language: 'bash',
              code: 'pip install groq'
            }
          ]
        },
        {
          title: 'Usage',
          code: [
            {
              language: 'python',
              code: `from groq import Groq

client = Groq(api_key="YOUR_GROQ_KEY")

response = client.chat.completions.create(
    model="llama-3.1-70b-versatile",
    messages=[
        {"role": "user", "content": "Explain quantum computing"}
    ]
)

print(response.choices[0].message.content)`
            }
          ]
        },
        {
          title: 'Available Models',
          table: {
            headers: ['Model', 'Description'],
            rows: [
              ['llama-3.1-70b-versatile', 'Best quality'],
              ['llama-3.1-8b-instant', 'Fastest'],
              ['mixtral-8x7b-32768', 'Long context'],
              ['gemma2-9b-it', 'Efficient']
            ]
          }
        }
      ]
    },
    {
      id: 'google-gemini',
      name: 'Google AI Studio (Gemini API)',
      description: 'Access Google Gemini models via API with free tier',
      officialUrl: 'https://aistudio.google.com',
      freeTier: '1,500 requests/day free tier',
      tags: ['llm', 'google', 'multimodal'],
      sections: [
        {
          title: 'Setup',
          steps: [
            'Sign in with Google account: https://aistudio.google.com',
            'Get API key (top right)',
            'Free tier: 1,500 requests/day'
          ]
        },
        {
          title: 'Install',
          code: [
            {
              language: 'bash',
              code: 'pip install google-generativeai'
            }
          ]
        },
        {
          title: 'Usage',
          code: [
            {
              language: 'python',
              code: `import google.generativeai as genai

genai.configure(api_key="YOUR_GOOGLE_KEY")

model = genai.GenerativeModel('gemini-pro')
response = model.generate_content("What is machine learning?")

print(response.text)`
            }
          ],
          notes: ['Gemini 2.0 Flash: Extremely fast, multimodal (text + images), free!']
        }
      ]
    },
    {
      id: 'huggingface',
      name: 'Hugging Face Inference API',
      description: 'Access 100K+ ML models via API',
      officialUrl: 'https://huggingface.co',
      freeTier: 'Free tier with rate limits, serverless inference',
      tags: ['llm', 'opensource', 'models'],
      sections: [
        {
          title: 'Setup',
          steps: [
            'Create account: https://huggingface.co',
            'Settings → Access Tokens → Create token',
            'Free tier: Rate limited but generous'
          ]
        },
        {
          title: 'Install',
          code: [
            {
              language: 'bash',
              code: 'pip install huggingface_hub'
            }
          ]
        },
        {
          title: 'Usage',
          code: [
            {
              language: 'python',
              code: `from huggingface_hub import InferenceClient

client = InferenceClient(token="YOUR_HF_TOKEN")

# Use any model on HF
response = client.text_generation(
    "Explain photosynthesis",
    model="mistralai/Mistral-7B-Instruct-v0.2"
)

print(response)`
            }
          ],
          notes: ['1000+ models available: Llama, Mistral, Falcon, Phi, etc.']
        }
      ]
    },
    {
      id: 'streamlit',
      name: 'Streamlit (Build AI Apps)',
      description: 'Fastest way to build and share data apps in Python',
      officialUrl: 'https://streamlit.io',
      freeTier: 'Free Community Cloud for unlimited public apps',
      tags: ['python', 'ui', 'data-apps'],
      sections: [
        {
          title: 'Install',
          code: [
            {
              language: 'bash',
              code: 'pip install streamlit'
            }
          ]
        },
        {
          title: 'First Streamlit App',
          code: [
            {
              language: 'python',
              code: `# app.py
import streamlit as st

st.title("My First AI App")

user_input = st.text_input("Enter your question:")

if st.button("Ask"):
    st.write(f"You asked: {user_input}")
    st.success("Response from AI...")`
            },
            {
              language: 'bash',
              code: `streamlit run app.py
# Opens browser automatically at localhost:8501`
            }
          ]
        },
        {
          title: 'RAG Chatbot with Streamlit',
          code: [
            {
              language: 'python',
              code: `import streamlit as st
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain.chains import RetrievalQA

st.title("📚 Document Q&A Chatbot")

@st.cache_resource
def load_vectorstore():
    embeddings = OpenAIEmbeddings()
    return Chroma(persist_directory="./chroma_db", embedding_function=embeddings)

vectorstore = load_vectorstore()

qa = RetrievalQA.from_chain_type(
    llm=ChatOpenAI(model="gpt-3.5-turbo"),
    retriever=vectorstore.as_retriever()
)

question = st.text_input("Ask a question about your documents:")

if st.button("Get Answer"):
    with st.spinner("Thinking..."):
        answer = qa.run(question)
        st.success(answer)`
            }
          ]
        },
        {
          title: 'Deploy to Streamlit Cloud',
          steps: [
            'Push code to GitHub',
            'Visit https://streamlit.io/cloud',
            'Sign in with GitHub',
            'Click "New app"',
            'Select repo, branch, file',
            'Click "Deploy"'
          ],
          notes: ['Free tier: Unlimited public apps!']
        }
      ]
    },
    {
      id: 'pytorch',
      name: 'PyTorch',
      description: 'Open source machine learning framework by Meta',
      officialUrl: 'https://pytorch.org',
      freeTier: 'Free, open source (BSD)',
      tags: ['ml', 'deep-learning', 'facebook'],
      sections: [
        {
          title: 'Install',
          code: [
            {
              language: 'bash',
              code: 'pip install torch torchvision'
            }
          ]
        }
      ]
    },
    {
      id: 'tensorflow',
      name: 'TensorFlow',
      description: 'End-to-end open source platform for machine learning by Google',
      officialUrl: 'https://www.tensorflow.org',
      freeTier: 'Free, open source (Apache 2.0)',
      tags: ['ml', 'deep-learning', 'google'],
      sections: [
        {
          title: 'Install',
          code: [
            {
              language: 'bash',
              code: 'pip install tensorflow'
            }
          ]
        }
      ]
    },
    {
      id: 'jupyter',
      name: 'Jupyter Notebook',
      description: 'Web-based interactive computing environment',
      officialUrl: 'https://jupyter.org',
      freeTier: 'Free, open source (BSD)',
      tags: ['python', 'notebook', 'interactive'],
      sections: [
        {
          title: 'Install & Launch',
          code: [
            {
              language: 'bash',
              code: `pip install jupyter

# Launch
jupyter notebook
# Browser opens at http://localhost:8888

# Or JupyterLab
jupyter lab`
            }
          ]
        }
      ]
    },
    {
      id: 'google-colab',
      name: 'Google Colab',
      description: 'Free Jupyter notebook environment with GPU/TPU access',
      officialUrl: 'https://colab.research.google.com',
      freeTier: 'Free tier with Tesla T4 GPU, 12 hours continuous runtime',
      tags: ['python', 'notebook', 'gpu', 'google'],
      sections: [
        {
          title: 'Access & Enable GPU',
          steps: [
            'Visit https://colab.research.google.com',
            'Sign in with Google account',
            'Runtime → Change runtime type',
            'Hardware accelerator: GPU',
            'Save'
          ],
          notes: ['Free tier: Tesla T4 GPU, 12 hours continuous runtime']
        }
      ]
    }
  ]
};