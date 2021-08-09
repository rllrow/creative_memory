import { useDispatch, useSelector } from "react-redux";
import { startGame, finishGame } from "../../redux/actions/stats.action";
import { contentStart } from "../../redux/actions/content.action";
import { data } from "../../data";

function Stats({ timer, setTimer, interval }) {
    const dispatch = useDispatch();
    function random(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let tmp = array[i];
            let rand = Math.floor(Math.random() * (i - 1));
            array[i] = array[rand];
            array[rand] = tmp;
        }
        return array;
    }

    const start = () => {
        clearInterval(interval.current);
        dispatch(finishGame(timer));
        dispatch(contentStart(random(data)));
        dispatch(startGame());
        setTimer(0);
        interval.current = setInterval(
            () => setTimer((prev) => prev + 1),
            1000
        );
    };
    const stop = () => {
        clearInterval(interval.current);
        dispatch(finishGame(timer));
        setTimer(0);
    };

    let progress = useSelector(
        (state) => state.stats[state.stats.length - 1].progress
    );
    const games = useSelector((state) => state.stats);
    const finalgames = games.slice(1).filter((el) => el.status === "finish");

    return (
        <div>
            <button
                onClick={() => start()}
                style={{
                    width: "100px",
                    height: "30px",
                    borderRadius: "5px",
                    margin: "3px",
                }}
            >
                START
            </button>
            <button
                onClick={() => stop()}
                style={{ width: "100px", height: "30px", borderRadius: "5px" }}
            >
                STOP
            </button>
            {timer > 0 ? (
                <>
                    <div> Timer: {timer}</div>
                    {progress > 0 && (
                        <div>Progress:{Math.floor(progress)}%</div>
                    )}
                </>
            ) : (
                <></>
            )}
            <hr />
            {finalgames.length > 0 &&
                // .sort((a, b) => b.progress - a.progress)
                finalgames.map((el, index) => (
                    <div key={index}>
                        #{index + 1} : Progress: {Math.floor(el.progress)}% :
                        Time: {el.timer} seconds
                    </div>
                ))}
        </div>
    );
}

export default Stats;
