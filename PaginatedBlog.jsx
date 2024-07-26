import Link from "next/link";
import Date from "@library/date";
import { useState, useEffect } from "react";
import PostsDetail from "../pages/blog/[id]";

const PaginationPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://back-end-8x0o.onrender.com/blogs");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const fetchedBlogs = await response.json();
      setBlogs(fetchedBlogs);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  
  return (
    <>
      {blogs.map((blog) => (
        <div className="col-lg-12" key={`post-${blog._id}`}>
          <Link
            href={`/post/${blog._id}`}
            className="mil-blog-card mil-blog-card-hori mil-more mil-mb-60"
          >
            <div className="mil-cover-frame mil-up">
              <img src={blog.url} alt={blog.alt} />
            </div>
            <div className="mil-post-descr">
              <div className="mil-labels mil-up mil-mb-30">
                <div className="mil-label mil-upper">
                  <Date dateString={blog.createdAt} />
                </div>
              </div>
              <h4 className="mil-up mil-mb-30">{blog.title}</h4>
              <div className="mil-link mil-dark mil-arrow-place mil-up">
                <span>Lire plus</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
export default PaginationPage;
