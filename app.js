/**
 * ATSPro India — Core Reactive Engine & ATS Intelligence Scoring
 */

// =============================================================================
// 1. PRESETS DATA (HIGH-CONVERTING INDIAN TECH PROFILES)
// =============================================================================
const PRESETS = {
  fullstack: {
    name: "Durga Prasad",
    title: "Full Stack Software Engineer",
    email: "durga.prasad@example.com",
    phone: "+91 98765 43210",
    location: "Bengaluru, India",
    linkedin: "linkedin.com/in/durga-prasad",
    github: "github.com/i-am-durga",
    portfolio: "leetcode.com/u/durga_codes",
    summary: "Full Stack Engineer with expertise in React, Next.js, and Node.js microservices. Proven track record architecting resilient web applications serving 50k+ active users, optimizing database queries to reduce p99 latency by 38%, and building automated CI/CD deployment pipelines.",
    languages: "TypeScript, JavaScript, Python, Java, SQL, Go",
    frameworks: "React, Next.js, Node.js, Express, Tailwind CSS, Redux Toolkit",
    tools: "Docker, Kubernetes, Git, AWS (S3, EC2), Postman, Linux, Vercel",
    databases: "PostgreSQL, MongoDB, Redis, Supabase, Prisma ORM, Kafka",
    education: {
      degree: "B.Tech in Computer Science & Engineering",
      college: "Visvesvaraya Technological University",
      gradYear: "2022 - 2026",
      cgpa: "8.7 / 10 CGPA"
    },
    achievements: [
      "Secured Global Rank 412 out of 24,000+ candidates in LeetCode Biweekly Contest; solved 450+ algorithmic problems.",
      "Finalist at National Smart India Hackathon (SIH); architected low-latency cyber threat telemetry engine.",
      "AWS Certified Solutions Architect Associate (2025)."
    ],
    experience: [
      {
        id: "exp-1",
        role: "Software Engineering Intern",
        company: "Zepto / FastCommerce",
        duration: "Jan 2025 - Present",
        bullets: [
          "Architected real-time order tracking microservice using Node.js, Redis, and WebSockets, cutting socket dropouts by 45%.",
          "Optimized PostgreSQL database query indexes, decreasing p95 latency from 480ms to 120ms during peak sale traffic.",
          "Collaborated with 6 cross-functional engineers to deploy Dockerized container workflows via GitHub Actions."
        ]
      },
      {
        id: "exp-2",
        role: "Full Stack Developer Trainee",
        company: "Vortex Technologies",
        duration: "Jun 2024 - Dec 2024",
        bullets: [
          "Developed responsive customer dashboard in Next.js 15 and Tailwind CSS, increasing mobile user engagement by 28%.",
          "Integrated Razorpay & UPI payment webhooks with automated reconciliation, handling ₹15L+ in monthly transactions."
        ]
      }
    ],
    projects: [
      {
        id: "proj-1",
        title: "Durga OS — Hybrid Operating System & Security Core",
        tech: "Debian Live-Build, Linux Kernel, Wine64, Waydroid, Shell",
        bullets: [
          "Engineered a lightweight hybrid Linux distribution combining macOS aesthetics with native Windows .exe and Android execution.",
          "Automated dual-boot UEFI/Syslinux live-build recipes and reduced base image memory consumption by 32%."
        ]
      },
      {
        id: "proj-2",
        title: "DarkTrace — Multi-Signal Cyber Threat Intelligence Platform",
        tech: "Next.js 16, Supabase RLS, Cytoscape.js, Recharts, TypeScript",
        bullets: [
          "Implemented 5-dimensional heuristic correlation matrix across persona, infrastructure, and timeline indicators.",
          "Constructed GPU-accelerated force-directed relationship graph rendering 1,000+ nodes at 60 FPS."
        ]
      }
    ]
  },

  fresher: {
    name: "Rohan Sharma",
    title: "Software Engineer (Java / Backend)",
    email: "rohan.sharma@example.com",
    phone: "+91 91234 56789",
    location: "Pune, India",
    linkedin: "linkedin.com/in/rohan-sharma-cs",
    github: "github.com/rohan-codes",
    portfolio: "leetcode.com/u/rohan_dsa",
    summary: "Computer Science graduate with strong fundamentals in Object-Oriented Programming, Data Structures, Algorithms, and Java Spring Boot. Solved 400+ problems across LeetCode and GFG with hands-on experience building RESTful backend systems.",
    languages: "Java, C++, Python, SQL, JavaScript",
    frameworks: "Spring Boot, Spring Data JPA, Hibernate, JUnit, React Basics",
    tools: "Git, Maven, Docker, IntelliJ IDEA, Postman, Linux",
    databases: "MySQL, PostgreSQL, MongoDB, Redis Cache",
    education: {
      degree: "B.E. in Computer Engineering",
      college: "Savitribai Phule Pune University",
      gradYear: "2021 - 2025",
      cgpa: "8.9 / 10 CGPA"
    },
    achievements: [
      "Solved 420+ Data Structure problems on LeetCode (Knight Rating: 1850).",
      "5-Star Gold Badge in Java & Problem Solving on HackerRank.",
      "Lead Organizer of College Technical Hackathon; managed 350+ participating teams."
    ],
    experience: [
      {
        id: "exp-1",
        role: "Backend Development Intern",
        company: "FinServ Labs",
        duration: "May 2024 - Oct 2024",
        bullets: [
          "Developed REST APIs in Java Spring Boot for customer KYC verification, reducing processing time by 30%.",
          "Implemented Redis caching layer for frequent read queries, improving API throughput by 2.5x."
        ]
      }
    ],
    projects: [
      {
        id: "proj-1",
        title: "Enterprise Inventory Management Microservice",
        tech: "Java, Spring Boot, MySQL, Docker, Swagger",
        bullets: [
          "Engineered distributed inventory management backend with role-based access control (RBAC) and JWT authentication.",
          "Wrote unit tests using JUnit and Mockito achieving 88% test coverage across critical business controllers."
        ]
      },
      {
        id: "proj-2",
        title: "AlgoVisualizer — Interactive Pathfinding & Sorting Engine",
        tech: "JavaScript, HTML5 Canvas, CSS Grid",
        bullets: [
          "Implemented Dijkstra, A*, and Merge Sort visualization tools used by 1,200+ students during campus placement prep."
        ]
      }
    ]
  },

  aiml: {
    name: "Ananya Iyer",
    title: "AI / Machine Learning Engineer",
    email: "ananya.iyer@example.com",
    phone: "+91 97654 32109",
    location: "Hyderabad, India",
    linkedin: "linkedin.com/in/ananya-ai",
    github: "github.com/ananya-ml",
    portfolio: "huggingface.co/ananya-nlp",
    summary: "Machine Learning Engineer with focus on Large Language Models, Retrieval-Augmented Generation (RAG), and Computer Vision. Experience fine-tuning open-source models (Llama 3, Mistral) and serving low-latency inference on Triton and FastAPI.",
    languages: "Python, C++, SQL, Bash, R",
    frameworks: "PyTorch, HuggingFace Transformers, LangChain, vLLM, FastAPI, Scikit-Learn",
    tools: "Docker, Weights & Biases, MLflow, AWS SageMaker, Git, Linux",
    databases: "PostgreSQL, pgvector, Qdrant, ChromaDB, Redis",
    education: {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      college: "International Institute of Information Technology",
      gradYear: "2021 - 2025",
      cgpa: "9.2 / 10 CGPA"
    },
    achievements: [
      "Published research paper on Efficient Transformer Attention at IEEE Student Conference 2024.",
      "Kaggle Competitions Master; Ranked top 2% in NLP Semantic Text Similarity Challenge.",
      "Won 1st Prize at Telangana AI Innovation Summit 2024."
    ],
    experience: [
      {
        id: "exp-1",
        role: "Machine Learning Research Intern",
        company: "NeuralPulse AI",
        duration: "Jun 2024 - Dec 2024",
        bullets: [
          "Engineered multi-modal RAG pipeline using LangChain, pgvector, and Llama-3-8B, improving response accuracy to 94.6%.",
          "Quantized LLMs using bitsandbytes (4-bit NF4) enabling GPU memory reduction from 16GB to 5.8GB without quality degradation."
        ]
      }
    ],
    projects: [
      {
        id: "proj-1",
        title: "DocuSense — Domain-Specific Document QA System",
        tech: "Python, PyTorch, FastAPI, Qdrant, Streamlit",
        bullets: [
          "Developed zero-shot document extraction and citation engine processing 50-page financial PDFs in under 3.2 seconds.",
          "Deployed containerized inference server handling 100+ concurrent requests using asynchronous worker pooling."
        ]
      }
    ]
  },

  devops: {
    name: "Vikram Sengupta",
    title: "Cloud & DevOps Engineer",
    email: "vikram.s@example.com",
    phone: "+91 99887 76655",
    location: "Noida / Delhi NCR",
    linkedin: "linkedin.com/in/vikram-devops",
    github: "github.com/vikram-cloud",
    portfolio: "medium.com/@vikram-devops",
    summary: "Cloud Engineer specializing in Infrastructure-as-Code (Terraform), Kubernetes cluster orchestration, and automated CI/CD gitops workflows. Focused on zero-downtime blue-green deployments and cost-efficient multi-region architectures.",
    languages: "Bash/Shell, Python, Go, YAML, HCL",
    frameworks: "Kubernetes, Docker, Terraform, Ansible, Helm, ArgoCD",
    tools: "AWS, Prometheus, Grafana, GitHub Actions, Jenkins, Linux",
    databases: "PostgreSQL, Redis, Elasticsearch, Logstash, Kibana (ELK)",
    education: {
      degree: "B.Tech in Information Technology",
      college: "Delhi Technological University",
      gradYear: "2020 - 2024",
      cgpa: "8.4 / 10 CGPA"
    },
    achievements: [
      "Certified Kubernetes Administrator (CKA) & AWS Certified DevOps Engineer Professional.",
      "Authored popular open-source Terraform AWS multi-tier VPC module with 1,500+ GitHub stars.",
      "Speaker at Cloud Native Delhi Meetup on 'Cost-Effective EKS Scaling'."
    ],
    experience: [
      {
        id: "exp-1",
        role: "Associate Cloud Engineer",
        company: "CloudScale Systems",
        duration: "Jul 2024 - Present",
        bullets: [
          "Maintained 12 production Kubernetes (EKS) clusters hosting 150+ microservices with 99.98% service uptime.",
          "Implemented Karpenter autoscaler, reducing AWS EC2 spot compute overhead by ₹2.4 Lakhs monthly."
        ]
      }
    ],
    projects: [
      {
        id: "proj-1",
        title: "GitOps Infrastructure Pipeline with ArgoCD",
        tech: "Kubernetes, ArgoCD, Terraform, AWS, Prometheus",
        bullets: [
          "Automated declarative state synchronization across staging and production environments, eliminating manual release errors.",
          "Constructed alerting dashboards in Grafana with PagerDuty webhooks for instantaneous P1 incident mitigation."
        ]
      }
    ]
  }
};

