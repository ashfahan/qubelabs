import React from "react";
import Hero from "../section/Hero";
import Portfolio from "../section/Portfolio";
import Staking from "../section/Staking";
import Faq from "../section/Faq";
import Features from "../section/Features";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Staking />
      <Portfolio />
      <Faq />
    </div>
  );
}
