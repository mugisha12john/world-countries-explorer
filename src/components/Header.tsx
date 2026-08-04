import MoonIcon from "../assets/MoonIcon";
import SunIcon from "../assets/SunIcon";
import { useTheme } from "./theme/ThemeProvider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className="max-w-full h-20 dark:bg-dark-element dark:text-pure-white bg-amber-50 flex justify-between shadow-2xl  items-center px-5 py-10">
        <h2 className="text-lg  font-bold">Where in the world?</h2>
        <div className="flex justify-center items-center gap-2">
          {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          <button
            onClick={toggleTheme}
            className="text-sm font-medium hover:cursor-pointer"
          >
            {theme === "dark" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </>
  );
}
