import { SquareGroup } from './SquareGroup';
import { Game } from './Game';

export interface Point {
    readonly x: number
    readonly y: number
}

export interface IViewer {
    /**
     * 显示
     */
    show(): void

    /**
     * 移除，不再显示
     */
    remove(): void
}

/**
 * 形状的数组
 */
export type Shape = Point[];

/**
 * 移动的方向
 */
export enum MoveDirection {
    left,
    right,
    down,
}

/**
 * 游戏状态
 */
export enum GameStatus {
    init,//未开始
    playing,//进行中
    pause,//暂停
    over//游戏结束
}

export interface GameViewer {
    /**
     * 下一个方块对象
     * @param teris 
     */
    showNext(teris: SquareGroup): void

    /**
     * 切换的方块对象
     * @param teris 
     */
    switch(teris: SquareGroup): void

    /**
     * 完成界面的初始化
     * @param game 
     */
    init(game: Game): void

    /**
     * 显示分数
     * @param score 
     */
    showScore(score: number): void

    /**
     * 当游戏暂停时候触发的事件
     */
    onGamePause():void

    /**
     * 当游戏开始的时候触发的事件
     */
    onGameStart():void

    /**
     * 当游戏结束的时候触发事件
     */
    onGameOver():void

    /**
     * 当升级的时候发生的事件
     */
    onupGrade():void
}