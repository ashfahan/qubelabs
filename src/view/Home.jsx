import React from "react";
import Footer from "../container/Footer";
import Hero from "../section/Hero";
import Portfolio from "../section/Portfolio";
import Stake from "../section/Stake";
import Staking from "../section/Staking";
import Work from "../section/Work";

export default function Home() {
  return (
    <div>
      <Hero />
      <div>
        <Work />
        <Stake />
        <Portfolio />
        <Staking />
      </div>
      <Footer />
    </div>
  );
}
