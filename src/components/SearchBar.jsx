function SearchBar() {
    return (
      <div className="search-bar-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search for anything..."
        />
        <button type="button" className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
    );
  }
  
  export default SearchBar;
  