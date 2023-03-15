import React from "react";

const NewsCard = (props) => {
  return (
    <div className="bg-white w-[575px] h-[575px] p-[45px] rounded-2xl">
      <a href={props.newsLink} target="_blank">
        <img src={props.image} className="hover:scale-105 mb-7" />
        <p className="text-xl mb-14 h-[54px]">{props.newsContent}</p>
      </a>
      <div className="text-greyscale2 flex flex-row">
        <p className="flex-grow">{props.newsSource}</p>
        <p>{props.newsDate}</p>
      </div>
    </div>
  );
};

export default NewsCard;
