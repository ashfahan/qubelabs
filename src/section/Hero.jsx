import React from "react";

export default function Hero() {
  return (
    <section className="flex items-center py-36 container-lg min-h-[75vh] lg:min-h-[auto]">
      <div className="row">
        <div className="col w-6/12 md:w-full">
          <h1 className="text-4xl font-bold leading-[50px]">
            <span className="text-primary">Qube</span> partners with
            high-potential blockchain projects.
          </h1>
          <p className="mt-6 text-sm">
            Professional investors, blockchain strategists and social-media
            influencers, investing in a decentralized future.
          </p>
          <button className="btn is-primary mt-4">Learn more</button>
        </div>
        <div className="col w-6/12 hidden md:block">
          <div className="container1">
            <div className="cube1">
              <div className="front" />
              <div className="left" />
              <div className="right" />
              <div className="back" />
              <div className="top" />
              <div className="bottom" />
            </div>
          </div>
          <div className="container2">
            <div className="cube2">
              <div className="front2" />
              <div className="left2" />
              <div className="right2" />
              <div className="back2" />
              <div className="top2" />
              <div className="bottom2" />
            </div>
          </div>
          <div className="container3">
            <div className="cube3">
              <div className="front3" />
              <div className="left3" />
              <div className="right3" />
              <div className="back3" />
              <div className="top3" />
              <div className="bottom3" />
            </div>
          </div>
          <div id="particles-js" />
        </div>
      </div>
    </section>
  );
}
