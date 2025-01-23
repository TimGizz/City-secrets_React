import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Review from "../components/Reviews";
import loader from "../img/loader.svg";
import cross from "../img/cross.svg";
import strel_left from "../img/strel_left.svg";
import strel_right from "../img/strel_right.svg";

const Attraction = () => {
    const [formData, setFormData] = useState({
        name: "",
        review: "",
        rating: "",
    });

    const { id } = useParams();
    const queryClient = useQueryClient();
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "module";
        script.src = "../src/js/gallery.js";
        document.body.appendChild(script);
    }, []);

    const { data: reviews, isLoading: isLoadingReviews } = useQuery({
        queryKey: ["reviews", id],
        queryFn: async () => {
            const response = await fetch(
                `https://672b1e6c976a834dd025b2ee.mockapi.io/reviews?reviews_id=${id}`,
            );
            return await response.json();
        },
        refetchOnWindowFocus: false,
    });

    const { data, isLoading: isLoadingData } = useQuery({
        queryKey: ["attraction", id],
        queryFn: async () => {
            const response = await fetch(
                `https://672b1e6c976a834dd025b2ee.mockapi.io/attractions/${id}`,
            );
            return await response.json();
        },
    });

    const mutation = useMutation({
        mutationFn: async (newReview) => {
            const response = await fetch(
                "https://672b1e6c976a834dd025b2ee.mockapi.io/reviews",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newReview),
                },
            );
            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["reviews", id]);
            setFormData({
                name: "",
                review: "",
                rating: "",
            });
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ ...formData, reviews_id: id });
    };

    if (isLoadingReviews || isLoadingData) {
        return <img className="loader" src={loader} alt="Загрузка..." />;
    }

    return (
        <>
            <section className="description">
                <div className="container">
                    <div className="description__title">{data.title}</div>
                    <div className="description__imgs">
                        {data.imgs.map((img, index) => (
                            <img
                                key={index}
                                className="description__img"
                                src={img}
                                alt=""
                            />
                        ))}
                    </div>
                    <div className="description__texts">
                        {data.description.map((description, index) => (
                            <div key={index} className="description__text">
                                {description}
                            </div>
                        ))}
                    </div>
                    <div className="description__address">{data.address}</div>
                </div>
            </section>
            <section className="reviews">
                <div className="container">
                    <hr />
                    <div
                        style={{
                            textAlign: "center",
                            fontSize: 24,
                            fontWeight: 600,
                            padding: 30,
                        }}
                        className="">
                        Оставьте отзыв
                    </div>
                    <form id="reviewForm" onSubmit={handleSubmit}>
                        <div className="reviews__input">
                            <input
                                id="name"
                                type="text"
                                placeholder="Имя"
                                required
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <textarea
                                id="review"
                                type="textarea"
                                placeholder="Отзыв"
                                name="review"
                                value={formData.review}
                                onChange={handleChange}
                                required></textarea>
                            <select
                                required
                                name="rating"
                                id="rating"
                                value={formData.rating}
                                onChange={handleChange}>
                                <option value="">Выберите рейтинг</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div style={{ textAlign: "center" }} className="">
                            <button className="reviews__post" type="submit">
                                Отправить
                            </button>
                        </div>
                    </form>
                    <div className="reviews__title">Отзывы</div>
                    <div className="reviews__content">
                        {Array.isArray(reviews) && reviews.length > 0 ? (
                            reviews.map((review) => (
                                <Review key={review.id} obj={review} />
                            ))
                        ) : (
                            <div className="reviews__content no_reviews">Ничего не найдено</div>
                        )}
                    </div>
                </div>
            </section>
            <section id="window" className="modal">
                <div className="container">
                    <div id="wrapper" className="modal__main">
                        <div id="carusel" className="modal__carusel">
                            <div id="content" className="modal__content">
                                {data.imgs.map((img) => {
                                    return (
                                        <img
                                            className="modal__img"
                                            src={img}
                                            alt=""
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <button id="close" className="modal__cross">
                            <img src={cross} alt="cross" />
                        </button>
                        <button type="button" id="prev" className="modal__prev">
                            <img
                                className="modal__button"
                                src={strel_left}
                                alt="strel"
                            />
                        </button>
                        <button type="button" id="next" className="modal__next">
                            <img
                                className="modal__button"
                                src={strel_right}
                                alt="strel"
                            />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Attraction;
