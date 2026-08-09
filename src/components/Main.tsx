import { useMemo, useState } from "react";
import useFetch from "../hooks/useFetch";
import CountryCard from "./CountryCard";
import Error from "./Error";
import Loading from "./Loading";
import SearchForm from "./SearchForm";
import type { Country } from "../types/types";

export default function Main() {
  const { data, loading, error } = useFetch({
    url: import.meta.env.VITE_API_ALL_COUNTRIES,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  const filteredCountries = useMemo(() => {
    return data?.filter((country: Country) => {
      const matchesSearch = country.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesRegion = selectedRegion
        ? country.region === selectedRegion
        : true;

      return matchesSearch && matchesRegion;
    });
  }, [data, searchQuery, selectedRegion]);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = filteredCountries?.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.max(
    1,
    Math.ceil((filteredCountries?.length ?? 0) / itemsPerPage),
  );
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value);
    setCurrentPage(1);
  };
  if (error) {
    return <Error error={error} />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <SearchForm
        searchedCountry={searchQuery}
        handleSearch={handleSearch}
        getRegion={selectedRegion}
        handleRegion={handleRegion}
      />
      {currentCountries?.length === 0 && (
        <Error error="No countries available for the selected filters." />
      )}
      <div className="ml-8 mr-8 mt-10 grid grid-cols-1  gap-10 md:grid-cols-2 lg:grid-cols-4">
        {currentCountries?.map((country) => {
          return (
            <div key={country.alpha3Code}>
              <CountryCard singleCountry={country} />
            </div>
          );
        })}
      </div>
      {totalPages > 1 && (
        <div className="mt-12 mb-10 flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="rounded bg-[#2b3743] px-4 py-2 text-white disabled:opacity-40"
          >
            Prev
          </button>

          <span className="dark:text-gray-300 text-light-text">
            Page{" "}
            <strong className="dark:text-gray-300 text-light-text">
              {currentPage}
            </strong>{" "}
            of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="rounded bg-[#2b3743] px-4 py-2 text-white disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
