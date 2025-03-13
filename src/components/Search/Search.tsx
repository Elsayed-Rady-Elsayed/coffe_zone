import Hooks from "./Hooks";
import { SearchProps } from "./SearchTypes";

const Search = (props: SearchProps) => {
  const {
    t,
    search,
    EndSearch,
    startSearch,
  } = Hooks();
  return (
    <div
      className="absolute z-20 bg-white w-[100%] p-5 left-0 shadow-lg hidden dark:text-white dark:bg-stone-800"
      ref={props.refinp}
    >
      <form className="flex gap-10">
        <input
          className="border w-full p-1 rounded-full dark:bg-stone-600"
          type="text"
          value={search}
          onChange={(ev) => {
            startSearch(ev);
          }}
          placeholder={t("searchPlaceHolder")}
        />
        <span
          className="cursor-pointer p-2"
          onClick={() => {
            EndSearch(props);
          }}
        >
          x
        </span>
      </form>
    </div>
  );
};
export default Search;
