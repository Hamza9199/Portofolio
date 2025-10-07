import {
  Github,
  Home,
  Instagram,
  Linkedin,
  NotebookText,
  Palette,
  Phone,
  Twitter,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "instagram":
      return <Instagram className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <NotebookText className="w-full h-auto" strokeWidth={1.5} />;

    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const item = {
  hidden: { scale: 0, y: 0 },
  show: { scale: 1, y: 0 },
};

const bounceTransition = (delay = 0) => ({
  delay,
  repeat: Infinity,
  repeatType: "reverse",
  duration: 1.2,
  ease: "easeInOut",
});

const NavLink = motion(Link);

const NavButton = ({
  x,
  y,
  label,
  link,
  icon,
  newTab,
  labelDirection = "right",
  bounceDelay = 0,
}) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div className="relative w-fit cursor-pointer z-50 hover:z-[9999]">
            <NavLink
              initial={false}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground rounded-full flex items-center justify-center custom-bg"
              aria-label={label}
              name={label}
              prefetch={true}
              scroll={false}
            >
              <motion.span
                className="relative w-40 h-40 p-8 hover:text-accent"
                animate={{ y: [0, -8, 0] }}
                transition={bounceTransition(bounceDelay)}
              >
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span className="absolute z-[99999] pointer-events-none hidden peer-hover:block px-3 py-1.5 left-full mx-3 top-1/2 -translate-y-1/2 bg-background text-foreground text-base rounded-md shadow-lg whitespace-nowrap">
                  {label}
                </span>
              </motion.span>
            </NavLink>
          </div>
        ) : (
          <div className="relative w-fit cursor-pointer z-50 hover:z-[9999]">
            <NavLink
              initial={false}
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="text-foreground rounded-full flex items-center justify-center custom-bg"
              aria-label={label}
              name={label}
              prefetch={true}
              scroll={false}
            >
              <motion.span
                className="relative w-20 h-20 xs:w-40 xs:h-40 p-5 xs:p-8 hover:text-accent"
                animate={{ y: [0, -6, 0] }}
                transition={bounceTransition(bounceDelay)}
              >
                {getIcon(icon)}
                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
                <span
                  className={clsx(
                    "absolute z-[99999] pointer-events-none hidden peer-hover:block px-3 py-1.5 left-full mx-3 top-1/2 -translate-y-1/2 bg-background text-foreground text-base rounded-md shadow-lg whitespace-nowrap",
                    labelDirection === "left" ? "right-full left-auto" : ""
                  )}
                >
                  {label}
                </span>
              </motion.span>
            </NavLink>
          </div>
        );
      }}
    </ResponsiveComponent>
  );
};

export default NavButton;
