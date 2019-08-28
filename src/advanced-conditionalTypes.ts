//T extends U ? X : Y
type ConditionalTypeNames<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";

type T1 = ConditionalTypeNames<string>; //'string'

type T2 = ConditionalTypeNames<number>; //'number'

// (A | B) extends U ? X : Y
// (A extends U ? X : Y | B extends U ? X : Y)
type T3 = ConditionalTypeNames<boolean | string[]>;

//Exclude<T,U>
type Diff<T, U> = T extends U ? never : T;
type T4 = Diff<"a" | "b" | "c", "a" | "e">;

//NotNullable<T>
type NotNull<T> = Diff<T,undefined | null>;
type T5 = NotNull<string | number | null | undefined>;

//Extract<T,U>
type T6 = Extract<"a" | "b" | "c", "a" | "e">;

//ReturnType<T>
type T7 = ReturnType<() => string>;