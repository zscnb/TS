import { Dictionary } from './dictionary';
const dic = new Dictionary<string,number>();
dic.set("a",2)
dic.set("b",3)
dic.set("x",3)
dic.set("c",33)
dic.forEach((k,v) =>{
    console.log(`${k}:${v}`);
})
// 输出结果： a:2 b:3 x: 3 x:33
console.log(dic.has("f"))//false
console.log("当前键值对的个数为"+dic.size)//4
dic.delete("c");
dic.forEach((k,v) =>{
    console.log(`${k}:${v}`);
})
// 输出结果： a:2 b:3 x: 3
console.log("当前键值对的个数为"+dic.size)//3