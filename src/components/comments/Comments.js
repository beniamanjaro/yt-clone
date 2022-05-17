import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsByVideoId } from "../../redux/actions/comments.action";
import CommentCard from "./CommentCard";
import CommentsHeader from "./CommentsHeader";
import "./_comments.scss";

const Comments = ({ videoId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsByVideoId(videoId));
  }, [dispatch, videoId]);

  const comments = useSelector((state) => state.comments.comments);
  const commentsToRender = comments?.map(
    (comment) => comment.snippet.topLevelComment
  );
  console.log(commentsToRender);

  return (
    <>
      <CommentsHeader />
      {commentsToRender?.map((comment) => (
        <CommentCard commentDetails={comment.snippet} />
      ))}
    </>
  );
};

export default Comments;
