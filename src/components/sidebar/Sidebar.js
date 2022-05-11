import React from "react";
import "./_sidebar.scss";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { log_out } from "../../redux/actions/auth.action";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(log_out());
  };

  return (
    <div
      className={sidebar ? "sidebar visible" : "sidebar"}
      onClick={handleToggleSidebar}
    >
      <li>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <MdHome size={23} />
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <MdSubscriptions size={23} /> <span>Subscription</span>
      </li>
      <li>
        <MdThumbUp size={23} /> <span>Liked Videos</span>
      </li>
      <li>
        <MdHistory size={23} /> <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23} /> <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23} /> <span>I don't like it</span>
      </li>
      <hr></hr>
      <li onClick={handleLogOut}>
        <MdExitToApp size={23} /> <span>Log Out</span>
      </li>
      <hr></hr>
    </div>
  );
};

export default Sidebar;
