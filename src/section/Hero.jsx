import React from "react";

import herovid from "../assets/herovid.mp4";
import Particles from "react-tsparticles";
const particle = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 1200,
      },
    },
    color: {
      value: "#1092B2",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#1092B2",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.2,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#1092B2",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};
export default function Hero() {
  return (
    <section className="flex items-center py-20 md:w-11/12 w-[95%] mx-auto min-h-[75vh] lg:min-h-[auto]">
      <div className="row items-center w-full">
        <div className="col w-full md:w-6/12">
          <h1 className="text-4xl font-bold leading-[50px]">
            <span className="text-primary">Qube</span> partners with high-potential blockchain
            projects.
          </h1>
          <p className="mt-6 text-sm">
            Professional investors, blockchain strategists and social-media influencers, investing
            in a decentralized future.
          </p>
          <button className="btn is-primary mt-4">Learn more</button>
        </div>
        <div className="col w-6/12 hidden md:block h-96">
          <Particles canvasClassName="w-12/12 h-12/12 absolute top-0" options={particle} />
          <video
            className="filter w-full h-full"
            muted
            autoPlay
            loop
            src={herovid}
          />
        </div>
      </div>
    </section>
  );
}
