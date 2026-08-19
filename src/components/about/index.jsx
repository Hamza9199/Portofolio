"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/i18n/LanguageProvider";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SkillItem = ({ name, category, color }) => (
  <motion.span
    variants={itemVariants}
    className="px-4 py-2 rounded-full text-sm font-medium border transition-all hover:scale-105 cursor-default"
    style={{
      borderColor: `${color}40`,
      backgroundColor: `${color}15`,
      color: color,
    }}
  >
    {name}
  </motion.span>
);

const StatCard = ({ value, label, icon, color }) => (
  <motion.div
    variants={itemVariants}
    className="relative p-6 sm:p-8 rounded-2xl custom-bg border border-muted/30 flex flex-col items-center text-center group"
  >
    <div
      className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
      style={{ backgroundColor: `${color}15` }}
    >
      <span className="text-2xl sm:text-3xl">{icon}</span>
    </div>
    <div className="text-3xl sm:text-4xl font-bold mb-1" style={{ color }}>
      {value}
    </div>
    <div className="text-sm sm:text-base text-muted font-medium">{label}</div>
  </motion.div>
);

const ExperienceCard = ({ year, title, company, description, technologies, current = false }) => {
  const { t } = useLanguage();
  return (
    <motion.div
      variants={itemVariants}
      className="relative pl-6 sm:pl-8 pb-8 sm:pb-10 border-l-2 border-muted/30 last:border-0"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-4 h-4 rounded-full flex-shrink-0 border-2 border-accent"
            style={{ backgroundColor: current ? "var(--accent)" : "transparent" }}
          />
          <span className="text-sm text-muted font-medium">{year}</span>
        </div>
        {current && (
          <span className="px-2 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}>
            {t("about.experience.current")}
          </span>
        )}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm sm:text-base text-accent font-medium mb-3">{company}</p>
      <p className="text-sm sm:text-base text-muted/80 mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="px-2.5 py-1 text-xs rounded border border-muted/30 text-muted/70"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const AboutDetails = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "3+", label: t("about.stats.years"), icon: "💼", color: "#3B82F6" },
    { value: "15+", label: t("about.stats.projects"), icon: "🚀", color: "#8B5CF6" },
    { value: "10+", label: t("about.stats.technologies"), icon: "⚡", color: "#F59E0B" },
    { value: "∞", label: t("about.stats.learning"), icon: "🧠", color: "#10B981" },
  ];

  const skills = [
    { category: t("about.skills.frontend"), color: "#3B82F6", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "JavaScript", "HTML+CSS", "Angular", "Expo", "Flutter", "React-Native"] },
    { category: t("about.skills.backend"), color: "#8B5CF6", items: ["Node.js", "Express", "Spring Boot", "Python", "FastAPI", "PostgreSQL", "MongoDB", "SQL", "MySQL", "NestJS", "Django", ".NET MAUI", "ASP.NET", "C#", "C++", "Java", "DiscordBot"] },
    { category: t("about.skills.devops"), color: "#F59E0B", items: ["Docker", "Git", "GitHub Actions", "Vercel", "AWS", "Linux", "Cypress"] },
    { category: t("about.skills.other"), color: "#10B981", items: ["Electron", "REST APIs", "GraphQL", "WebSockets"] },
  ];

  const experiences = [
    {
      year: t("about.experiences.exp1.year"),
      title: t("about.experiences.exp1.title"),
      company: t("about.experiences.exp1.company"),
      description: t("about.experiences.exp1.description"),
      technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "Three.js"],
      current: true,
    },
    {
      year: t("about.experiences.exp2.year"),
      title: t("about.experiences.exp2.title"),
      company: t("about.experiences.exp2.company"),
      description: t("about.experiences.exp2.description"),
      technologies: ["React", "Node.js", "Express", "MongoDB", "Spring Boot", "Java", "Docker"],
      current: false,
    },
    {
      year: t("about.experiences.exp3.year"),
      title: t("about.experiences.exp3.title"),
      company: t("about.experiences.exp3.company"),
      description: t("about.experiences.exp3.description"),
      technologies: ["C++", "C#", "Java", "HTML/CSS", "JavaScript", "Windows Forms", "WPF"],
      current: false,
    },
  ];

  return (
    <section className="w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-16 sm:space-y-20"
      >
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {t("about.section.title")}
          </h2>
          <p className="text-lg sm:text-xl text-muted/90 leading-relaxed">
            {t("about.section.paragraph")}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
            {t("about.alt.techStack")}
          </h3>
          <div className="space-y-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div key={groupIndex} variants={itemVariants}>
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: skillGroup.color }}>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: skillGroup.color }} />
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <SkillItem
                      key={skillIndex}
                      name={skill}
                      category={skillGroup.category}
                      color={skillGroup.color}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
            {t("about.experience.title")}
          </h3>
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="relative overflow-hidden rounded-2xl p-6 sm:p-8 text-center" style={{ background: "linear-gradient(135deg, var(--accent)15 0%, var(--accent)05 100%)", border: "1px solid var(--accent)30" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: "var(--accent)20", color: "var(--accent)" }}>
            <span className="text-sm font-medium">{t("about.experience.featuredProject")}</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{t("projectsData.13.name")}</h4>
          <p className="text-muted/80 mb-6 max-w-2xl mx-auto leading-relaxed">
            {t("projectsData.13.description")}
          </p>
          <a
            href="https://www.decibel.click/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
          >
            {t("about.experience.viewOnGitHub")} →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutDetails;
