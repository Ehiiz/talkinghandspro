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
      <Parallax pages={7}>
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
          sticky={{ start: 6, end: 6 }}
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
