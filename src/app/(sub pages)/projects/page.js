import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import NextDynamic from "next/dynamic";
import RefreshOnMount from "@/components/RefreshOnMount";
import { RouteLoadingOverlay } from "@/components/Loading";

const Staff = NextDynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <RefreshOnMount />
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />
      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed  top-20  lg:top-20  left:2 -z-10 lg:-left-0 h-screen">
        <RenderModel fit={false}>
          <Staff />
        </RenderModel>
      </div>
      <RouteLoadingOverlay
        minDuration={500}
        headline="Lights out"
        subline="Fueling the project pitwall"
      />
    </>
  );
}
