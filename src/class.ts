/**
 * ts类的定义和继承
 */

//ts中类的属性和方法都是实例属性和实例方法
class Cat {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  run() {}
}

console.log(Cat.prototype);
let cat = new Cat("blueCat");
console.log(cat);

//类的继承
class BlueCat extends Cat {
  constructor(name: string, color: string) {
    super(name);
    this.color = color;
  }
  color: string;
}

/**
 * 类的成员修饰符  public , private , protected, readonly, static
 */
class Cat1 {
  constructor(name: string) {
    this.name = name;
  }
  public name: string; //public 修饰符 可以被实例化，可以被子类调用
  //protected 修饰符可以被类和子类使用，不能被实例化
  protected pro() {
    console.log("protected方法");
  }
  //private修饰符 不能被实例化,只能在当前类中使用
  private pri() {
    console.log("private方法");
  }
  readonly legs: number = 4; //只读属性，必须被初始化
  static food: string = "fish"; //只能被类和子类调用
  public run() {
    this.pri();
    this.pro();
  }
}

let cat1 = new Cat1("cat1");
console.log(cat1.legs); // readonly修饰符
console.log(cat1.name);
cat1.run();
//cat1.pro(); error only Cat1 and its subclass can use protected method pro
//cat1.pri(); error only Cat1 can use private method pri
console.log(Cat1.food);

class Cat2 extends Cat1 {
  constructor(name: string) {
    super(name);
  }
  public eat() {
    this.pro();
  }
}

console.log("Cat2.food:" + Cat2.food);

/**
 * 当private 修饰 constructor时
 */
class Cat3 {
  //当constructor为private 时，不能实例化，不能被继承
  private constructor(name: string) {
    this.name = name;
  }
  name: string;
}

//let cat3 = new Cat3("pri"); error

//class cat4 extends Cat3 { } error Cat3 can't be extended

/**
 * 当protected 修饰 constructor时
 */
class Cat4 {
  //当constructor为protected 时，不能实例化，可以被继承,可以用于声明一个基类
  protected constructor(name: string) {
    this.name = name;
  }
  name: string;
}

//let cat4 = new Cat4("pro");
class Cat5 extends Cat4 {}

/**
 * 抽象类，使用abstract关键字，不能被实例化，只能被继承
 */
abstract class Animal {
  eat() {
    console.log("eat");
  }
  abstract sleep(): void;
}

class Dog extends Animal {
  sleep() {
    console.log("dog sleep");
  }
}

let dog = new Dog();
//多态
class Bear extends Animal {
  sleep() {
    console.log("bear sleep");
  }
}

let bear = new Bear();
let animals: Animal[] = [dog, bear];
animals.forEach(animal => {
  animal.sleep();
});

/**
 * 返回this，链式调用
 */
class WorkFLow {
  step1() {
    return this;
  }
  step2() {
    return this;
  }
}

new WorkFLow().step1().step2();

class MyFlow extends WorkFLow {
  next() {
    return this;
  }
}

new MyFlow()
  .next()
  .step1()
  .next()
  .step2();
