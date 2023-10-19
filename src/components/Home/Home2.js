import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2023-12-11T00:00:00");
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5em",
    margin: "20px 0",
  };

  const unitStyle = {
    margin: "0 20px",
    textAlign: "center",
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} style={timerStyle}>
            <div style={unitStyle}>
              <span className="primary-header">{time.days}</span>
              <div>Días</div>
            </div>
            <div style={unitStyle}>
              <span className="primary-header">{time.hours}</span>
              <div>Horas</div>
            </div>
            <div style={unitStyle}>
              <span className="primary-header">{time.minutes}</span>
              <div>Minutos</div>
            </div>
            <div style={unitStyle}>
              <span className="primary-header">{time.seconds}</span>
              <div>Segundos</div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
