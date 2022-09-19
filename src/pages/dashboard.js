 import LogOUt from "../components/Logout";
 import SideBar from "../components/Sidebar";
const Dashboard = () => {
   
    return ( 
        <div>
            <LogOUt />
            <SideBar className="top-0 left-0 fixed " />
        </div>
     );
}
 
export default Dashboard;