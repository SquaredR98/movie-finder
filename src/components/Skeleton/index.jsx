import React from "react";

export default function Skeleton() {
  return (
    <div className="skeletonItem">
      <div className="posterBlock skeleton" />
      <div className="textBlock">
        <div className="title skeleton" />
        <div className="date skeleton" />
      </div>
    </div>
  );
}
