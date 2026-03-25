import React from "react";

export default function Cookies() {
  return (
    <section className="fixed flex items-center justify-between max-w-lg md:max-w-md lg:max-w-2xl p-4 mx-auto bg-white border border-gray-200 shadow-md dark:bg-silver right-12 bottom-16 dark:shadow-gray-900 shadow-gray-100 md:gap-x-4 dark:border-gray-700 rounded-2xl">
      <p className="text-sm text-gray dark:text-white">
        Kontynuując korzystanie z tej witryny, wyrażasz zgodę na używanie plików
        cookie zgodnie z naszą polityką dotyczącą plików cookie.
      </p>

      <button className="flex items-center justify-center text-gray transition-colors duration-300 rounded-full shrink-0 dark:text-white w-7 h-7 focus:outline-none hover:bg-silver hover:text-white dark:hover:bg-gray">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>
    </section>
  );
}
