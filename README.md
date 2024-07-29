Pour toute question, commentaire ou demande de renseignements, n'hésitez pas à nous contacter. Notre équipe est là pour vous aider .
CONTACTEZ-NOUS
import Date from "@library/date";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
const LatestPostsSection = () => {
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
      <section className="bgg">
        <div className="container mil-p-120-60">
          <div className="row align-items-center mil-mb-30">
            <div className="col-lg-6 mil-mb-30 ">
              <h3 className="mil-up blog-tit text-3xl font-bold "></h3>
            </div>
            <div className="col-lg-6 mil-mb-30">
              <div className="mil-adaptive-right mil-up">
                <a href={`/blog`} className="mil-link mil-dark mil-arrow-place">
                  <span>voir plus</span>
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            {blogs &&
              blogs.slice(0, 2).map(
                (blog) =>
                  blog && (
                    <div className="col-lg-6" key={`blog-post-${blog._id}`}>
                      <Link
                        href={`/post/${blog._id}`}
                        className="mil-blog-card mil-mb-60"
                      >
                        <div className="mil-cover-frame mil-up">
                          <Image
                            src={blog.url}
                            alt={blog.alt}
                            width={500}
                            height={300}
                          />
                        </div>
                        <div className="mil-post-descr">
                          <div className="mil-labels mil-up mil-mb-30">
                            <div className="mil-label mil-upper text-white">
                              <Date dateString={blog.createdAt} />
                            </div>
                          </div>
                          <h4 className="mil-up mil-mb-30 text-white">
                            {blog.title}
                          </h4>
                          <div className="mil-link mil-dark mil-arrow-place mil-up">
                            <span>Lire plus</span>
                            <ArrowIcon />
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
              )}
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestPostsSection;
