import {
    CONTENT_START,
    CHANGE_STATUS_READ,
    CHANGE_STATUS_ERROR,
    CHANGE_STATUS_FINISHED,
    REMOVE_FINISHED_CARDS,
    CHANGE_STATUS_READ_FALSE
} from "../types/content.types";

const initialState = [];

const contentReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CONTENT_START: {
            return [...payload];
        }
        case CHANGE_STATUS_READ: {
            return [
                ...state.map((el) =>
                    el.id === payload.id
                        ? { ...el, statusRead: !el.statusRead }
                        : el
                ),
            ];
        }
        case CHANGE_STATUS_READ_FALSE: {
          return [
              ...state.map((el) =>
                  el.id === payload.id
                      ? { ...el, statusRead: false }
                      : el
              ),
          ];
      }
        case CHANGE_STATUS_ERROR: {
            return [
                ...state.map((el) =>
                    el.id === payload.id ? { ...el, error: !el.error } : el
                ),
            ];
        }
        case CHANGE_STATUS_FINISHED: {
            return [
                ...state.map((el) =>
                    el.id === payload.id
                        ? { ...el, finished: !el.finished }
                        : el
                ),
            ];
        }
        // case REMOVE_FINISHED_CARDS: {
        //     return [...state.filter((el) => el.title !== payload.title)];
        // }
        case REMOVE_FINISHED_CARDS: {
            return [
                ...state.map((el) =>
                    el.title === payload.title
                        ? { ...el,remove: true }
                        : el
                ),
            ];
        }

        default:
            return state;
    }
};

export default contentReducer;
