import { GAME_START ,CHANGE_POINTS,GAME_FINISH} from "../types/stats.types";
export const startGame = () => ({
    type: GAME_START,
    // payload: card,
});
export const changePoints = () => ({
    type: CHANGE_POINTS
    // payload: card,
});
export const finishGame = (timer) => ({
  type: GAME_FINISH,
  payload: timer
});

