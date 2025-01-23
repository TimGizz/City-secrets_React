import { memo, useEffect, useState, useCallback } from "react";
import down from "../img/down.svg";
import loader from "../img/loader.svg";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Attraction_cart from "../components/Attraction_card";
import React from "react";

import LeftWhite from "../img/LeftWhite.png";
import RightWhite from "../img/RightWhite.svg";

const Attractions = () => {
    const [filter, setfilter] = useState("");
    const [page, setpage] = useState("1");
    const [itemsPerPage, setitemsPerPage] = useState("10");
    const [search, setsearch] = useState("");
    const filter_search__filter__btn = document.querySelector(
        "filter_search__filter__btn",
    );

    const {
        isLoading,
        error,
        data,
        isError,
    } = useQuery({
        queryKey: ["attractions", filter, search, page, itemsPerPage],
        queryFn: async () => {
            const response = await fetch(
                `https://672b1e6c976a834dd025b2ee.mockapi.io/attractions?page=${page}&limit=${itemsPerPage}&category=${filter}&title=${search}`,
            );
            return await response.json();
        },
        keepPreviousData: true,
    });
    if (isLoading)
        return (
            <div className="loader2">
                <img id="loader2" className="loader" src={loader} alt="" />
            </div>
        );
    if (isError) return <div className="">Данные не найдены</div>;
    const handleCategory = (event) => {
        setfilter(event.target.value);
        setpage(1);
        setitemsPerPage(10);
    };
    const handleSearchChange = (event) => {
        setsearch(event.target.value);
        setpage(1);
        setitemsPerPage(10);
    };

    return (
        <>
            <section className="menu" id="menu">
                <div className="container">
                    <div className="menu__plank">
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
            <section className="filter_search">
                <div className="container">
                    <div className="filter_search__main">
                        <div className="filter_search__filter">
                            <select
                                className="filter_search__filter__btn"
                                value={filter}
                                onChange={handleCategory}>
                                <option className="all__btn__btns" value="">
                                    Все
                                </option>
                                <option
                                    className="all__btn__btns"
                                    value="museums">
                                    Музеи
                                </option>
                                <option className="all__btn__btns" value="park">
                                    Парки
                                </option>
                                <option
                                    className="all__btn__btns"
                                    value="cathedrals">
                                    Соборы
                                </option>
                                <option
                                    className="all__btn__btns"
                                    value="monuments">
                                    Памятники
                                </option>
                            </select>
                            <button
                                onClick={() => {
                                    setfilter("museums");
                                }}
                                className="filter_search__sort">
                                По aлфaвиту
                            </button>
                        </div>
                        <form action="">
                            <div className="filter_search__search">
                                <input
                                    id="searchInput"
                                    className="filter_search__search__input"
                                    type="search"
                                    placeholder="Поиск"
                                    value={search}
                                    onChange={handleSearchChange}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className="content__section">
                <div className="container">
                    <div id="itemContainer" className="content">
                        {Array.isArray(data) && data.length > 0 ? (
                            <>
                                {data.map((dat) => {
                                    return <Attraction_cart obj={dat} />;
                                })}
                            </>
                        ) : (
                            <div>Ничего не найдено</div>
                        )}
                    </div>
                </div>
                <div className="pagination__Show_more">
                    <button
                        onClick={() => {
                            setitemsPerPage(+itemsPerPage + 10);
                        }}
                        className="filter_search__sort">
                        Показать больше
                    </button>
                </div>
                <div id="pagination" className="pagination__button">
                    <button
                        onClick={() => {
                            if (page > 1) {
                                setpage(+page - 1);
                            }
                        }}>
                        <img
                            id="btn"
                            className="filter_search__filter__img"
                            src={RightWhite}
                            alt=""
                        />
                    </button>
                    <button
                        onClick={() => {
                            if (data == 0) {
                            } else {
                                console.log(data[0].title === ""),
                                    setpage(+page + 1);
                            }
                        }}>
                        <img
                            id="btn"
                            className="filter_search__filter__img"
                            src={LeftWhite}
                            alt=""
                        />
                    </button>
                </div>
                <div id="number_pagination">{page}</div>
            </section>

            <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
            <script src="./js/menu.js"></script>
        </>
    );
};

export default Attractions;
