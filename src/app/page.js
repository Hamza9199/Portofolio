import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import NextDynamic from "next/dynamic";
import { RouteLoadingOverlay } from "@/components/Loading";

export const dynamic = "force-dynamic";

const Wizard = NextDynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel fit={false}>
          <Wizard />
        </RenderModel>
      </div>
      <RouteLoadingOverlay
        minDuration={500}
        headline="Lights out"
        subline="Dialing in the home grid"
      />
    </main>
  );
}
