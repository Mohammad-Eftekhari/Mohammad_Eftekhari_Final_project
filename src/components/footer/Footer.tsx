import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./footer.style.css";
import logo1 from "../../assets/images/footer/logo.png";
import logo2 from "../../assets/images/footer/logo2.png";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container w-100 d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col className="footer-menu-container" sm={8}>
            <Row className="">
              <Col xs={5} className="text-right">
                <h5>راه های ارتباطی</h5>
                <ul className="d-flex flex-column">
                  <li>تلفن تماس : 09213790087</li>
                  <li>
                    <a className="email-a" href="www.m.eftekhari98@gmail.com">
                      ایمیل: m.eftekhari98@gmail.com
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col className="footer-logo-container" sm={4}>
            <Row>
              <Col xs={6} className="footer-logo d-flex justify-content-center">
                <Image className="img-fluid" src={logo1} rounded />
              </Col>
              <Col xs={6} className="footer-logo d-flex justify-content-center">
                <Image className="img-fluid" src={logo2} rounded />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="footer-icon-container text-right">
          {/* <Col className="footer-icons" xs={6}>
            <ul className="d-flex align-items-center justify-content-between">
              <li>
                <a href="https://twitter.com/Mamlow1">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Mamlow1">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Mamlow1">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Mamlow1">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </Col> */}
          <Col xs={6} className="bg-dark">
            <div className="wrapper d-flex justify-content-between">
              <ul>
                <li className="twitter">
                  <a href="#">
                    <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="instagram">
                  <a href="#">
                    <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="google">
                  <a href="#">
                    <i className="fa fa-google fa-2x" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="whatsapp">
                  <a href="#">
                    <i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
