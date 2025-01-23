import { NavLink } from "react-router-dom";
import React from "react";
const Attraction_cart = (props) => {
    return (
        <>
            <NavLink to={props.obj.id}>
                <div className="content__block">
                    <img className="content__img" src={props.obj.img} alt="" />
                    <div className="content__title">{props.obj.title}</div>
                    <div className="content__text">{props.obj.text}</div>
                    <div className="content__address">{props.obj.address}</div>
                </div>
            </NavLink>
        </>
    );
};

export default Attraction_cart;
