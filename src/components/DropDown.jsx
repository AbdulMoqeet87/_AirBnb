import  { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {/* Hamburger Menu Icon */}
        <span className="hamburger-icon">&#9776;</span>
        {/* Profile Icon */}
        <span className="profile-icon">&#128100;</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#settings">Settings</a></li>
            <li><a href="#logout">Logout</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
