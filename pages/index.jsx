import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useState, useEffect } from "react";
import axios from 'axios';
import { getSortedPostsData } from "@library/posts";
import Link from 'next/link';
import HeroOneSection from "@components/sections/HeroOne";
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import Section from "@/src/components/sections/Section";
import LatestPostsSection from "@components/sections/LatestPosts";
import Devis from "@components/sections/Devis";
import Map from "@components/sections/Map";
const TestimonialSlider = dynamic(
  () => import("@components/sliders/Testimonial"),
  { ssr: false }
);
const PartnersSlider = dynamic(() => import("@components/sliders/Partners"), {
  ssr: false,
});

const Home1 = (props) => {
  
  return (
    <Layouts>
    <Head>
        <title>FeizhouCom</title>
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
      <HeroOneSection />
      <AboutSection />
      <ServicesSection />
      <Section />
      <LatestPostsSection posts={props.posts} />
      <Devis />
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts,
    },
  };
}
