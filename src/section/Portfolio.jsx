import React from "react";

import box from "../assets/ast/box.png";
import bounty from "../assets/ast/bounty.png";
import bunty from "../assets/ast/bunty.png";
import electrifyasia from "../assets/ast/electrifyasia.png";

export default function Portfolio() {
  return (
    <section class="staking-wrapper  " id="portfolio">
      <img class="bg-icons3" src={box} alt="" />
      <div class="container">
        <div class="main-content3 reveal" data-animate-in="up">
          <div class="work-heading text-center">
            <h1>Invest with us</h1>
            <p class="mt-3 staking-inner-text ">
              These are some of the brands that trust us.
            </p>
          </div>
          <div class="card-group card-group-wrapper ">
            <div class="card card-1 text-center ">
              <img
                src={bounty}
                class="card-img-top pt-4 card-custom-top1"
                alt="..."
              />
              <div class="card-body text-center">
                <h5 class="card-title invest-title-text">Bounty Ox</h5>
                <p class="card-text card-inner-text">
                  Qube partners with promising blockchain projects, assisting
                  them towards successful ICOs, through funding, advisory
                  services and community awareness generation.
                </p>
              </div>
            </div>
            <div class="card card-1 ">
              <img
                src={bunty}
                class="card-img-top pt-4 card-custom-top2"
                alt="..."
              />
              <div class="card-body text-center">
                <h5 class="card-title invest-title-text">Wabi</h5>
                <p class="card-text card-inner-text">
                  Qube partners with promising blockchain projects, assisting
                  them towards successful ICOs, through funding, advisory
                  services and community awareness generation.
                </p>
              </div>
            </div>
            <div class="card card-1 ">
              <img
                src={electrifyasia}
                class="card-img-top pt-4 card-custom-top3"
                alt="..."
              />
              <div class="card-body text-center">
                <h5 class="card-title invest-title-text">Electrify Asia</h5>
                <p class="card-text card-inner-text">
                  Qube partners with promising blockchain projects, assisting
                  them towards successful ICOs, through funding, advisory
                  services and community awareness generation.
                </p>
              </div>
            </div>
          </div>
          <div class="work-heading text-center">
            <div class="btn-view"> View More</div>
          </div>
        </div>
      </div>
    </section>
  );
}
