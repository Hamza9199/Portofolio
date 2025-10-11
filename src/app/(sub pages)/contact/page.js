import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";
import { RouteLoadingOverlay } from "@/components/Loading";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <Form />
      </article>
      <RouteLoadingOverlay
        minDuration={500}
        headlineKey="loading.contact.headline"
        sublineKey="loading.contact.subline"
      />
    </>
  );
}
