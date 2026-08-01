import {
  FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaDocker, FaGitAlt, FaGithub,
  FaFigma, FaHtml5, FaCss3Alt,
} from "react-icons/fa";
import {
  SiTypescript, SiJavascript, SiFlutter, SiFirebase, SiMongodb, SiMysql,
  SiExpress, SiTensorflow, SiOpencv, SiArduino, SiKubernetes, SiTailwindcss,
  SiNextdotjs, SiPostgresql, SiRedis, SiGraphql, SiJenkins, SiTerraform,
  SiGooglecloud,
} from "react-icons/si";

// Each category maps to a list of technologies with an approximate proficiency (%)
// used to render animated progress bars. Adjust freely.
export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React", icon: FaReact, level: 95 },
      { name: "Next.js", icon: SiNextdotjs, level: 88 },
      { name: "TypeScript", icon: SiTypescript, level: 90 },
      { name: "JavaScript", icon: SiJavascript, level: 96 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 93 },
      { name: "HTML5", icon: FaHtml5, level: 97 },
      { name: "CSS3", icon: FaCss3Alt, level: 94 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 92 },
      { name: "Express", icon: SiExpress, level: 90 },
      { name: "Python", icon: FaPython, level: 88 },
      { name: "Java", icon: FaJava, level: 82 },
      { name: "GraphQL", icon: SiGraphql, level: 78 },
    ],
  },
  {
    id: "mobile",
    label: "Mobile Development",
    skills: [
      { name: "Flutter", icon: SiFlutter, level: 85 },
      { name: "Firebase", icon: SiFirebase, level: 88 },
    ],
  },
  {
    id: "database",
    label: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: 90 },
      { name: "MySQL", icon: SiMysql, level: 87 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 84 },
      { name: "Redis", icon: SiRedis, level: 75 },
    ],
  },
  {
    id: "cloud",
    label: "Cloud Computing",
    skills: [
      { name: "AWS", icon: FaAws, level: 89 },
      { name: "Google Cloud", icon: SiGooglecloud, level: 80 },
      { name: "Terraform", icon: SiTerraform, level: 76 },
    ],
  },
  {
    id: "ai-ml",
    label: "AI & Machine Learning",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, level: 84 },
      { name: "OpenCV", icon: SiOpencv, level: 82 },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    skills: [
      { name: "Docker", icon: FaDocker, level: 91 },
      { name: "Kubernetes", icon: SiKubernetes, level: 78 },
      { name: "Jenkins", icon: SiJenkins, level: 73 },
      { name: "Git", icon: FaGitAlt, level: 96 },
      { name: "GitHub", icon: FaGithub, level: 96 },
    ],
  },
  {
    id: "uiux",
    label: "UI/UX",
    skills: [
      { name: "Figma", icon: FaFigma, level: 85 },
    ],
  },
  {
    id: "languages",
    label: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, level: 96 },
      { name: "TypeScript", icon: SiTypescript, level: 90 },
      { name: "Python", icon: FaPython, level: 88 },
      { name: "Java", icon: FaJava, level: 82 },
      { name: "Arduino / C++", icon: SiArduino, level: 79 },
    ],
  },
];
