import React from "react";

import logo from "../assets/main-logo.svg";

export default function Footer() {
  return (
    <footer class="footer-section" id="contact">
      <div class="container">
        <div class="footer-content pt-5 pb-5">
          <div class="footer-top-text">
            <div class="row">
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-sm-6 col-sm-offset-2">
                    <h4 class="heading-footer">Got something for us?</h4>
                    <h4 class="heading-footer pt-1"> Get in touch . . .</h4>
                    <p class="inner-text">
                      Our products will transform your business. Feel free to
                      use the form, or contact us directly via hello@qubevc.com
                    </p>
                  </div>
                  <div class="col-sm-6 col-sm-offset-2 ">
                    <form
                      method="post"
                      class="send-form"
                      data-form-title="CONTACT US"
                    >
                      <input type="hidden" data-form-email="true" />
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          required=""
                          placeholder="Name"
                          data-form-field="Name"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          required=""
                          placeholder="Email"
                          data-form-field="Email"
                        />
                      </div>

                      <div class="form-group">
                        <textarea
                          class="form-control"
                          name="message"
                          placeholder="Message"
                          rows="4"
                          data-form-field="Message"
                        ></textarea>
                      </div>
                      <div>
                        <button class="send-btn">Send</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class=" col-lg-3 col-md-3 ml-5 mb-50">
              <div class="footer-widget">
                <div class="footer-logo">
                  <a href="index.html">
                    <img src={logo} class="img-fluid" alt="logo" />
                  </a>
                </div>
                <div class="footer-text footer-logo-text">
                  <p>
                    Professional investors, blockchain strategists and
                    social-media influencers, investing in a decentralized
                    future. .
                  </p>
                </div>
              </div>
            </div>
            <div class=" col-lg-2 col-md-3 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Navigation</h3>
                </div>
                <ul class="footer-content">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#"> Features</a>
                  </li>
                  <li>
                    <a href="#"> Staking</a>
                  </li>
                  <li>
                    <a href="#"> Portfolio</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class=" col-lg-2 col-md-2 mb-30">
              <div class="footer-widget ">
                <div class="footer-widget-heading">
                  <h3>Contacts</h3>
                </div>
                <div class="footer-texts footer-text-custom footer-content mb-25 ">
                  <p>
                    One Ferry Building, Suite 255.
                    <br />
                    San Francisco, CA 94111
                    <br />
                    <span>+1 (415) 677-5340</span>
                  </p>
                </div>
              </div>
            </div>
            <div class=" col-lg-4 col-md-4 mb-50">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Subscribe to our newsletter</h3>
                </div>

                <div class="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="hello@quellxcode.com" />
                  </form>
                </div>
                <button class="blue-btn">Subscribe</button>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-6 col-lg-6  ">
              <div class="copyright-text">
                <p> Website designed by © 2020—2021, QuellxCode </p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
