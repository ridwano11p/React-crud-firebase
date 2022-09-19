import { Link } from "react-router-dom";
import {FaUserCircle} from  'react-icons/fa';
import { FaGem, FaHeart } from "react-icons/fa";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarFooter,SidebarContent,SidebarHeader, } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import "../Index2.scss"

const SideBar = () => {
  return (
    <div className="top-0 left-0 fixed  h-full">
     <ProSidebar>
  <SidebarHeader>
    <h1 className="text-2xl text-white">Menu</h1>
  </SidebarHeader>
  <SidebarContent>
  <Menu>
  <MenuItem>Dashboard
    <Link to="/dashboard" />
    </MenuItem>
  </Menu>
  <Menu iconShape="square">
  <SubMenu title="Users" icon={<FaUserCircle />}>
    <MenuItem>Add User
    <Link to="/addusers" />
    </MenuItem>
   
    <MenuItem>List Of Users
    <Link to="/userlist" />
    </MenuItem>
   
  </SubMenu>
</Menu>
  </SidebarContent>
  <SidebarFooter>
    {/**
     *  You can add a footer for the sidebar ex: copyright
     */}
  </SidebarFooter>
</ProSidebar>;
    </div>
  );
};

export default SideBar;
