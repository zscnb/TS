import { combineReducers } from "redux";
import movie from "./MovieReducer"
import { IMovieState } from './MovieReducer';

/**
 * 整个网站的根状态
 */
export interface IRootState {
    movie: IMovieState
}

export const rootReducer = combineReducers({
    movie
})