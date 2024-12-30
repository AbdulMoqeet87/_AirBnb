import { useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuthStore } from "../store/useAuthStore";
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/20/solid';


const Navbar = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      {user?.role === "user" ? (
        <nav className="navbar w-screen">
          <div
            className="navbar-logo"
            onClick={() => handleNavigation("/")}
            style={{ cursor: "pointer" }}
          >
            <img src="/airbnb.svg" alt="Logo" className="logo" />
          </div>
          <ul className="navbar-links">
            <li>
              <div
  onClick={() => handleNavigation("/")}
  className="pt-2 text-link bg-white pl-4  hover:text-red-500 !hover:outline-none !focus:outline-none !hover:no-underline cursor-pointer"
>
  Stays
</div>

            </li>
            <li>
              <div
                onClick={() => handleNavigation("/experiences")}
                className="pt-2 pl-4 text-link bg-white hover:text-red-500 !hover:outline-none !focus:outline-none !hover:no-underline cursor-pointer"
              >
                Experiences
              </div>
            </li>
            <li>
              <div
                onClick={() => handleNavigation("/online-experiences")}
                className="pt-2 pl-4 text-link bg-white hover:text-red-500 !hover:outline-none !focus:outline-none !hover:no-underline cursor-pointer"              >
                Online Experiences
              </div>
            </li>
          </ul>
          {/* Dropdown Menu */}
          <Menu>
            <MenuButton >
            <GiHamburgerMenu />
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom end"
              className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm text-white transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 focus:bg-white/10">
                  <PencilIcon className="h-4 w-4 text-white/30" />
                  Edit
                  <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-focus:inline">⌘E</kbd>
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 focus:bg-white/10">
                  <Square2StackIcon className="h-4 w-4 text-white/30" />
                  Duplicate
                  <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-focus:inline">⌘D</kbd>
                </button>
              </MenuItem>
              <div className="my-1 h-px bg-white/5" />
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 focus:bg-white/10">
                  <ArchiveBoxXMarkIcon className="h-4 w-4 text-white/30" />
                  Archive
                  <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-focus:inline">⌘A</kbd>
                </button>
              </MenuItem>
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 focus:bg-white/10">
                  <TrashIcon className="h-4 w-4 text-white/30" />
                  Delete
                  <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-focus:inline">⌘D</kbd>
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </nav>
      ) : (
        <nav className="navbar w-screen">
          <div
            className="navbar-logo"
            onClick={() => handleNavigation("/")}
            style={{ cursor: "pointer" }}
          >
            <img src="/airbnb.svg" alt="Logo" className="logo" />
          </div>
          <ul className="navbar-links">
            <li>
              <div
                onClick={() => handleNavigation("/")}
                className="pt-2 text-link bg-white pl-4  hover:text-red-500 !hover:outline-none !focus:outline-none !hover:no-underline cursor-pointer"
              >
                My Properties
              </div>
            </li>
            <li>
              <div
                onClick={() => handleNavigation("/new_prop" )}
                className="pt-2 text-link bg-white pl-4  hover:text-red-500 !hover:outline-none !focus:outline-none !hover:no-underline cursor-pointer"
              >
                Add Property
              </div>
            </li>
            
          </ul>
          {/* Dropdown Menu */}
          <Menu>
          <MenuButton >
            <GiHamburgerMenu />

            </MenuButton>
            <MenuItems
              transition
              anchor="bottom end"
              className="mt-10 z-0 w-32 origin-top-right rounded-xl border  bg-gray-100 p-1 text-sm text-black transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 focus:bg-white/10">
                  <Square2StackIcon className="h-4 w-4 text-white/30" />
                  About
                  <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-focus:inline">⌘D</kbd>
                </button>
              </MenuItem>
              <div className="my-1 h-px bg-white/5" />
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 focus:bg-white/10">
                  <ArchiveBoxXMarkIcon className="h-4 w-4 text-white/30" />
     Sign out             <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-focus:inline">⌘A</kbd>
                </button>
              </MenuItem>
              <div className="my-1 h-px bg-white/5" />
             
            </MenuItems>
          </Menu>
        </nav>
      )}
    </>
  );
};

export default Navbar;
