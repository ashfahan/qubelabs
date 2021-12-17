import React from "react";

import herovid from "../assets/herovid.mp4";

export default function Hero() {
  return (
    <section className="flex items-center py-20 md:w-11/12 w-[95%] mx-auto min-h-[75vh] lg:min-h-[auto]">
      <div className="row items-center">
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
        <div className="col w-6/12 hidden md:block">
          <video muted autoPlay loop src={herovid}></video>
        </div>
      </div>
    </section>
  );
}
