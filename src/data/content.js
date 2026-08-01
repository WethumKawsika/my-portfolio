import {
  FaCode, FaMobileAlt, FaPaintBrush, FaBrain, FaCloud,
} from "react-icons/fa";

export const experience = [
  {
    id: 1,
    type: "Internship",
    role: "Software Engineering Intern",
    org: "Virtusa",
    period: "Jan 2025 — Jun 2025",
    description:
      "Worked within an agile delivery team building microservices for a banking client. Developed REST APIs, wrote automated tests, and contributed to a 20% reduction in release regression bugs.",
  },
  {
    id: 2,
    type: "Freelance",
    role: "Full-Stack Developer",
    org: "Self-Employed",
    period: "Jun 2024 — Present",
    description:
      "Delivered custom web and mobile applications for small businesses across retail, tourism, and logistics, from requirements gathering through deployment and support.",
  },
  {
    id: 3,
    type: "University Project",
    role: "Research Lead",
    org: "SLIIT Final Year Research",
    period: "2024 — 2025",
    description:
      "Led a four-person team building the Smart Blind Navigation System, coordinating hardware integration, model training, and mobile app development for the final research submission.",
  },
  {
    id: 4,
    type: "Achievement",
    role: "1st Runner-Up — National IT Innovation Challenge",
    org: "SLIIT",
    period: "2024",
    description:
      "Recognized among 60+ competing teams for the AI Face Recognition Attendance system, praised for real-world deployability and accuracy under low-light conditions.",
  },
];

export const education = [
  {
    id: 1,
    degree: "BSc (Hons) in Information Technology, Software Engineering",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "2022 — 2026",
    description:
      "Specializing in software engineering with coursework in distributed systems, machine learning, and cloud computing. Maintaining a First Class trajectory.",
  },
  {
    id: 2,
    degree: "Diploma in English & Information Technology",
    institution: "Esoft Metro Campus",
    period: "2021 — 2022",
    description:
      "Foundation diploma covering programming fundamentals, database design, and professional communication.",
  },
  {
    id: 3,
    degree: "G.C.E. Advanced Level — Physical Science Stream",
    institution: "Colombo, Sri Lanka",
    period: "2018 — 2021",
    description:
      "Completed the Physical Science stream with a focus on Combined Mathematics, Physics, and ICT.",
  },
];

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    year: "2025",
    logo: "AWS",
  },
  {
    id: 2,
    name: "Google IT Automation with Python",
    issuer: "Google / Coursera",
    year: "2024",
    logo: "GOOGLE",
  },
  {
    id: 3,
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    year: "2024",
    logo: "CISCO",
  },
  {
    id: 4,
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    year: "2023",
    logo: "MICROSOFT",
  },
  {
    id: 5,
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    year: "2024",
    logo: "COURSERA",
  },
  {
    id: 6,
    name: "The Complete React Developer Course",
    issuer: "Udemy",
    year: "2023",
    logo: "UDEMY",
  },
];

export const services = [
  {
    id: 1,
    icon: FaCode,
    title: "Web Development",
    description:
      "Fast, accessible, production-ready web apps built with modern frameworks and clean, maintainable code.",
  },
  {
    id: 2,
    icon: FaMobileAlt,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications with Flutter and React Native, from prototype to app-store release.",
  },
  {
    id: 3,
    icon: FaPaintBrush,
    title: "UI Design",
    description:
      "Interface design grounded in real usability research, delivered as interactive Figma prototypes.",
  },
  {
    id: 4,
    icon: FaBrain,
    title: "AI Solutions",
    description:
      "Practical machine-learning integrations, from computer vision pipelines to recommendation systems.",
  },
  {
    id: 5,
    icon: FaCloud,
    title: "Cloud Deployment",
    description:
      "Infrastructure-as-code, CI/CD pipelines, and scalable cloud architecture on AWS and GCP.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Dr. Nadeesha Perera",
    role: "Senior Lecturer, SLIIT",
    quote:
      "One of the most methodical final-year students I've supervised — the navigation system he built was genuinely deployable, not just a demo.",
    avatar: "NP",
  },
  {
    id: 2,
    name: "Rasika Fernando",
    role: "Founder, Koya Marketplace",
    quote:
      "He translated a vague idea into a working marketplace app in weeks, and kept improving it based on real farmer feedback after launch.",
    avatar: "RF",
  },
  {
    id: 3,
    name: "Ishan Wickramasinghe",
    role: "Engineering Lead, Virtusa",
    quote:
      "Picked up our microservices codebase faster than most interns I've mentored, and his API documentation habit made onboarding easier for the whole team.",
    avatar: "IW",
  },
];

export const stats = [
  { id: 1, label: "Projects Completed", value: 24 },
  { id: 2, label: "Years of Experience", value: 3 },
  { id: 3, label: "Happy Clients", value: 15 },
  { id: 4, label: "Certifications", value: 6 },
];
