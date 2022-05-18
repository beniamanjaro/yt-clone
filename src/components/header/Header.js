import React from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = ({ handleToggleSidebar }) => {
  const userProfile = useSelector((state) =>
    typeof state.auth.user === "string"
      ? JSON.parse(state.auth.user)
      : state.auth.user
  );
  const navigate = useNavigate();

  return (
    <div className="border border-dark header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={handleToggleSidebar}
      />
      <img
        onClick={() => navigate("/")}
        src={"http://pngimg.com/uploads/youtube/youtube_PNG2.png"}
        alt="logo"
        className="header__logo"
      />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={userProfile?.photoURL} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
