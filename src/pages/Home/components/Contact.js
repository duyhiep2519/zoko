import React from "react";
import contact_img from "../../../images/contact-img.png";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <h3>Let Us Know About Your Project Idea!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis
            vel consequatur tempora atque blanditiis exercitationem incidunt,
            alias corporis quam assumenda dicta.
          </p>
        </div>

        <div className="row row-contact align-items-center">
          <div className="contact-img">
            <img src={contact_img} alt="contact-img" />
          </div>
          <div className="contact-content">
            <div className="content">
              <form id="contactForm">
                <div className="row-form">
                  <div className="single-form">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="single-form">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      required
                      placeholder="Your email"
                    />
                  </div>
                  <div className="single-form">
                    {" "}
                    <input
                      type="phone_number"
                      name="phone_number"
                      id="phone_number"
                      className="form-control"
                      required
                      placeholder="Your phone "
                    />
                  </div>
                  <div className="single-form">
                    {" "}
                    <input
                      type="msg_subject"
                      name="msg_subject"
                      id="msg_subject"
                      className="form-control"
                      required
                      placeholder="Your subject"
                    />
                  </div>
                  <div className="single-form">
                    <textarea
                      type="message"
                      name="message"
                      id="message"
                      row="5"
                      className="form-control"
                      required
                      placeholder="Your message"
                    />
                  </div>
                  <div className="single-form"><button className="box-btn" type="submit">Submit</button></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
