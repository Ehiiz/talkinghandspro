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
      <Parallax pages={7} horizontal>
        <ParallaxLayer sticky={{ start: 1, end: 1.2 }} speed={0.6}>
          <div className="h-56 w-56 py-4 rounded-2xl">
            <img
              src="/images/3DM - Day 11 euphoria.jpg"
              alt=""
              className="rounded-2xl shadow-sm drop-shadow-2xl"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.7}
          sticky={{ start: 6, end: 6 }}
          className="flex-col h-2 flex justify-start items-center py-3"
        >
          <Link to="/">
            <img
              src="logo.png"
              alt=""
              className="h-16 w-16 motion-safe:animate-spin-slow z-10 border-2 border-white rounded-full"
            />
          </Link>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1, end: 1.2 }} speed={0.6}>
          <div className="h-36 w-36 py-4 rounded-2xl translate-y-72">
            <img
              src="/images/30DM - Day 19 (high fashion) (5).jpg"
              alt=""
              className="rounded-2xl drop-shadow-2xl"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0, end: 5 }}
          speed={0.6}
          className="flex flex-col justify-end items-end"
        >
          <div className="bg-blueJeans bg-opacity-80 h-fit py-2 mb-2 mr-2 rounded-full">
            <p className="font-Montserrat text-lg text-black px-4 motion-safe:animate-pulse">
              scroll left <span> &#8594; </span>{" "}
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 3, end: 3.8 }} speed={0.6} offset={3}>
          <div className="h-24 w-24 rounded-2xl translate-y-24">
            <img
              src="/images/30DM - Day 9 (Lady earth) (3).jpg"
              alt=""
              className="rounded-2xl drop-shadow-2xl"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 3, end: 3.8 }} speed={0.6} offset={3}>
          <div className="h-16 w-16 rounded-2xl">
            <img
              src="/images/30DM - Day 9 (Lady earth) (4).jpg"
              alt=""
              className="rounded-lg drop-shadow-2xl -translate-x-16 translate-y-2"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 3, end: 3.5 }}
          offset={4}
          speed={0.6}
          className="flex flex-col justify-end"
        >
          <div className="h-36 w-36 rounded-2xl -translate-y-32 translate-x-48">
            <img
              src="/images/30DM - Day 29 (rare) (5).jpg"
              alt=""
              className="rounded-2xl drop-shadow-2xl"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 3, end: 3.5 }}
          offset={4}
          speed={0.6}
          className="flex flex-col justify-end"
        >
          <div className="h-36 w-36 rounded-2xl -translate-y-96 translate-x-48">
            <img
              src="/images/30DM - Day 29 (rare) (4).jpg"
              alt=""
              className="rounded-2xl drop-shadow-2xl"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 2, end: 2.3 }}
          offset={2}
          speed={0.6}
          className="flex flex-col justify-start"
        >
          <div className="h-40 w-40 rounded-2xl translate-y-6 translate-x-4">
            <img
              src="images/highie (1).jpg"
              alt=""
              className="rounded-2xl drop-shadow-2xl"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 2, end: 2.1 }}
          offset={2.5}
          speed={0.6}
          className="flex flex-col justify-start"
        >
          <div className="h-40 w-40 rounded-2xl translate-y-48 translate-x-48">
            <img
              src="images/highie (2).jpg"
              alt=""
              className="rounded-2xl drop-shadow-2xl"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 2, end: 2.1 }}
          offset={2.5}
          speed={0.6}
          className="flex flex-col justify-end"
        >
          <div className="h-32 w-32 rounded-2xl -translate-y-16">
            <img
              src="images/30DM - Day 16 (lolli) (2).jpg"
              alt=""
              className="rounded-2xl drop-shadow-2xl"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 2, end: 2.1 }}
          offset={2.5}
          speed={0.6}
          className="flex flex-col justify-end"
        >
          <div className="h-20 w-20 rounded-2xl -translate-y-56 -translate-x-4">
            <img
              src="images/30DM - Day 16 (lolli) (1).jpg"
              alt=""
              className="rounded-2xl drop-shadow-2xl"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 2, end: 2.5 }}
          offset={2.5}
          speed={0.6}
          className="flex flex-col justify-center"
        >
          <div className="h-40 w-40 rounded-2xl translate-y-16 -translate-x-64">
            <img
              src="images/whitie (1).jpg"
              alt=""
              className="rounded-2xl drop-shadow-2xl"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 2.5, end: 2.8 }}
          speed={0.6}
          className="flex flex-col justify-end"
        >
          <div className="h-24 w-24 rounded-2xl -translate-y-12 ">
            <img
              src="images/30DM - Day 30 (final) (3).jpg"
              alt=""
              className="rounded-2xl drop-shadow-2xl"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 3, end: 3.2 }}
          speed={0.6}
          className="flex flex-col justify-end"
        >
          <div className="h-36 w-36 rounded-2xl -translate-y-36">
            <img
              src="images/30DM - Day 9 (Lady earth) (1).jpg"
              alt=""
              className="rounded-2xl drop-shadow-2xl"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 4.4, end: 5 }}
          speed={0.6}
          className="flex flex-col justify-end"
        >
          <div className="h-32 w-24 rounded-2xl -translate-y-36 translate-x-6">
            <img
              src="images/30DM - Day 24 (flowerboy) (3).jpg"
              alt=""
              className="rounded-2xl drop-shadow-2xl"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 4.2, end: 5 }}
          speed={0.8}
          className="flex flex-col justify-start"
        >
          <div className="h-36 w-36 rounded-2xl translate-y-16 translate-x-12">
            <img
              src="images/30DM - Day 28 (olohi) (2).jpg"
              alt=""
              className="rounded-2xl drop-shadow-2xl"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 4.2, end: 5.0 }}
          speed={0.3}
          className="flex flex-col justify-center"
        >
          <div className="h-24 w-24 rounded-2xl translate-y-36 translate-x-48">
            <img
              src="images/30DM - Day 20 (colors) (1).jpg"
              alt=""
              className="rounded-2xl drop-shadow-2xl"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 5.4, end: 5.4 }}
          speed={0.3}
          className="flex flex-col justify-start"
        >
          <div className="h-24 w-24 rounded-2xl translate-y-2 translate-x-36">
            <img
              src="images/30DM - Day 20 (colors) (3).jpg"
              alt=""
              className="rounded-2xl drop-shadow-2xl"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 5.4, end: 5.4 }}
          speed={0.3}
          className="flex flex-col justify-center"
        >
          <div className="h-24 w-24 rounded-2xl translate-y-36 translate-x-36">
            <img
              src=" images/30DM - Day 27 (blue ivy) (1).jpg"
              alt=""
              className="rounded-2xl drop-shadow-2xl"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 5.4, end: 5.4 }}
          speed={0.4}
          className="flex flex-col justify-center"
        >
          <div className="h-48 w-48 rounded-2xl -translate-y-8">
            <img
              src="images/30DM - Day 20 (colors) (2).jpg"
              alt=""
              className="rounded-2xl drop-shadow-2xl"
            />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 6, end: 6 }}
          speed={0.4}
          className="flex flex-col justify-center"
        >
          <div className="h-20 w-20 rounded-2xl -translate-x-24">
            <img
              src="images/30DM - Day 18 (black and golden) (1).jpg"
              alt=""
              className="rounded-2xl drop-shadow-2xl"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 5.4, end: 5.4 }}
          speed={0.4}
          className="flex flex-col justify-start"
        >
          <div className="h-16 w-16 rounded-2xl translate-y-4 translate-x-24">
            <img
              src="images/30DM - Day 23 (30s) (2).jpg"
              alt=""
              className="rounded-2xl filter drop-shadow-2xl"
              data-aos="fade-up"
              data-aos-duration="5000"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.6}
          style={{
            backgroundImage: "url('images/30DM - Day 28 (olohi) (2).jpg')",
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
        <ParallaxLayer
          offset={6}
          speed={0.8}
          style={{
            backgroundImage: "url('images/30DM - Day 24 (flowerboy) (1).jpg')",
            backgroundSize: "cover",
          }}
          className="flex flex-col justify-center items-center"
        >
          <div
            className="bg-black h-fit rounded-lg text-lg flex items-center justify-center flex-col-reverse py-10 px-16 bg-opacity-80"
            data-aos="zoom-in"
          >
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

            <div className="relative">
              <div className="cursor-pointer rounded-full absolute top-2 right-1 motion-safe:animate-ping w-4 h-4 bg-lightPink"></div>
              <button className="text-4xl cursor-wait text-viridian bg-transparent py-4 my-2 px-4 font-questrial rounded-full border-viridian border-2 animate-none hover:bg-viridian hover:text-white hover:py-6 hover:px-6 hover:border-2 hover:border-blueJeans">
                <Link to="/profile">Book Now</Link>
              </button>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
