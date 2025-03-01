"use client";
import { useLanguage } from "../context/LanguageContext";
import Image from "next/image";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = (newLanguage: "python" | "typescript") => {
    setLanguage(newLanguage);
  };

  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className="inline-flex h-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 p-1 text-gray-700 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-700"
    >
      <button
        type="button"
        role="tab"
        aria-selected={language === "python"}
        onClick={() => toggleLanguage("python")}
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-1.5 text-sm font-medium transition-all duration-200
          ${
            language === "python"
              ? "bg-white dark:bg-gray-900 shadow-sm"
              : "hover:bg-gray-200 dark:hover:bg-gray-700"
          } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
      >
        <div className="w-4 h-4 mr-1.5 flex items-center justify-center overflow-visible">
          <Image 
            src="/images/python.svg" 
            alt="Python" 
            width={16} 
            height={16} 
            style={{ objectFit: 'contain', borderRadius: 0 }}
          />
        </div>
        Python
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={language === "typescript"}
        onClick={() => toggleLanguage("typescript")}
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-1.5 text-sm font-medium transition-all duration-200
          ${
            language === "typescript"
              ? "bg-white dark:bg-gray-900 shadow-sm"
              : "hover:bg-gray-200 dark:hover:bg-gray-700"
          } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
      >
        <div className="w-4 h-4 mr-1.5 flex items-center justify-center overflow-visible">
          <Image 
            src="/images/javascript.svg" 
            alt="JavaScript" 
            width={16} 
            height={16} 
            style={{ objectFit: 'contain', borderRadius: 0 }}
          />
        </div>
        JavaScript
      </button>
    </div>
  );
} 