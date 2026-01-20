export interface Education {
  degree: string;
  institution: string;
  year: string;
  score?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
}

export interface ProfileData {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  skills: {
    languages: string[];
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
  internship: {
    role: string;
    company: string;
    period: string;
    points: string[];
  };
  education: Education[];
  projects: Project[];
}

export const profileData: ProfileData = {
  name: "Shiva Prasad",
  role: "Java Full Stack Developer",
  email: "Shivaprasadmanchala777@gmail.com",
  phone: "+91 8309515704",
  location: "Anantapur, Andhra Pradesh",
  linkedin: "https://www.linkedin.com/in/shiva-prasad-manchala-a79036336",

  skills: {
    languages: ["Java", "Python"],
    frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
    backend: ["Spring Boot", "REST APIs", "Hibernate"],
    database: ["MySQL"],
    tools: ["Git", "GitHub", "Postman"]
  },

  internship: {
    role: "Java Full Stack Intern",
    company: "Codtech IT Solutions",
    period: "Nov 2025 – Jan 2026",
    points: [
      "Developed backend REST APIs using Spring Boot.",
      "Built responsive UI components using React.",
      "Integrated MySQL database with backend services.",
      "Implemented authentication and role-based access control.",
      "Collaborated with team using Git for version control."
    ]
  },

  education: [
    {
      degree: "B.Tech (Computer Science)",
      institution: "Chiranjeevi College",
      year: "2022 – 2026",
      score: "8.2 CGPA"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya / Govt. Junior College",
      year: "2020 – 2022",
      score: "7.0 CGPA"
    },
    {
      degree: "SSC (10th Class)",
      institution: "Roots Public School",
      year: "2020",
      score: "9.2 CGPA"
    }
  ],

  projects: [
    {
    title: "Health Insurance Claim Prediction",
    description:
      "Developed an ML model to predict health insurance claim approval based on customer and policy data. Applied data preprocessing and supervised learning to improve decision accuracy.",
    tech: [
      "Python",
      "Machine Learning",
      "SQL",
      "AI"
    ]
  },
    {
      title: "Online Banking System",
      description:
        "Developed a secure banking web application with user authentication, fund transfer, account management, and transaction history using Spring Boot and React.",
      tech: [
        "Java",
        "Spring Boot",
        "React",
        "MySQL",
        "JWT",
        "REST APIs"
      ]
    }
    
    
    
  ]
};
