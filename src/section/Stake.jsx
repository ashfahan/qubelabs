import React from "react";

import boxs from "../assets/ast/boxs.png";
import car1 from "../assets/ast/car1.png";
import car2 from "../assets/ast/car2.png";
import car3 from "../assets/ast/car3.png";
import car4 from "../assets/ast/car4.png";
import car5 from "../assets/ast/car5.png";
import car6 from "../assets/ast/car6.png";
import car7 from "../assets/ast/car7.png";
import car8 from "../assets/ast/car8.png";

export default function Stake() {
  return (
    <section class="stake-wrapper reveal " id="stake">
      <img class="bg-icons2" src={boxs} alt="" />
      <div class="container">
        <div class="main-content2" data-animate-in="up">
          <div class="work-heading text-center">
            <h1>Stake with us</h1>
            <p class="mt-3">
              Earn passive income in crypto by delegating your idle tokens. We
              contribute to secure the following blockchains.
            </p>
          </div>

          <div class="card-group card-group-wrapper ">
            <div class=" card card-2 text-center ">
              <div class="media">
                <img src={car1} class="mr-1" alt="..." />
                <div class="media-body  tabs-body-text">
                  Fantom (FTM)
                  <h5 class="mt-0">15.00%</h5>
                </div>
              </div>

              <button class="btn-stake"> Stake</button>
            </div>

            <div class=" card card-2 text-center ">
              <div class="media">
                <img src={car2} class="mr-1" alt="..." />
                <div class="media-body tabs-body-text">
                  Fantom (FTM)
                  <h5 class="mt-0">15.00%</h5>
                </div>
              </div>

              <button class="btn-stake"> Stake</button>
            </div>

            <div class=" card card-2 text-center ">
              <div class="media">
                <img src={car3} class="mr-1" alt="..." />
                <div class="media-body tabs-body-text">
                  Fantom (FTM)
                  <h5 class="mt-0">15.00%</h5>
                </div>
              </div>

              <button class="btn-stake"> Stake</button>
            </div>

            <div class=" card card-2 text-center ">
              <div class="media">
                <img src={car4} class="mr-1" alt="..." />
                <div class="media-body tabs-body-text">
                  Fantom (FTM)
                  <h5 class="mt-0">15.00%</h5>
                </div>
              </div>

              <button class="btn-stake "> Stake</button>
            </div>
          </div>

          <div class="card-group card-group-wrapper ">
            <div class=" card card-2 text-center ">
              <div class="media">
                <img src={car5} class="mr-1" alt="..." />
                <div class="media-body tabs-body-text">
                  Fantom (FTM)
                  <h5 class="mt-0">15.00%</h5>
                </div>
              </div>

              <button class="btn-stake"> Stake</button>
            </div>

            <div class=" card card-2 text-center ">
              <div class="media">
                <img src={car6} class="mr-1" alt="..." />
                <div class="media-body tabs-body-text">
                  Fantom (FTM)
                  <h5 class="mt-0">15.00%</h5>
                </div>
              </div>

              <button class="btn-stake"> Stake</button>
            </div>

            <div class=" card card-2 text-center ">
              <div class="media">
                <img src={car7} class="mr-1" alt="..." />
                <div class="media-body tabs-body-text">
                  Fantom (FTM)
                  <h5 class="mt-0">15.00%</h5>
                </div>
              </div>

              <button class="btn-stake"> Stake</button>
            </div>

            <div class=" card card-2 text-center ">
              <div class="media">
                <img src={car8} class="mr-1" alt="..." />
                <div class="media-body tabs-body-text">
                  Fantom (FTM)
                  <h5 class="mt-0">15.00%</h5>
                </div>
              </div>

              <button class="btn-stake "> Stake</button>
            </div>
          </div>
          <div class="work-heading mt-4 text-center">
            <div class="btn-view"> View More</div>
          </div>
        </div>
      </div>
    </section>
  );
}
