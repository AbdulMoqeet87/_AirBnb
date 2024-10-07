import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
            <li><a href="#profile">Login</a></li>
            <li><a href="#settings">Signup </a></li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
