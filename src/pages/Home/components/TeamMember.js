import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import team16 from "../../../images/teams/team16.jpg";
import team17 from "../../../images/teams/team17.jpg";
import team18 from "../../../images/teams/team18.jpg";
import team19 from "../../../images/teams/team19.jpg";
const TeamMember = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#fff",
          marginBottom: "3%",
         
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="teamMember">
      <div className="container">
        <div className="section-title">
          <h2>Team Members</h2>
          <h3>People Who are Behind the Achievements</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse.
          </p>
        </div>
        <div>
          {" "}
          <Slider {...settings}>
            <div>
              <div className="team-slide row">
                <div className="single-team">
                  <div className="single-team-img">
                    <img src={team16} alt="team" />
                    <ul className="team-social">
                      <li>
                        <i className="icon facebook"></i>
                      </li>
                      <li>
                        <i className="icon twitter"></i>
                      </li>
                      <li>
                        <i className="icon mail"></i>
                      </li>
                      <li>
                        <i className="icon youtube"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="content single-team-content text-center">
                    <h3>John Smith</h3>
                    <p>Full Stack Developer</p>
                  </div>
                </div>
                <div className="single-team">
                  <div className="single-team-img">
                    <img src={team17} alt="team" />
                    <ul className="team-social">
                      <li>
                        <i className="icon facebook"></i>
                      </li>
                      <li>
                        <i className="icon twitter"></i>
                      </li>
                      <li>
                        <i className="icon mail"></i>
                      </li>
                      <li>
                        <i className="icon youtube"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="content text-center">
                    <h3>Evana Doe</h3>
                    <p>Web Developer</p>
                  </div>
                </div>
                <div className="single-team">
                  <div className="single-team-img">
                    <img src={team18} alt="team" />
                    <ul className="team-social">
                      <li>
                        <i className="icon facebook"></i>
                      </li>
                      <li>
                        <i className="icon twitter"></i>
                      </li>
                      <li>
                        <i className="icon mail"></i>
                      </li>
                      <li>
                        <i className="icon youtube"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="content text-center">
                    <h3>Bread Mc</h3>
                    <p>IT Consulting</p>
                  </div>
                </div>
                <div className="single-team">
                  <div className="single-team-img">
                    <img src={team19} alt="team" />
                    <ul className="team-social">
                      <li>
                        <i className="icon facebook"></i>
                      </li>
                      <li>
                        <i className="icon twitter"></i>
                      </li>
                      <li>
                        <i className="icon mail"></i>
                      </li>
                      <li>
                        <i className="icon youtube"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="content text-center">
                    <h3>Maria Fread</h3>
                    <p>UI/UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="team-slide row">
                <div className="single-team">
                  <div className="single-team-img">
                    <img src={team16} alt="team" />
                    <ul className="team-social">
                      <li>
                        <i className="icon facebook"></i>
                      </li>
                      <li>
                        <i className="icon twitter"></i>
                      </li>
                      <li>
                        <i className="icon mail"></i>
                      </li>
                      <li>
                        <i className="icon youtube"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="content single-team-content text-center">
                    <h3>John Smith</h3>
                    <p>Full Stack Developer</p>
                  </div>
                </div>
                <div className="single-team">
                  <div className="single-team-img">
                    <img src={team17} alt="team" />
                    <ul className="team-social">
                      <li>
                        <i className="icon facebook"></i>
                      </li>
                      <li>
                        <i className="icon twitter"></i>
                      </li>
                      <li>
                        <i className="icon mail"></i>
                      </li>
                      <li>
                        <i className="icon youtube"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="content text-center">
                    <h3>Evana Doe</h3>
                    <p>Web Developer</p>
                  </div>
                </div>
                <div className="single-team">
                  <div className="single-team-img">
                    <img src={team18} alt="team" />
                    <ul className="team-social">
                      <li>
                        <i className="icon facebook"></i>
                      </li>
                      <li>
                        <i className="icon twitter"></i>
                      </li>
                      <li>
                        <i className="icon mail"></i>
                      </li>
                      <li>
                        <i className="icon youtube"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="content text-center">
                    <h3>Bread Mc</h3>
                    <p>IT Consulting</p>
                  </div>
                </div>
                <div className="single-team">
                  <div className="single-team-img">
                    <img src={team19} alt="team" />
                    <ul className="team-social">
                      <li>
                        <i className="icon facebook"></i>
                      </li>
                      <li>
                        <i className="icon twitter"></i>
                      </li>
                      <li>
                        <i className="icon mail"></i>
                      </li>
                      <li>
                        <i className="icon youtube"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="content text-center">
                    <h3>Maria Fread</h3>
                    <p>UI/UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default TeamMember;
