"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, SunMoon } from "lucide-react";

const ThemeToggle = () => {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const [mount, setMount] = useState(false);


  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return <></>;
  }
  return (
    <button className="p-2 bg-white text-black rounded-md">
      {currentTheme === "light" ? (
        <Moon onClick={() => setTheme("dark")} />
      ) : (
        <SunMoon onClick={() => setTheme("light")} />
      )}
    </button>
  );
};

export default ThemeToggle;
