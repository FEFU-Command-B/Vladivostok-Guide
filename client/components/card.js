import React, {Component} from "react";

const Card = () => (
    <div className="card">
        <div className="card__container">
            <div className="card__left">
                <img src="../static/images/img.jpg" />
            </div>
            <div className="card__right">
                <div className="card__heading"><span>Заголовок</span></div>
                <div className="card__desc"><span>Текст</span></div>
            </div>
        </div>
    </div>
)

export default Card