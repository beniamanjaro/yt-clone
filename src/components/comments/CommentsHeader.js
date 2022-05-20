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
      <div>1,234 Comments</div>
      <div className="comments__header__input">
        <img src={userProfile?.photoURL} />
        <div className="comments__header__input__right">
          <form>
            <textarea></textarea>
            <button className="comments__header__input__right__btn">
              Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentsInput;
