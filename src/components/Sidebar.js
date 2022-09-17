import { Link } from "react-router-dom";
import {FaUserCircle} from  'react-icons/fa';

const SideBar = () => {
  return (
    <div className="top-0 left-0 fixed bg-white">
      <div className="flex">
        <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
          <div className="space-y-3">
            <div className="flex items-center">
              <h2 className="text-3xl font-bold">Dashboard</h2>
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm">
                  <Link to={"/users"}>
                    <a className="flex items-center p-2 space-x-3 rounded-md">
                      <FaUserCircle />
                      <span className="text-blue-600">Users</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
