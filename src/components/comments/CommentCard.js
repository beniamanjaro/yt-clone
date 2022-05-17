import React from "react";
import moment from "moment";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import "./_commentCard.scss";

const CommentCard = ({ commentDetails }) => {
  console.log(commentDetails);
  return (
    <div className="comment__card">
      <div className="comment__card__authorProfileImage">
        <img src={commentDetails.authorProfileImageUrl} />
      </div>
      <div>
        <div className="comment__card__authorName">
          <span className="comment__card__authorName__displayName">
            {commentDetails.authorDisplayName}&nbsp;
          </span>
          <span className="comment__card__authorName__publishedAt">
            {moment(commentDetails.publishedAt).fromNow()}
          </span>
        </div>
        <div className="comment__card__text">{commentDetails.textDisplay}</div>
        <div className="comment__card__likes">
          <AiOutlineLike />
          {commentDetails.likeCount}
          <AiOutlineDislike />
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
