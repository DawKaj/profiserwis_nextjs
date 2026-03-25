"use client";

import React, { useEffect, useState } from "react";
import DarkModeTogle from "@/components/ThemeToggle";

export default function BottomBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  });
  return (
    <div className="h-8 flex flex-row justify-between bg-black text-white text-xs dark:border-solid dark:border dark:border-purple-300 px-2">
      <div className="flex flex-row flex-auto w-fit  text-start m-auto ">
        <span className=" px-2">D--K</span>
        <span className="blink px-2">Live</span>
        <span className="px-2">UTF-8</span>
      </div>
      <div className="flex-auto  m-auto"></div>
      <div className="w-fit m-auto px-2 hover:bg-slate-700">
        <DarkModeTogle />
      </div>
      <div
        title="SystemTime"
        className="flex flex-row w-fit text-start hover:bg-slate-700"
      >
        <div className="m-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <div>
          <p className="px-2">{time.toLocaleDateString()}</p>
          <p className="px-2">{time.toLocaleTimeString()}</p>
        </div>
      </div>
    </div>
  );
}
