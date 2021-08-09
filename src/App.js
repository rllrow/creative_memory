import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Game from "./components/Game";
import { contentStart } from "./redux/actions/content.action";
import { data } from "./data";

function App() {
    const dispatch = useDispatch()
    useEffect(() => dispatch(contentStart(data)), [dispatch]);
    return (
        <div>
            <Game />
        </div>
    );
}

export default App;
