import React, { useState } from "react";


export const TrafficLight = () => {

    const [selected, setSelected] = useState("red")

    const changecolor = (color) => {
        setSelected(color)
    }

    return (
        <main>
            <div className="tube"></div>
            <div className="box-light">
                <div
                    className={`red ${selected == "red" ? "light-on" : ""}`}
                    onClick={() => changecolor("red")}
                ></div>
                <div
                    className={`yellow ${selected == "yellow" ? "light-on" : ""}`}
                    onClick={() => changecolor("yellow")}
                ></div>
                <div
                    className={`green ${selected == "green" ? "light-on" : ""}`}
                    onClick={() => changecolor("green")}
                ></div>
            </div>
        </main>
    );
};