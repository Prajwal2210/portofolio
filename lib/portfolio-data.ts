export const profile = {
  name: "Prajwal Padasalgi",
  initials: "PP",
  titles: ["Aspiring Software Developer", "Full Stack Developer", "Python Developer"],
  location: "Bengaluru, India",
  email: "prajwalpadasalgi@gmail.com",
  phone: "+91 8884872666",
  phoneHref: "tel:+918884872666",
  // Replace these with your real profile URLs.
  linkedin: "https://www.linkedin.com/in/your-linkedin-profile",
  github: "https://github.com/your-github-username",
  // Set to a path such as "/images/profile.jpg" after adding your photo to /public/images.
  photo: null as string | null,
}

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
]

const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`

export type Skill = { name: string; icon?: string; invertOnDark?: boolean }
export type SkillCategory = { title: string; icon: string; skills: Skill[] }

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Web Development",
    icon: "code",
    skills: [
      { name: "Python", icon: devicon("python/python-original.svg") },
      { name: "JavaScript", icon: devicon("javascript/javascript-original.svg") },
      { name: "HTML5", icon: devicon("html5/html5-original.svg") },
      { name: "CSS3", icon: devicon("css3/css3-original.svg") },
      { name: "React.js", icon: devicon("react/react-original.svg") },
      { name: "Node.js", icon: devicon("nodejs/nodejs-original.svg") },
      { name: "Express.js", icon: devicon("express/express-original.svg"), invertOnDark: true },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Data Analytics",
    icon: "chart",
    skills: [
      { name: "SQL", icon: devicon("azuresqldatabase/azuresqldatabase-original.svg") },
      { name: "Power BI" },
      { name: "Microsoft Excel" },
      { name: "Power Query" },
      { name: "DAX" },
      { name: "SAP ERP (Basics)" },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: [
      { name: "MySQL", icon: devicon("mysql/mysql-original.svg") },
      { name: "MongoDB", icon: devicon("mongodb/mongodb-original.svg") },
      { name: "DynamoDB", icon: devicon("dynamodb/dynamodb-original.svg") },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: "brain",
    skills: [
      { name: "Machine Learning" },
      { name: "TensorFlow", icon: devicon("tensorflow/tensorflow-original.svg") },
      { name: "OpenCV", icon: devicon("opencv/opencv-original.svg") },
      { name: "Convolutional Neural Networks (CNN)" },
    ],
  },
  {
    title: "Cloud Technologies",
    icon: "cloud",
    skills: [
      { name: "AWS Lambda" },
      { name: "Amazon API Gateway" },
      { name: "Amazon S3" },
      { name: "AWS CloudFront" },
      { name: "Amazon Cognito" },
      { name: "Amazon Rekognition" },
    ],
  },
  {
    title: "Tools & AI Assistants",
    icon: "wrench",
    skills: [
      { name: "Git", icon: devicon("git/git-original.svg") },
      { name: "GitHub", icon: devicon("github/github-original.svg"), invertOnDark: true },
      { name: "Claude AI" },
      { name: "ChatGPT" },
      { name: "GitHub Copilot" },
    ],
  },
]

export type Project = {
  title: string
  tag: string
  theme: "saas" | "vision" | "security"
  description: string[]
  technologies: string[]
  features: string[]
  extraList?: { title: string; items: string[] }
  image: string
  imageAlt: string
  // Replace with the project's repository or live demo URL.
  link: string
}

export const projects: Project[] = [
  {
    title: "Smart Vehicle Access & Parking Management System",
    tag: "Featured · AI SaaS",
    theme: "saas",
    description: [
      "Developed an AI-powered serverless parking management system designed to automate vehicle entry and exit operations, recognize vehicle number plates, provide secure authentication, and support real-time monitoring.",
      "The application uses React.js for the frontend and AWS serverless services for backend infrastructure and cloud integration.",
    ],
    technologies: ["React.js", "Node.js", "AWS", "DynamoDB", "Artificial Intelligence"],
    features: [
      "Automated vehicle entry and exit management",
      "AI-based vehicle number plate recognition",
      "Secure user authentication",
      "Real-time vehicle monitoring",
      "Serverless cloud architecture",
      "Cloud-based data management",
    ],
    extraList: {
      title: "AWS Services Used",
      items: [
        "AWS Lambda",
        "Amazon API Gateway",
        "Amazon DynamoDB",
        "Amazon Cognito",
        "Amazon S3",
        "AWS CloudFront",
        "Amazon Rekognition",
      ],
    },
    image: "/images/projects/smart-parking.png",
    imageAlt: "Dashboard showing number plate detection, parking slot occupancy and entry logs",
    link: "https://github.com/your-github-username",
  },
  {
    title: "Hand Gesture Recognition System",
    tag: "AI · Computer Vision",
    theme: "vision",
    description: [
      "Developed a real-time hand gesture recognition system using OpenCV and a custom Convolutional Neural Network (CNN) model built with TensorFlow.",
      "The system processes webcam video input, performs image preprocessing, and classifies five different hand gestures to support touchless interaction.",
    ],
    technologies: ["Python", "OpenCV", "TensorFlow", "CNN"],
    features: [
      "Real-time hand gesture recognition",
      "Webcam-based video processing",
      "Image preprocessing",
      "CNN-based gesture classification",
      "Recognition of five hand gestures",
      "Touchless human-computer interaction",
    ],
    image: "/images/projects/hand-gesture.png",
    imageAlt: "Webcam frame with hand landmarks and gesture classification panel",
    link: "https://github.com/your-github-username",
  },
  {
    title: "AI-Based Threat Detection & Response System",
    tag: "AI · Cybersecurity",
    theme: "security",
    description: [
      "Developed a full-stack cybersecurity application designed to identify network threats and anomalous activities using the Isolation Forest machine learning algorithm.",
      "Implemented REST APIs, JWT authentication, role-based access control, and threat logging. Developed a React-based dashboard to monitor detected threats and security events.",
    ],
    technologies: ["Python", "FastAPI", "React.js", "Scikit-learn", "SQLite"],
    features: [
      "AI-based network threat detection",
      "Anomaly detection using Isolation Forest",
      "REST API integration",
      "JWT-based authentication",
      "Role-based access control",
      "Threat logging and monitoring",
      "Interactive React dashboard",
    ],
    image: "/images/projects/threat-detection.png",
    imageAlt: "Security dashboard with anomaly chart and threat log table",
    link: "https://github.com/your-github-username",
  },
]

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Vidyavahini First Grade College, Tumkur",
    detail: "Specialization: Computer Communication and Networks",
    completion: "August 2024",
  },
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Amity University, Bengaluru",
    completion: "July 2026",
  },
]

export const certifications = [
  {
    title: "Certificate of Traineeship Completion – Data Analytics",
    organization: "MedTourEasy",
    date: "May 2026",
    // Add a path such as "/certificates/medtoureasy.pdf" once available.
    file: null as string | null,
  },
]

export const interests = [
  { title: "Full-Stack Application Development", icon: "layers", text: "Building complete applications with React.js frontends and Node.js or FastAPI backends." },
  { title: "AI-Powered Software Applications", icon: "sparkles", text: "Integrating computer vision and machine learning models into practical software." },
  { title: "Backend Development & REST APIs", icon: "server", text: "Designing REST APIs with authentication, role-based access control and logging." },
  { title: "Cloud Computing & Serverless", icon: "cloud", text: "Working with AWS Lambda, API Gateway, S3, CloudFront, Cognito and Rekognition." },
  { title: "Database Integration", icon: "database", text: "Connecting applications to MySQL, MongoDB, DynamoDB and SQLite." },
  { title: "Data Analytics & Machine Learning", icon: "chart", text: "Analyzing data with SQL, Power BI and Excel, and training models with TensorFlow and Scikit-learn." },
]
