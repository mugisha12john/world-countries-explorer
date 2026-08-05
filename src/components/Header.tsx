import MoonIcon from "../assets/MoonIcon";
import SunIcon from "../assets/SunIcon";
import { useTheme } from "../theme/ThemeProvider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className="max-w-full p-4  dark:bg-dark-element dark:text-pure-white bg-amber-50 flex justify-between shadow-2xl  items-center ">
        <h2 className="text-lg  font-bold ml-4">Where in the world?</h2>
        <button
          onClick={toggleTheme}
          className="flex justify-center items-center gap-2 mr-4 text-sm font-medium hover:cursor-pointer"
        >
          {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          <p>{theme === "dark" ? "Dark" : "Light"}</p>
        </button>
      </div>
    </>
  );
}
