import React from "react";

function About() {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "50vh", // Takes up half of the screen height
          padding: "40px",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          boxSizing: "border-box",
        }}
      >
        <div style={{ width: "48%", textAlign: "left" }}>
          <h1 style={{ textAlign: "center" }}>
            <i>About Us</i>
          </h1>
          <p style={{ lineHeight: "1.6", fontSize: "16px" }}>
            We, Spring Plant Nursery, situated in Bengaluru, Karnataka, aim to
            promote environmental sustainability and make our country
            pollution-free. We encourage our customers to purchase more plants
            to become one with nature. Our goal is to build an excellent
            reputation and grow our business by selling beautiful plants that
            you can use to decorate your home or veranda. Greenery is the best
            form of decoration, and we have plenty of scented and wonderful
            plants to choose from.
          </p>
        </div>
        <div style={{ width: "48%", textAlign: "center" }}>
          <img
            src="aboutimage.jpg"
            alt="About Us"
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "10px",
              maxHeight: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default About;
