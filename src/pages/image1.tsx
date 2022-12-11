import React, { MouseEventHandler, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Homie() {
  return (
    <div className="h-screen w-screen relative">
      <img src="images/queen.webp" alt="" className="object-fill" />
      <div className="absolute m-auto left-0 right-0 top-2/3 flex flex-col h-screen justify-center text-center">
        <p className="px-4 text-6xl font-RubikGlitch text-white cursor-pointer">
          GLAM
        </p>
        <p className="px-4 font-Montserrat text-white font-regular text-sm italic">
          define your beauty
        </p>
      </div>
    </div>
  );
}
