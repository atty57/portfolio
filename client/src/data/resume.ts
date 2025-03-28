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
      period: "Sep 2023 - Present",
      responsibilities: [
        "Exploring the application of Large Language Models (LLMs), Knowledge Graphs (KGs), and Retrieval-Augmented Generation Systems (RAGs) to healthcare, with a focus on Alzheimer's disease.",
        "Developing a VR simulation for the USDA to model humane chicken depopulation methods and support animal welfare research."
      ]
    },
    {
      title: "Student Assistant For Joseph Brickley (Instructor)",
      company: "University Of Delaware",
      location: "Newark, DE",
      period: "March 2023 - Present",
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
      period: "June 2022 - May 2023",
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
      title: "ERP Application For College",
      date: "June 2020",
      description: "A comprehensive College ERP system for streamlining administrative processes and improving communication between students, faculty, and administration.",
      achievements: [
        "Enhanced operational efficiency by implementing real-time student attendance monitoring",
        "Automated record maintenance, leading to efficient administrative processes",
        "Improved communication through integrated systems"
      ],
      technologies: ["Java", "SQL", "HTML/CSS", "JavaScript"],
      gradient: "from-blue-400 to-indigo-500",
      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
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
