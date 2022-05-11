import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Video from "../../components/video/Video";
import {
  getMostPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonVideo from "../../components/skeletons/SkeletonVideo";

const HomeScreen = () => {
  const [hasMore, setHasMore] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMostPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );
  const fetch = () => {
    if (videos.length >= 10) {
      setHasMore(false);
    }
    if (activeCategory === "All") {
      dispatch(getMostPopularVideos());
    } else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  return (
    <Container>
      <CategoriesBar />

      <InfiniteScroll
        dataLength={videos.length}
        hasMore={hasMore}
        next={fetch}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
        className="row"
      >
        {!loading ? (
          <>
            {videos.map((video, i) => (
              <Col lg={3} md={4}>
                <Video video={video} key={i} />
              </Col>
            ))}
            {[...Array(4)].map(() => (
              <Col lg={3} md={4}>
                <SkeletonVideo height={180} width="100%" />
              </Col>
            ))}
          </>
        ) : (
          <>
            {[...Array(20)].map(() => (
              <Col lg={3} md={4}>
                <SkeletonVideo height={180} width="100%" />
              </Col>
            ))}
          </>
        )}
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
