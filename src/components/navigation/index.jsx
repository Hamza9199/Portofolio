"use client";
import { BtnList } from "@/app/data";
import React, { useEffect, useState } from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import { useLanguage } from "../../app/i18n/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = () => {
  const size = useScreenSize();
  const isLarge = size >= 1024;
  const isMedium = size >= 768;
  const { t } = useLanguage();

  const translatedBtnList = (BtnList || []).map((item) => ({
    ...item,
    label: item.i18nKey ? t(item.i18nKey) : item.label,
  }));

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="w-full fixed h-[100svh] flex items-end justify-center pb-[calc(env(safe-area-inset-bottom)+3rem)]">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <div
              key={mounted ? "nav-mounted" : "nav-ssr"}
              className="w-full max-w-6xl px-4 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12"
            >
              {translatedBtnList.map((btn, index) => {
                const delay = index * 0.15;
                return (
                  <NavButton key={`${btn.label}-${index}`} x={0} y={0} bounceDelay={delay} {...btn} />
                );
              })}
            </div>
          ) : (
            <div
              key={mounted ? "nav-mounted-sm" : "nav-ssr-sm"}
              className="w-full px-3 grid grid-cols-2 gap-5 justify-items-center pb-8"
            >
              {translatedBtnList.map((btn, index) => (
                <NavButton key={`${btn.label}-${index}`} x={0} y={0} bounceDelay={index * 0.1} {...btn} />
              ))}
            </div>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
