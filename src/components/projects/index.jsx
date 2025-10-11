"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";
import { useLanguage } from "@/app/i18n/LanguageProvider";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const ProjectList = ({ projects }) => {
  const { t } = useLanguage();

  const localizedProjects = (projects || []).map((p) => ({
    ...p,
    name: p.nameKey ? (t(p.nameKey) || p.name) : p.name,
    description: p.descriptionKey ? (t(p.descriptionKey) || p.description) : p.description,
    date: p.dateKey ? (t(p.dateKey) || p.date) : p.date,
  }));

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-7xl px-4 mx-auto lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
    >
      {localizedProjects.map((project, index) => (
        <div key={index} className={index === 0 ? "md:col-span-2" : ""}>
          <ProjectLayout {...project} featured={index === 0} />
        </div>
      ))}
    </motion.div>
  );
};

export default ProjectList;
