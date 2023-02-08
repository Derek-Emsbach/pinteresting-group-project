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
                <div className="pin_container">
                    {pins.map((pin) => (
                        <div key={pin.id} >
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



export default PinterestLayout;
