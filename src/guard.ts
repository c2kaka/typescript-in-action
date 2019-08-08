/**
 * 类型保护
 * 1.instanceof 2.in 3.typeof 4.类型保护函数
 */

enum Type {
  Strong,
  weak
}

class Java {
  helloJava() {
    console.log("hello Java");
  }
  java: any;
}

class JavaScript {
  helloJavaScript() {
    console.log("hello JavaScript");
  }
  javaScript: any;
}

//use guard function
function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava !== undefined;
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();

  //使用类型断言
  // if((lang as Java).helloJava){
  //     (lang as Java).helloJava();
  // }else{
  //     (lang as JavaScript).helloJavaScript();
  // }

  //使用instanceof 进行类型保护
  if (lang instanceof Java) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }

  //use in
  if ("java" in lang) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }

  //use typeof
  if (typeof x === "string") {
    console.log(x.length);
  } else {
    console.log(x.toFixed(2));
  }

  //use guard function isJava():lang is Java
  if (isJava(lang)) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }

  return lang;
}
