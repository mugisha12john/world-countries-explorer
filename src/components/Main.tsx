import useFetch from "../hooks/useFetch";
import CountryCard from "./CountryCard";
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
          return <CountryCard j={j} />;
        })}
      </div>
    </>
  );
}
