/**
 * Generic(泛型)：不预先确定的数据类型，具体的类型在使用的时候才能确定
 * 泛型的好处：
 * 1.函数和类可以轻松支持多种类型，增强程序的拓展性
 * 2.不必写多条函数重载，冗长的联合类型声明，增强代码可读性
 * 3.灵活控制类型之间的约束
 */
function log<T>(value: T): T {
  console.log(value);
  return value;
}
log<number[]>([1, 2]);
log(["a", "b"]);

type Log1 = <T>(value: T) => T;
let log1: Log1 = log;

//接口使用泛型
interface Log2<T> {
  (value: T): T;
}
let log2: Log2<number> = log;
log2(2);

//泛型的默认值
interface Log3<T = string> {
  (value: T): T;
}
let log3: Log3 = log;
log3("default");

//类使用泛型
class LogClass<T> {
  logout(value: T) {
    console.log(value);
    return value;
  }
}
let logger1 = new LogClass<number>();
logger1.logout(1);

let logger2 = new LogClass<string>();
logger2.logout("string");

//使用接口约束泛型
interface Length {
  length: number;
}

function lengthLogger<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value;
}

lengthLogger([1]);
lengthLogger("string");
lengthLogger({ length: 2 });
