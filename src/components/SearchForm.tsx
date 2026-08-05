import SearchIcon from "../assets/SearchIcon";

interface SearchFormProps {
  searchedCountry: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getRegion: string;
  handleRegion: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SearchForm = ({
  searchedCountry,
  handleSearch,
  getRegion,
  handleRegion,
}: SearchFormProps) => {
  return (
    <>
      <div className="flex flex-col m-5 md:flex-row md:justify-between">
        <div className="max-w-88 h-10 p-2 rounded-lg mt-5  shadow-xl  flex justify-center items-center dark:bg-dark-element bg-light-bg ">
          <div className="flex justify-center items-center gap-5 ">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for a country.."
              name="searchCountry"
              value={searchedCountry}
              onChange={handleSearch}
              className="outline-0 font-lg font-semibold text-light-bg"
            />
          </div>
        </div>
        <div className="max-w-60 p-2 rounded-lg mt-5  shadow-xl  flex justify-between items-center dark:bg-dark-element bg-light-bg md:grow">
          <select
            name="region"
            value={getRegion}
            onChange={handleRegion}
            className="w-full outline-0 dark:bg-dark-element"
          >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </>
  );
};
export default SearchForm;
