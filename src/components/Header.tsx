import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="w-full sticky top-0 z-10 bg-black">
      <div className="py-6 container mx-auto flex flex-row items-center justify-between">
        <Link href="/">
          <span className="font-bold text-2xl">Fuminshou-dev</span> /{" "}
          <span className="">Fullstack-developer</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            className=" hover:text-blue-300 hover:underline"
            href="/about-me"
          >
            About Me
          </Link>
          <Link
            className=" hover:text-blue-300 hover:underline"
            href="/competencies"
          >
            Resume
          </Link>
          <Link
            className=" hover:text-blue-300 hover:underline"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className=" hover:text-blue-300 hover:underline"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
