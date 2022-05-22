import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonVideoHorizontal = ({ count }) => {
  return (
    <div>
      <SkeletonTheme baseColor="#343a40" highlightColor="#3c4147">
        <Skeleton width="100%" height="250px" count={count} />
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonVideoHorizontal;
