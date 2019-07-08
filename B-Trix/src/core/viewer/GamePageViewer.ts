import { GameViewer, GameStatus } from '../types';
import { SquareGroup } from '../SquareGroup';
import { SquarePageViewer } from './SquarePageViewer';
import $ from 'jquery'
import { Game } from '../Game';
import GameConfig from '../GameConfig';
import PageConfig from './PageConfig';

export class GamePageViewer implements GameViewer {
    onupGrade(): void {
        this._msgDom.css({
            dispaly: "flex",
            opacity: 1

        })
        this._msgDom.find("p").html("升级了!")
        setTimeout(() => {
            this._msgDom.css({
                opacity: 0
            })
        }, 1000)
    }
    onGamePause(): void {
        this._msgDom.css({
            dispaly: "flex",
            opacity: 1

        })
        this._msgDom.find("p").html("游戏暂停")
    }
    onGameStart(): void {
        this._msgDom.css({
            opacity: 0
        })
    }
    onGameOver(): void {
        this._msgDom.css({
            dispaly: "flex",
            opacity: 1
        })
        this._msgDom.find("p").html("游戏结束")
    }
    showScore(score: number): void {
        this._scoreDom.html(score.toString())
    }
    private _nextDom = $("#next")
    private _panelDom = $("#panel")
    private _scoreDom = $("#score")
    private _msgDom = $("#msg")

    init(game: Game): void {
        //1. 设置宽高
        this._panelDom.css({
            width: GameConfig.panelSize.width * PageConfig.SquareSize.width,
            height: GameConfig.panelSize.height * PageConfig.SquareSize.height
        })

        this._nextDom.css({
            width: GameConfig.nextSize.width * PageConfig.SquareSize.width,
            height: GameConfig.nextSize.height * PageConfig.SquareSize.height
        })


        // 2.注册键盘事件
        $(document).keydown(e => {
            if (e.keyCode === 37) {
                game.control_left()
            }
            else if (e.keyCode === 38) {
                game.control_rotate()
            }
            else if (e.keyCode === 39) {
                game.control_right()
            }
            else if (e.keyCode === 40) {
                game.control_down()
            }
            else if (e.keyCode === 32) {
                if (game.gameStatus === GameStatus.playing) {
                    game.pause()
                }
                else {
                    game.start()
                }
            }
        }).on('mousedown', function (e) {
            e.preventDefault()
        })
    }

    showNext(teris: SquareGroup): void {
        teris.squares.forEach(sq => {
            sq.viewer = new SquarePageViewer(sq, this._nextDom)
        })
    }
    switch(teris: SquareGroup): void {
        teris.squares.forEach(sq => {
            sq.viewer!.remove()
            sq.viewer = new SquarePageViewer(sq, this._panelDom)
        })
    }
}