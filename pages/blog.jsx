import { PER_PAGE } from "./blog/page/[page]";
import PaginatedBlog from "@components/PaginatedBlog";
import Head from "next/head";
import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

import { getPaginatedPostsData, getFeaturedPostsData } from "@library/posts";

import PopularsPostsData from "@data/sections/popular-posts.json";

const Blog = ({ posts, totalPosts, currentPage, popular }) => {
  return (
    <Layouts>
    <Head>
        <title>FeizhouCom - Blog</title>
        <meta
          name="description"
          content="FeizhouCom l'agence qui donne vie à votre identité, reflétant fidèlement votre essence et vos valeurs."
        />
        <meta
          name="keywords"
          content="Sites web, Traduction, Communication, Relations publiques, Communication corporate, Image de marque"
        />
        <meta name="author" content="FeizhouCom" />
        <link rel="icon" href="./FeizhouCom.png" type="image/png" />

      </Head>
      <PageBanner
        breadTitle={"Blog"}
      />

      {/* blog */}
      <section>
        <div className="container mil-p-120-120 -mt-40">
          <div className="row align-items-center mil-mb-30">
            <div className="col-lg-4 mil-mb-30"></div>
            <div className="col-lg-8 mil-mb-30">
              <div className="mil-adaptive-right mil-up"></div>
            </div>
          </div>
          <div className="row">
            <PaginatedBlog items={posts} />

            
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Blog;

export async function getStaticProps() {
  const { posts, total } = getPaginatedPostsData(PER_PAGE, 1);

  const popularsData = await getFeaturedPostsData(PopularsPostsData.featured);

  return {
    props: {
      posts,
      totalPosts: total,
      currentPage: 1,

      popular: popularsData,
    },
  };
}