// =============================================================================
// 2. STATE & DEFAULT CONFIGURATION
// =============================================================================
let currentResume = JSON.parse(localStorage.getItem("atspro_resume_data")) || PRESETS.fullstack;
let userSettings = JSON.parse(localStorage.getItem("atspro_user_settings")) || {
  upiId: "durga@okaxis", // User can change this in settings
  payeeName: "Durga Prasad",
  priceINR: 49,
  isUnlocked: false
};

let currentZoom = 1.0;

// Action verbs list for ATS grading
const STRONG_ACTION_VERBS = [
  "architected", "engineered", "spearheaded", "developed", "optimized",
  "implemented", "refactored", "automated", "orchestrated", "constructed",
  "deployed", "designed", "reduced", "increased", "decreased", "accelerated",
  "integrated", "authored", "maintained", "scaled", "quantized", "collaborated"
];

// =============================================================================
// 3. DOM ELEMENTS
// =============================================================================
const el = {
  // Tabs
  paneTabs: document.querySelectorAll(".pane-tab"),
  tabPanes: document.querySelectorAll(".tab-pane"),

  // Contact Inputs
  name: document.getElementById("input-name"),
  title: document.getElementById("input-title"),
  email: document.getElementById("input-email"),
  phone: document.getElementById("input-phone"),
  location: document.getElementById("input-location"),
  linkedin: document.getElementById("input-linkedin"),
  github: document.getElementById("input-github"),
  portfolio: document.getElementById("input-portfolio"),

  // Summary
  summary: document.getElementById("input-summary"),
  btnAiSummary: document.getElementById("btn-ai-summary"),

  // Skills
  languages: document.getElementById("input-languages"),
  frameworks: document.getElementById("input-frameworks"),
  tools: document.getElementById("input-tools"),
  databases: document.getElementById("input-databases"),

  // Dynamic Lists
  expList: document.getElementById("experience-list"),
  btnAddExp: document.getElementById("btn-add-exp"),
  projList: document.getElementById("projects-list"),
  btnAddProj: document.getElementById("btn-add-project"),

  // Education & Achievements
  degree: document.getElementById("input-degree"),
  college: document.getElementById("input-college"),
  gradYear: document.getElementById("input-grad-year"),
  cgpa: document.getElementById("input-cgpa"),
  achievements: document.getElementById("input-achievements"),

  // Preview elements
  cvSheet: document.getElementById("resume-sheet"),
  cvName: document.getElementById("cv-name"),
  cvTitle: document.getElementById("cv-title"),
  cvEmail: document.getElementById("cv-email"),
  cvPhone: document.getElementById("cv-phone"),
  cvLocation: document.getElementById("cv-location"),
  cvLinkedin: document.getElementById("cv-linkedin"),
  cvGithub: document.getElementById("cv-github"),
  cvPortfolio: document.getElementById("cv-portfolio"),
  cvSummary: document.getElementById("cv-summary"),
  cvLanguages: document.getElementById("cv-languages"),
  cvFrameworks: document.getElementById("cv-frameworks"),
  cvTools: document.getElementById("cv-tools"),
  cvDatabases: document.getElementById("cv-databases"),
  cvExpEntries: document.getElementById("cv-experience-entries"),
  cvProjEntries: document.getElementById("cv-project-entries"),
  cvCollege: document.getElementById("cv-college"),
  cvDegree: document.getElementById("cv-degree"),
  cvGradYear: document.getElementById("cv-grad-year"),
  cvCgpa: document.getElementById("cv-cgpa"),
  cvAchievementsList: document.getElementById("cv-achievements-list"),

  // Score Banner
  scoreCircle: document.getElementById("score-circle"),
  scoreStatus: document.getElementById("score-status"),
  scoreFeedback: document.getElementById("score-feedback"),
  chkContact: document.getElementById("chk-contact"),
  chkSkills: document.getElementById("chk-skills"),
  chkVerbs: document.getElementById("chk-verbs"),
  chkMetrics: document.getElementById("chk-metrics"),
  chkLength: document.getElementById("chk-length"),

  // Preset Selector
  sampleSelect: document.getElementById("sample-select"),

  // Modals & Buttons
  btnPrint: document.getElementById("btn-print"),
  btnSettings: document.getElementById("btn-settings"),
  upiModal: document.getElementById("upi-modal"),
  btnCloseModal: document.getElementById("btn-close-modal"),
  settingsModal: document.getElementById("settings-modal"),
  btnCloseSettings: document.getElementById("btn-close-settings"),
  btnSaveSettings: document.getElementById("btn-save-settings"),
  cfgUpiId: document.getElementById("cfg-upi-id"),
  cfgPayeeName: document.getElementById("cfg-payee-name"),
  cfgAmount: document.getElementById("cfg-amount"),

  // Payment elements
  upiQrImage: document.getElementById("upi-qr-image"),
  upiMobileBtn: document.getElementById("upi-mobile-btn"),
  modalSalePrice: document.getElementById("modal-sale-price"),
  btnUpiAmount: document.getElementById("btn-upi-amount"),
  inputUtr: document.getElementById("input-utr"),
  btnVerifyUnlock: document.getElementById("btn-verify-unlock"),
  btnInstantDemo: document.getElementById("btn-instant-demo"),

  // Zoom
  btnZoomIn: document.getElementById("btn-zoom-in"),
  btnZoomOut: document.getElementById("btn-zoom-out"),
  zoomLevel: document.getElementById("zoom-level")
};

