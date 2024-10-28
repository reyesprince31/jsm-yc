"use client";

import { X } from "lucide-react";
import Link from "next/link";

export function SearchFormReset() {
  const handleReset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;

    if (form) {
      form.reset();
    }
  };
  return (
    <button
      role="button"
      title="Reset Search"
      type="reset"
      onClick={handleReset}>
      <Link href="/" className="search-btn text-white">
        <X className="w-4 h-4" />
      </Link>
    </button>
  );
}
