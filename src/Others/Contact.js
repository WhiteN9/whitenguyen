import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-lg-8 col-md-12 text-center animation"
            data-animation="fadeInUp"
            data-animation-delay="0.02s"
          >
            <div class="heading_s1">
              <h2>Contact Me</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="small_divider clearfix"></div>
            <div class="field_form">
              <form method="post" name="enq">
                <div class="row">
                  <div class="form-group col-md-4">
                    <input
                      required="required"
                      placeholder="Enter Name *"
                      id="first-name"
                      class="form-control"
                      name="name"
                      type="text"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <input
                      required="required"
                      placeholder="Enter Email *"
                      id="email"
                      class="form-control"
                      name="email"
                      type="email"
                    />
                  </div>
                  <div class="form-group col-md-4">
                    <input
                      placeholder="Enter Subject"
                      id="subject"
                      class="form-control"
                      name="subject"
                      type="text"
                    />
                  </div>
                  <div class="form-group col-lg-12">
                    <textarea
                      required="required"
                      placeholder="Message *"
                      id="description"
                      class="form-control"
                      name="message"
                      rows="5"
                    ></textarea>
                  </div>
                  <div class="col-lg-12 text-center">
                    <button
                      type="submit"
                      title="Submit Your Message!"
                      class="btn btn-default rounded-0 btn-block"
                      id="submitButton"
                      name="submit"
                      value="Submit"
                    >
                      Submit
                    </button>
                  </div>
                  <div class="col-lg-12 text-center">
                    <div id="alert-msg" class="alert-msg text-center"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="small_divider clearfix"></div>
          </div>
        </div>
        <div
          class="row justify-content-center animation"
          data-animation="fadeInUp"
          data-animation-delay="0.02s"
        >
          <div class="col-lg-3 col-md-4 text-center">
            <div class="icon_box icon_box_style_5">
              <div class="box_icon mb-3">
                <i class="ti-location-pin"></i>
              </div>
              <div class="icon_box_content">
                <h5 class="text-uppercase py-md-2">Address</h5>
                <p>123 New South London , UK</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 text-center">
            <div class="icon_box icon_box_style_5">
              <div class="box_icon mb-3">
                <i class="ti-mobile"></i>
              </div>
              <div class="icon_box_content">
                <h5 class="text-uppercase py-md-2">Phone</h5>
                <p>123-456-7890</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 text-center">
            <div class="icon_box icon_box_style_5">
              <div class="box_icon mb-3">
                <i class="ti-email"></i>
              </div>
              <div class="icon_box_content">
                <h5 class="text-uppercase py-md-2">Email</h5>
                <p>info@sitename.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
