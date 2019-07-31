/**
 * 类和接口的关系
 */

//类可以实现接口,类必须实现接口的所有属性和方法,可以拓展自己的属性和方法
interface Human {
  name: string;
  eat(): void;
}

class Asian implements Human {
  name: string = "asian";
  eat() {}
  color: string = "yellow";
}

//接口可以继承接口,还可以多重继承
interface Baby {
  cry(): void;
}

interface Man extends Human {
  hunt(): void;
}

interface Boy extends Baby, Man {
  run(): void;
}

let boy: Boy = {
  run() {},
  cry() {},
  hunt() {},
  eat() {},
  name: "Ben"
};

//接口也可以继承类
class Plane {
  name: string = "plane";
  fly() {}
}

interface Jet extends Plane {}

class B2 implements Jet {
  name = "b2";
  fly() {}
}

class AirForce1 extends Plane implements Jet {}
