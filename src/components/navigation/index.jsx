"use client";
import { BtnList } from "@/app/data";
import React from "react";
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

  // Translate labels while preserving original structure
  const translatedBtnList = (BtnList || []).map((item) => ({
    ...item,
    label: item.i18nKey ? t(item.i18nKey) : item.label,
  }));

  return (
    <div className="w-full fixed h-screen flex items-end justify-center pb-12">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <div className="w-max flex items-center justify-center gap-12">
              {translatedBtnList.map((btn, index) => {
                const delay = index * 0.15;
                return (
                  <NavButton key={btn.label} x={0} y={0} bounceDelay={delay} {...btn} />
                );
              })}
            </div>
          ) : (
            <>
              <div className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-6 item-start xs:items-center justify-end relative group xs:hidden pb-8">
                {translatedBtnList.slice(0, translatedBtnList.length / 2).map((btn, index) => (
                  <NavButton key={btn.label} x={0} y={0} bounceDelay={index * 0.15} {...btn} />
                ))}
              </div>
              <div className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-6 items-end xs:items-center justify-end relative group xs:hidden pb-8">
                {translatedBtnList.slice(translatedBtnList.length / 2, translatedBtnList.length).map((btn, idx) => {
                  const offset = translatedBtnList.length / 2;
                  return (
                    <NavButton key={btn.label} x={0} y={0} bounceDelay={(offset + idx) * 0.15} {...btn} labelDirection="left" />
                  );
                })}
              </div>
            </>
          );
        }}
      </ResponsiveComponent>
    </div>
  );
};

export default Navigation;
