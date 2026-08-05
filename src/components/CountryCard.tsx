import type { Country } from "../types/types";

type CountryLike = Omit<Country, "capital"> & { capital?: string | string[] };
interface CountryCardProps {
  singleCountry: CountryLike;
}
export default function CountryCard({ singleCountry }: CountryCardProps) {
  return (
    <>
      <div className="w-80 dark:bg-dark-element bg-light-bg shadow-2xl rounded-lg overflow-hidden flex flex-col">
        <div className="w-full h-40 dark:bg-dark-element bg-light-input overflow-hidden">
          <img
            src={singleCountry.flags.svg}
            alt={`Flag of ${singleCountry.name}`}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-lg mb-4 dark:text-white text-gray-900">
              {singleCountry.name}
            </h3>

            <div className="text-sm flex gap-2 mb-1">
              <span className="font-bold">Population:</span>
              <span className="font-light">
                {new Intl.NumberFormat().format(singleCountry.population)}
              </span>
            </div>

            <div className="text-sm flex gap-2 mb-1">
              <span className="font-bold">Region:</span>
              <span className="font-light">{singleCountry.region}</span>
            </div>

            <div className="text-sm flex gap-2 mb-1">
              <span className="font-bold">Capital:</span>
              <span className="font-light">
                {Array.isArray(singleCountry.capital)
                  ? singleCountry.capital.join(", ")
                  : singleCountry.capital || "N/A"}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="mt-6 dark:bg-dark-bg dark:text-white text-gray-800 text-sm font-semibold px-4 py-2 w-40 border border-gray-300 dark:border-gray-700 bg-light-input hover:opacity-90 transition-opacity cursor-pointer rounded"
          >
            Explore more...
          </button>
        </div>
      </div>
    </>
  );
}
