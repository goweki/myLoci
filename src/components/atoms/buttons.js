"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SVGbell, SVGmoon, SVGsun } from "./svgs";

export function ButtonPrimary({
  label,
  icon: Icon,
  onClick = () => console.log("Default button click-action..."),
}) {
  // Render
  return (
    <button
      type="button"
      className="flex flex-row space-x-2 text-font-focus bg-gradient-to-r from-primary-light via-primary-light to-primary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-primary dark:focus:ring-primary-dark shadow-md shadow-primary/50 dark:shadow-md dark:shadow-primary-dark/80 font-medium rounded-md text-md px-5 py-2.5 text-center"
      onClick={onClick}
    >
      <span className="sr-only">{`${label} button`}</span>
      {Icon && <Icon />}
      <span aria-hidden="true">{label && label}</span>
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
