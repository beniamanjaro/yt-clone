import React from "react";
import { useSelector } from "react-redux";
import "./_commentsHeader.scss";

const CommentsInput = () => {
  const userProfile = useSelector((state) =>
    typeof state.auth.user === "string"
      ? JSON.parse(state.auth.user)
      : state.auth.user
  );
  return (
    <div className="comments__header">
      <div>comments</div>
      <div className="comments__header__input">
        <img src={userProfile?.photoURL} />
        <div className="comments__header__input__right">
          <form>
            <input></input>
            <button className="comments__header__input__right__button">
              Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentsInput;
