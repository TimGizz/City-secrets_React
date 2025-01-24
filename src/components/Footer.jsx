import { NavLink } from "react-router-dom";

import пс2 from "../img/пс2.svg";
import React from "react";

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer__logo">
                    <NavLink to="City-secrets_React/">
                        <img src={пс2} alt="logo" />
                    </NavLink>
                </div>
                <div className="footer__links">
                    <NavLink to="City-secrets_React/contacts/">
                        <p className="footer__link">Контакты</p>
                    </NavLink>
                    <NavLink to="City-secrets_React/attractions/">
                        <p className="footer__link">Достопримечательности</p>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default Footer;
