import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import homeIcon from "../../Assets/homeicons.svg";

import "./about.css";
import "../Home/home.css"

// function About() {
//   return (
//     <Container fluid className="about-section">
//       <Container>
//         <Row style={{ justifyContent: "center", padding: "10px" }}>
//           <Col
//             md={7}
//             style={{
//               justifyContent: "center",
//               paddingTop: "30px",
//               paddingBottom: "50px",
//             }}
//           >
//             <h1
//               style={{ fontSize: "2.1em", paddingBottom: "20px" }}
//               data-aos="fade-right"
//             >
//               <span className="primary-header">Who</span> I'M
//             </h1>
//             <div data-aos="fade-up">
//               <Aboutcard />
//             </div>
//           </Col>
//           <Col
//             md={5}
//             style={{ paddingTop: "120px", paddingBottom: "50px" }}
//             className="about-img"
//           >
//             <img
//               src={laptopImg}
//               alt="about"
//               className="img-fluid"
//               data-aos="fade-left"
//             />
//           </Col>
//         </Row>
//         <h1 data-aos="fade-right">
//           <span className="primary-header">Skillset</span> I Work With
//         </h1>

//         <div data-aos="fade-up">
//           <Techstack />
//         </div>

//         <h1 data-aos="fade-right">
//           <span className="primary-header">Tools</span> I use
//         </h1>
//         <div data-aos="fade-up">
//           <Toolstack data-aos="fade-up" />
//         </div>

//         <Github />
//       </Container>
//       <ScrollToTop />
//     </Container>
//   );
// }

function About() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              
              <h1 className="heading-name">
                <strong className="main-name"> Próximamente...</strong>
              </h1>

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
      </Container>
      <Home2 />
      <ScrollToTop />
    </section>
  );
}


export default About;
