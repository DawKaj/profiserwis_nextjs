import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="text-base uppercase font-bold text-gray dark:text-silverLight ">
        <li className="py-1">
          <Link
            href="/"
            className="link hover:text-black active:text-black dark:hover:text-white dark:active:text-white"
            // id="linkMain"
          >
            strona główna
          </Link>
        </li>
        <li className="py-1">
          <Link
            href="/automatyka"
            className="link hover:text-black dark:hover:text-white"
            // id="linkAutomation"
          >
            automatyka
          </Link>
        </li>
        <li className="py-1">
          <Link
            href="/kontakt"
            className="link hover:text-black dark:hover:text-white"
            // id="linkServices"
          >
            serwis
          </Link>
        </li>
        <li className="py-1">
          <Link
            href="/kalkulator"
            className="link hover:text-black dark:hover:text-white"
            // id="linkServices"
          >
            kalkulator
          </Link>
        </li>
        {/* <li className="py-1">
          <Link
            href="/o_nas"
            className="link hover:text-black dark:hover:text-white"
            activeClassName="active"
            // id="linkAbout"
          >
            o nas
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}
