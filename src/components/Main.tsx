import useFetch from "../hooks/useFetch";
import Skeleton from "./Skeleton";

export default function Main() {
  const { data, loading, error } = useFetch({
    url: import.meta.env.VITE_API_ALL_COUNTRIES,
  });
  if (error) {
    return (
      <div className="min-h-[calc(70vh-80px)] w-full flex justify-center items-center p-4">
        <div className="w-80 h-50 dark:bg-dark-element bg-pure-white text-light-text dark:text-pure-white shadow-2xl rounded-lg flex justify-center items-center text-center p-6">
          <p className="font-semibold text-base ">Error: {error}</p>
        </div>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="mt-10 ml-8 grid grid-cols-1  gap-10 md:grid-cols-3 lg:grid-cols-4">
        {new Array(4).fill(0).map((_, index) => {
          return (
            <div key={index}>
              <Skeleton />
            </div>
          );
        })}
      </div>
    );
  }
  console.log(data);
  return (
    <>
      <div className="ml-8 mt-10 grid grid-cols-1  gap-10 md:grid-cols-2 lg:grid-cols-4">
        {data.map((j) => {
          return (
            <div key={j.area}>
              <div className="w-80 dark:bg-dark-element  bg-light-bg shadow-2xl ">
                <div className="w-full h-50 dark:bg-dark-element  bg-light-input overflow-hidden ">
                  <img
                    src={j.flags.svg}
                    alt={j.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="ml-10">
                  <div className="font-semibold mt-5 mb-5">{j.name}</div>
                  <div className="text-sm flex gap-2">
                    <p className="font-bold">Population:</p>
                    <p className="font-light ">
                      {new Intl.NumberFormat().format(j.population)}
                    </p>
                  </div>
                  <div className="text-sm flex gap-2">
                    <p className="font-bold">Region:</p>
                    <p className="font-light ">{j.region}</p>
                  </div>
                  <div className="text-sm flex gap-2">
                    <p className="font-bold">Capital:</p>
                    <p className="font-light">{j.capital}</p>
                  </div>
                </div>
                <button className="mt-10 mb-10 ml-10 dark:bg-dark-bg text-sm font-semibold text-center px-2 py-2 w-40 border-2 border-red-200/20 bg-light-input text-white hover:cursor-pointer">
                  Explore more...
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
