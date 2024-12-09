import React from "react";
import { ModeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <div className="p-4 border-b-2 flex flex-row justify-end">
      <ModeToggle />
    </div>
  );
}
