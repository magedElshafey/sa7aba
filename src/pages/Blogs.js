import React from "react";
import Hero from "../components/utils/hero/Hero";
import Header from "../components/utils/header/Header";
import heroImg from "../assets/hero.png";
import BlogCard from "../components/utils/blogCard/BlogCard";
import FilterBlogs from "../components/utils/filterBlogs/FilterBlogs";
const Blogs = ({ blogs }) => {
  return (
    <div>
      <Hero
        isBigHero={false}
        isSmallHero={true}
        isMediumHero={false}
        img={heroImg}
        title="المدونة"
      />
      <Header />
      <FilterBlogs />
      <div className="container">
        <div className="mt-3 d-flex align-items-center justify-content-center gap-4 flex-wrap">
          {blogs.map((blog, index) => (
            <BlogCard key={index} item={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
