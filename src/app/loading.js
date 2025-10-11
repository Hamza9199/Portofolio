import { RouteLoadingOverlay } from "@/components/Loading";

export default function AppLoading() {
  return (
    <RouteLoadingOverlay
      minDuration={500}
      headlineKey="loading.home.headline"
      sublineKey="loading.home.subline"
    />
  );
}
