export default function Weather() {
  return (
    <>
      <div className="dark:bg-[#242c3d] p-4 rounded-lg border border-slate-700/40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-3xl">⛅</div>
          <div>
            <p className="text-xs dark:text-slate-400 uppercase tracking-wider font-semibold">
              Capital Weather (Kigali)
            </p>
            <p className="text-lg font-bold tdark/l=:ext-slate-100">
              24°C{" "}
              <span className="text-xs font-normal dark:text-slate-400">
                | Partively Cloudy
              </span>
            </p>
          </div>
        </div>
        <div className="text-right text-xs dark:text-slate-400 space-y-0.5">
          <p>Humidity: 62%</p>
          <p>Timezone: UTC+2</p>
        </div>
      </div>
    </>
  );
}
