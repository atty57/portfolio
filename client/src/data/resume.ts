import { PersonalInfo } from "../types";

export const resumeData: PersonalInfo = {
  name: "Atharva Vichare",
  title: "Graduate Research Assistant & Software Engineer",
  description: "Focusing on LLMs, Knowledge Graphs, and developing innovative solutions in healthcare and VR technologies.",
  available: true,
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Delaware",
      location: "Newark, DE",
      period: "Aug 2023 - May 2025"
    },
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "Terna College of Engineering",
      location: "Navi Mumbai",
      period: "Aug 2018 - May 2022"
    }
  ],
  experience: [
    {
      title: "Graduate Research Assistant (HCI LAB)",
      company: "University Of Delaware",
      location: "Newark, DE",
      period: "May 2024 - Present",
      responsibilities: [
        "Architecting advanced conversational AI agents for AWS avatars using LLMs, with Amazon SageMaker for model training/RL, Polly for lifelike TTS, and S3 for data management. Proficient in developing immersive VR/XR Unity simulations and Blender 3D assets. Applying Reinforcement Learning to boost AI agent decision-making and autonomous task completion in dynamic virtual environments.",
        "Spearheading Amazon-funded development of next-generation LLMs for conversational AI.",
        "Leading USDA-supported Unity simulations (including VR testing) for critical agricultural and environmental research applications"
      ]
    },
    {
      title: "Student Assistant For Joseph Brickley (Instructor)",
      company: "University Of Delaware",
      location: "Newark, DE",
      period: "Mar 2024 - Present",
      responsibilities: [
        "Co-Developed \"Nessus Parser\", a Python package designed to automate the scanning and reporting of Common Vulnerabilities and Exposures (CVE) and Common Platform Enumerations (CPE) using data from the NIST DB.",
        "Implemented advanced data parsing algorithms, which increased the efficiency of vulnerability analysis by 40 percent, significantly reducing the time required to identify and address security threats.",
        "Developed an automated update mechanism that ensures the package continuously retrieves and uses the latest data from the NIST database, maintaining up-to-date vulnerability information without manual intervention."
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "GEP PVT. LTD",
      location: "Navi Mumbai, MH",
      period: "June 2022 - Mar 2023",
      responsibilities: [
        "Harnessed the .NET Framework, AngularJS, and Java to develop robust, scalable components for supply chain management software GEP Nexxe, GEP Smart, streamlining processes and boosting efficiency.",
        "Engineered dynamic user interfaces using HTML and CSS, enhancing user satisfaction and experience.",
        "Collaborated with cross-functional teams to translate client requirements into effective technical solutions, contributing to a 22 percent improvement in overall project delivery efficiency.",
        "Conducted thorough code reviews, debugging, and iterative testing, ensuring high-quality software and a 15 percent enhancement in Agile process cycles."
      ]
    }
  ],
  projects: [
    {
      title: "Portfolio Website",
      date: "March 2024",
      description: "Modern portfolio website built with React, TypeScript, and Tailwind CSS showcasing projects and professional experience.",
      achievements: [
        "Implemented responsive design with dark mode",
        "Created dynamic project showcase section",
        "Integrated smooth animations and transitions"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      gradient: "from-blue-400 to-indigo-500",
      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    },
    {
      title: "BCancer Prediction",
      date: "February 2024",
      description: "Machine learning model for breast cancer prediction using various classification algorithms and data analysis techniques.",
      achievements: [
        "Achieved 95% prediction accuracy",
        "Implemented multiple ML algorithms",
        "Created visualization dashboard"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      gradient: "from-pink-400 to-red-500",
      badgeColor: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200"
    },
    {
      title: "DataVisionAI",
      date: "January 2024",
      description: "AI-powered data visualization and analysis tool for extracting insights from complex datasets.",
      achievements: [
        "Developed interactive visualizations",
        "Integrated machine learning models",
        "Created automated report generation"
      ],
      technologies: ["Python", "TensorFlow", "D3.js", "Flask"],
      gradient: "from-purple-400 to-indigo-500",
      badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    },
    {
      title: "ERP Application",
      date: "June 2023",
      description: "Comprehensive ERP system with modules for student management, attendance tracking, and academic performance monitoring.",
      achievements: [
        "Implemented real-time attendance tracking",
        "Created dashboard for performance analytics",
        "Integrated automated reporting system"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "React"],
      gradient: "from-green-400 to-blue-500",
      badgeColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    },
    {
      title: "CPU Scheduling with Deep Reinforcement Learning",
      date: "May 2023",
      description: "An innovative CPU scheduling algorithm developed using Proximal Policy Optimization (PPO) to enhance system performance and efficiency.",
      achievements: [
        "Enhanced scheduling efficiency by 35% compared to traditional algorithms",
        "Reduced average waiting time and turnaround time for processes",
        "Increased system throughput by 20%, enabling processing of more tasks"
      ],
      technologies: ["Python", "TensorFlow", "NumPy", "Matplotlib"],
      gradient: "from-green-400 to-cyan-500",
      badgeColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    },
    {
      title: "Nessus Parser - CVE & CPE Automation Tool",
      date: "March 2023 - Present",
      description: "Python package for automating the scanning and reporting of Common Vulnerabilities and Exposures (CVE) and Common Platform Enumerations (CPE) using NIST database.",
      features: [
        "Advanced data parsing algorithms for vulnerability analysis",
        "Automated update mechanism for latest NIST database integration",
        "Comprehensive reporting system for security assessment"
      ],
      achievements: [
        "Increased vulnerability analysis efficiency by 40%",
        "Reduced the time required to identify security threats",
        "Eliminated the need for manual database updates"
      ],
      technologies: ["Python", "NIST Database", "API Integration", "Cybersecurity"],
      gradient: "from-purple-400 to-pink-500",
      badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      github: "https://github.com/atty57"
    }
  ],
  skills: {
    programmingLanguages: [
      "Java", "Python", "C#", "C++", "SQL (Postgres)", "JavaScript", "HTML/CSS"
    ],
    frameworks: [
      "React", "Node.js", "Flask", "WordPress", "Material-UI", "FastAPI"
    ],
    developerTools: [
      "Git", "Docker", "Jira", "Google Cloud Platform", "VS Code", "Visual Studio", "PyCharm", "IntelliJ", "Eclipse"
    ],
    dataAnalysis: [
      "pandas", "NumPy", "Matplotlib", "TensorFlow", "PySpark", "Apache Hive", "Hadoop"
    ]
  },
  contact: {
    email: "atharvavichare57@gmail.com",
    phone: "302-444-2676",
    location: "Newark, Delaware, USA"
  },
  social: {
    github: "https://github.com/atty57",
    githubSchool: "https://github.com/atharva-udel",
    linkedin: "https://www.linkedin.com/in/atharva-vichare-68739a213/",
    email: "mailto:atharvavichare57@gmail.com"
  }
};
