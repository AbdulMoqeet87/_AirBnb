import Dropdown from "./DropDown";


const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo with Link */}
      <a href="/" className="navbar-logo">
        <img src="/logo.png" alt="Logo" className="logo" />
      </a>
      
      {/* Navigation Links */}
      <ul className="navbar-links">
        <li><a href="/">Stays</a></li>
        <li><a href="/experiences">Experiences</a></li>
        <li><a href="/online-experiences">Online Experiences</a></li>
      </ul>

      {/* User Menu */}
      <Dropdown/>
    </nav>
  );
};

export default Navbar;
