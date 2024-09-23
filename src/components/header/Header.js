import React from "react";
import ThemeToggle from "../theme/ThemeToggle";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between gap-3 py-5">
      <span className="text-3xl">Logo</span>
      <div className="flex items-center gap-5">
        <ThemeToggle />
      </div>
      
    </div>
  );
};
export default Header;
