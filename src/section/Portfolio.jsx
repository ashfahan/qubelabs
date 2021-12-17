import React from "react";

import fan from "../assets/spin-fan.png";
import Group from "../assets/Group.png";
import bounty from "../assets/ast/bounty.png";
import bunty from "../assets/ast/bunty.png";
import electrifyasia from "../assets/ast/electrifyasia.png";

export default function Portfolio() {
  return (
    <section className="mt-24 overflow-x-clip">
      <div className="md:w-11/12 w-[95%] mx-auto relative">
        <img
          className="absolute top-0 right-10 -z-10 w-auto transform translate-x-2/4 translate-y-96"
          src={Group}
          alt="..."
        />
        <div className="absolute top-0 right-10 -z-10 w-auto transform translate-x-2/4 translate-y-96">
          <img className='animate-spin spin-fan' src={fan} alt="..." />
        </div>

        <div className="pt-36">
          <div className="rounded-2xl bg-slate-200 bg-opacity-60 backdrop-blur-sm px-4 pb-4 pt-16 md:p-16">
            <div className="text-center">
              <h5 className="text-5xl font-bold text-primary">Invest with us</h5>
              <p className="text-primary-dark font-medium mt-6 mb-12">
                These are some of the brands that trust us.
              </p>
            </div>

            <div className="row no-gutters">
              <div className="col w-full md:w-4/12 py-1 md:p-1">
                <div className="card w-full h-full card-body text-center rounded-lg border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors hover:shadow-lg transition-colors border-2">
                  <div className="h-[100px] text-center flex items-center justify-center">
                    <img alt="..." src={bounty} />
                  </div>

                  <h5 className="text-xl mt-4 mb-3 font-medium text-primary">Bounty Ox</h5>
                  <p className="card-text text-xs">
                    Qube partners with promising blockchain projects, assisting them towards
                    successful ICOs, through funding, advisory services and community awareness
                    generation.
                  </p>
                </div>
              </div>
              <div className="col w-full md:w-4/12 py-1 md:p-1">
                <div className="card w-full h-full card-body text-center rounded-lg border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                  <div className="h-[100px] text-center flex items-center justify-center">
                    <img alt="..." src={bunty} />
                  </div>

                  <h5 className="text-xl mt-4 mb-3 font-medium text-primary">Wabi</h5>
                  <p className="card-text text-xs">
                    Qube partners with promising blockchain projects, assisting them towards
                    successful ICOs, through funding, advisory services and community awareness
                    generation.
                  </p>
                </div>
              </div>
              <div className="col w-full md:w-4/12 py-1 md:p-1">
                <div className="card w-full h-full card-body text-center rounded-lg border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                  <div className="h-[100px] text-center flex items-center justify-center">
                    <img alt="..." src={electrifyasia} />
                  </div>

                  <h5 className="text-xl mt-4 mb-3 font-medium text-primary">Electrify Asia</h5>
                  <p className="card-text text-xs">
                    Qube partners with promising blockchain projects, assisting them towards
                    successful ICOs, through funding,
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