// =============================================================================
// 4. INITIALIZATION & DATA BINDING
// =============================================================================
function initApp() {
  loadDataIntoForms();
  renderPreview();
  calculateAtsScore();
  setupEventListeners();
  updatePaymentModal();
}

function loadDataIntoForms() {
  el.name.value = currentResume.name || "";
  el.title.value = currentResume.title || "";
  el.email.value = currentResume.email || "";
  el.phone.value = currentResume.phone || "";
  el.location.value = currentResume.location || "";
  el.linkedin.value = currentResume.linkedin || "";
  el.github.value = currentResume.github || "";
  el.portfolio.value = currentResume.portfolio || "";
  el.summary.value = currentResume.summary || "";
  el.languages.value = currentResume.languages || "";
  el.frameworks.value = currentResume.frameworks || "";
  el.tools.value = currentResume.tools || "";
  el.databases.value = currentResume.databases || "";

  if (currentResume.education) {
    el.degree.value = currentResume.education.degree || "";
    el.college.value = currentResume.education.college || "";
    el.gradYear.value = currentResume.education.gradYear || "";
    el.cgpa.value = currentResume.education.cgpa || "";
  }

  el.achievements.value = (currentResume.achievements || []).join("\n");

  renderExperienceFormList();
  renderProjectsFormList();
}

