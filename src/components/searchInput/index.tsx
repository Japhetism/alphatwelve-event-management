import { SearchIcon } from "../../assets/icons/searchIcon";
import { useDarkMode } from "../../hooks/useDarkMode";
import "./searchInput.css";

interface ISearchInput {
    className: string;
    onchange: (e: string) => void;
}

const SearchInput = ({
    className,
    onchange,
}: ISearchInput) => {

    const { isDarkMode } = useDarkMode();
    
    return (
        <div className={className}>
            <button onClick={() => {}} className="search-button">
                <SearchIcon />
            </button>
            <input
                type="text"
                onChange={(e) => onchange(e.target.value)}
                placeholder="Search..."
                className={`search-input ${isDarkMode ? "dark-mode" : ""}`}
            />
        </div>
  );
};

export default SearchInput;
