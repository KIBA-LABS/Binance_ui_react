import { Container } from "@material-ui/core";
import React from "react";
import { Image } from "react-bootstrap";

function Left() {
  return (
    <>
      <div>
        <Image
          src="mobile.png"
          style={{
            border: "none",
            marginTop: "60px",
            marginLeft: "60px",
            opacity: "100px",
          }}
        />
        <Image
          src="qr.png"
          style={{
            border: "none",
            marginTop: "60px",
            marginLeft: "160px",
            opacity: "100px",
          }}
        />
      </div>
      <Container style={{ alignItems: "center", color: "gray", width: "100%" }}>
        <h6>More Download Options</h6>
      </Container>
    </>
  );
}
export default Left;