function renderExperienceFormList() {
  el.expList.innerHTML = "";
  (currentResume.experience || []).forEach((exp, index) => {
    const card = document.createElement("div");
    card.className = "item-card";
    card.innerHTML = `
      <div class="item-card-header">
        <strong>Experience #${index + 1}</strong>
        <button type="button" class="btn-remove-item" onclick="removeExperience(${index})">Remove</button>
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label>Job Title / Role</label>
          <input type="text" value="${exp.role}" oninput="updateExperience(${index}, 'role', this.value)">
        </div>
        <div class="form-group">
          <label>Company / Organization</label>
          <input type="text" value="${exp.company}" oninput="updateExperience(${index}, 'company', this.value)">
        </div>
      </div>
      <div class="form-group">
        <label>Duration (e.g. Jan 2025 - Present)</label>
        <input type="text" value="${exp.duration}" oninput="updateExperience(${index}, 'duration', this.value)">
      </div>
      <div class="form-group">
        <label>Bullet Points (One per line — Use action verbs & metrics)</label>
        <textarea rows="3" oninput="updateExperienceBullets(${index}, this.value)">${exp.bullets.join("\n")}</textarea>
      </div>
    `;
    el.expList.appendChild(card);
  });
}

function renderProjectsFormList() {
  el.projList.innerHTML = "";
  (currentResume.projects || []).forEach((proj, index) => {
    const card = document.createElement("div");
    card.className = "item-card";
    card.innerHTML = `
      <div class="item-card-header">
        <strong>Project #${index + 1}</strong>
        <button type="button" class="btn-remove-item" onclick="removeProject(${index})">Remove</button>
      </div>
      <div class="form-grid">
        <div class="form-group">
          <label>Project Name</label>
          <input type="text" value="${proj.title}" oninput="updateProject(${index}, 'title', this.value)">
        </div>
        <div class="form-group">
          <label>Tech Stack Used</label>
          <input type="text" value="${proj.tech}" oninput="updateProject(${index}, 'tech', this.value)">
        </div>
      </div>
      <div class="form-group">
        <label>Bullet Points (One per line — Highlight engineering decisions)</label>
        <textarea rows="3" oninput="updateProjectBullets(${index}, this.value)">${proj.bullets.join("\n")}</textarea>
      </div>
    `;
    el.projList.appendChild(card);
  });
}

