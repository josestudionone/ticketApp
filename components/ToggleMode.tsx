"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const cleanTheme = theme?.trim();
    console.log("Current theme:", cleanTheme);
    if (theme !== cleanTheme) {
      setTheme(cleanTheme);
    }
  }, [theme, setTheme]);

  if (!mounted) {
    return <Button variant="outline" size="icon" disabled={true} />;
  }

  const dark = theme === "dark";
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        const newTheme = (dark ? "light" : "dark").trim();
        console.log("Setting new theme:", newTheme);
        setTheme(newTheme);
      }}
    >
      {dark ? (
        <Sun className="hover:cursor-pointer hover:text-primary" />
      ) : (
        <Moon className="hover:cursor-pointer hover:text-primary" />
      )}
    </Button>
  );
};

export default ToggleMode;
