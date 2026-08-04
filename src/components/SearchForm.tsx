import SearchIcon from "../assets/SearchIcon";

export const SearchForm = () => {
  return (
    <>
      <div className="flex flex-col m-5 md:flex-row md:justify-between">
        <div className="max-w-88 p-4 rounded-xl  mt-5 shadow-xl  flex justify-center items-center dark:bg-dark-element bg-light-bg ">
          <div className="flex justify-center items-center gap-5 ">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for a country.."
              className="outline-0 font-lg font-semibold text-light-input"
            />
          </div>
        </div>
        <div className="max-w-80 p-4 rounded-xl  mt-5 shadow-xl  flex justify-between items-center dark:bg-dark-element bg-light-bg md:grow">
          <select
            name="region"
            id="region"
            className="w-full outline-0 dark:bg-dark-element"
          >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
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
