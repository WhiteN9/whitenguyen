import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="">
              <h2>Contact Me</h2>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className=""></div>
            <div className="">
              <form>
                <div className="row">
                  <div className="">
                    <label></label>
                    <input />
                  </div>
                  <div className="">
                    <label></label>
                    <input />
                  </div>
                  <div className="">
                    <label></label>
                    <input />
                  </div>
                  <div className="">
                    <label></label>
                    <textarea></textarea>
                  </div>
                  <div className="">
                    <label></label>
                    <button
                      type="submit"
                      title="Submit Your Message!"
                      className="btn btn-default rounded-0 btn-block"
                      id="submitButton"
                      name="submit"
                      value="Submit"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="">
                    <div id="" className="text-center"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className=""></div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="">
              <div className="">
                <i className=""></i>
              </div>
              <div className="">
                <h5 className="">Email</h5>
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
