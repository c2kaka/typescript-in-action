/**
 * 高级类型之交叉、联合类型
 */

//交叉类型，是取两个数据类型的并集,用&符号连接
interface DogInterface {
  run(): void;
}

interface CatInterface {
  jump(): void;
}

//取并集，需要同时实现run和jump两个方法
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {}
};

//联合类型，数据的类型并不确定，可能是多个类型中的一个
let numberOrString: number | string = 1;
let a_b_c: "a" | "b" | "c";
let number_123: 1 | 2 | 3;

//对象的联合类型，取方法的交集
class DogClass implements DogInterface {
  run() {}
  eat() {}
}

class CatClass implements CatInterface {
  jump() {}
  eat() {}
}

enum Master {
  Boy,
  Girl
}

function getPet(master: Master) {
  let pet = master === Master.Boy ? new DogClass() : new CatClass();
  pet.eat();
  return pet;
}

//联合类型判断是否缺失类型的两种方法
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;

//方法1：指定返回值为number,利用类型推断
function getArea(s: Shape): number {
  switch (s.kind) {
    case "square":
      return s.size ** 2;
    case "rectangle":
      return s.height * s.width;
    case "circle":
      return Math.PI * s.radius ** 2;
  }
}

//方法二：使用never类型抛出错误
function getArea1(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size ** 2;
    case "rectangle":
      return s.height * s.width;
    case "circle":
      return Math.PI * s.radius ** 2;
    default:
      return ((e: never) => {
        throw new Error(e);
      })(s);
  }
}
