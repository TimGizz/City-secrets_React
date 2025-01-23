import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";

const Review = (props) => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: async () => {
            const response = await fetch(
                `https://672b1e6c976a834dd025b2ee.mockapi.io/reviews/${props.obj.id}`,
                {
                    method: "DELETE",
                },
            );
            if (!response.ok) throw new Error("Error deleting data");
            return response.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["reviews"]);
        },
    });

    return (
        <div className="reviews__main">
            <div className="reviews__name">
                Имя: <p>{props.obj.name}</p>
            </div>
            <div className="reviews__message">
                отзыв: <p>{props.obj.review}</p>
            </div>
            <div className="reviews__rating">
                рейтинг: <p>{props.obj.rating}</p>
            </div>
            <input
                type="submit"
                value="удалить"
                className="reviews__del"
                onClick={() => {
                    mutation.mutate(); // Вызываем мутацию при клике
                }}></input>
        </div>
    );
};

export default Review;
