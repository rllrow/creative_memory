import { GAME_START, CHANGE_POINTS, GAME_FINISH } from "../types/stats.types";
const initialState = [{ progress: 0, timer: 0 }];
const statsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GAME_START: {
            const game = { progress: 0, timer: 0 };
            return [...state, game];
        }
        case CHANGE_POINTS: {
            return [
                ...state.map((el, index) =>
                    index === state.length - 1
                        ? { ...el, progress: el.progress + 5.6 }
                        : el
                ),
            ];
        }
        case GAME_FINISH: {
            console.log("ya zdes");
            return [
                ...state.map((el, index) =>
                    index === state.length - 1
                        ? {
                              ...el,
                              timer: el.timer > 0 ? el.timer : payload,
                              status: "finish",
                          }
                        : el
                ),
            ];
        }

        default:
            return state;
    }
};

export default statsReducer;
