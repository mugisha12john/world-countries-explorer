export default function TopCities() {
  return (
    <>
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
            <span className="dark:text-slate-200  font-medium">1,132,686</span>
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
            <span className="dark:text-slate-200  font-medium">172,357</span>
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
            <span className="dark:text-slate-200  font-medium">153,368</span>
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
            <span className="dark:text-slate-200  font-medium">100,000</span>
          </p>
        </div>
      </div>
    </>
  );
}
