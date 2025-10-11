import { RouteLoadingOverlay } from "@/components/Loading";

export default function ProjectsLoading() {
  return (
    <RouteLoadingOverlay
      minDuration={500}
      headlineKey="loading.projects.headline"
      sublineKey="loading.projects.subline"
    />
  );
}
