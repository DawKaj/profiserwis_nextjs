"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Zapobiega flashowaniu stylów przy SSR
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-between w-14 h-7 p-1 bg-gray-200 dark:bg-gray-700 rounded-full relative transition-colors duration-300 focus:outline-none"
    >
      {/* Suwak */}
      <span
        className={`absolute left-1 top-1 w-5 h-5 bg-white dark:bg-black rounded-full shadow-md transform transition-transform duration-300 ${
          theme === "dark" ? "translate-x-7" : "translate-x-0"
        }`}
      />
      {/* Ikony */}
      <Sun className="w-4 h-4 text-yellow-400 ml-1" />
      <Moon className="w-4 h-4 text-gray-900 mr-1" />
    </button>
  );
}
