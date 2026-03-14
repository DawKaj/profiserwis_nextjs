import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center p-6">
      © {new Date().getFullYear()} ProfiSerwis.com.pl
    </footer>
  );
}
