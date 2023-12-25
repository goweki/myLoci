"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SVGbell, SVGmoon, SVGsun } from "./svgs";

export function ButtonPrimary({
  label,
  icon: Icon,
  onClick = () => console.log("Default button click-action..."),
  noPadding,
  variant,
  noText,
}) {
  // Render
  return (
    <button
      type="button"
      className={`transition group hover:scale-105 flex flex-row text-center [&>*:not(:last-child)]:mr-1 border
      hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-primary dark:focus:ring-primary-dark font-medium rounded-md text-md ${
        !variant
          ? "border-transparent text-font-focus bg-gradient-to-r from-primary-light via-primary-light to-primary shadow-md shadow-primary/50 dark:shadow-md dark:shadow-primary-dark/80"
          : "border-font dark:border-font-dark dark:from-primary-light dark:via-primary-light dark:to-primary hover:text-font-focus transition"
      }  ${!noPadding ? "px-4 py-2" : "p-1"}`}
      onClick={onClick}
    >
      {label && <span className="sr-only">{`${label} button`}</span>}
      {Icon && (
        <Icon
          className={`h-6 w-6 fill-none stroke-1 transition group-hover:fill-primary-dark group-hover:stroke-primary-dark ${
            !variant
              ? "stroke-font-inactive "
              : "stroke-font dark:stroke-font-dark"
          }  `}
        />
      )}
      {label && !noText && <span aria-hidden="true">{label}</span>}
    </button>
  );
}

export function ButtonUnbound({
  label,
  icon: Icon,
  onClick = () => console.log("Default button click-action..."),
  noText,
}) {
  // Render
  return (
    <button
      type="button"
      className={`transition group hover:scale-105 flex flex-row text-center [&>*:not(:last-child)]:mr-1
      focus:ring-2 focus:outline-none focus:ring-primary dark:focus:ring-primary-dark font-medium rounded-md text-md hover:text-primary p-1}`}
      onClick={onClick}
    >
      {label && <span className="sr-only">{`${label} button`}</span>}
      {Icon && (
        <Icon
          className={`h-6 w-6 fill-none stroke-1 transition group-hover:fill-primary group-hover:stroke-primary stroke-font dark:stroke-font-dark`}
        />
      )}
      {label && !noText && <span aria-hidden="true">{label}</span>}
    </button>
  );
}

export function ThemeToggle({ className }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  // Render
  if (mounted)
    return (
      <button
        onClick={() => {
          theme === "light" ? setTheme("dark") : setTheme("light");
        }}
        className={`rounded-full outline-none focus:outline-none focus-visible:ring focus-visible:ring-primary focus:ring-opacity-20 ${className}`}
      >
        <span className="sr-only">Dark Mode</span>
        <div className="w-6 h-6 hover:text-primary-dark dark:text-primary-light">
          {theme === "dark" ? <SVGsun /> : <SVGmoon />}
        </div>
      </button>
    );
}
