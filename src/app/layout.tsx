// app/layout.tsx
"use client";
import "../styles/globals.css";
import { ReactNode } from "react";
import { useEffect, useState } from "react";



export default function RootLayout({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <html lang="en">
      <body>
        <div className="p-4">
          
          {children}
          <button
            onClick={toggleDarkMode}
            className="btn_darkmode mb-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
          >
            {dark ? "Dark" : "White"}
          </button>
        </div>
      </body>
    </html>
  );
}