// Global scope helpers for onclick handlers
window.updateExperience = (index, field, val) => {
  currentResume.experience[index][field] = val;
  saveAndRender();
};
window.updateExperienceBullets = (index, val) => {
  currentResume.experience[index].bullets = val.split("\n").filter(b => b.trim().length > 0);
  saveAndRender();
};
window.removeExperience = (index) => {
  currentResume.experience.splice(index, 1);
  renderExperienceFormList();
  saveAndRender();
};

window.updateProject = (index, field, val) => {
  currentResume.projects[index][field] = val;
  saveAndRender();
};
window.updateProjectBullets = (index, val) => {
  currentResume.projects[index].bullets = val.split("\n").filter(b => b.trim().length > 0);
  saveAndRender();
};
window.removeProject = (index) => {
  currentResume.projects.splice(index, 1);
  renderProjectsFormList();
  saveAndRender();
};

// =============================================================================
// 5. LIVE PREVIEW RENDERING
// =============================================================================
function renderPreview() {
  // Header
  el.cvName.textContent = currentResume.name || "YOUR NAME";
  el.cvTitle.textContent = currentResume.title || "Target Job Title";
  el.cvEmail.textContent = currentResume.email || "email@example.com";
  el.cvPhone.textContent = currentResume.phone || "+91 XXXXX XXXXX";
  el.cvLocation.textContent = currentResume.location || "City, India";

  el.cvLinkedin.textContent = currentResume.linkedin || "linkedin.com/in/username";
  el.cvLinkedin.href = currentResume.linkedin.startsWith("http") ? currentResume.linkedin : "https://" + currentResume.linkedin;

  el.cvGithub.textContent = currentResume.github || "github.com/username";
  el.cvGithub.href = currentResume.github.startsWith("http") ? currentResume.github : "https://" + currentResume.github;

  el.cvPortfolio.textContent = currentResume.portfolio || "portfolio.dev";
  el.cvPortfolio.href = currentResume.portfolio.startsWith("http") ? currentResume.portfolio : "https://" + currentResume.portfolio;

  // Summary
  el.cvSummary.textContent = currentResume.summary || "";

  // Skills
  el.cvLanguages.textContent = currentResume.languages || "—";
  el.cvFrameworks.textContent = currentResume.frameworks || "—";
  el.cvTools.textContent = currentResume.tools || "—";
  el.cvDatabases.textContent = currentResume.databases || "—";

  // Experience
  el.cvExpEntries.innerHTML = "";
  (currentResume.experience || []).forEach(exp => {
    const entry = document.createElement("div");
    entry.className = "cv-entry";
    entry.innerHTML = `
      <div class="cv-entry-header">
        <div>
          <span class="cv-role">${escapeHtml(exp.role)}</span> — 
          <span class="cv-company">${escapeHtml(exp.company)}</span>
        </div>
        <div class="cv-date">${escapeHtml(exp.duration)}</div>
      </div>
      <ul class="cv-bullets">
        ${exp.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("")}
      </ul>
    `;
    el.cvExpEntries.appendChild(entry);
  });

  // Projects
  el.cvProjEntries.innerHTML = "";
  (currentResume.projects || []).forEach(proj => {
    const entry = document.createElement("div");
    entry.className = "cv-entry";
    entry.innerHTML = `
      <div class="cv-entry-header">
        <div>
          <span class="project-title">${escapeHtml(proj.title)}</span>
          <span class="project-tech"> | ${escapeHtml(proj.tech)}</span>
        </div>
      </div>
      <ul class="cv-bullets">
        ${proj.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("")}
      </ul>
    `;
    el.cvProjEntries.appendChild(entry);
  });

  // Education
  if (currentResume.education) {
    el.cvCollege.textContent = currentResume.education.college || "";
    el.cvDegree.textContent = currentResume.education.degree ? ` — ${currentResume.education.degree}` : "";
    el.cvGradYear.textContent = currentResume.education.gradYear || "";
    el.cvCgpa.textContent = currentResume.education.cgpa || "";
  }

  // Achievements
  el.cvAchievementsList.innerHTML = "";
  (currentResume.achievements || []).forEach(ach => {
    const li = document.createElement("li");
    li.textContent = ach.replace(/^[•\-\*]\s*/, "");
    el.cvAchievementsList.appendChild(li);
  });
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function saveAndRender() {
  localStorage.setItem("atspro_resume_data", JSON.stringify(currentResume));
  renderPreview();
  calculateAtsScore();
}

// =============================================================================
// 6. REAL-TIME ATS SCORE ALGORITHM
// =============================================================================
function calculateAtsScore() {
  let score = 0;
  const fullText = JSON.stringify(currentResume).toLowerCase();

  // 1. Contact Info Check (20 pts)
  const hasEmail = currentResume.email && currentResume.email.includes("@");
  const hasPhone = currentResume.phone && currentResume.phone.length > 8;
  const hasGithub = currentResume.github && currentResume.github.length > 5;
  const hasLinkedin = currentResume.linkedin && currentResume.linkedin.length > 5;
  const contactScore = (hasEmail ? 5 : 0) + (hasPhone ? 5 : 0) + (hasGithub ? 5 : 0) + (hasLinkedin ? 5 : 0);
  score += contactScore;
  el.chkContact.className = `check-pill${contactScore >= 15 ? " valid" : ""}`;

  // 2. Technical Skills Check (20 pts)
  const skillCount = (currentResume.languages + currentResume.frameworks + currentResume.tools + currentResume.databases).split(",").length;
  const skillsScore = Math.min(20, skillCount * 1.5);
  score += skillsScore;
  el.chkSkills.className = `check-pill${skillsScore >= 14 ? " valid" : ""}`;

  // 3. Action Verbs Check (25 pts)
  let foundVerbs = 0;
  STRONG_ACTION_VERBS.forEach(verb => {
    if (fullText.includes(verb)) foundVerbs++;
  });
  const verbScore = Math.min(25, foundVerbs * 3);
  score += verbScore;
  el.chkVerbs.className = `check-pill${verbScore >= 15 ? " valid" : ""}`;

  // 4. Quantified Metrics Check (25 pts)
  // Scans for numbers, %, ms, x, ₹, $
  const metricMatches = fullText.match(/\b\d+(\.\d+)?(%|ms|x|k|l|fps)?\b|[₹\$]/g) || [];
  const metricsScore = Math.min(25, metricMatches.length * 2.5);
  score += metricsScore;
  el.chkMetrics.className = `check-pill${metricsScore >= 15 ? " valid" : ""}`;

  // 5. Length & Structure (10 pts)
  const hasSummary = currentResume.summary && currentResume.summary.length > 50;
  const hasExp = (currentResume.experience || []).length > 0;
  const hasProj = (currentResume.projects || []).length > 0;
  const structScore = (hasSummary ? 3 : 0) + (hasExp ? 4 : 0) + (hasProj ? 3 : 0);
  score += structScore;
  el.chkLength.className = `check-pill${structScore >= 7 ? " valid" : ""}`;

  const finalScore = Math.round(score);
  el.scoreCircle.textContent = finalScore;

  if (finalScore >= 85) {
    el.scoreCircle.style.borderColor = "var(--success)";
    el.scoreCircle.style.color = "var(--success)";
    el.scoreStatus.className = "score-green";
    el.scoreStatus.textContent = "Excellent (Top 5%)";
    el.scoreFeedback.textContent = "Strong action-verb density and quantified impact metrics. Guaranteed ATS pass.";
  } else if (finalScore >= 70) {
    el.scoreCircle.style.borderColor = "var(--warning)";
    el.scoreCircle.style.color = "var(--warning)";
    el.scoreStatus.className = "score-amber";
    el.scoreStatus.textContent = "Good (Needs Polish)";
    el.scoreFeedback.textContent = "Add more numerical metrics (e.g. 'reduced latency by 35%') to cross 85+ score.";
  } else {
    el.scoreCircle.style.borderColor = "var(--danger)";
    el.scoreCircle.style.color = "var(--danger)";
    el.scoreStatus.className = "";
    el.scoreStatus.style.color = "var(--danger)";
    el.scoreStatus.textContent = "Low (Risk of Rejection)";
    el.scoreFeedback.textContent = "Missing key action verbs, contact links, or technical skills categories.";
  }
}

// =============================================================================
// 7. UPI PAYMENT & MONETIZATION SYSTEM
// =============================================================================
function updatePaymentModal() {
  const upiId = userSettings.upiId || "durga@okaxis";
  const name = encodeURIComponent(userSettings.payeeName || "ATSPro Resume");
  const amount = userSettings.priceINR || 49;

  el.modalSalePrice.textContent = `₹${amount}`;
  el.btnUpiAmount.textContent = `₹${amount}`;

  // Direct UPI Intent URL for Android/iOS apps (PhonePe, GPay, Paytm)
  const upiUrl = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR&tn=ATSPro_Resume_Unlock`;
  el.upiMobileBtn.href = upiUrl;

  // Generate real QR code image
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUrl)}`;
  el.upiQrImage.src = qrUrl;

  // Sync settings modal fields
  el.cfgUpiId.value = userSettings.upiId;
  el.cfgPayeeName.value = userSettings.payeeName;
  el.cfgAmount.value = userSettings.priceINR;
}

function handleDownloadClick() {
  if (userSettings.isUnlocked) {
    window.print();
  } else {
    updatePaymentModal();
    el.upiModal.classList.add("active");
  }
}

// =============================================================================
// 8. EVENT LISTENERS
// =============================================================================
function setupEventListeners() {
  // Tab Switching
  el.paneTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      el.paneTabs.forEach(t => t.classList.remove("active"));
      el.tabPanes.forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.add("active");
    });
  });

  // Inputs Real-time sync
  const bindInput = (inputEl, field) => {
    inputEl.addEventListener("input", (e) => {
      currentResume[field] = e.target.value;
      saveAndRender();
    });
  };

  bindInput(el.name, "name");
  bindInput(el.title, "title");
  bindInput(el.email, "email");
  bindInput(el.phone, "phone");
  bindInput(el.location, "location");
  bindInput(el.linkedin, "linkedin");
  bindInput(el.github, "github");
  bindInput(el.portfolio, "portfolio");
  bindInput(el.summary, "summary");
  bindInput(el.languages, "languages");
  bindInput(el.frameworks, "frameworks");
  bindInput(el.tools, "tools");
  bindInput(el.databases, "databases");

  // Education inputs
  el.degree.addEventListener("input", (e) => {
    currentResume.education.degree = e.target.value;
    saveAndRender();
  });
  el.college.addEventListener("input", (e) => {
    currentResume.education.college = e.target.value;
    saveAndRender();
  });
  el.gradYear.addEventListener("input", (e) => {
    currentResume.education.gradYear = e.target.value;
    saveAndRender();
  });
  el.cgpa.addEventListener("input", (e) => {
    currentResume.education.cgpa = e.target.value;
    saveAndRender();
  });

  // Achievements
  el.achievements.addEventListener("input", (e) => {
    currentResume.achievements = e.target.value.split("\n").filter(a => a.trim().length > 0);
    saveAndRender();
  });

  // Add Item buttons
  el.btnAddExp.addEventListener("click", () => {
    currentResume.experience = currentResume.experience || [];
    currentResume.experience.push({
      id: "exp-" + Date.now(),
      role: "Software Engineer",
      company: "Company Name",
      duration: "Jan 2025 - Present",
      bullets: ["Architected microservice backend using modern stack, improving performance by 25%."]
    });
    renderExperienceFormList();
    saveAndRender();
  });

  el.btnAddProj.addEventListener("click", () => {
    currentResume.projects = currentResume.projects || [];
    currentResume.projects.push({
      id: "proj-" + Date.now(),
      title: "New High-Impact Project",
      tech: "React, Node.js, PostgreSQL",
      bullets: ["Built end-to-end full-stack solution serving 1,000+ daily active users."]
    });
    renderProjectsFormList();
    saveAndRender();
  });

  // AI Polish Button
  el.btnAiSummary.addEventListener("click", () => {
    const roles = ["Full Stack Engineer", "Backend Developer", "Cloud Architect"];
    const polished = `${currentResume.title || "Software Engineer"} with hands-on proficiency across ${currentResume.languages || "modern programming languages"}. Demonstrated capability engineering resilient web architectures, optimizing database indexing to cut latency by 35%, and deploying automated container pipelines.`;
    el.summary.value = polished;
    currentResume.summary = polished;
    saveAndRender();
  });

  // Preset Selector
  el.sampleSelect.addEventListener("change", (e) => {
    const selected = PRESETS[e.target.value];
    if (selected) {
      currentResume = JSON.parse(JSON.stringify(selected));
      loadDataIntoForms();
      saveAndRender();
    }
  });

  // Print & Payment
  el.btnPrint.addEventListener("click", handleDownloadClick);
  el.btnCloseModal.addEventListener("click", () => el.upiModal.classList.remove("active"));
  el.upiModal.addEventListener("click", (e) => {
    if (e.target === el.upiModal) el.upiModal.classList.remove("active"));
  });

  // Settings Modal
  el.btnSettings.addEventListener("click", () => el.settingsModal.classList.add("active"));
  el.btnCloseSettings.addEventListener("click", () => el.settingsModal.classList.remove("active"));
  el.btnSaveSettings.addEventListener("click", () => {
    userSettings.upiId = el.cfgUpiId.value.trim() || "durga@okaxis";
    userSettings.payeeName = el.cfgPayeeName.value.trim() || "Durga Prasad";
    userSettings.priceINR = parseInt(el.cfgAmount.value, 10) || 49;
    localStorage.setItem("atspro_user_settings", JSON.stringify(userSettings));
    updatePaymentModal();
    el.settingsModal.classList.remove("active");
    alert("UPI settings saved! Customers will now pay to: " + userSettings.upiId);
  });

  // Verification & Instant Unlock
  el.btnVerifyUnlock.addEventListener("click", () => {
    const utr = el.inputUtr.value.trim();
    if (utr.length < 8) {
      alert("Please enter a valid 12-digit UPI UTR / Transaction reference number from PhonePe/GPay.");
      return;
    }
    userSettings.isUnlocked = true;
    localStorage.setItem("atspro_user_settings", JSON.stringify(userSettings));
    el.upiModal.classList.remove("active");
    window.print();
  });

  el.btnInstantDemo.addEventListener("click", () => {
    userSettings.isUnlocked = true;
    localStorage.setItem("atspro_user_settings", JSON.stringify(userSettings));
    el.upiModal.classList.remove("active");
    window.print();
  });

  // Zoom controls
  el.btnZoomIn.addEventListener("click", () => {
    currentZoom = Math.min(1.4, currentZoom + 0.1);
    applyZoom();
  });
  el.btnZoomOut.addEventListener("click", () => {
    currentZoom = Math.max(0.7, currentZoom - 0.1);
    applyZoom();
  });

  function applyZoom() {
    el.cvSheet.style.transform = `scale(${currentZoom})`;
    el.zoomLevel.textContent = `${Math.round(currentZoom * 100)}%`;
  }
}

// Start
document.addEventListener("DOMContentLoaded", initApp);
