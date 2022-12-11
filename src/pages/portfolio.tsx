import React, { MouseEventHandler, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const parallax = useRef<IParallax>(null!);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-matteBlack  to-black">
      <Parallax pages={5}>
        <ParallaxLayer
          speed={0.7}
          sticky={{ start: 0, end: 5 }}
          className="flex-col h-2 flex justify-start items-center py-3"
        >
          <Link to="/">
            <img
              src="logo.webp"
              alt=""
              className="h-16 w-16 motion-safe:animate-spin-slow z-10 border-2 border-white rounded-full"
            />
          </Link>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.6}
          style={{
            backgroundImage: "url('images/30DM - Day 28 (olohi) (2).webp')",
            backgroundSize: "cover",
          }}
          className="flex flex-col justify-center"
        >
          <div
            data-aos="fade-up"
            className="bg-black bg-opacity-75 w-fit py-4 px-4 flex flex-col align-center self-center rounded-xl"
          >
            <h2 className="font-Montserrat text-4xl text-white font-bold">
              Portfolio
            </h2>
            <p className="font-questrial text-white ">
              our works cut across different genres
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8}>
          <img
            src="images/30DM - Day 23 (30s) (7).webp"
            alt=""
            className="w-48 h-48 pl-2 drop-shadow-2xl"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={0.8}>
          <img
            src="images/30DM - Day 23 (30s) (1).webp"
            alt=""
            className="w-32 h-32 pl-2 drop-shadow-2xl"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <img
            src="images/30DM - Day 23 (30s) (3).webp"
            alt=""
            className="w-32 h-32 pl-2 translate-x-32 -mt-56 drop-shadow-2xl"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.6}>
          <img
            src="images/30DM - Day 27 (blue ivy) (4).webp"
            alt=""
            className="w-16 h-16 pl-2 -mt-56 drop-shadow-2xl"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8}>
          <img
            src="images/queen.webp"
            alt=""
            className="w-16 h-16 pl-2 -mt-56 translate-x-72 drop-shadow-2xl"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={0.7}>
          <img
            src="images/queen.webp"
            alt=""
            className="w-56 h-56 pl-2 translate-x-48 drop-shadow-2xl"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.2} speed={0.6}>
          <img
            src="images/30DM - Day 29 (rare) (2).webp"
            alt=""
            className="w-32 h-32 pl-2 translate-x-4 translate-y-32 drop-shadow-2xl"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.7} speed={0.7}>
          <img
            src="images/30 DM - Day 13 (corporate affair) (1).webp"
            alt=""
            className="w-56 h-56 pl-2 translate-x-48 drop-shadow-2xl"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.8}>
          <img
            src="images/30 DM - Day 13 (corporate affair) (3).jpg"
            alt=""
            className="w-32 h-32 pl-2 -translate-y-56 drop-shadow-2xl"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.8}>
          <img
            src="images/30 DM - Day 13 (corporate affair) (2).webp"
            alt=""
            className="w-56 h-56 pl-2 -translate-y-32 drop-shadow-2xl"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.8}>
          <img
            src="images/30 DM - Day 13 (corporate affair) (4).webp"
            alt=""
            className="w-56 h-56 pl-2 -translate-y-56 drop-shadow-2xl translate-x-56"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.4} speed={0.6}>
          <img
            src="images/30DM - Day 3 (hairdo) (1).webp"
            alt=""
            className="w-32 h-32 pl-2 translate-x-32 drop-shadow-2xl"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.8} speed={0.7}>
          <img
            src="images/30DM - Day 4 (buttoned up) (3).webp"
            alt=""
            className="w-56 h-56 pl-2 translate-x-48 drop-shadow-2xl"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.8} speed={0.7}>
          <img
            src="images/30DM - Day 4 (buttoned up) (1).webp"
            alt=""
            className="w-48 h-48 pl-2 drop-shadow-2xl -translate-y-8"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.8}>
          <img
            src="images/queen.webp"
            alt=""
            className="w-32 h-32 pl-2 translate-x-56 -translate-y-56"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} speed={0.8}>
          <img
            src="images/30DM - Day 10 (Art) (7).webp"
            alt=""
            className="w-32 h-32 pl-2 -translate-y-32"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.3} speed={0.8}>
          <img
            src="images/30DM - Day 12 (euphoria 2) (5).webp"
            alt=""
            className="w-48 h-48 pl-2 translate-x-56 -translate-y-32"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.4} speed={0.3}>
          <img
            src="images/30DM - Day 15 (dark colors) (4).webp"
            alt=""
            className="w-32 h-32 pl-2 translate-x-64 translate-y-32"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} speed={0.3}>
          <img
            src="images/30DM - Day 17 (glitters) (3).webp"
            alt=""
            className="w-16 h-16 pl-2 translate-x-8"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.6} speed={0.2}>
          <img
            src="images/30DM - Day 22 (queen) (1).webp"
            alt=""
            className="w-32 h-32 pl-2 translate-x-full"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.7} speed={0.8}>
          <img
            src="images/30DM - Day 30 (final) (2).webp"
            alt=""
            className="w-32 h-32 pl-2 translate-x-60 translate-y-32"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.8} speed={0.6}>
          <img src="images/highie (3).webp" alt="" className="w-32 h-32 pl-2" />
        </ParallaxLayer>
        <ParallaxLayer offset={3.9} speed={0.6}>
          <img
            src="images/30DM - Day 24 (flowerboy) (2).webp"
            alt=""
            className="w-32 h-32 pl-2 translate-y-32 translate-x-10"
          />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 4, end: 5 }}
          offset={5}
          speed={0.8}
          style={{
            backgroundImage: "url('images/30DM - Day 24 (flowerboy) (3).webp')",
            backgroundSize: "cover",
          }}
          className="flex flex-col justify-center items-center"
        >
          <div
            className="bg-black h-fit rounded-lg text-lg flex items-center justify-center flex-col-reverse py-10 px-16 bg-opacity-80"
            data-aos="zoom-in"
          >
            <div className="relative">
              <div className="cursor-pointer rounded-full absolute top-2 right-1 motion-safe:animate-ping w-4 h-4 bg-lightPink"></div>
              <button className="text-4xl cursor-wait text-viridian bg-transparent py-4 my-2 px-4 font-questrial rounded-full border-viridian border-2 animate-none hover:bg-viridian hover:text-white hover:py-6 hover:px-6 hover:border-2 hover:border-blueJeans">
                <a href="https://wa.me/07062879533?text=I'm%20interested%20in%20booking%20your%20services">
                  Book Now
                </a>
              </button>
            </div>

            <Link to="/profile">
              <p className="cursor-pointer font-Montserrat text-2xl my-2 text-frenchLilac">
                Profile &#8594;
              </p>
            </Link>

            <Link to="/portfolio">
              <p className="cursor-pointer font-Montserrat text-2xl my-2 text-blueJeans">
                Portfolio &#8594;
              </p>
            </Link>

            <Link to="/profile">
              <p className=" cursor-pointer font-Montserrat text-2xl my-2 text-lightPink">
                Contact us &#8594;
              </p>
            </Link>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
