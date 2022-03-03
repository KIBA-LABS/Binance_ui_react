import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
  Container,
} from "reactstrap";
import { Row } from "react-bootstrap";

function Coinvaluecomponent(props) {
  console.log(props);
  return (
    <div>
      <Container
        style={{ marginLeft: "40px", marginTop: "20px", border: "none" }}
      >
        <Card style={{ border: "none" }}>
          <CardBody>
            <Row>
              <CardTitle tag="h6" style={{ height: "5px" }}>
                {props.data.title}
              </CardTitle>
            </Row>
            <Row>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h3"
                style={{ height: "10px", marginTop: "15px" }}
              >
                {props.data.subTitle}
              </CardSubtitle>
            </Row>
            <Row>
              <CardText tag="h6" style={{ height: "10px", marginTop: "35px" }}>
                {props.data.price}
              </CardText>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}
export default Coinvaluecomponent;
