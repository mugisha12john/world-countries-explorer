export default function LanguageBorderCard() {
  return (
    <>
      <span className="text-sm dark:text-slate-400 font-bold block ">
        Languages:
      </span>
      <div className="flex  gap-2">
        <span className="px-3 py-1 dark:bg-dark-element text-xs font-medium rounded-md border border-slate-700/60 dark:text-slate-300">
          Kinyarwanda
        </span>
        <span className="px-3 py-1 dark:bg-dark-element text-xs font-medium rounded-md border border-slate-700/60 dark:text-slate-300">
          English
        </span>
        <span className="px-3 py-1 dark:bg-dark-element text-xs font-medium rounded-md border border-slate-700/60 dark:text-slate-300">
          French
        </span>
        <span className="px-3 py-1 dark:bg-dark-element text-xs font-medium rounded-md border border-slate-700/60 dark:text-slate-300">
          Kiswahili
        </span>
      </div>
    </>
  );
}
