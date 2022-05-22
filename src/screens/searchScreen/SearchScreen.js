import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideosBySearch } from "../../redux/actions/videos.action";
import { Container } from "react-bootstrap";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import SkeletonVideoSearch from "../../components/skeletons/SkeletonVideoSearch";

const SearchScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosBySearch(id));
  }, [dispatch, id]);

  const { videos, loading } = useSelector((state) => state.searchVideos);

  return (
    <Container>
      {!loading
        ? videos.map((video) => (
            <VideoHorizontal
              video={video}
              key={video.id.videoId}
              searchScreen={true}
            />
          ))
        : [...Array(15)].map((i) => <SkeletonVideoSearch />)}
    </Container>
  );
};

export default SearchScreen;
