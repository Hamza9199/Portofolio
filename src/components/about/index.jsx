"use client";
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import { useLanguage } from "@/app/i18n/LanguageProvider";

const AboutDetails = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout className={" col-span-full lg:col-span-8 row-span-2 flex-col items-start"}>
          <h2 className=" text-xl md:text-2xl text-left w-full capitalize">{t("about.section.title")}</h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            {t("about.section.paragraph")}
          </p>
        </ItemLayout>

        <ItemLayout className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">2+ <sub className="font-semibold text-base">{t("about.stats.clients")}</sub></p>
        </ItemLayout>

        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">3+ <sub className="font-semibold text-base">{t("about.stats.years")}</sub></p>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
          <img className="w-full h-auto" src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=Hamza9199&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`} alt={t("about.alt.topLangs")} loading="lazy" />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img className="w-full h-auto" src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=Hamza9199&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`} alt={t("about.alt.stats")} loading="lazy" />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img className="w-full h-auto" src={`https://skillicons.dev/icons?i=html,css,js,ts,react,nodejs,express,mongodb,mysql,postgres,dotnet,cs,spring,fastapi,electron,python,java,cpp,git,github,cypress,postman,tailwind,vercel,docker&theme=dark`} alt={t("about.alt.techStack")} loading="lazy" />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img className="w-full h-auto" src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=Hamza9199&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`} alt={t("about.alt.streak")} loading="lazy" />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link href="https://github.com/Hamza9199/MusicStreamingService" target="_blank" className="w-full">
            <img className="w-full h-auto" src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=Hamza9199&repo=MusicStreamingService&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`} alt={t("about.alt.pin.music")} loading="lazy" />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
