import React from "react";

import workbg from "../assets/work-bg.png";
import asthands from "../assets/ast/hands.png";
import astmessage from "../assets/ast/message.png";
import astsettings from "../assets/ast/settings.png";

export default function Work() {
  return (
    <section className="mt-24 overflow-x-clip">
      <div className="container-lg relative">
        <img
          className="absolute top-0 right-10 -z-10 w-96 transform translate-x-2/4"
          src={workbg}
          alt=""
        />
        <div className="container-lg pt-36">
          <div className="rounded-2xl bg-slate-200 bg-opacity-60 backdrop-blur-sm p-16">
            <div className="text-center">
              <h5 className="text-5xl font-bold text-primary">Work with us</h5>
              <p className="text-primary-dark font-medium mt-6 mb-12">
                Here are some reasons why you will make the best decision by
                choosing us.
              </p>
            </div>
            <div className="row">
              <div className="col">
                <div className="card w-full h-full card-body text-center rounded-lg border-blue-100 hover:border-blue-300 transition-colors border-2">
                  <div className="h-[100px] text-center flex items-center justify-center">
                    <img src={asthands} />
                  </div>
                  <h5 className="text-xl mt-4 mb-3 font-medium text-primary">
                    Strategic partnership
                  </h5>
                  <p className="card-text card-inner-text">
                    Qube partners with promising blockchain projects, assisting
                    them towards successful ICOs, through funding, advisory
                    services and community awareness generation.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="card w-full h-full card-body text-center rounded-lg border-blue-100 hover:border-blue-300 transition-colors border-2">
                  <div className="h-[100px] text-center flex items-center justify-center">
                    <img src={astmessage} />
                  </div>
                  <h5 className="text-xl mt-4 mb-3 font-medium text-secondary">
                    Advisory services
                  </h5>
                  <p className="card-text card-inner-text">
                    Through years of advising, Qube has accrued significant
                    expertise in ICO strategy, including: token metrics, token
                    sale mechanism, token distribution, exchange listings, and
                    more.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="card w-full h-full card-body text-center rounded-lg border-blue-100 hover:border-blue-300 transition-colors border-2">
                  <div className="h-[100px] text-center flex items-center justify-center">
                    <img src={astsettings} />
                  </div>
                  <h5 className="text-xl mt-4 mb-3 font-medium text-primary">
                    Influencer Network
                  </h5>
                  <p className="card-text card-inner-text">
                    Qube has an extensive social-media influencer network that
                    it utilizes to build a community for its partner blockchain
                    projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
