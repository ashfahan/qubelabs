import React from "react";

import car1 from "../assets/ast/car1.png";
import car2 from "../assets/ast/car2.png";
import car3 from "../assets/ast/car3.png";
import car4 from "../assets/ast/car4.png";
import car5 from "../assets/ast/car5.png";
import car6 from "../assets/ast/car6.png";
import car7 from "../assets/ast/car7.png";
import car8 from "../assets/ast/car8.png";
import { anim, ScrollReveal } from "../container/ScrollReveal";

export default function Staking() {
  return (
    <section id="staking" className="mt-24 overflow-x-clip">
      <div className="md:w-11/12 w-[95%] mx-auto relative">
        <svg
          className="absolute top-0 left-10 -z-10 w-96 transform -translate-x-2/4"
          xmlns="http://www.w3.org/2000/svg"
          width="389.108"
          height="387.107"
          viewBox="0 0 389.108 387.107"
        >
          <g transform="translate(-75 168.234)">
            <path
              d="M75.3,159.571a10.176,10.176,0,0,1-.3-1.5V60.8a12.15,12.15,0,0,1,.839-4.183c.134-.353.268-.681.425-1.009a12.245,12.245,0,0,1,2.25-3.344l.061-.073a11.821,11.821,0,0,1,2.553-1.946L166.246,1.605a12.134,12.134,0,0,1,12.062,0l85.117,48.638a11.822,11.822,0,0,1,2.553,1.946l.061.073a12.157,12.157,0,0,1,2.25,3.344,10.18,10.18,0,0,1,.413,1,11.951,11.951,0,0,1,.851,4.2v97.277a10.176,10.176,0,0,1-.3,1.5,11.918,11.918,0,0,1-.486,2.444,11.426,11.426,0,0,1-1.034,2.079,10.764,10.764,0,0,1-1.265,1.873,10.912,10.912,0,0,1-1.909,1.678,12.374,12.374,0,0,1-1.131.985l-85.117,48.638c-.268.158-.572.219-.851.353-.328.158-.657.28-1.009.413a10.786,10.786,0,0,1-8.342,0c-.353-.134-.681-.255-1.009-.413-.28-.134-.584-.195-.851-.353L81.128,168.629A12.374,12.374,0,0,1,80,167.644a10.914,10.914,0,0,1-1.909-1.678,10.754,10.754,0,0,1-2.784-6.4ZM245.235,81.749l-60.8,34.74v69.273l60.8-34.74Zm-85.117,34.74-60.8-34.74v69.273l60.8,34.74Zm12.16-90.334L111.673,60.8l60.6,34.643L232.88,60.8Z"
              fill="#1092b2"
              className="animate-pulse origin-center"
            />
          </g>
          <g transform="translate(135.554 14)">
            <path
              d="M59.3,145.571a10.172,10.172,0,0,1-.3-1.5V46.8a12.15,12.15,0,0,1,.839-4.183c.134-.353.268-.681.425-1.009a12.247,12.247,0,0,1,2.25-3.344l.061-.073a11.822,11.822,0,0,1,2.554-1.946l85.117-48.638a12.134,12.134,0,0,1,12.062,0l85.117,48.638a11.817,11.817,0,0,1,2.554,1.946l.061.073a12.155,12.155,0,0,1,2.25,3.344,10.155,10.155,0,0,1,.413,1,11.952,11.952,0,0,1,.851,4.2v97.277a10.182,10.182,0,0,1-.3,1.5,11.923,11.923,0,0,1-.486,2.444,11.427,11.427,0,0,1-1.034,2.079,10.764,10.764,0,0,1-1.265,1.873,10.918,10.918,0,0,1-1.909,1.678,12.373,12.373,0,0,1-1.131.985l-85.117,48.638c-.268.158-.572.219-.851.353-.328.158-.657.28-1.009.413a10.786,10.786,0,0,1-8.342,0c-.353-.134-.681-.255-1.009-.413-.28-.134-.584-.195-.851-.353L65.128,154.629A12.367,12.367,0,0,1,64,153.645a10.915,10.915,0,0,1-1.909-1.678,10.754,10.754,0,0,1-2.785-6.4ZM229.235,67.749l-60.8,34.74v69.273l60.8-34.74Zm-85.117,34.74-60.8-34.74v69.273l60.8,34.74Zm12.16-90.334L95.673,46.8l60.6,34.643,60.6-34.643Z"
              fill="#81c1e1"
              className="animate-pulse origin-center"
            />
          </g>
          <path
            d="M89.16,76.117a12.148,12.148,0,0,0,12.16-12.16V15.319h48.638a12.16,12.16,0,1,0,0-24.319H89.16A12.148,12.148,0,0,0,77,3.16v60.8A12.148,12.148,0,0,0,89.16,76.117Z"
            className="arrow-transition"
            // transform="translate(8.117 69.798)"
            fill="#fe7d1e"
          />
          <path
            d="M78.16,91.117h60.8a12.148,12.148,0,0,0,12.16-12.16V18.16a12.16,12.16,0,0,0-24.319,0V66.8H78.16a12.16,12.16,0,1,0,0,24.319Z"
            className="arrow-transition arrow-transition-2"
            // transform="translate(152.873 237.192)"
            fill="#fe7d1e"
          />
        </svg>

        <div className="pt-36">
          <div className="rounded-2xl bg-slate-200 bg-opacity-60 backdrop-blur-sm px-4 pb-4 pt-16 md:p-16">
            <div className="text-center">
              <ScrollReveal config={anim.animate5}>
                <h5 className="text-5xl font-bold text-primary">Stake with us</h5>
              </ScrollReveal>
              <ScrollReveal config={anim.animate6}>
                <p className="text-primary-dark font-medium mt-6 mb-12">
                  Earn passive income in crypto by delegating your idle tokens. We contribute to
                  secure the following blockchains.
                </p>
              </ScrollReveal>
            </div>

            <div className="row no-gutters">
              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-4/12 md:w-3/12 py-1 md:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car1} />
                      </div>
                      <div className="col px-2">
                        <div>Fantom (FTM)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>

                    <button className="btn is-primary w-full mt-2">Stake</button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-4/12 md:w-3/12 py-1 md:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car2} />
                      </div>
                      <div className="col px-2">
                        <div>Fantom (FTM)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>

                    <button className="btn is-primary w-full mt-2">Stake</button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-4/12 md:w-3/12 py-1 md:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car3} />
                      </div>
                      <div className="col px-2">
                        <div>Fantom (FTM)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>

                    <button className="btn is-primary w-full mt-2">Stake</button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-4/12 md:w-3/12 py-1 md:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car4} />
                      </div>
                      <div className="col px-2">
                        <div>Fantom (FTM)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>
                    <button className="btn is-primary w-full mt-2">Stake</button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-4/12 md:w-3/12 py-1 md:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car5} />
                      </div>
                      <div className="col px-2">
                        <div>Fantom (FTM)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>

                    <button className="btn is-primary w-full mt-2">Stake</button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-4/12 md:w-3/12 py-1 md:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car6} />
                      </div>
                      <div className="col px-2">
                        <div>Fantom (FTM)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>

                    <button className="btn is-primary w-full mt-2">Stake</button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-4/12 md:w-3/12 py-1 md:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car7} />
                      </div>
                      <div className="col px-2">
                        <div>Fantom (FTM)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>

                    <button className="btn is-primary w-full mt-2">Stake</button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate8}>
                <div className="col w-full sm:w-4/12 md:w-3/12 py-1 md:p-1">
                  <div className="card w-full h-full card-body text-center rounded-lg p-3 bg-[#F8FAFD] border-blue-100 hover:border-blue-300 hover:shadow-lg transition-colors transition-colors border-2">
                    <div className="row no-gutters justify-center">
                      <div className="col w-14 flex items-center bg-white rounded-lg">
                        <img alt="..." src={car8} />
                      </div>
                      <div className="col px-2">
                        <div>Fantom (FTM)</div>
                        <div className="font-bold text-3xl">15.00%</div>
                      </div>
                    </div>

                    <button className="btn is-primary w-full mt-2">Stake</button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal config={anim.animate11}>
              <div className="mt-4 text-center">
                <div className="btn is-primary is-expanded">View More</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
