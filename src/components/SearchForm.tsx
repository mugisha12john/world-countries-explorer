import SearchIcon from "../assets/SearchIcon";

export const SearchForm = () => {
  return (
    <>
      <div className="max-w-88 p-4 rounded-xl mx-auto mt-10 shadow-xl  flex justify-center items-center dark:bg-dark-element bg-light-bg md:mx-0 md:ml-8">
        <div className="flex justify-center items-center gap-5 ">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search for a country.."
            className="outline-0 font-lg font-semibold text-light-input"
          />
        </div>
      </div>
    </>
  );
};
export default SearchForm;
