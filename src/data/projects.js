export const projects = [
  {
    id: 1,
    title: "Smart Blind Navigation System",
    category: "AI & IoT",
    description:
      "An assistive wearable that helps visually impaired users navigate indoor and outdoor spaces safely using ultrasonic sensors, real-time obstacle detection, and haptic feedback.",
    longDescription:
      "Built as a final-year research project, the system fuses ultrasonic distance sensors with a lightweight obstacle-classification model running on an embedded microcontroller. Haptic motors translate obstacle direction and distance into intuitive vibration patterns, while a companion mobile app logs frequently traveled routes and sends emergency location alerts to caregivers.",
    image: "/projects/blind-navigation.jpg",
    tech: ["Arduino", "C++", "TensorFlow Lite", "Flutter", "Firebase"],
    github: "https://github.com/yourusername/smart-blind-navigation",
    demo: "https://your-demo-link.com/blind-navigation",
    featured: true,
  },
  {
    id: 2,
    title: "AI Face Recognition Attendance",
    category: "AI & Machine Learning",
    description:
      "A contactless attendance platform for universities that recognizes faces in real time and logs attendance automatically with anti-spoofing checks.",
    longDescription:
      "Uses a deep-learning face embedding model for recognition and a liveness-detection layer to prevent photo spoofing. Attendance records sync to a cloud dashboard where lecturers can view analytics, export reports, and receive low-attendance alerts for individual students.",
    image: "/projects/face-attendance.jpg",
    tech: ["Python", "OpenCV", "TensorFlow", "Flask", "MySQL", "React"],
    github: "https://github.com/yourusername/ai-face-attendance",
    demo: "https://your-demo-link.com/face-attendance",
    featured: true,
  },
  {
    id: 3,
    title: "Koya Mobile Application",
    category: "Mobile Development",
    description:
      "A cross-platform marketplace app connecting local farmers directly with consumers, cutting out middlemen and reducing food waste.",
    longDescription:
      "Koya lets farmers list produce with live pricing while buyers browse, order, and schedule pickup or delivery. Includes in-app chat, order tracking, and a ratings system, with a Node.js backend and Firebase for real-time inventory sync.",
    image: "/projects/koya-app.jpg",
    tech: ["Flutter", "Firebase", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/WethumKawsika/Koya_Application",
    demo: "https://your-demo-link.com/koya",
    featured: true,
  },
  {
    id: 4,
    title: "Inventory Management System",
    category: "Full-Stack",
    description:
      "A role-based inventory and order-management dashboard built for small retail businesses, with barcode scanning and low-stock alerts.",
    longDescription:
      "Supports multi-warehouse stock tracking, purchase orders, supplier management, and sales analytics with exportable reports. Built with a REST API backend, JWT-based auth, and a responsive React dashboard with real-time stock alerts via WebSockets.",
    image: "/projects/inventory-system.jpg",
    tech: ["React", "Node.js", "Express", "MySQL", "Docker"],
    github: "https://github.com/yourusername/inventory-management",
    demo: "https://your-demo-link.com/inventory",
    featured: true,
  },
  {
    id: 5,
    title: "White Water Rafting Booking Website",
    category: "Web Development",
    description:
      "A full-featured booking platform for an adventure-tourism operator, with real-time availability, secure payments, and admin scheduling tools.",
    longDescription:
      "Customers browse rafting packages, check live slot availability, and pay securely online. An admin panel lets staff manage trips, guides, and equipment, with automated confirmation emails and calendar sync.",
    image: "/projects/rafting-booking.jpg",
    tech: ["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
    github: "https://github.com/WethumKawsika/Kithulgala_White_Water_Rafting",
    demo: "https://your-demo-link.com/rafting",
    featured: false,
  },
  {
    id: 6,
    title: "IoT Smart Cane",
    category: "AI & IoT",
    description:
      "A sensor-equipped smart cane that detects obstacles, drop-offs, and hazardous terrain, pairing with a mobile app for fall detection alerts.",
    longDescription:
      "Combines ultrasonic and infrared sensors with an accelerometer to detect sudden falls and trigger emergency SMS alerts with GPS coordinates. Designed with a focus on lightweight hardware and all-day battery life.",
    image: "/projects/smart-cane.jpg",
    tech: ["Arduino", "C++", "React Native", "Firebase"],
    github: "https://github.com/yourusername/iot-smart-cane",
    demo: "https://your-demo-link.com/smart-cane",
    featured: false,
  },
  {
    id: 7,
    title: "Cloud Deployment Project",
    category: "Cloud & DevOps",
    description:
      "A CI/CD pipeline and infrastructure-as-code setup that automates deployment of a microservices application to AWS with zero-downtime releases.",
    longDescription:
      "Provisions infrastructure with Terraform, containerizes services with Docker, and orchestrates deployments through a GitHub Actions pipeline into an AWS ECS cluster with blue-green deployment, auto-scaling, and centralized logging.",
    image: "/projects/cloud-deployment.jpg",
    tech: ["AWS", "Docker", "Terraform", "GitHub Actions", "Kubernetes"],
    github: "https://github.com/yourusername/cloud-deployment",
    demo: "https://your-demo-link.com/cloud-deployment",
    featured: false,
  },
];

export const projectFilters = [
  "All",
  "AI & Machine Learning",
  "AI & IoT",
  "Mobile Development",
  "Full-Stack",
  "Web Development",
  "Cloud & DevOps",
];
