"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/next.svg" width={40} height={40} alt="Logo" />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/">Home</Link>
            <Link href="/about">O nas</Link>
            <Link href="/kalkulator">Usługi</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>

          {/* Mobile button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="/about" className="block">
            O nas
          </Link>
          <Link href="/services" className="block">
            Usługi
          </Link>
          <Link href="/contact" className="block">
            Kontakt
          </Link>
        </div>
      )}
    </nav>
  );
}
