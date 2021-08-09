import "../components/style.css";
import Card from "./Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import {
    changeStatusRead,
    changeStatusError,
    changeStatusFinished,
    removeFinishedCards,
    changeStatusReadFalse,
} from "../redux/actions/content.action";
import { changePoints, finishGame } from "../redux/actions/stats.action";

import Stats from "./Stats/Stats";

function Game() {
    let mainTimer = useRef();
    let interval = useRef();
    const [timer, setTimer] = useState();
    const [target, setTarget] = useState();
    const dispatch = useDispatch();

    const cards = useSelector((state) => state.content);
    function validate(array) {
        if (array.every((el) => el.remove === true)) {
            dispatch(finishGame(timer));
            clearInterval(interval.current);
            setTimer(0);
        }
    }
    useEffect(() => {
        validate(cards);
    }, [cards]);

    function compareCard(card) {
        dispatch(changeStatusRead(card));
        if (!target) {
            setTarget(card);
            mainTimer.current = setTimeout(() => {
                setTarget();
                dispatch(changeStatusReadFalse(card));
            }, 5000);
        } else {
            if (card.id === target.id) {
                dispatch(changeStatusReadFalse(card));
                clearTimeout(mainTimer.current);

                setTarget("");
            }
            if (card.title !== target.title) {
                setTimeout(() => {
                    dispatch(changeStatusError(card));
                    dispatch(changeStatusError(target));
                }, 1000);
                setTimeout(() => {
                    dispatch(changeStatusError(card));
                    dispatch(changeStatusError(target));
                    dispatch(changeStatusRead(target));
                    dispatch(changeStatusRead(card));
                }, 2000);

                setTarget();
                clearTimeout(mainTimer.current);
            }
            if (card.title === target.title && card.id !== target.id) {
                setTimeout(() => {
                    dispatch(changeStatusFinished(card));
                    dispatch(changeStatusFinished(target));
                }, 500);
                setTimeout(() => dispatch(removeFinishedCards(card)), 1000);
                setTarget();
                dispatch(changePoints());
                clearTimeout(mainTimer.current);
            }
        }
    }

    return (
        <div
            style={{
                border: "2px solid black",
                width: "1000px",

                margin: "10px auto",
                padding: "10px",
                display: "flex",
                flexDirection: "row",
            }}
        >
            <div
                style={{
                    width: "30%",
                    margin: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Stats timer={timer} setTimer={setTimer} interval={interval} />
            </div>

            <div
                style={{
                    border: "2px solid black",
                    width: "560px",
                    // width: "100%",
                    margin: "10px auto",
                    padding: "10px",
                    display: "flex",
                    flexWrap: "wrap",
                }}
            >
                {cards.map((el) => (
                    <Card el={el} key={el.id} compareCard={compareCard} />
                ))}
            </div>
        </div>
    );
}

export default Game;
