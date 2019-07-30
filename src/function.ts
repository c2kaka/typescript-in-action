/**
 * TS函数的定义方式
 */
//1.类型推导
function add1(x: number, y: number) {
  return x + y;
}

//2.单纯的定义
let add2: (x: number, y: number) => number;

type add3 = (x: number, y: number) => number;

//接口的方式
interface add4 {
  (x: number, y: number): number;
}

//可选参数
function add5(x: number, y?: number) {
  return y ? x + y : x;
}

add5(1, 2);

//默认参数，在必选参数之前的默认参数如果不赋值则需要显示的传undefined，在所有必选参数之后的默认参数则可以不传
function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q;
}

add6(1, undefined, 2); //equals x=1,z=2,q=1 return 1+2+1=4

//...延展参数
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur);
}

add7(1, 2, 3, 4, 5); //equals 1+2+3+4+5=15;

//函数重载，需要声明所有不同参数的同名函数
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]): any {
  const first = rest[0];
  if (typeof first === "string") {
    return rest.join("");
  } else if (typeof first === "number") {
    return rest.reduce((pre, cur) => pre + cur);
  }
}
console.log(add8(1, 2, 3));
console.log(add8("a", "b", "c"));

export default add8;
