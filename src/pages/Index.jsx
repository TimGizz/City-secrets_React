import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import strel_left from "../img/strel_left.svg";
import strel_right from "../img/strel_right.svg";
import эрмитаж from "../img/эрмитаж.png";
import nevskiy from "../img/nevskiy.png";
import russian_musem from "../img/russian_musem.png";
import kasanskiy_cobor from "../img/kasanskiy_cobor.png";
import kolonna from "../img/kolonna.png";
import summer_park from "../img/summer_park.png";
import krepost from "../img/krepost.png";

import { useEffect } from "react";

import { NavLink } from "react-router-dom";

import React from "react";
const Index = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "module";
        script.src = "./src/js/js.js";

        document.body.appendChild(script);
    }, []);
    return (
        <>
            <section className="menu" id="menu">
                <div className="container">
                    <div className="menu__plank">
                        <p className="menu__link">
                            <a
                                className="menu__links"
                                href="https://timgizz.github.io/City-secrets/attractions.html">
                                Достопримечательности
                            </a>
                        </p>
                        <p className="menu__link">
                            <a
                                className="menu__links"
                                href="https://timgizz.github.io/City-secrets/contacts.html">
                                Контакты
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            <section className="one">
                {/* <img src={image} alt="" className='one__bg' /> */}
                <div className="container">
                    <div className="one__main">
                        <div className="one__text">
                            Посети достопремичательности Санкт-Петербурга <br />
                            сейчас
                        </div>
                        <NavLink to="City-secrets_React/attractions/">
                            <a
                                href="https://timgizz.github.io/City-secrets/attractions.html"
                                className="one__link">
                                посетить
                            </a>
                        </NavLink>
                    </div>
                </div>
            </section>
            <section className="two">
                <div className="container">
                    <div className="two__main">
                        <div className="two__block">
                            <div className="two__text">
                                Санкт-Петербург — город-памятник. Он рошел через
                                множество испытаний и продолжает стоять на
                                берегах Невы, величественный и стройный. Каждая
                                улица города хранит свою историю.
                            </div>
                            <img className="two__img" src={img1} alt="img" />
                        </div>
                        <div className="two__block">
                            <img className="two__img" src={img2} alt="img" />
                            <div className="two__text">
                                В Санкт-Петербурге работают свыше 200 музеев и
                                их филиалов в том числе знаменитый Эрмитаж
                                (около трёх миллионов произведений искусства и
                                памятников мировой культуры) и Русский музей.
                            </div>
                        </div>
                        <div className="two__block">
                            <div className="two__text">
                                Город был основан 27 мая 1703 первым российским
                                императором Петром I. Более двухсот лет
                                Санкт‑Петербург являлся столицей Российской
                                империи (1713-1728, 1732-1918).
                            </div>
                            <img className="two__img" src={img3} alt="img" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="fhree">
                <div className="container">
                    <div id="wrapper" className="wrapper">
                        <div id="content" className="carusel">
                            <div id="carusel" className="fhree__carusel">
                                <div className="fhree__blocks">
                                    <div
                                        id="fhree__block"
                                        className="fhree__block">
                                        <img
                                            className="fhree__img"
                                            src={эрмитаж}
                                            alt="Эрмитаж"
                                        />
                                        <div className="fhree__text">
                                            Эрмитаж
                                        </div>
                                    </div>
                                    <div
                                        id="fhree__block"
                                        className="fhree__block">
                                        <img
                                            className="fhree__img"
                                            src={nevskiy}
                                            alt="Эрмитаж"
                                        />
                                        <div className="fhree__text">
                                            Невский проспект
                                        </div>
                                    </div>
                                    <div
                                        id="fhree__block"
                                        className="fhree__block">
                                        <img
                                            className="fhree__img"
                                            src={russian_musem}
                                            alt="Эрмитаж"
                                        />
                                        <div className="fhree__text">
                                            Русский музей
                                        </div>
                                    </div>
                                    <div
                                        id="fhree__block"
                                        className="fhree__block">
                                        <img
                                            className="fhree__img"
                                            src={kasanskiy_cobor}
                                            alt="Эрмитаж"
                                        />
                                        <div className="fhree__text">
                                            Казанский собор
                                        </div>
                                    </div>
                                    <div
                                        id="fhree__block"
                                        className="fhree__block">
                                        <img
                                            className="fhree__img"
                                            src={kolonna}
                                            alt="Эрмитаж"
                                        />
                                        <div className="fhree__text">
                                            Александровская колонна
                                        </div>
                                    </div>
                                    <div
                                        id="fhree__block"
                                        className="fhree__block">
                                        <img
                                            className="fhree__img"
                                            src={summer_park}
                                            alt="Эрмитаж"
                                        />
                                        <div className="fhree__text">
                                            Летний сад
                                        </div>
                                    </div>
                                    <div
                                        id="fhree__block"
                                        className="fhree__block">
                                        <img
                                            className="fhree__img"
                                            src={krepost}
                                            alt="Эрмитаж"
                                        />
                                        <div className="fhree__text">
                                            Петропавловская крепость
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" id="prev" className="prev">
                            <img
                                className="fhree__button"
                                src={strel_left}
                                alt="strel"
                            />
                        </button>
                        <button type="button" id="next" className="next">
                            <img
                                className="fhree__button"
                                src={strel_right}
                                alt="strel"
                            />
                        </button>
                    </div>
                </div>
                <div className="fhree__link">
                    <NavLink to="City-secrets_React/attractions/">
                        <a
                            className="fhree__pereiti"
                            href="https://timgizz.github.io/City-secrets/attractions.html">
                            Перейти
                        </a>
                    </NavLink>
                </div>
            </section>
            <section className="four">
                <div className="container">
                    <div className="four__map">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A5bf8ef2e625f5a8a1c4fb1170c5439927d15d47bc75ba0731ffce616898f2b68&amp;source=constructor"
                            width="1280"
                            height="720"
                            frameBorder="0"></iframe>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Index;
