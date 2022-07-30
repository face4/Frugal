import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function Form({ title }) {
    const [point, setPoint] = useState(0);

    return (
        <>
            <form onSubmit={() => {setPoint(0)}}>
                <input
                    value={point}
                    onChange={event => setPoint(event.target.value)}
                    type="text"
                    placeholder="point..."
                    required
                />
                <button>RESET</button>
            </form>
            <p>{title}: You have {point} points!</p>

            <Button>GO</Button>
        </>
    );
}