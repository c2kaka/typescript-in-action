/**
 * 类型推断
 */

//从右向左推断，根据赋值表达式推断
let n = 1;
let arr = [1];

let foo = (x = 1) => x + 1;

//从左向右推断，上下文推断
window.onkeydown = event => {
  console.log(event);
};

/**
 * 类型兼容性
 * 当一个类型Y可以被赋值给另一个类型X时，我们就可以说类型X兼容类型Y
 * X兼容Y：X(目标类型) = Y(源类型)
 * 口诀：
 * 结构之间兼容：成员少的兼容成员多的
 * 函数之间兼容：参数多的兼容参数少的
 */

//接口兼容性
interface X {
  a: any;
  b: any;
}

interface Y {
  a: any;
  b: any;
  c: any;
}

let x1: X = { a: 1, b: 2 };
let y2: Y = { a: 1, b: 2, c: 3 };
x1 = y2; //X兼容Y，成员少的兼容成员多的接口

//函数兼容性
type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
  return handler;
}

// 1)参数个数
let handler1 = (a: number) => {};
hof(handler1); //参数多的兼容参数少的
let handler2 = (a: number, b: number, c: number) => {};
//hof(handler2) error!

// 可选参数和剩余参数 固定参数兼容可选参数和剩余参数 剩余参数兼容固定参数和可选参数 可选参数不兼容固定参数和剩余参数
let a = (p1: number, p2: number) => {};
let b = (p1?: number, p2?: number) => {};
let c = (...args: number[]) => {};
a = b;
a = c;
// b = a
// b = c
c = a;
c = b;

// 2)参数类型
let handler3 = (a: string) => {};
//hof(handler3)  参数类型要保持兼容

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Point2D {
  x: number;
  y: number;
}

let point3D = (point: Point3D) => {};
let point2D = (point: Point2D) => {};

point3D = point2D; //这时的接口要看成拆开的参数，即参数多的兼容参数少的

// 3) 返回值类型
let f = () => ({ name: "Alice" });
let g = () => ({ name: "Alice", location: "Beijing" });
f = g;
// g = f 返回的对象成员少的兼容成员多的

// 函数重载
function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {}
// function overload(a: any): any {}
// function overload(a: any, b: any, c: any): any {}
// function overload(a: any, b: any) {}

// 枚举兼容性 枚举和数字类型之间互相兼容，枚举与枚举之间不兼容
enum Fruit {
  Apple,
  Banana
}
enum Color {
  Red,
  Yellow
}
let fruit: Fruit.Apple = 1;
let no: number = Fruit.Apple;
// let color: Color.Red = Fruit.Apple

// 类兼容性 类的兼容性上构造函数和静态成员不做比较，如果有私有成员的话只有子类和父类互相兼容
class A {
  constructor(p: number, q: number) {}
  id: number = 1;
  private name: string = "";
}
class B {
  static s = 1;
  constructor(p: number) {}
  id: number = 2;
  private name: string = "";
}
class C extends A {}
let aa = new A(1, 2);
let bb = new B(1);
// aa = bb
// bb = aa
let cc = new C(1, 2);
aa = cc;
cc = aa;

// 泛型兼容性
interface Empty<T> {
  // value: T
}
let obj1: Empty<number> = {};
let obj2: Empty<string> = {};
obj1 = obj2;

let log11 = <T>(x: T): T => {
  console.log("x");
  return x;
};
let log12 = <U>(y: U): U => {
  console.log("y");
  return y;
};
log11 = log12;
