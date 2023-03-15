import React from "react";
import NewsCard from "./Components/NewsCard";
import Footer from "../comp-commons/Footer";
import newsDataset from "../comp-volunteer/datasets/news";

const NewsPage = () => {
  const disp = newsDataset.map((news) => {
    return (
      <NewsCard
        image={news.image}
        newsLink={news.newsLink}
        newsContent={news.newsContent}
        newsSource={news.newsSource}
        newsDate={news.newsDate}
      />
    );
  });

  return (
    <div className="bg-secondary text-greyscale1 pt-24">
      {/* Section 1: Headings */}
      <h1 className="text-center mb-8">WE ARE ON THE NEWS</h1>
      <h3 className="text-xl text-center mb-14">
        Stay ahead of the curve with our featured news.
      </h3>

      {/* Section 2: News cards */}
      <div className="grid grid-cols-2 w-fit mx-auto gap-x-12 gap-y-14 mb-12">
        {disp}
      </div>

      {/* Section 3: Footer */}
      <Footer />
    </div>
  );
};

export default NewsPage;
