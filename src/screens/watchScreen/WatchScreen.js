import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import Comments from "../../components/comments/Comments";
import "./_watchScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getRelatedVideosById,
  getVideoDetailsById,
} from "../../redux/actions/videos.action";
import SkeletonVideoHorizontal from "../../components/skeletons/SkeletonVideoHorizontal";

const WatchScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoDetailsById(id));
    dispatch(getRelatedVideosById(id));
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.videoDetails);
  const { videos: relatedVideos, loading: loadingRelatedVideos } = useSelector(
    (state) => state.relatedVideos
  );

  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        {!loading ? <VideoMetaData video={video} /> : <h5>Loading</h5>}
        <Comments videoId={id} />
      </Col>
      <Col lg={4}>
        {!loadingRelatedVideos ? (
          relatedVideos
            ?.filter((video) => video.snippet)
            .map((video) => (
              <VideoHorizontal video={video} key={video.id.videoId} />
            ))
        ) : (
          <SkeletonVideoHorizontal count={15} />
        )}
      </Col>
    </Row>
  );
};

export default WatchScreen;
