import React, { useEffect, useState } from "react";
import moment from "moment";
import numeral from "numeral";
import { AiOutlineLike } from "react-icons/ai";
import "./_videoMetaData.scss";
import {
  getChannelDetailsById,
  getSubscriptionStatus,
} from "../../redux/actions/channel.action";
import { useDispatch, useSelector } from "react-redux";

const VideoMetaData = ({ video }) => {
  const { snippet, statistics } = video;
  const { title, publishedAt, description, channelId } = snippet;
  const { viewCount, likeCount } = statistics;
  const [showLines, setShowLines] = useState(3);
  const [showMore, setShowMore] = useState(true);
  const dispatch = useDispatch();
  const { channel } = useSelector((state) => state.channelDetails);
  let n = 0;

  useEffect(() => {
    dispatch(getChannelDetailsById(channelId));
    dispatch(getSubscriptionStatus(channelId));
  }, [dispatch, channelId]);

  const handleShowMoreText = () => {
    setShowMore(!showMore);
  };

  const handleShowLines = () => {
    showMore ? setShowLines(null) : setShowLines(3);
    handleShowMoreText();
  };

  return (
    <div className="video__metaData">
      <div className="video__metaData__top">
        <div className="video__metaData__top__title">{title}</div>
        <div className="video__metaData__top__stats">
          <div className="video__metaData__top__stats__left">
            <span>{numeral(viewCount).format("0.a")} Views • </span>
            <span>{moment(publishedAt).fromNow()}</span>
          </div>
          <div className="video__metaData__top__stats__right">
            <div className="video__metaData__top__stats__right__likes">
              <AiOutlineLike style={{ height: "2rem", width: "2rem" }} />
              <span>{numeral(likeCount).format("0.a")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="video__metaData__description">
        <div className="video__metaData__description__channel">
          <div className="video__metaData__description__channel__left">
            <img
              src={channel?.snippet?.thumbnails?.default?.url}
              alt="channel thumbnail"
            />
          </div>
          <div className="video__metaData__description__channel__middle">
            <h6>{channel?.snippet?.title}</h6>
            <span>
              {`${numeral(channel?.statistics?.subscriberCount).format("0.a")} 
              subscribers`}
            </span>
          </div>
          <div className="video__metaData__description__channel__right">
            right
          </div>
        </div>
        <div className="video__metaData__description__text">
          {description.split("\n").map((l, i, arr) => {
            const line = <span key={i}>{l}</span>;
            if (n === showLines) {
              return;
            } else {
              n++;
              if (i === arr.length - 1) {
                return line;
              } else {
                return [line, <br key={i + "br"} />];
              }
            }
          })}
          {showMore ? (
            <button
              className="video__metaData__description__text__btn"
              onClick={() => handleShowLines()}
            >
              SHOW MORE
            </button>
          ) : (
            <>
              <br></br>
              <button
                className="video__metaData__description__text__btn"
                onClick={() => handleShowLines()}
              >
                SHOW LESS
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoMetaData;
