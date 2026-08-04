import { useState } from "react";
import MoonIcon from "../assets/MoonIcon";
import SunIcon from "../assets/SunIcon";

export default function Header() {
  const [mode, setMode] = useState(false);
  function handleTheme() {
    setMode((prev) => !prev);
  }
  return (
    <>
      <div className="max-w-full flex justify-between shadow-sm shadow-olive-200 items-center px-5 py-10">
        <h2 className="text-lg  font-bold">Where in the world?</h2>
        <div className="flex justify-center items-center gap-2">
          {mode ? <MoonIcon /> : <SunIcon />}
          <button
            onClick={handleTheme}
            className="text-sm font-medium hover:cursor-pointer"
          >
            {mode ? "Dark mode" : "Light mode"}
          </button>
        </div>
      </div>
    </>
  );
}
