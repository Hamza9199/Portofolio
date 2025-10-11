"use client";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/app/i18n/LanguageProvider";

const clamp = (value) => {
  if (typeof value !== "number" || Number.isNaN(value)) return null;
  return Math.min(100, Math.max(0, value));
};

const Loading = ({
  visible = true,
  headline = "Box, box…",
  subline = "Preparing the next lap",
  progress,
}) => {
  const safeProgress = clamp(progress);

  return (
    <div
      className={clsx(
        "fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-300",
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!visible}
      role="status"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#001F5B66,transparent_80%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#60a5fa26,transparent_20%)]" />
      <div className="relative z-10 flex flex-col items-center gap-6 text-white">
        <div className="grid grid-cols-2 gap-1 text-xs font-semibold uppercase tracking-[0.5em]">
          <span className="bg-white/90 px-5 py-3 text-black">F1</span>
          <span className="bg-blue-700 px-5 py-3">PIT</span>
          <span className="bg-blue-700 px-5 py-3">BOX</span>
          <span className="bg-white/90 px-5 py-3 text-black">
            {safeProgress !== null ? `${safeProgress}%` : "----"}
          </span>
        </div>

        <div className="flex items-center gap-4 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white/40">
            <div className="h-8 w-8 rounded-full border-4 border-transparent border-t-blue-500 animate-spin" />
          </div>
          <div className="text-left">
            <p className="text-2xl font-semibold uppercase tracking-[0.3em]">{headline}</p>
            <p className="text-sm uppercase tracking-[0.4em] text-blue-200">{subline}</p>
          </div>
        </div>

        <div className="relative h-1.5 w-64 overflow-hidden rounded-full bg-white/20">
          <span
            className="absolute inset-y-0 left-0 bg-blue-500 transition-all duration-300"
            style={{ width: `${safeProgress ?? 15}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;

export function RouteLoadingOverlay({
  minDuration = 500,
  enabled = true,
  headline,
  subline,
  headlineKey,
  sublineKey,
}) {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    setVisible(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setVisible(false), Math.max(0, minDuration));
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [pathname, enabled, minDuration]);

  const resolvedHeadline = headlineKey ? t(headlineKey) : (headline ?? "Lights out");
  const resolvedSubline = sublineKey ? t(sublineKey) : (subline ?? "Preparing the next lap");

  return <Loading visible={visible} headline={resolvedHeadline} subline={resolvedSubline} />;
}
