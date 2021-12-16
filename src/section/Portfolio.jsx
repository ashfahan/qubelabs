import React from "react";

import Group from "../assets/Group.png";
import bounty from "../assets/ast/bounty.png";
import bunty from "../assets/ast/bunty.png";
import electrifyasia from "../assets/ast/electrifyasia.png";

export default function Portfolio() {
  return (
    <section className="mt-24 overflow-x-clip">
      <div className="container-lg relative">
        <img
          className="absolute top-0 right-10 -z-10 w-auto transform translate-x-2/4 translate-y-96"
          src={Group}
        />

        <div className="container-lg pt-36">
          <div className="rounded-2xl bg-slate-200 bg-opacity-60 backdrop-blur-sm p-16">
            <div className="text-center">
              <h5 className="text-5xl font-bold text-primary">
                Invest with us
              </h5>
              <p className="text-primary-dark font-medium mt-6 mb-12">
                These are some of the brands that trust us.
              </p>
            </div>

            <div className="row">
              <div className="col w-4/12 p-1">
                <div className="card w-full h-full card-body text-center rounded-lg border-blue-100 hover:border-blue-300 transition-colors border-2">
                  <div className="h-[100px] text-center flex items-center justify-center">
                    <img src={bounty} />
                  </div>

                  <h5 className="text-xl mt-4 mb-3 font-medium text-primary">
                    Bounty Ox
                  </h5>
                  <p className="card-text card-inner-text">
                    Qube partners with promising blockchain projects, assisting
                    them towards successful ICOs, through funding, advisory
                    services and community awareness generation.
                  </p>
                </div>
              </div>
              <div className="col w-4/12 p-1">
                <div className="card w-full h-full card-body text-center rounded-lg border-blue-100 hover:border-blue-300 transition-colors border-2">
                  <div className="h-[100px] text-center flex items-center justify-center">
                    <img src={bunty} />
                  </div>

                  <h5 className="text-xl mt-4 mb-3 font-medium text-primary">
                    Wabi
                  </h5>
                  <p className="card-text card-inner-text">
                    Qube partners with promising blockchain projects, assisting
                    them towards successful ICOs, through funding, advisory
                    services and community awareness generation.
                  </p>
                </div>
              </div>
              <div className="col w-4/12 p-1">
                <div className="card w-full h-full card-body text-center rounded-lg border-blue-100 hover:border-blue-300 transition-colors border-2">
                  <div className="h-[100px] text-center flex items-center justify-center">
                    <img src={electrifyasia} />
                  </div>

                  <h5 className="text-xl mt-4 mb-3 font-medium text-primary">
                    Electrify Asia
                  </h5>
                  <p className="card-text card-inner-text">
                    Qube partners with promising blockchain projects, assisting
                    them towards successful ICOs, through funding,
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="btn is-primary is-expanded">View More</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
