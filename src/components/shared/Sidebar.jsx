
import { BiSolidReport } from "react-icons/bi";

import { FaBlog, FaHome} from "react-icons/fa" // Ensure you import the FaHome icon
import { IoMdSettings } from "react-icons/io";
import { MdForwardToInbox } from "react-icons/md";

const Sidebar = ({sidebarToggle}) => {
  return (
    <div className="w-64 bg-gray-800 fixed h-full px-2 py-4">
      <div className="p-4">
        <h2 className="text-2xl text-white font-bold">Admin Dashboard</h2>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="#" className="px-3 flex items-center">
            <FaHome className="w-6 h-6 mr-2" /> Home
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="#" className="px-3 flex items-center">
            <FaBlog className="w-6 h-6 mr-2" /> Blogs
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="#" className="px-3 flex items-center">
            <BiSolidReport className="w-6 h-6 mr-2" /> Reports
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="#" className="px-3 flex items-center">
            <MdForwardToInbox className="w-6 h-6 mr-2" /> Inbox
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
          <a href="#" className="px-3 flex items-center">
            <IoMdSettings className="w-6 h-6 mr-2" /> Settings
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
