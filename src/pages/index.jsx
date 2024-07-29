import React from "react";
import Layouts from "@layouts/Layouts";
import Head from "next/head";
import HeroOneSection from "@components/sections/HeroOne";
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import Section from "@/src/components/sections/Section";
import LatestPostsSection from "@components/sections/LatestPosts";
import Devis from "@components/sections/Devis";
import FAQ from "@components/sections/faq"
import Map from "@components/sections/Map";

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
      <FAQ />
      
    </Layouts>
  );
};
export default Home1;

