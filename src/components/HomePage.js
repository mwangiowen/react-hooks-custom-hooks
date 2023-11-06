import React, { useEffect, useState } from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import useQuery from "../hooks/useQuery";

function HomePage() {
  // fetch data for posts
  const { data: posts, isLoaded } = useQuery("http://localhost:4000/posts");

  useEffect(() => {
    // This is unnecessary because you're already setting 'isLoaded' inside the 'useQuery' hook.
    // setIsLoaded(false);
    // fetch("http://localhost:4000/posts")
    //   .then((r) => r.json())
    //   .then((posts) => {
    //     setPosts(posts);
    //     setIsLoaded(true);
    //   });
  }, []);

  // set the document title
  useEffect(() => {
    document.title = "Underreacted | Home";
  }, []);

  return (
    <>
      <About />
      {isLoaded ? <ArticleList posts={posts} /> : <h3>Loading...</h3>}
    </>
  );
}

export default HomePage;
