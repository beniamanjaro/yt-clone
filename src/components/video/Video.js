import React, { useEffect, useState } from "react";
import "./_video.scss";
import moment from "moment";
import numeral from "numeral";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";

const Video = ({ video }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: {
        medium: { url },
      },
    },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setCannelIcon] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const milSeconds = moment.utc(seconds * 1000).format("mm:ss");

  const videoId = id?.videoId || id;

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails, statistics",
          id: videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };

    getVideoDetails();
  }, [videoId]);

  useEffect(() => {
    const getChannelIcons = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setCannelIcon(items[0].snippet.thumbnails.default);
    };

    getChannelIcons();
  }, [channelId]);
  return (
    <div className="video">
      <NavLink
        to={id.videoId ? `/watch/${id.videoId}` : `/watch/${id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <div className="video__top">
          <LazyLoadImage src={url} effect="blur" />
          {/* <img src={url} alt="thumbnail" /> */}
          <span className="video__top__duration">{milSeconds}</span>
        </div>
        <div className="video__title">{title}</div>
        <div className="video__details">
          <span>
            <AiFillEye /> {numeral(views).format("0.a")} Views •
          </span>
          <span>{moment(publishedAt).fromNow()}</span>
        </div>
        <div className="video__channel">
          <LazyLoadImage src={channelIcon?.url} effect="blur" />
          {/* <img src={channelIcon?.url} alt="" /> */}
          <p>{channelTitle}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Video;
