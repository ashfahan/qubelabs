import React from "react";

import logo from "../assets/main-logo.svg";
import ScrollReveal, { anim } from "./ScrollReveal";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="container-xxl"
    >
      <div className="bg-slate-200 bg-opacity-60 backdrop-blur-sm container-xxl mt-24 rounded-t-lg px-4 pb-4 pt-16 md:px-14 md:pb-14 md:pt-20 font-medium ">
        <div className="row mb-4">
          <div className="col w-full md:w-6/12">
            <ScrollReveal config={anim.animate5}>
              <h4 className="text-primary text-4xl font-bold">
                Got something for us?
                <div className="pt-1">Get in touch . . .</div>
              </h4>
            </ScrollReveal>
            <ScrollReveal config={anim.animate8}>
              <p className="text-primary-dark mt-4 font-medium text-sm mb-4 md:mb-0">
                Our products will transform your business. Feel free to use the form, or contact us
                directly via hello@qubevc.com
              </p>
            </ScrollReveal>
          </div>
          <div className="col w-full md:w-6/12">
            <form method="post" data-form-title="CONTACT US">
              <ScrollReveal config={anim.animate7}>
                <input type="hidden" data-form-email="true" />
              </ScrollReveal>
              <ScrollReveal config={anim.animate7}>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control text-sm"
                    name="name"
                    required=""
                    placeholder="Name"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal config={anim.animate7}>
                <div className="mb-2">
                  <input
                    type="email"
                    className="form-control text-sm"
                    name="email"
                    required=""
                    placeholder="Email"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal config={anim.animate7}>
                <div className="mb-2">
                  <textarea
                    className="form-control text-sm"
                    name="message"
                    placeholder="Message"
                    rows="4"
                  ></textarea>
                </div>
              </ScrollReveal>
              <ScrollReveal config={anim.animate8}>
                <button className="btn is-primary is-expanded">Send</button>
              </ScrollReveal>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col w-full lg:w-3/12 md:w-3/12">
            <ScrollReveal config={anim.animate5}>
              <a href="#top" className="w-full max-w-[150px] inline-block">
                <img src={logo} alt="logo" />
              </a>
            </ScrollReveal>
            <ScrollReveal config={anim.animate8}>
              <p className="text-xs leading-5">
                Professional investors, blockchain strategists and social-media influencers,
                investing in a decentralized future.
              </p>
            </ScrollReveal>
          </div>
          <div className="col w-6/12 lg:w-3/12 md:w-3/12">
            <div className="text-sm font-bold md:font-medium mt-6">Navigation</div>
            <ul className="mt-4">
              <li>
                <a
                  className="text-xs text-primary-dark no-underline inline-block hover:text-secondary"
                  href="#top"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-xs text-primary-dark no-underline inline-block hover:text-secondary"
                  href="#features"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="text-xs text-primary-dark no-underline inline-block hover:text-secondary"
                  href="#staking"
                >
                  Staking
                </a>
              </li>
              <li>
                <a
                  className="text-xs text-primary-dark no-underline inline-block hover:text-secondary"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="text-xs text-primary-dark no-underline inline-block hover:text-secondary"
                  href="#faq"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="col w-6/12 lg:w-3/12 md:w-2/12">
            <div className="text-sm font-bold md:font-medium mt-6">Contacts</div>
            <p className="mt-4 text-xs text-primary-dark no-underline inline-block leading-5">
              <span className="block"> One Ferry Building, Suite 255.</span>
              <span className="block"> San Francisco, CA 94111</span>
              <span className="block text-base">+1 (415) 677-5340</span>
            </p>
          </div>
          <div className="col w-full lg:w-3/12 md:w-4/12">
            <div className="text-sm font-bold md:font-medium mt-6">Subscribe to our newsletter</div>

            <form action="#">
              <input
                type="email"
                className="form-control text-sm mt-2"
                name="email"
                placeholder="hello@jararmalik.com"
              />
            </form>
            <button className="btn is-primary mt-2">Subscribe</button>
          </div>
        </div>
        <div className="mt-12">
          <p className="text-xs font-normal">Website designed by © 2020—2021, jararmalik </p>
        </div>
      </div>
    </footer>
  );
}
