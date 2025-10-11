import { RouteLoadingOverlay } from "@/components/Loading";

export default function AboutLoading() {
  return (
    <RouteLoadingOverlay
      minDuration={500}
      headlineKey="loading.about.headline"
      sublineKey="loading.about.subline"
    />
  );
}
