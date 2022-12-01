import React, { MouseEventHandler, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import AOS from "aos";
import { ReactComponent as Services } from "../icons/services.svg";
import { ReactComponent as Reviews } from "../icons/reviews.svg";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Profile() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const parallax = useRef<IParallax>(null!);

  return (
    <div className="bg-gradient-to-br from-matteBlack  to-black h-screen w-full-width">
      <Parallax ref={parallax} pages={2}>
        <ParallaxLayer
          speed={0.7}
          sticky={{ start: 0, end: 0.1 }}
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
        <ParallaxLayer offset={0}>
          <div className="flex-col flex justify-center items-center mt-24">
            <div className="bg-gradient-to-r from-frenchLilac  to-teaGreen py-1 px-1 rounded-full">
              <img
                src="images/2.jpg"
                alt=""
                className="h-64 w-64 rounded-full"
                data-aos="zoom-in"
                data-aos-duration="7000"
              />
            </div>

            <p className="font-questrial text-2xl text-blueJeans font-bold pt-2">
              Ezenwa Princess
            </p>
            <p className="font-questrial text-lg text-white font-bold">
              Makeup Artiste{" "}
              <span className="font-Montserrat font-bold text-3xl">&</span>{" "}
              Crochet Creator
            </p>
            <div className="flex justify-evenly mt-16 items-center">
              <div className="h-14 w-14 bg-transparent flex flex-col items-center justify-center mx-2 rounded-lg">
                <Services />
              </div>
              <div className="h-14 w-14 bg-transparent flex flex-col items-center justify-center mx-2 rounded-lg">
                <Services />
              </div>
              <div className="h-14 w-14 bg-transparent flex flex-col items-center justify-center mx-2 rounded-lg">
                <Services />
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <div
            className="px-4 flex flex-col"
            data-aos="fade-left"
            data-aos-duration="10000"
          >
            <h2 className="font-Montserrat text-frenchLilac text-xl font-bold">
              About
            </h2>
            <p className="font-Montserrat text-sm text-teaGreen">
              <span className="text-xl font-questrial">Ezenwa Princess </span>
              is a veteran makeup, visual artiste and crochet creator who has
              carved a niche in creating surreal photoshoots for her clients
              Worked with top photographers in Africa, Talking Hands offers its
              client unqiue services and in giving you the perfect look for your
              occassion. As a brand we have worked with top photographers and
              studios like{" "}
              <span className="text-lightPink font-Montserrat font-bold">
                Khannah Black, Studio A, David, Rodelenz{" "}
              </span>
              and loads of others{" "}
            </p>
            <hr className="border-1 mt-20 border-white" />
            <div className="mt-24 self-center flex flex-col items-center rounded-lg">
              <p className="text-white text-lg font-questrial italic">
                want to create magic,
              </p>
              <p className="text-blueJeans font-bold text-sm font-questrial italic">
                let's work together
              </p>
              <button className="text-3xl font-bold text-white bg-viridian py-4 my-4 px-4 font-questrial rounded-full border-white border-2 animate-none hover:bg-viridian hover:bg-opacity-40 hover:text-white hover:py-5 hover:px-5 hover:border-2 hover:border-white">
                book now
              </button>
            </div>

            <div className="flex justify-center items-center">
              <Link to="/profile">
                <p className="cursor-pointer font-Montserrat text-2xl my-2 mx-2 text-frenchLilac">
                  Profile
                </p>
              </Link>

              <Link to="/portfolio">
                <p className="cursor-pointer font-Montserrat text-2xl my-2 mx-2 text-blueJeans">
                  Portfolio
                </p>
              </Link>

              <Link to="/profile">
                <p className=" cursor-pointer font-Montserrat text-2xl my-2 mx-2 text-lightPink">
                  Contact us
                </p>
              </Link>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
