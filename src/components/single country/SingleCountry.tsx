import { Link, useLoaderData } from "react-router-dom";
import MoveLeftIcon from "../../assets/MoveLeftIcon";
import SingleDetails from "./SingleDetails";
import Weather from "./Weather";
import LanguageBorderCard from "./LanguageBorderCard";
import TopCities from "./TopCities";

export default function SingleCountry() {
  const countrySingle = useLoaderData();
  console.log(countrySingle);
  return (
    <>
      <Link
        to="/"
        className="w-25 px-2 py-1 flex hover:bg-[#374151] transition justify-center items-center rounded-md dark:shadow-dark-element shadow-sm shadow-light-text  gap-2 dark:bg-dark-element bg-light-bg ml-8 mt-5 hover:cursor-pointer"
      >
        <MoveLeftIcon /> Back
      </Link>
      <div className="min-h-full  p-4 md:p-8 font-sans">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 aspect-4/3 w-full bg-[#2d3748] rounded-xl overflow-hidden border border-slate-700/50 flex flex-col justify-center items-center relative group shadow-lg">
              <img
                src="https://flagcdn.com/w640/rw.png"
                alt="Rwanda Flag"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7  p-6 md:p-8 rounded-xl border border-slate-700/50 shadow-lg space-y-6">
              <div className="flex items-center justify-between border-b border-slate-700/60 pb-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight ">Rwanda</h1>
                  <p className="text-sm dark:text-slate-400 font-bold mt-1">
                    Republic of Rwanda &bull; Repubulika y'u Rwanda
                  </p>
                </div>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-3 py-1 rounded-full font-medium">
                  Independent State
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-sm">
                <SingleDetails />
              </div>
              {/* weather */}
              <Weather />
              {/* languages */}
              <div className="space-y-2 pt-2  md:flex md:gap-2 ">
                <LanguageBorderCard />
              </div>
            </div>
          </div>

          <div className="dark:bg-dark-element p-6 md:p-8 rounded-xl border border-slate-700/50 shadow-lg space-y-4">
            <TopCities />
          </div>
        </div>
      </div>
    </>
  );
}
