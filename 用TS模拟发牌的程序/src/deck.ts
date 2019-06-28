import { Card, Joker } from "./types";
import { Mark, Color } from "./enums";

interface PublishResult {
    player1: Deck,
    player2: Deck,
    player3: Deck,
    left: Deck,
}

export class Deck {
    private cards: Card[] = [];
    constructor(cards?: Card[]) {
        if (cards) {
            this.cards = cards
        }
        else {
            this.init();
        }
    }
    // 初始化
    private init() {
        const marks = Object.values(Mark);
        const colors = Object.values(Color);
        for (const m of marks) {
            for (const c of colors) {
                this.cards.push({
                    color: c,
                    mark: m,
                    getSting() {
                        return this.color + this.mark;
                    }
                } as Card)
            }
        }
        let joker: Joker = {
            type: "black",
            getSting() {
                return "小王"
            }
        }
        this.cards.push(joker)
        joker = {
            type: "red",
            getSting() {
                return "大王"
            }
        }
        this.cards.push(joker)
    }
    // 打印
    print() {
        let result = "\n";
        this.cards.forEach((card, i) => {
            result += card.getSting() + "\t";
            if ((i + 1) % 6 === 0) {
                result += "\n";
            }
        })
        console.log(result)
    }
    // 洗牌
    shuffle() {
        for (let i = 0; i < this.cards.length; i++) {
            const targetIndex = this.getRandom(0, this.cards.length);
            const temp = this.cards[i];
            this.cards[i] = this.cards[targetIndex];
            this.cards[targetIndex] = temp;
        }
    }

    // 发完牌后，得到的结果又4个card[]
    publish(): PublishResult {
        let player1: Deck, player2: Deck, player3: Deck, left: Deck;
        player1 = this.takeCards(17)
        player2 = this.takeCards(17)
        player3 = this.takeCards(17)
        left = new Deck(this.cards);
        return {
            player1,
            player2,
            player3,
            left
        }
    }

    private takeCards(n: number): Deck {
        const cards: Card[] = [];
        for (let i = 0; i < n; i++) {
            cards.push(this.cards.shift() as Card);
        }
        return new Deck(cards);
    }

    //获得随机下标
    /**
     * 无法取得最大值max
     * @param min 
     * @param max 
     */
    private getRandom(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}