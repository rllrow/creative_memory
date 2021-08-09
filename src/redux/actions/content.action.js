import {
    CONTENT_START,
    CHANGE_STATUS_READ,
    CHANGE_STATUS_ERROR,
    CHANGE_STATUS_FINISHED,
    REMOVE_FINISHED_CARDS,
    CHANGE_STATUS_READ_FALSE,
} from "../types/content.types";
export const contentStart = (data) => ({
    type: CONTENT_START,
    payload: [...data],
});

export const changeStatusRead = (card) => ({
    type: CHANGE_STATUS_READ,
    payload: card,
});
export const changeStatusReadFalse = (card) => ({
    type: CHANGE_STATUS_READ_FALSE,
    payload: card,
});
export const changeStatusError = (card) => ({
    type: CHANGE_STATUS_ERROR,
    payload: card,
});
export const changeStatusFinished = (card) => ({
    type: CHANGE_STATUS_FINISHED,
    payload: card,
});

export const removeFinishedCards = (card) => ({
    type: REMOVE_FINISHED_CARDS,
    payload: card,
});

// export const finishedCard = (card) => ({
//   type: REMOVE_FINISHED_CARDS,
//   payload: card,
// });
