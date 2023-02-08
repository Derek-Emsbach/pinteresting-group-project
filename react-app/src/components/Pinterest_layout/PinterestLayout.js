import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllPins } from "../../store/pin.js";
import { useDispatch } from "react-redux";
import Pin from "./Pin.js";

import "./PinterestLayout.css";
import { NavLink } from "react-router-dom";

function PinterestLayout() {
    const pins = useSelector((state) => Object.values(state.pin));
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPins());
    }, [dispatch]);

    return (
        <div>
            {sessionUser && (
                <div style={styles.pin_container}>
                    {pins.map((pin) => (
                        <div key={pin.id} className="pin_container">
                            <div className="pin">
                            <NavLink to={`/pins/${pin.id}`}>
                            <img src={pin.imageUrl}></img>
                            </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: "80vw",
        backgroundColor: "white",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 250px)",
        gridAutoRows: "10px",
    },
};

export default PinterestLayout;
