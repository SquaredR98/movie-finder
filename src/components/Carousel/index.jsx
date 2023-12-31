import React, { Fragment, useRef } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import ContentWrapper from "../ContentWrapper";
import PosterUnavailable from "../../assets/no-poster.png";
import Image from "../LazyLoadImage";
import "./styles.scss";
import dayjs from "dayjs";
import Skeleton from "../Skeleton";
import Rating from "../Rating";
import Genres from "../Genres";

export default function Carousel({ data, loading }) {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigateTo = useNavigate();
  const dataLength = data?.length;

  const slide = (direction) => {};

  return (
    <div className="carousel">
      <ContentWrapper>
        <BsArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => slide("left")}
        />
        <BsArrowRightCircleFill
          className="carouselRightNav arrow"
          onClick={() => slide("right")}
        />
        {!loading ? (
          <div className="carouselItems">
            {dataLength > 0
              ? data.map((item) => {
                  const posterUrl = item.poster_path
                    ? url.poster + item.poster_path
                    : PosterUnavailable;
                  return (
                    <div className="carouselItem" key={item.id}>
                      <div className="posterBlock">
                        <Image src={posterUrl} />
                        <Rating rating={item.vote_average.toFixed(1)} />
                        <Genres data={item.genre_ids} />
                      </div>
                      <div className="textBlock">
                        <span className="title">{item.title || item.name}</span>
                        <span className="date">
                          {dayjs(item.release_date).format("MMM D, YYYY")}
                        </span>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        ) : (
          <div className="loadingSkeleton">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        )}
      </ContentWrapper>
    </div>
  );
}
