import React, { useState } from "react";
import { Button } from "react-bootstrap";
/*export type holidayType =
    | "Birthday"
    | "Halloween"
    | "Thanksgiving"
    | "Festivus"
    | "Christmas";*/

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Festivus");
    const advanceByAlphabet: Record<string, string> = {
        Birthday: "Christmas",
        Christmas: "Festivus",
        Festivus: "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Birthday"
    };
    const advanceByYear: Record<string, string> = {
        Birthday: "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Festivus",
        Festivus: "Christmas",
        Christmas: "Birthday"
    };
    /*{
        holiday === "Festivus" ? <span>Holiday: 💈</span> : <span></span>;
    }
    {
        holiday === "Halloween" ? <span>Holiday: 🎃</span> : <span></span>;
    }
    {
        holiday === "Christmas" ? <span>Holiday: 🎄</span> : <span></span>;
    }
    {
        holiday === "Thanksgiving" ? <span>Holiday: 🦃</span> : <span></span>;
    }*/
    return (
        <div>
            <Button onClick={() => setHoliday(advanceByAlphabet[holiday])}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(advanceByYear[holiday])}>
                Advance by Year
            </Button>
            {holiday === "Birthday" ? (
                <span>Holiday: 🎂</span>
            ) : holiday === "Festivus" ? (
                <span>Holiday: 💈</span>
            ) : holiday === "Halloween" ? (
                <span>Holiday: 🎃</span>
            ) : holiday === "Christmas" ? (
                <span>Holiday: 🎄</span>
            ) : holiday === "Thanksgiving" ? (
                <span>Holiday: 🦃</span>
            ) : (
                <span></span>
            )}
        </div>
    );
}
