import React, { useState } from "react";

export default function PointForm({ os }) {
    const [point, setPoint] = useState(0);

    return (
        <>
            <form>
                <label>{os}：</label>
                <input
                    value={point}
                    onChange={event => setPoint(event.target.value)}
                    type="text"
                    placeholder="point..."
                    required
                />
            </form>
        </>
    );
}