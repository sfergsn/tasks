import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1 style={{ backgroundColor: "#4dc1f2" }}>This is header text</h1>
            <img
                src={require("IMG_2619.jpeg")}
                alt="A picture of cows in Ireland"
            />
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <ul>
                <li>One cow</li>
                <li>Two cows</li>
                <li>Three cows</li>
            </ul>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World, my name is Sam Ferguson!</p>
            <p></p>
            <Container>
                <Row>
                    <Col
                        style={{
                            backgroundColor: "red",
                            width: "200",
                            height: "400"
                        }}
                    >
                        Column 1
                    </Col>
                    <Col
                        style={{
                            backgroundColor: "red",
                            width: "200",
                            height: "400"
                        }}
                    >
                        Column 2
                    </Col>
                </Row>
            </Container>
            <p></p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p></p>
        </div>
    );
}

export default App;
