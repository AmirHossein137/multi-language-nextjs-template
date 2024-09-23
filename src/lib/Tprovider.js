"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

const Tprovider = ({ children }) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Tprovider;
