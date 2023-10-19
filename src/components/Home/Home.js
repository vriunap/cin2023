import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeIcon from "../../Assets/homeicons.svg";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import Home2 from "./Home2";
import Type from "./Type";
import "./home.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hola!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>{" "}
                Bienvenido a el
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> I Congreso de Iniciación Científica</strong>
              </h1>

              <div style={{ padding: 30 }} className="type">
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeIcon}
                alt="home pic"
                className="img-fluid"
                style={{ paddingTop: 50 }}
              />
            </Col>
          </Row>
        </Container>
        <h2 className="project-heading">
          Del <strong className="Fluorescent-Blue">11 </strong> al <strong className="Fluorescent-Blue">13 </strong> de <strong className="Fluorescent-Blue"> diciembre </strong>
        </h2>
      </Container>
      <Home2 />
      <ScrollToTop />
    </section>
  );
}

export default Home;
