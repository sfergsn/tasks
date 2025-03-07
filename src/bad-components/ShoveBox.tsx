import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface ShoveBoxProps1 {
    setPosition: (newPosition: number) => void;
    position: number;
}

interface ShoveBoxProps2 {
    position: number;
}

function ShoveBoxButton({ position, setPosition }: ShoveBoxProps1) {
    return (
        <Button onClick={() => setPosition(4 + position)}>Shove the Box</Button>
    );
}

/*: {
    position: number;
    setPosition: (newPosition: number) => void;
}*/

function MoveableBox({ position }: ShoveBoxProps2): JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);
    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
                <MoveableBox position={position}></MoveableBox>
            </div>
        </div>
    );
}
