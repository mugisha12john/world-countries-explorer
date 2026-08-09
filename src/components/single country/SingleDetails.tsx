import type { Country } from "../../types/types";

interface SingleDetailsProps {
  details?: Country | null;
}

export default function SingleDetails({ details }: SingleDetailsProps) {
  if (!details) {
    return null;
  }

  const currency = details.currencies?.[0];

  return (
    <>
      <div>
        <span className="dark:text-slate-400 font-bold">Native Name:</span>{" "}
        <span className="font-medium dark:text-slate-200 ">
          {details.name || "N/A"}
        </span>
      </div>
      <div>
        <span className="dark:text-slate-400 font-bold">Capital:</span>{" "}
        <span className="font-medium dark:text-slate-200 ">
          {details.capital || "N/A"}
        </span>
      </div>

      <div>
        <span className="dark:text-slate-400 font-bold">Population:</span>{" "}
        <span className="font-medium dark:text-slate-200 ">
          {details.population
            ? new Intl.NumberFormat().format(details.population)
            : "N/A"}
        </span>
      </div>
      <div>
        <span className="dark:text-slate-400 font-bold">Currency:</span>{" "}
        <span className="font-medium dark:text-slate-200 ">
          {currency ? `${currency.name} (${currency.code})` : "N/A"}
        </span>
      </div>
      <div>
        <span className="dark:text-slate-400 font-bold">Area:</span>{" "}
        <span className="font-medium dark:text-slate-200 ">
          {details.area
            ? `${new Intl.NumberFormat().format(details.area)} km`
            : "N/A"}
        </span>
      </div>
      <div>
        <span className="dark:text-slate-400 font-bold">Density:</span>{" "}
        <span className="font-medium dark:text-slate-200 ">
          {details.populationDensity
            ? `${details.populationDensity} km`
            : "N/A"}
        </span>
      </div>
      <div>
        <span className="dark:text-slate-400 font-bold">Region:</span>{" "}
        <span className="font-medium dark:text-slate-200 ">
          {details.region || "N/A"}
        </span>
      </div>

      <div>
        <span className="dark:text-slate-400 font-bold">Sub Region:</span>{" "}
        <span className="font-medium dark:text-slate-200 ">
          {details.subregion || "N/A"}
        </span>
      </div>
      <div>
        <span className="dark:text-slate-400 font-bold">Demonyn:</span>{" "}
        <span className="font-medium dark:text-slate-200 ">
          {details.demonym || "N/A"}
        </span>
      </div>
      <div>
        <span className="dark:text-slate-400 font-bold">Top level domain:</span>{" "}
        <span className="font-medium dark:text-slate-200 ">
          {details.topLevelDomain?.join(", ") || "N/A"}
        </span>
      </div>
      <div>
        <span className="dark:text-slate-400 font-bold">Calling Code:</span>{" "}
        <span className="font-medium dark:text-slate-200 ">
          {details.callingCodes?.[0] ? `+${details.callingCodes[0]}` : "N/A"}
        </span>
      </div>

      <div>
        <span className="dark:text-slate-400 font-bold">ISO / Numeric:</span>{" "}
        <span className="font-medium dark:text-slate-200 ">
          {details.alpha2Code || "N/A"} / {details.numericCode || "N/A"}
        </span>
      </div>
    </>
  );
}
