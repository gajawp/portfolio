export const portfolioData = {
  name: "Preethi Gajawada",
  title: "AI/ML Engineer | Backend Developer",
  subtitle:
    "MS Computer Science @ Northeastern University | Former Goldman Sachs & Morgan Stanley",
  description:
    "Building scalable AI systems, RAG pipelines, distributed backend services, and fairness-aware retrieval platforms.",

  stats: [
    { label: "Projects", value: "10+" },
    { label: "GPA", value: "4.0" },
    { label: "Publications", value: "2" },
  ],

  about:
    "Graduate student at Northeastern University pursuing a Master’s in Computer Science with a focus on Machine Learning, Generative AI, and MLOps. Software engineer with 4+ years of experience at Goldman Sachs and Morgan Stanley, building scalable full-stack applications and high-performance backend systems. I specialize in developing end-to-end solutions that combine modern frontend frameworks with robust backend architectures, along with intelligent AI systems such as RAG pipelines, LLM-based applications, and distributed microservices. My work focuses on solving real-world problems through scalable, reliable, and efficient system design. Experienced in building production-ready applications across the full stack—from interactive user interfaces in React to backend services in Java and Python—while integrating machine learning models and AI-driven capabilities. AWS AI Practitioner certified with strong expertise in full-stack development, AI/ML systems, and cloud technologies.",

  experiences: [
  {
    company: "InSightX Lab",
    role: "ML Engineer Intern",
    period: "Jan 2026 - Present",
    points: [
      "Building a DSPy-based multilingual, multimodal counter-narrative system using LLM pipelines, RAG, and prompt optimization to improve fairness and bias mitigation",
      "Designing LLM-as-Judge evaluation pipelines with multi-objective reward functions to optimize quality, safety, and fairness",
      "Ranked 3rd globally in the ACL Counter-Narrative Generation Shared Task by developing a DSPy-based RAG pipeline",
    ],
    tech: [
      "Python",
      "DSPy",
      "LLMs",
      "Multi-Agent Systems",
      "LLM-as-Judge Evaluation",
      "Llamas",
      "RAG",
      "Prompt Optimization",
      "NLP",
    ],
  },

  {
    company: "Goldman Sachs",
    role: "Senior Software Engineer",
    period: "Oct 2023 - Jul 2025",
    points: [
      "Architected a GenAI knowledge assistant using RAG (LangChain, GPT-4) and distributed microservices, enabling semantic search across 10K+ documents and reducing manual effort by 45%",
      "Built high-performance backend services using Java (Spring Boot) and FastAPI, improving API latency by 25% through concurrency optimization and caching",
      "Designed a distributed semantic search engine using TF-IDF and embeddings on AWS, reducing analysis effort by 40% with asynchronous processing and horizontal scaling",
      "Developed event-driven reliability frameworks for 160+ workflows and built a React dashboard for system metrics, improving decision-making efficiency",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "Flask",
      "Docker",
      "LangChain",
      "GPT-4",
      "Natural Language Processing",
      "AWS",
      "React",
      "Microservices",
      "CI/CD",
      "Distributed Systems",
    ],
  },

  {
    company: "Morgan Stanley",
    role: "Software Engineer",
    period: "May 2021 - Sep 2023",
    points: [
      "Built multi-threaded backend services in Java processing 500K+ daily computations with 99.99% uptime using advanced concurrency techniques",
      "Migrated legacy monoliths to Spring Boot microservices, enabling horizontal scaling and reducing infrastructure costs by 80%",
      "Designed distributed systems with REST APIs, improving scalability and reducing response times through service decomposition and caching",
      "Improved engineering velocity by 30% by implementing CI/CD pipelines and enforcing clean architecture and design patterns",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Distributed Systems",
      "Python",
      "Flask",
      "REST APIs",
      "CI/CD",
      "Docker",
      "Agile",
    ],
  },
],

  projects: [
  
    
  {
  id: "01",
  title: "ACL 2026: Counter-Narrative Generation (DSPy + RAG)",
  period: "2026",
  featured: true,
  description:
    "Developed a multilingual, multimodal counter-narrative generation system using DSPy and retrieval-augmented generation (RAG) to combat online hate speech. Leveraged prompt optimization and multi-agent LLM pipelines to generate empathetic, factual, and non-toxic responses, achieving top-tier performance in the ACL shared task.",
  points: [
    "Built a DSPy-based RAG pipeline integrating LLM orchestration, prompt optimization (COPRO), and retrieval for grounded counter-narrative generation",
    "Ranked 3rd globally in the ACL Counter-Narrative Generation Shared Task among international research teams",
    "Designed an LLM-as-Judge evaluation framework using multi-objective reward functions (PRS, CCNC, QS) to optimize quality, safety, and coherence",
    "Improved response diversity and factual grounding using retrieval pipelines and prompt refinement strategies across multilingual datasets",
    "Engineered end-to-end pipeline supporting multilingual inputs and evaluation using GPT-based scoring and BERTScore metrics",
  ],
  tech: [
    "Python",
    "DSPy",
    "RAG",
    "LLMs",
    "Prompt Optimization",
    "LangChain",
    "NLP",
    "BERTScore",
    "LLM-as-Judge Evaluation",
    "Llamas",
  ],
},
  {
    id: "02",
    title: "RideShare Dispatch Simulator",
    period: "November 2025",
    featured: true,
    description:
      "Built a high-performance ride dispatch system using multithreading and event-driven architecture to simulate real-time driver allocation. Handled 1,000+ concurrent requests with thread-safe scheduling and asynchronous execution. Improved dispatch efficiency by 30% through optimized allocation strategies.",
    points: [
      "Engineered a multi-threaded system handling 1,000+ concurrent ride requests using priority-based scheduling",
      "Implemented thread-safe driver allocation and asynchronous execution for high throughput",
      "Designed event-driven architecture using Observer pattern and Java Streams for real-time metrics",
      "Improved dispatch efficiency by 30% through optimized allocation and system design",
    ],
    tech: [
      "Java",
      "Multithreading",
      "Concurrency",
      "Observer Pattern",
      "Java Streams",
      "System Design",
    ],
  },

  {
    id: "03",
    title: "FairSearch-arXiv (Bias-Aware RAG)",
    period: "2026",
    featured: false,
    description:
      "Designed a fairness-aware academic retrieval system to mitigate institutional bias in RAG pipelines using embeddings and re-ranking techniques. Implemented MMR-based retrieval and evaluated fairness using SRR and parity metrics. Improved representation balance while maintaining strong ranking performance.",
    points: [
      "Built retrieval pipeline using ChromaDB and sentence-transformer embeddings",
      "Implemented MMR-based re-ranking to balance relevance and diversity",
      "Measured fairness using SRR and parity difference metrics",
      "Improved fairness while maintaining strong retrieval quality",
    ],
    tech: [
      "Python",
      "ChromaDB",
      "RAG",
      "Embeddings",
      "Fairlearn",
      "NLP",
      "MMR Re-ranking",
        "Fairness Metrics",
        "Bias Mitigation",
        "Retrieval Systems",
    ],
  },

  {
    id: "04",
    title: "Memory-Optimized Cache System (LRU/LFU)",
    period: "2025",
    featured: true,
    description:
      "Developed a high-performance cache system in C++ supporting LRU and LFU eviction policies with O(1) time complexity. Optimized memory usage and access latency using efficient data structures. Designed for concurrent access scenarios to simulate real-world caching systems.",
    points: [
      "Implemented LRU and LFU cache using hash maps and doubly linked lists with O(1) operations",
      "Optimized memory usage and access latency through efficient data structures",
      "Designed thread-safe operations for concurrent access scenarios",
      "Simulated real-world caching to improve system performance",
    ],
    tech: [
      "C++",
      "Data Structures",
      "Algorithms",
      "Concurrency",
      "System Design",
      "Cache Eviction Policies",
      "Performance Optimization",
      "Memory Management",
    ],
  },

  {
    id: "05",
    title: "Travel Advisor Platform",
    period: "2025",
    featured: false,
    description:
      "Developed a full-stack travel recommendation platform using React and Spring Boot to deliver dynamic, location-based insights. Integrated third-party APIs for real-time data on hotels and attractions. Designed scalable RESTful architecture for efficient client-server communication.",
    points: [
      "Developed responsive frontend using React with dynamic UI for travel recommendations",
      "Built backend services in Java (Spring Boot) handling REST APIs and user data processing",
      "Integrated third-party APIs for real-time travel data including hotels and attractions",
      "Designed scalable client-server architecture for efficient data flow",
    ],
    tech: [
      "React",
      "Java",
      "Spring Boot",
      "REST APIs",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },

  {
    id: "06",
    title: "Satellite Image Classification",
    period: "2025",
    featured: false,
    description:
      "Built a deep learning model for classifying satellite images into land-use categories using CNN architectures. Applied preprocessing, augmentation, and hyperparameter tuning to improve model accuracy. Enabled automated analysis of large-scale geospatial datasets.",
    points: [
      "Built CNN-based model using TensorFlow/PyTorch for satellite image classification",
      "Performed data preprocessing, augmentation, and normalization for improved accuracy",
      "Optimized model performance through hyperparameter tuning",
      "Enabled automated analysis of large-scale geospatial datasets",
    ],
    tech: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "CNN",
      "Computer Vision",
      "NumPy",
    ],
  },

  {
    id: "07",
    title: "Amazon Review Sentiment Classifier",
    period: "October 2025",
    featured: false,
    description:
      "Implemented an NLP-based sentiment analysis system trained on 50K+ Amazon reviews using supervised learning techniques. Applied TF-IDF feature extraction and model tuning to achieve 88% accuracy. Enabled scalable classification of customer feedback.",
    points: [
      "Built sentiment analysis model on 50K+ Amazon reviews using supervised learning",
      "Applied preprocessing techniques including tokenization and TF-IDF feature extraction",
      "Achieved 88% accuracy using optimized classification models",
      "Enabled automated customer feedback classification for scalable insights",
    ],
    tech: [
      "Python",
      "Scikit-learn",
      "NLP",
      "TF-IDF",
      "Pandas",
      "Sentiment Analysis",
      "Machine Learning",
      "Data Preprocessing",
    ],
  },

  

],

  skills: [
  {
    title: "Languages & Core CS",
    items: [
      "Java",
      "Python",
      "Go",
      "C/C++",
      "JavaScript",
      "TypeScript",
      "Algorithms",
      "OOP",
      "Design Patterns",
    ],
  },
  {
    title: "Backend & Frameworks",
    items: [
      "Spring Boot",
      "Spring MVC",
      "FastAPI",
      "Flask",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "SQL",
      "Redis",
      "Neo4j",
      "MongoDB",
      "SQLite",
      "NoSQL",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
      "Jenkins",
      "CloudWatch",
      "Terraform",
    ],
  },
  {
    title: "Distributed Systems",
    items: [
      "Event-driven Architecture",
      "Asynchronous Processing",
      "Scalability",
      "System Design",
    ],
  },
  {
    title: "Messaging & Workflows",
    items: [
      "Kafka",
      "Distributed Workflows",
      "Task Orchestration",
      "Airflow",
    ],
  },
  {
    title: "ML / AI",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "NLP",
      "Transformers",
      "Hugging Face",
      "TF-IDF",
      "Embeddings",
      "RAG",
    ],
  },
  {
    title: "GenAI / LLMs",
    items: [
      "LangChain",
      "DSPy",
      "Prompt Engineering",
      "Multi-agent Systems",
      "LLM Evaluation",
      "LlamaIndex",
      "OpenAI API",
    ],
  },
  {
    title: "Dev Tools",
    items: [
      "Git",
      "VS Code",
      "Postman",
      "Figma",
      "Notion",
      "GitHub Copilot",
    ],
  },
],

  contact: {
    email: "your-email@example.com",
    linkedin: "#",
    github: "#",
  },
};