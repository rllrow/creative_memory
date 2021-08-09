import React from "react";

function Card({ el, compareCard }) {
    return (
        <div
            onClick={() => !el.remove && compareCard(el)}
            className={el.statusRead ? "card" : "grey"}
        >
            {el.remove ? (
                <div className="final"></div>
            ) : el.finished ? (
                <img
                    alt="finish"
                    width="65px"
                    height="65px"
                    src="https://img2.freepng.ru/20180403/kkw/kisspng-check-mark-tick-clip-art-green-tick-5ac32ce1834381.0286717415227404495377.jpg"
                />
            ) : el.error ? (
                <img
                    alt="error"
                    width="65px"
                    height="65px"
                    src="https://img2.freepng.ru/20180410/lye/kisspng-computer-icons-east-river-shorewalkers-inc-x-mark-wrong-mark-5accb6144d90f2.2596599815233653963177.jpg"
                />
            ) : (
                el.statusRead && (
                    <img width="65px" height="65px" src={el.title} alt="ok" />
                )
            )}
        </div>
    );
}

export default Card;
