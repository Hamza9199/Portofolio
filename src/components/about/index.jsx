import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout className={" col-span-full lg:col-span-8 row-span-2 flex-col items-start"}>
          <h2 className=" text-xl md:text-2xl text-left w-full capitalize">A bit about my journey and experience</h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            I am a passionate and dedicated full-stack developer with over 3 years of experience in crafting dynamic and responsive web applications. My journey began with a fascination for technology and a desire to create impactful digital experiences. Over the years, I have honed my skills in both front-end and back-end development, working with a variety of technologies including React, Node.js, Express, and MongoDB. I thrive in collaborative environments and am always eager to take on new challenges.
          </p>
        </ItemLayout>

        <ItemLayout className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">2+ <sub className="font-semibold text-base">clients</sub></p>
        </ItemLayout>

        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">3+ <sub className="font-semibold text-base">years of experience</sub></p>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
          <img className="w-full h-auto" src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=Hamza9199&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`} alt="Hamza Gacic" loading="lazy" />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img className="w-full h-auto" src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=Hamza9199&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`} alt="Hamza Gacic" loading="lazy" />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img className="w-full h-auto" src={`https://skillicons.dev/icons?i=html,css,js,ts,react,nodejs,express,mongodb,mysql,postgres,dotnet,cs,spring,fastapi,electron,python,java,cpp,git,github,cypress,postman,tailwind,vercel,docker&theme=dark`} alt="Tech stack" loading="lazy" />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img className="w-full h-auto" src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=Hamza9199&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`} alt="Hamza Gacic" loading="lazy" />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link href="https://github.com/Hamza9199/MusicStreamingService" target="_blank" className="w-full">
            <img className="w-full h-auto" src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=Hamza9199&repo=MusicStreamingService&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`} alt="MusicStreamingService" loading="lazy" />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
