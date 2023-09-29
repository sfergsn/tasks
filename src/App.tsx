import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1 style={{ backgroundColor: "#4dc1f2" }}>This is header text</h1>
            <img
                src={require("./IMG_2619.jpeg")}
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
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
            <p>Hello World, my name is Sam Ferguson!</p>
            <p></p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "200",
                                height: "400"
                            }}
                        >
                            Column 1
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "200",
                                height: "400"
                            }}
                        >
                            Column 2
                        </div>
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
