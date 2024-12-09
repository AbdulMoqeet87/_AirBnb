import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
  return (
    <div className="search-bar-container">
      <input
        type="search"
        className="search-input"
        placeholder="Search for anything..."
      />
      <button type="button" className="search-button">
        <FontAwesomeIcon icon={faSearch} size="lg" /> {/* Using Font Awesome search icon */}
      </button>
    </div>
  );
}

export default SearchBar;
