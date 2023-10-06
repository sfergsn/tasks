import React, { useState } from "react";
import { Form } from "react-bootstrap";
const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white"
];

export function ChangeColor(): JSX.Element {
    const [colorChoice, setColorChoice] = useState<string>("");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColorChoice(event.target.value);
    }
    return (
        <div>
            {COLORS.map((colorValue: string) => (
                <Form.Check key={colorValue}>
                    <Form.Check
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        id={"color-check" + colorValue}
                        label={colorValue}
                        value={colorValue}
                        checked={colorChoice === colorValue}
                    />
                </Form.Check>
            ))}
            <p>
                <span>You have chosen </span>
                <span
                    style={{ backgroundColor: colorChoice }}
                    data-testid="colored-box"
                >
                    {colorChoice}
                </span>
                ;
            </p>
        </div>
    );
}
