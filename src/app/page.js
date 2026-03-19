import Image from "next/image";
import bg from "../../public/background/home-background.png";
import car from "../../public/background/car.png";
import Navigation from "@/components/navigation";
import NextDynamic from "next/dynamic";
import { RouteLoadingOverlay } from "@/components/Loading";

export const dynamic = "force-dynamic";

const Wizard = NextDynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-[100svh] md:min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />
      <div className="w-full h-[100svh] md:h-screen overflow-hidden relative">
        <Navigation />
        <div className="w-full h-full flex items-center justify-center">
          <Image
            priority
            src={car}
            alt="car-image"
            className="w-full h-auto max-w-md md:max-w-lg lg:max-w-xl object-contain"
          />
        </div>
        
      </div>
      <RouteLoadingOverlay
        minDuration={500}
        headlineKey="loading.home.headline"
        sublineKey="loading.home.subline"
      />
    </main>
  );
}
