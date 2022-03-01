import React from "react";
import { CardImg, Card, CardBody, Container } from "reactstrap";
function Imageviewcomponent(props) {
  return (
    <div>
      <Container style={{ marginLeft: "0px" }}>
        <Card style={{ borderRadius: "120px!important", overFlow: "hidden" }}>
          <CardBody>
            <CardImg
              src={props.data.image}
              style={{ borderRadius: "10px" }}
            ></CardImg>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}
export default Imageviewcomponent;
