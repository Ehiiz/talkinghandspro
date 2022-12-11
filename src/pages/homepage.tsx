import React, { MouseEventHandler, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function HomePage() {
  const parallax = useRef<IParallax>(null!);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const scroll = (to: number) => {
    // if (parallax.current) {
    //   parallax.current.scrollTo(to);
    // }
    console.log("I clicked");
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-matteBlack  to-black">
      <Parallax ref={parallax} pages={4}>
        <ParallaxLayer offset={2} speed={0.8}>
          <div className="bg-gradient-to-br  from-teaGreen  to-matteBlack h-full mt-16"></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.6}
          style={{
            backgroundImage: "url('queen.webp')",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col h-screen justify-center text-center">
            <p className="px-4 text-6xl font-RubikGlitch text-white cursor-pointer">
              GLAM
            </p>
            <p className="px-4 font-Montserrat text-white font-regular text-sm italic">
              define your beauty
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.8}>
          <div className="bg-gradient-to-r from-frenchLilac  to-teaGreen h-full mt-24"></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            backgroundImage: "url('highfashion.webp')",
            backgroundSize: "cover",
          }}
        >
          <div
            className="bottom-24 text-block px-6 absolute right-2 text-right"
            data-aos="zoom-in-left"
          >
            <p className="px-4 text-6xl font-RubikGlitch text-white">CREATE</p>
            <p className="px-4 font-Montserrat text-white font-regular text-sm italic">
              exceptional images
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.6}>
          <div className="bg-gradient-to-r from-frenchLilac  to-blueJeans h-full mt-16"></div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.4}
          style={{
            backgroundImage: "url('lolli.webp')",
            backgroundSize: "cover",
          }}
        >
          <div
            className="bottom-36 text-block absolute"
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <p className="px-4 text-6xl font-RubikGlitch text-white">STUN</p>
            <p className="align-right px-4 font-Montserrat text-white font-regular text-sm italic">
              great shots you won't forget
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.7}
          sticky={{ start: 0, end: 3.9 }}
          className="flex-col h-2 flex justify-start items-center py-3"
        >
          <Link to="/">
            <img
              src="logo.webp"
              alt=""
              className="h-16 w-16 motion-safe:animate-spin-slow z-50 border-2 border-white rounded-full"
            />
          </Link>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          data-aos="fade-up"
          sticky={{ start: 3, end: 4 }}
          className="bg-black h-screen text-lg flex items-center justify-center flex-col-reverse"
        >
          {/* <div> */}
          <Link to="/profile">
            <p className=" cursor-pointer font-Montserrat text-2xl my-2 text-frenchLilac">
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
              <a href="https://wa.me/07062879533?text=I'm%20interested%20in%20booking%20your%20services">
                Book Now
              </a>
            </button>
          </div>
          {/* </div> */}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default HomePage;
