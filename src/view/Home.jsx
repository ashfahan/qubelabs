import React from "react";
import Hero from "../section/Hero";
import Portfolio from "../section/Portfolio";
import Stake from "../section/Stake";
import Staking from "../section/Staking";
import Work from "../section/Work";

export default function Home() {
  return (
    <div>
      <Hero />
      <Work />
      <Stake />
      <Portfolio />
      {/* <Staking /> */}
    </div>
  );
}
