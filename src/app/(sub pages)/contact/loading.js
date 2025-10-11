import { RouteLoadingOverlay } from "@/components/Loading";

export default function ContactLoading() {
  return (
    <RouteLoadingOverlay
      minDuration={500}
      headlineKey="loading.contact.headline"
      sublineKey="loading.contact.subline"
    />
  );
}
