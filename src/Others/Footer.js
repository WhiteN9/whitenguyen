import React from "react";

const Footer = () => {
  return (
    <footer class="footer_dark bg_black4 footer_shape">
      <div class="top_footer small_pb">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8 col-md-9 text-center">
              <div class="footer_logo">
                <a href="index.html">
                  <img alt="logo" src="assets/images/logo_white.png" />
                </a>
              </div>
              <h6 class="widget_title pt-3">Subscribe Our Newsletter</h6>
              <div class="newsletter_form newslattter_small">
                <form>
                  <input
                    type="text"
                    required=""
                    placeholder="Enter Email Address"
                  />
                  <button
                    type="submit"
                    title="Subscribe"
                    class="btn btn-default rounded-0"
                    name="submit"
                    value="Submit"
                  >
                    subscribe
                  </button>
                </form>
              </div>
              <ul class="list_none footer_link text-center footer_nav">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Experience</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
              <ul class="list_none social_icons social_white pt-4">
                <li>
                  <a href="#">
                    <i class="ion-social-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ion-social-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ion-social-googleplus"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ion-social-youtube-outline"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="ion-social-instagram-outline"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom_footer bg_black2">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <p class="copyright m-0 text-center">
                © 2019 All Rights Reserved By{" "}
                <a href="#" class="text_default">
                  Bestwebcreator
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
