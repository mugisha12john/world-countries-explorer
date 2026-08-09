import type { WeatherDTO } from "../../types/types";

interface weatherProps {
  currentWeather: WeatherDTO;
}
export default function Weather({ currentWeather }: weatherProps) {
  return (
    <>
      <div className="dark:bg-[#242c3d] p-4 rounded-lg border border-slate-700/40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={currentWeather.url}
            alt={`current weather status is ${currentWeather.condition}`}
          />

          <div>
            <p className="text-xs dark:text-slate-400 uppercase tracking-wider font-semibold">
              Capital Weather ({currentWeather.city})
            </p>
            <p className="text-lg font-bold tdark/l=:ext-slate-100">
              {currentWeather.tempC}°C{" "}
              <span className="text-xs font-normal dark:text-slate-400">
                | {currentWeather.condition}
              </span>
            </p>
          </div>
        </div>
        <div className="text-right text-xs dark:text-slate-400 space-y-0.5">
          <p>Humidity: {currentWeather.humidity}%</p>
          <p>Timezone: {currentWeather.timezone}</p>
        </div>
      </div>
    </>
  );
}
