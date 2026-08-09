import type { Country, Language } from "../../types/types";

interface LanguageBorderCardProps {
  isBorder: boolean;
  languages?: Language[];
  borders?: Country[];
}
export default function LanguageBorderCard({
  isBorder,
  languages,
  borders,
}: LanguageBorderCardProps) {
  return (
    <>
      <span className="text-sm dark:text-slate-400 font-bold block ">
        {isBorder ? "Borders" : "Languages"}
      </span>
      {languages && (
        <div className="flex  gap-2">
          {languages?.map((lang) => {
            return (
              <span
                key={lang.name}
                className="px-3 py-1 dark:bg-dark-element text-xs font-medium rounded-md border border-slate-700/60 dark:text-slate-300"
              >
                {lang.name}
              </span>
            );
          })}
        </div>
      )}
      {borders && (
        <div className="flex  gap-2">
          {borders?.map((border) => {
            return (
              <span
                key={border.name}
                className="px-3 py-1 dark:bg-dark-element text-xs font-medium rounded-md border border-slate-700/60 dark:text-slate-300"
              >
                {border.nativeName}
              </span>
            );
          })}
        </div>
      )}
    </>
  );
}
