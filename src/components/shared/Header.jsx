import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

const Header = ({sidebarToggle,setSidebarToggle}) => {
  return (
    <nav className="bg-gray-800 px-4 py-3 flex justify-between ml-64">
      <div className="flex items-center text-xl">
        <FaBars className="text-white mr-4 cursor-pointer" />
        <span className="text-white font-semibold">Hotel Booking Admin</span>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button className="p-1 text-black">
              <FaSearch />
            </button>
          </span>
          <input
            type="text"
            className="w-full px-4 py-1 pl-10 rounded shadow outline-none hidden md:block"
          />
        </div>
        <div className="text-white">
          <FaBell className="w-6 h-6" />
        </div>
        <div className="relative">
          <button className="text-white group">
            <FaUserCircle className="w-6 h-6 mt-1" />
            <div className="z-10 hidden absolute right-0 mt-2 rounded-lg shadow bg-white text-black w-32 group-focus:block">
              <ul className="py-1">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">Profile</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">Setting</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">Log Out</a>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
