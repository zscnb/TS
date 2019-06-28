import { Deck } from "./deck";
const deck = new Deck();
deck.shuffle()  
console.log("洗牌后")
deck.print();
const result = deck.publish()
result.player1.print();
result.player2.print();
result.player3.print();
result.left.print();
