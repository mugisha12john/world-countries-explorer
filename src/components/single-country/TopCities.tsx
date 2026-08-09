import type { City } from "../../types/types";

interface TopCitiesProps {
  populatedCities: City[];
}
export default function TopCities({ populatedCities }: TopCitiesProps) {
  return (
    <>
      <div className="flex justify-between items-center border-b border-slate-700/60 pb-3">
        <h2 className="text-lg font-bold ">Top Populated Cities</h2>
        <span className="text-xs dark:text-slate-400 font-bold">
          Source: GeoName Data
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {populatedCities.map((city) => {
          return (
            <div
              key={city.geonameId}
              className="dark:bg-dark-bg p-3.5 rounded-lg border border-slate-700/40 space-y-1"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm ">{city.name}</h3>
                <span className="text-[10px] bg-sky-500/10 dark:text-sky-300 text-sky-600 px-1.5 py-0.5 rounded font-mono">
                  {city.featureCode}
                </span>
              </div>
              <p className="text-xs dark:text-slate-400 font-bold">
                Population:{" "}
                <span className="dark:text-slate-200  font-medium">
                  {new Intl.NumberFormat().format(city.population)}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
