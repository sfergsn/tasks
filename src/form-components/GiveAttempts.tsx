import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [AttemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [AttemptsReq, setAttemptsReq] = useState<string>("");
    let AttemptsReqNum = parseInt(AttemptsReq) || 0;

    function updateAttemptsReq(event: React.ChangeEvent<HTMLInputElement>) {
        setAttemptsReq(event.target.value);
        AttemptsReqNum = parseInt(AttemptsReq) || 0;
    }

    return (
        <div>
            <Form.Group controlId="formAttemptReq">
                <Form.Label>Attempt Request: </Form.Label>
                <Form.Control
                    type="number"
                    value={AttemptsReq}
                    onChange={updateAttemptsReq}
                />
            </Form.Group>
            <Button
                onClick={() => setAttemptsLeft(AttemptsLeft - 1)}
                disabled={AttemptsLeft === 0}
            >
                Use
            </Button>
            <Button
                onClick={() => setAttemptsLeft(AttemptsLeft + AttemptsReqNum)}
            >
                Gain
            </Button>
            <h3>{AttemptsLeft}</h3>
        </div>
    );
}
