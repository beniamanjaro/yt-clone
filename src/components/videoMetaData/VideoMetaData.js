import React, { useEffect, useState } from "react";
import moment from "moment";
import numeral from "numeral";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import "./_videoMetaData.scss";
import { getChannelDetailsById } from "../../redux/actions/channel.action";
import { useDispatch, useSelector } from "react-redux";

const VideoMetaData = ({ video }) => {
  const { snippet, statistics } = video;
  const { title, publishedAt, description, channelId } = snippet;
  const { viewCount, likeCount } = statistics;
  const dispatch = useDispatch();
  const {channel} = useSelector(state => state.channelDetails)
  
  useEffect(() => {
      dispatch(getChannelDetailsById(channelId));
    }, [dispatch, channelId]);
    



  return (
    <div className="video__metaData">
      <div className="video__metaData__top">
        <div className="video__metaData__top__title">{title}</div>
        <div className="video__metaData__top__stats">
          <div className="video__metaData__top__stats__left">
            <span>{numeral(viewCount).format("0.a")} Views •</span>
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
            <div className="video__metaData__description__channel__left__img">
            </div>
          </div>
          <div className="video__metaData__description__channel__middle">
            <h4>
                
            </h4>
            <span></span>
                  </div>
          <div className="video__metaData__description__channel__right">
            right
          </div>
        </div>
        <div className="video__metaData__description__text">
          {description.split("\n").map((l, i, arr) => {
            const line = <span key={i}>{l}</span>;
            if (i === arr.length - 1) {
              return line;
            } else {
              return [line, <br key={i + "br"} />];
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoMetaData;
