import { Link } from "react-router-dom";
import MoveLeftIcon from "../assets/MoveLeftIcon";

export default function SingleCountry() {
  return (
    <>
      <Link
        to="/"
        className="w-25 px-2 py-1 flex  justify-center items-center rounded-md dark:shadow-dark-element shadow-sm shadow-light-text  gap-2 dark:bg-dark-element bg-light-bg ml-8 mt-5 hover:cursor-pointer"
      >
        <MoveLeftIcon /> Back
      </Link>
      <div className="flex gap-10 ml-10 mt-10">
        <div className="w-120 h-80 bg-light-input dark:bg-dark-element"></div>
        <div className="w-120 h-80 bg-light-input dark:bg-dark-element"></div>
      </div>
    </>
  );
}
