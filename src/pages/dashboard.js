import LogOUt from "../components/Logout";
import SideBar from "../components/Sidebar";
import Dashome from "../components/Dashome";
const Dashboard = () => {
  return (
    <div>
      <LogOUt />
      <SideBar className="top-0 left-0 fixed " />
      <Dashome />
    </div>
  );
};

export default Dashboard;
