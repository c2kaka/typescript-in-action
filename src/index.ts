let hello: string = "hello typescript!";
document.querySelectorAll(".app")[0].innerHTML = hello;

import interfaceDemo from "./interface";

interfaceDemo();

//基本类型
let x: number = 2;
let y: string = "hello";
let z: boolean = true;

//数组
let array: Array<number | string> = [1, 2, 3, "4"];
let nums: number[] = [1, 2, 3];

//元组
let tuple: [number, string] = [0, "1"];
// tuple.push(2);
// console.log(tuple);
// tuple[2]

//函数
let add = (x: number, y: number) => x + y;
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;

//对象
let obj: { x: number; y: number } = { x: 1, y: 1 };
obj.x = 3;

//symbol
let s1: symbol = Symbol();
let s2 = Symbol();

//undefined,null
let un: undefined = undefined;
let nu: null = null;

//void
let noReturn = () => {};

//any
let any: any;
any = 1;
any = "x";

//never
