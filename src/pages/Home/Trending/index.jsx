import React, { useState } from "react";
import ContentWrapper from "../../../components/ContentWrapper";
import Switch from "../../../components/Switch";
import useFetch from "../../../hooks/useFetch";

export default function Trending() {
  const [endpoint, setEndpoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <Switch data={["Day", "Month"]} onTabChange={onTabChange} />
      </ContentWrapper>
    </div>
  );
}
