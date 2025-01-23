// import copy from "../js/copy.js";
import { useEffect } from "react";
import React from "react";
import cross from "../img/cross.svg";

const Contacts = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "../src/js/modal_window.js";
        document.body.appendChild(script);
    }, []);
    return (
        <div>
            <section className="window" id="window">
                <div className="window__main">
                    <button id="close" className="window__cross">
                        <img src={cross} alt="cross" />
                    </button>
                    <div className="window__title">связаться с нами</div>
                    <form action="" className="window__inputs">
                        <p>
                            <input
                                className="window__input"
                                type="text"
                                placeholder="имя"
                                required
                            />
                        </p>
                        <p>
                            <input
                                className="window__input"
                                type="email"
                                placeholder="почта"
                                required
                            />
                        </p>
                        {/* <!-- <p><input className="window__message" type="text" placeholder="сообщение" required></p> --> */}
                        <p>
                            <textarea
                                className="window__message"
                                name=""
                                id=""
                                required
                                placeholder="сообщение"></textarea>
                        </p>
                        <button className="window__close" id="close">
                            <div className="window__close__text">отправить</div>
                        </button>
                    </form>
                </div>
            </section>
            <section className="copy">скопировано</section>
            <section className="contacts">
                <div className="container">
                    <div className="contacts__main">
                        <div className="contacts__title">контакты</div>
                        <div className="contacts__container">
                            <div className="contacts__mail">
                                <div className="f">
                                    <svg
                                        className="icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512">
                                        <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                                    </svg>
                                </div>
                                <a
                                    href="mailto:timgizzat@gmail.com"
                                    className="contacts__gmail">
                                    timgizzat@gmail.com
                                </a>
                            </div>
                            <div className="contacts__number">
                                <div className="f">
                                    <svg
                                        className="icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512">
                                        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                    </svg>
                                </div>
                                <a
                                    href="tel:+79632369963"
                                    className="contacts__phone">
                                    +79632369963
                                </a>
                            </div>
                        </div>
                        <div className="contacts__button" id="contacts__button">
                            <button className="contacts__button" type="button">
                                <div className="contacts__text">
                                    Связаться с нами
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contacts;
