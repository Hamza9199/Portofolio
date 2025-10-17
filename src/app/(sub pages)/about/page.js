import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";
import { RouteLoadingOverlay } from "@/components/Loading";

const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />
      <div className="absolute h-full w-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
        <RenderModel fit={false}>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="m-5 font-bold  text-6xl xs:text-7xl sm:text-8xl  lg:text-9xl text-accent">
            Hamza Gačić
          </h1>
          <p className="font-light text-foreground text-lg">
            Software Engineer
          </p>
        </div>
      </div>

      <AboutDetails />
      <RouteLoadingOverlay minDuration={500} headlineKey="loading.about.headline"
      sublineKey="loading.about.subline" />
    </>
  );
}
