import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./App.css";
import { computeKwicFor } from "./kwic";

function App() {
  const [input, setInput] = useState("");

  return (
    <Container>
      <Row className="justify-content-center">Please enter a text</Row>
      <Row>
        <Col>
          <Form.Control
            as="textarea"
            style={{ resize: "none", height: "95vh" }}
            onChange={(event) => setInput(event.target.value)}
          />
        </Col>
        <Col>
          {computeKwicFor(input).map((line) => (
            <div>
              {line}
              <br />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
