import React from "react";
import ThemeToggle from "../theme/ThemeToggle";
import LocalSwitcher from "../languageSwith/LocalSwitcher";
import { Link } from "@/navigation";

const Header = () => {
  return (
    <div className="flex items-center justify-between gap-3 py-5">
      <Link className="text-3xl" href='/'>Logo</Link>
      <div className="flex items-center gap-6">
        <LocalSwitcher />
        <ThemeToggle />
      </div>
      
    </div>
  );
};
export default Header;
