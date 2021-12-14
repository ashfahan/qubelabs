import React from "react";

export default function Hero() {
  return (
    <section class="hero-wrapper ">
      <div class="container">
        <div class="banner-wrapper">
          <div class="row">
            <div class="col-sm-6 col-sm-6 col-lg-6 col-xl-6 ">
              <div data-animate-in="up" class="banner-inner-text reveal">
                <h2>
                  <span>Qube</span> partners with high-potential blockchain
                  projects.
                </h2>
                <p>
                  Professional investors, blockchain strategists and
                  social-media influencers, investing in a decentralized future.
                </p>
                <div>
                  <a href="#" class=" banner-btn">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-6 col-xl-6">
              <div class="container1">
                <div class="cube1">
                  <div class="front" />
                  <div class="left" />
                  <div class="right" />
                  <div class="back" />
                  <div class="top" />
                  <div class="bottom" />
                </div>
              </div>
              <div class="container2">
                <div class="cube2">
                  <div class="front2" />
                  <div class="left2" />
                  <div class="right2" />
                  <div class="back2" />
                  <div class="top2" />
                  <div class="bottom2" />
                </div>
              </div>
              <div class="container3">
                <div class="cube3">
                  <div class="front3" />
                  <div class="left3" />
                  <div class="right3" />
                  <div class="back3" />
                  <div class="top3" />
                  <div class="bottom3" />
                </div>
              </div>
              <div id="particles-js" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
