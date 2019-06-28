import { Color, Mark } from "./enums";

export interface Card {
    getSting(): string
}
export interface NormalCard extends Card {
    color: Color,//花色
    mark: Mark//数字
}
// 加入大小王
export interface Joker extends Card {
    type: "red" | "black"
}