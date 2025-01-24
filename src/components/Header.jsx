import { NavLink } from "react-router-dom";

import пс2 from "../img/пс2.svg";
import menu from "../img/icons8-menu 1.svg";
import { useEffect } from "react";
import React from "react";
const Header = () => {
    useEffect(() => {
        const script = document.createElement("script");
        // script.type="module";
        script.src = "../src/js/menu.js";
        document.body.appendChild(script);
    }, []);
    return (
        <>
            <section className="header">
                <div className="container">
                    <div className="header__main">
                        <NavLink to="City-secrets_React/">
                            <img src={пс2} alt="logo" />
                        </NavLink>
                        <div className="header__links">
                            <button
                                className="header__btn"
                                id="menu_icon"
                                onClick={() => {}}>
                                <img
                                    className="header__menu"
                                    src={menu}
                                    alt="menu"
                                />
                            </button>
                            <NavLink to="City-secrets_React/attractions/">
                                <p className="header__link">
                                    Достопримечательности
                                </p>
                            </NavLink>
                            <NavLink to="City-secrets_React/contacts/">
                                <p className="header__link">Контакты</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
            <section className="menu" id="menu">
                <div className="container">
                    <div className="menu__plank">
                        <NavLink to="City-secrets_React/attractions/">
                            <div className="menu__link">
                                <p className="menu__links">
                                    Достопримечательности
                                </p>
                            </div>
                        </NavLink>
                        <NavLink to="City-secrets_React/contacts/">
                            <p className="menu__links">Контакты</p>
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
