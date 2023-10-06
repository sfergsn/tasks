import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="QuestionOptions">
                <Form.Label>Select an answer:</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((answer: string) => (
                        <option key={answer} value={answer}>
                            {answer}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <h3>
                {choice === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
            </h3>
        </div>
    );
}
