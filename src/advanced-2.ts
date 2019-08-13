/**
 * 索引类型
 */
let object = {
  a: 1,
  b: 2,
  c: 3
};

//keyof T
interface Object1 {
  a: number;
  b: string;
}

let key: keyof Object1;

//T[K]
let value: Object1["a"];

//T extends U

//使用索引类型配合泛型约束检查对象取值
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key]);
}

console.log(getValues(object, ["a", "b"]));
//console.log(getValues(object, ["e", "b"])); 使用上述方法，TS会在编译期间检查出错误
