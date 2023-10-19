import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return ( <
    Typewriter options = {
      {
        strings: [
          "Sembrando las semillas del conocimiento",
          "Descubriendo el futuro científico",
          "Primer congreso, eterno aprendizaje",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }
    }
    />
  );
}

export default Type;