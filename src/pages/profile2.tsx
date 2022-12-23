import React, { MouseEventHandler, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import AOS from "aos";
import { ReactComponent as Services } from "../icons/services.svg";
import { ReactComponent as Reviews } from "../icons/reviews.svg";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Profilee() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const parallax = useRef<IParallax>(null!);

  return (
    <div className="bg-black w-full-width relative flex flex-col">
      <header className="flex-col z-20 h-2 sticky self-center flex justify-start items-center py-3">
        <Link to="/">
          <img
            src="logo.webp"
            alt=""
            className="h-16 w-16 motion-safe:animate-spin-slow z-50 border-2 border-white rounded-full"
          />
        </Link>
      </header>
      <div className="absolute top-0 bg-gradient-to-r from-frenchLilac  to-teaGreen pb-1">
        <img
          src="images/highie (4).webp"
          alt=""
          className="w-screen h-64 object-cover"
          // data-aos="zoom-in"
        />
      </div>
      <div className="self-center mt-24 bg-gradient-to-r from-frenchLilac  to-teaGreen mb-8 w-64 py-1 px-1 rounded-full">
        <img
          src="images/2.webp"
          alt=""
          className="h-64 w-64 rounded-full"
          data-aos="zoom-in"
        />
      </div>
      <p className="self-center font-questrial text-2xl text-blueJeans font-bold pt-2">
        Ezenwa Princess
      </p>
      <p className="self-center font-questrial text-lg text-white font-bold">
        Makeup Artiste{" "}
        <span className="font-Montserrat font-bold text-3xl">&</span> Crochet
        Creator
      </p>
      <div className="flex justify-evenly py-6 items-center">
        <a href="https://www.instagram.com/talkinghands_pro/">
          <FontAwesomeIcon
            className="text-white px-6 text-3xl"
            icon={faInstagram}
            to="/profile"
          />
        </a>
        <a href="https://www.instagram.com/talkinghands_pro/">
          <FontAwesomeIcon
            className="text-white px-6 text-3xl"
            icon={faTiktok}
          />
        </a>
        <a href="https://www.instagram.com/talkinghands_pro/">
          <FontAwesomeIcon
            className="text-white px-6 text-3xl"
            icon={faEnvelope}
          />
        </a>
      </div>

      <div
        className="px-4 flex flex-col mt-16"
        data-aos="fade-left"
        data-aos-duration="10000"
      >
        <h2 className="bg-inherit font-Montserrat text-frenchLilac text-xl font-bold">
          About
        </h2>
        <p className="font-Montserrat text-sm text-teaGreen">
          <span className="text-xl font-questrial">Ezenwa Princess </span>
          is one of Benin's top makeup artiste offering the best makeup service
          in Edo state; a veteran makeup, visual artiste and crochet creator who
          has carved a niche in creating surreal photoshoots for her clients
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
      </div>
      <div
        className="px-4 flex flex-col mt-12 pb-24"
        data-aos="fade-right"
        data-aos-duration="10000"
      >
        <div className="self-center  flex flex-col items-center rounded-lg">
          <p className="text-white text-lg font-questrial italic">
            want to create magic,
          </p>
          <p className="text-blueJeans font-bold text-sm font-questrial italic">
            let's work together
          </p>
        </div>
        <div className="self-center mt-12">
          <button className="text-4xl cursor-wait text-viridian bg-transparent py-4 my-2 px-4 font-questrial rounded-full border-viridian border-2 animate-none hover:bg-viridian hover:text-white hover:py-6 hover:px-6 hover:border-2 hover:border-blueJeans">
            <a href="https://wa.me/07062879533?text=I'm%20interested%20in%20booking%20your%20services">
              Book Now
            </a>
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
    </div>
  );
}
