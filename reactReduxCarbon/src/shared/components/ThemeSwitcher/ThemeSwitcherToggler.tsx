/* eslint-disable no-debugger */
import { useEffect, useState } from "react";
import { Toggle } from "@carbon/react";

import { useDispatch } from "react-redux";
import { ThemeSet } from "../../../store/theme/theme.actions";

function ThemeSwitcherToggler(): any {
  const themes = {
    light: { label: "Light theme", value: "white" },
    dark: { label: "Dark theme", value: "g100" },
  };

  const [themeInstance, setThemeInstance] = useState("light");

  const dispatch = useDispatch();

  const toggleTheme = (value: any) => {
    debugger;
    setThemeInstance(value ? "dark" : "light");
    dispatch(ThemeSet(value ? "dark" : "light"));
    localStorage.setItem("carbon-theme", value ? "dark" : "light");
  };

  useEffect(() => {
    const savedThemeData = localStorage.getItem("carbon-theme");
    if (savedThemeData) {
      setThemeInstance(savedThemeData);
      dispatch(ThemeSet(savedThemeData));
    }
  }, []);

  return (
    <>
      <span className="theme-switcher-toggler">
        <Toggle
          size="sm"
          labelA={themes.light.label}
          labelB={themes.dark.label}
          toggled={themeInstance !== "light"}
          id="toggle-theme"
          onToggle={(value) => toggleTheme(value)}
        />
      </span>
    </>
  );
}

export default ThemeSwitcherToggler;
