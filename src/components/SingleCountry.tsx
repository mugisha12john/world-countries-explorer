import { Link } from "react-router-dom";
import MoveLeftIcon from "../assets/MoveLeftIcon";

export default function SingleCountry() {
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
            <div className="lg:col-span-5 aspect-[4/3] w-full bg-[#2d3748] rounded-xl overflow-hidden border border-slate-700/50 flex flex-col justify-center items-center relative group shadow-lg">
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
                <div>
                  <span className="dark:text-slate-400 font-bold">
                    Native Name:
                  </span>{" "}
                  <span className="font-medium dark:text-slate-200 ">
                    u Rwanda
                  </span>
                </div>
                <div>
                  <span className="dark:text-slate-400 font-bold">
                    Capital:
                  </span>{" "}
                  <span className="font-medium dark:text-slate-200 ">
                    Kigali
                  </span>
                </div>

                <div>
                  <span className="dark:text-slate-400 font-bold">
                    Population:
                  </span>{" "}
                  <span className="font-medium dark:text-slate-200 ">
                    13,246,394
                  </span>
                </div>
                <div>
                  <span className="dark:text-slate-400 font-bold">
                    Currency:
                  </span>{" "}
                  <span className="font-medium dark:text-slate-200 ">
                    Rwandan Franc (RWF)
                  </span>
                </div>

                <div>
                  <span className="dark:text-slate-400 font-bold">Region:</span>{" "}
                  <span className="font-medium dark:text-slate-200 ">
                    Africa
                  </span>
                </div>
                <div>
                  <span className="dark:text-slate-400 font-bold">
                    Calling Code:
                  </span>{" "}
                  <span className="font-medium dark:text-slate-200 ">+250</span>
                </div>

                <div>
                  <span className="dark:text-slate-400 font-bold">
                    Sub Region:
                  </span>{" "}
                  <span className="font-medium dark:text-slate-200 ">
                    Eastern Africa
                  </span>
                </div>
                <div>
                  <span className="dark:text-slate-400 font-bold">
                    ISO / Numeric:
                  </span>{" "}
                  <span className="font-medium dark:text-slate-200 ">
                    RW / 646
                  </span>
                </div>
              </div>
              <div className="space-y-2 pt-2  md:flex md:gap-2 ">
                <span className="text-sm dark:text-slate-400 font-bold block ">
                  Languages:
                </span>
                <div className="flex  gap-2">
                  <span className="px-3 py-1 bg-dark-element text-xs font-medium rounded-md border border-slate-700/60 text-slate-300">
                    Kinyarwanda
                  </span>
                  <span className="px-3 py-1 bg-dark-element text-xs font-medium rounded-md border border-slate-700/60 text-slate-300">
                    English
                  </span>
                  <span className="px-3 py-1 bg-dark-element text-xs font-medium rounded-md border border-slate-700/60 text-slate-300">
                    French
                  </span>
                  <span className="px-3 py-1 bg-dark-element text-xs font-medium rounded-md border border-slate-700/60 text-slate-300">
                    Kiswahili
                  </span>
                </div>
              </div>
              <div className="space-y-2 pt-2 md:flex md:gap-2 ">
                <span className="text-sm dark:text-slate-400 font-bold block ">
                  Border Countries:
                </span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <span className="px-3 py-1 bg-dark-element text-xs font-medium rounded-md border border-slate-700/60 dark:text-slate-300 text-light-bg">
                    Uganda
                  </span>
                  <span className="px-3 py-1 bg-dark-element text-xs font-medium rounded-md border border-slate-700/60 dark:text-slate-300 text-light-bg">
                    Tanzania
                  </span>
                  <span className="px-3 py-1 bg-dark-element text-xs font-medium rounded-md border border-slate-700/60 dark:text-slate-300 text-light-bg">
                    Burundi
                  </span>
                  <span className="px-3 py-1 bg-dark-element text-xs font-medium rounded-md border border-slate-700/60 dark:text-slate-300 text-light-bg">
                    DR Congo
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="dark:bg-dark-element p-6 md:p-8 rounded-xl border border-slate-700/50 shadow-lg space-y-4">
            <div className="flex justify-between items-center border-b border-slate-700/60 pb-3">
              <h2 className="text-lg font-bold ">Top Populated Cities</h2>
              <span className="text-xs dark:text-slate-400 font-bold">
                Source: GeoName Data
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="dark:bg-dark-bg p-3.5 rounded-lg border border-slate-700/40 space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-sm ">Kigali</h3>
                  <span className="text-[10px] bg-sky-500/10 text-sky-400 px-1.5 py-0.5 rounded font-mono">
                    PPLC
                  </span>
                </div>
                <p className="text-xs dark:text-slate-400 font-bold">
                  Population:{" "}
                  <span className="dark:text-slate-200  font-medium">
                    1,132,686
                  </span>
                </p>
              </div>

              <div className="dark:bg-dark-bg p-3.5 rounded-lg border border-slate-700/40 space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-sm ">Gisenyi</h3>
                  <span className="text-[10px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded font-mono">
                    PPLA2
                  </span>
                </div>
                <p className="text-xs dark:text-slate-400 font-bold">
                  Population:{" "}
                  <span className="dark:text-slate-200  font-medium">
                    172,357
                  </span>
                </p>
              </div>

              <div className="dark:bg-dark-bg p-3.5 rounded-lg border border-slate-700/40 space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-sm ">Musanze</h3>
                  <span className="text-[10px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded font-mono">
                    PPL
                  </span>
                </div>
                <p className="text-xs dark:text-slate-400 font-bold">
                  Population:{" "}
                  <span className="dark:text-slate-200  font-medium">
                    153,368
                  </span>
                </p>
              </div>

              <div className="dark:bg-dark-bg p-3.5 rounded-lg border border-slate-700/40 space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-sm ">Nyagatare</h3>
                  <span className="text-[10px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded font-mono">
                    PPL
                  </span>
                </div>
                <p className="text-xs dark:text-slate-400 font-bold">
                  Population:{" "}
                  <span className="dark:text-slate-200  font-medium">
                    100,000
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <main className="flex gap-10 ml-10 mt-10 flex-col md:flex-row">
        <div className="w-120 h-80 bg-light-input dark:bg-dark-element"></div>
        <section className="w-120 h-80 bg-light-input dark:bg-dark-element">
          <h1 className="text-3xl font-bold ml-8 py-8">Beligum</h1>
          <section className="flex justify-around">
            <div>
              <div className="single-country-list">
                <p className="text-lg font-bold">Native name: </p>
                <p className="text-light-bg-box">Belige</p>
              </div>
              <div className="single-country-list">
                <p>Population:</p>
                <p>12,342,343</p>
              </div>
              <div className="single-country-list">
                <p>Region: </p>
                <p>Europe</p>
              </div>
              <div className="single-country-list">
                <p>Sub Region: </p>
                <p>West europe</p>
              </div>
              <div className="single-country-list">
                <p>Population density:</p>
                <p>1273 km</p>
              </div>
            </div>
            <div>
              <div className="single-country-list">
                <p>Top level: </p>
                <p>Europe</p>
              </div>
              <div className="single-country-list">
                <p>Currency: </p>
                <p>West europe</p>
              </div>
              <div className="single-country-list">
                <p>Capital: </p>
                <p>Brussel</p>
              </div>
              <div className="single-country-list">
                <p>Calling code:</p>
                <p>+250</p>
              </div>
            </div>
          </section>
          <div className="flex gap-10 items-center justify-around mt-5">
            <p>Border country</p>
            <div className="flex gap-5">
              <p>France</p>
              <p>Uganda</p>
              <p>Kenya</p>
            </div>
          </div>
        </section>
      </main> */}
    </>
  );
}
