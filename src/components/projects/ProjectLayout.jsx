"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/app/i18n/LanguageProvider";

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const ProjectCard = motion.div;
const ProjectLayout = ({ name, description, date, demoLink, image, featured = false }) => {
  const { t } = useLanguage();
  const imgHeight = featured ? "h-64 md:h-80" : "h-48 md:h-56";
  const titleClass = featured ? "text-xl md:text-2xl" : "text-lg md:text-xl";
  const descClass = featured ? "text-base md:text-lg" : "text-sm md:text-base";

  return (
    <ProjectCard
      variants={item}
      className="rounded-2xl overflow-hidden custom-bg border border-muted/30 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
    >
      {image ? (
        <div className={`relative ${imgHeight} w-full`}>
          <Image
            src={image}
            alt={`${name} preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            className="object-cover"
            priority={featured}
          />
        </div>
      ) : null}

      <div className={`p-6 md:p-8 flex flex-col gap-4`}>
        <div className="flex items-start justify-between gap-3">
          <h2 className={`${titleClass} font-semibold text-foreground`}>{name}</h2>
          <span className="shrink-0 text-xs md:text-sm px-2 py-1 rounded-md border border-muted text-muted">
            {date}
          </span>
        </div>

        <p className={`${descClass} leading-relaxed text-muted`}>{description}</p>

        <div className="mt-1 flex items-center gap-3">
          {demoLink ? (
            <Link
              href={demoLink}
              target="_blank"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-foreground text-background text-sm md:text-base hover:opacity-90 transition"
            >
              {t("projects.view")}
            </Link>
          ) : (
            <span className="text-xs md:text-sm text-muted italic">{t("projects.linkSoon")}</span>
          )}
        </div>
      </div>
    </ProjectCard>
  );
};

export default ProjectLayout;
