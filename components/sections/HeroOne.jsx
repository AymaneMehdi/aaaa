import Data from "@data/sections/hero-1.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import Pentagon from "@layouts/pentagon/Index";
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const HeroOne = () => {


  return (
    <>
      {/* banner */}
      <section className="mil-banner mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="mil-animation-frame">
            <div
              className="mil-animation mil-position-1 mil-scale"
              data-value-1="7"
              data-value-2="1.6"
            >
              <Pentagon />
            </div>
            <div
              className="mil-animation mil-position-2 mil-scale"
              data-value-1="4"
              data-value-2="1"
            >
              <Pentagon />
            </div>
            <div
              className="mil-animation mil-position-3 mil-scale"
              data-value-1="1.2"
              data-value-2=".1"
            >
              <Pentagon />
            </div>
          </div>

          <div className="mil-gradient" />

          <div className="container">
            <div className=" v mil-banner-content mil-up lg:text-left flex flex-col justify-center items-center lg:items-start">
              <motion.h1
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0, type: 'spring', mass: 0.5, damping: 5, stiffness: 120 }}
                className="mil-muted mil text-[100px] font-bold"
                style={{ color: "#0FB9B6" }}
                dangerouslySetInnerHTML={{ __html: Data.title }}
              />

              <motion.p 
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0, type: 'spring', mass: 0.5, damping: 5, stiffness: 120 }}
              className="text-9xl text-white">NOUS</motion.p>

              
              <div class="animated-text"><span></span></div>

              <motion.p 
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0, type: 'spring', mass: 0.5, damping: 5, stiffness: 120 }}
              className="text-6xl text-white mb-12">Au-delà du Communication & Développement tech</motion.p>

              <Link
                href={Data.button1.link}
                className="mil-button mil-arrow-place mil-btn-space"
                style={{ background: "#0FB9B6" }}
              >
                <span className="text-lg font-bold text-white">
                  {Data.button1.label}
                </span>
                <ArrowIcon />
              </Link>
              <div className="mil-circle-text">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 300 300"
                enableBackground="new 0 0 300 300"
                xmlSpace="preserve"
                className="mil-ct-svg mil-rotate"
                data-value="360"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                  />
                </defs>
                <circle cx="150" cy="100" r="75" fill="none" />
                <g>
                  <use xlinkHref="#circlePath" fill="none" />
                  <text style={{ letterSpacing: "6.5px" }}>
                    {/* circle text */}
                    <textPath xlinkHref="#circlePath">
                      Scroll down - Scroll down -{" "}
                    </textPath>
                  </text>
                </g>
              </svg>
              <a
                href="#about"
                className="mil-button mil-arrow-place mil-icon-button mil-arrow-down"
                aria-label="Down"
              >
                <ArrowIcon />
              </a>
            </div>
              
            </div>
          </div>
        </div>
      </section>
      {/* banner end */}
    </>
  );
};
export default HeroOne;
