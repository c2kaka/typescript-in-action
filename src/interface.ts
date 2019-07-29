interface List {
  readonly id: number;
  name: string;
  [x: string]: any;
  age?: number; //可选属性
}

interface Result {
  data: List[];
}

function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name);
    if (value.age) {
      console.log(value.age);
    }
  });
}

let result = {
  data: [{ id: 1, name: "a", gender: "male" }, { id: 2, name: "b", age: 13 }]
};

interface StringArray {
  [index: number]: string;
}

let chars: StringArray = ["a", "b"];

//可索引类型，数字索引的返回值必须是字符串索引返回值的子类型
interface Names {
  [x: string]: string;
  [y: number]: string;
}

let names: Names = { a: "a", "2": "2" };
console.log(names[2]);
console.log(names.a);

//函数类型接口

//类型别名
type Add = (x: number, y: number) => number;
let add: Add = (a, b) => a + b;

//混合类型
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = "0.0.1";
  lib.doSomething = () => {};
  return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomething();

function fn() {
  render(result);

  //通过类型断言
  render({
    data: [{ id: 1, name: "a", gender: "male" }, { id: 2, name: "b", age: 13 }]
  });
}

export default fn;
