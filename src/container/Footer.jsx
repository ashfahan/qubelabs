import React from "react";

import logo from "../assets/main-logo.svg";

export default function Footer() {
  return (
    <footer className="bg-slate-200 container-lg mt-24 rounded-t-lg px-14 pb-14 pt-20 font-medium">
      <div className="row mb-4">
        <div className="col w-full md:w-6/12">
          <h4 className="text-primary text-4xl font-bold">Got something for us?</h4>
          <h4 className="text-primary text-4xl font-bold pt-1"> Get in touch . . .</h4>
          <p className="text-primary-dark mt-4 font-medium text-sm mb-4 md:mb-0">
            Our products will transform your business. Feel free to use the form, or contact us
            directly via hello@qubevc.com
          </p>
        </div>
        <div className="col w-full md:w-6/12">
          <form method="post" data-form-title="CONTACT US">
            <input type="hidden" data-form-email="true" />
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                required=""
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                required=""
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                placeholder="Message"
                rows="4"
              ></textarea>
            </div>
            <button className="btn is-primary is-expanded">Send</button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col w-full md:w-full lg:w-3/12 md:w-3/12">
          <a href="/" className="w-full max-w-[150px] inline-block">
            <img src={logo} alt="logo" />
          </a>
          <p className="text-xs leading-5">
            Professional investors, blockchain strategists and social-media influencers, investing
            in a decentralized future.
          </p>
        </div>
        <div className="col w-full md:w-full lg:w-3/12 md:w-3/12">
          <div className="text-sm font-bold md:font-medium mt-6">Navigation</div>
          <ul className="mt-4">
            <li>
              <a
                className="text-xs text-primary-dark no-underline inline-block hover:text-secondary"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-xs text-primary-dark no-underline inline-block hover:text-secondary"
                href="#"
              >
                Features
              </a>
            </li>
            <li>
              <a
                className="text-xs text-primary-dark no-underline inline-block hover:text-secondary"
                href="#"
              >
                Staking
              </a>
            </li>
            <li>
              <a
                className="text-xs text-primary-dark no-underline inline-block hover:text-secondary"
                href="#"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className="text-xs text-primary-dark no-underline inline-block hover:text-secondary"
                href="#"
              >
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="col w-full md:w-full lg:w-3/12 md:w-2/12">
          <div className="text-sm font-bold md:font-medium mt-6">Contacts</div>
          <p className="mt-4 text-xs text-primary-dark no-underline inline-block leading-5">
            <div> One Ferry Building, Suite 255.</div>
            <div> San Francisco, CA 94111</div>
            <div className="text-base">+1 (415) 677-5340</div>
          </p>
        </div>
        <div className="col w-full md:w-full lg:w-3/12 md:w-4/12">
          <div className="text-sm font-bold md:font-medium mt-6">Subscribe to our newsletter</div>

          <form action="#">
            <input
              type="email"
              className="form-control mt-2"
              name="email"
              placeholder="hello@quellxcode.com"
            />
          </form>
          <button className="btn is-primary mt-2">Subscribe</button>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-xs font-normal">Website designed by © 2020—2021, QuellxCode </p>
      </div>
    </footer>
  );
}
