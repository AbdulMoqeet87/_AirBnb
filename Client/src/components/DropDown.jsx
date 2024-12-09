import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Import icons from Font Awesome

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log("Dropdown is now: ", !isOpen); // Debugging line
  };
  

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {/* Hamburger Menu Icon */}
        <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
        {/* Profile Icon */}
        <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
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
