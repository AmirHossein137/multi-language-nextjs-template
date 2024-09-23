import React from "react";
import ThemeToggle from "../theme/ThemeToggle";

const Header = () => {
  return (
    <div className="flex items-center justify-between gap-3 py-5">
      <span className="text-3xl">Logo</span>
      <ThemeToggle />
    </div>
  );
};
export default Header;
