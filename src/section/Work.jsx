import React from "react";

import workbg from "../assets/work-bg.png";
import asthands from "../assets/ast/hands.png";
import astmessage from "../assets/ast/message.png";
import astsettings from "../assets/ast/settings.png";

export default function Work() {
  return (
    <section class="work-wrapper" id="Features">
      <img class="bg-icons" src={workbg} alt="" />
      <div class="container reveal">
        <div class="main-content1" data-animate-in="up">
          <div class="work-heading pt-4 text-center">
            <h1>Work with us</h1>
            <p class="mt-3">
              Here are some reasons why you will make the best decision by
              choosing us.
            </p>
          </div>
          <div class="card-group card-group-wrapper ">
            <div class="card card-1 text-center ">
              <img src={asthands} class="card-img-top pt-4 card-custom-top" />
              <div class="card-body text-center">
                <h5 class="card-title card-title-text1">
                  Strategic partnership
                </h5>
                <p class="card-text card-inner-text">
                  Qube partners with promising blockchain projects, assisting
                  them towards successful ICOs, through funding, advisory
                  services and community awareness generation.
                </p>
              </div>
            </div>
            <div class="card card-1 ">
              <img src={astmessage} class="card-img-top pt-4 card-custom-top" />
              <div class="card-body text-center">
                <h5 class="card-title card-title-text2">Advisory services</h5>
                <p class="card-text card-inner-text">
                  Through years of advising, Qube has accrued significant
                  expertise in ICO strategy, including: token metrics, token
                  sale mechanism, token distribution, exchange listings, and
                  more.
                </p>
              </div>
            </div>
            <div class="card card-1 ">
              <img
                src={astsettings}
                class="card-img-top pt-4 card-custom-top"
              />
              <div class="card-body text-center">
                <h5 class="card-title card-title-text3">Influencer Network</h5>
                <p class="card-text card-inner-text">
                  Qube has an extensive social-media influencer network that it
                  utilizes to build a community for its partner blockchain
                  projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
