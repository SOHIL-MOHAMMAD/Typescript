// data types in typescript
// for numbers
let a : number = 22;
let floatNum : number = 11.5;

// for strings
let str:string = "hello world";

// for booleans 

let isTrue:boolean = true;

//for arrays
let arr1:number[] = [12,11,33];
let arr2:Array<string> = ['apple','banana','orange'];

// for null and undefined
let N:null = null;
let u:undefined  = undefined;

// for tuples
//A tuple type is another sort of an array with a pre-defined length and types for each index.
let tuple1:[string,number];
tuple1 = ['namaste', 12];

// for objects
// Represents any non-primitive type (i.e., anything that is not number, string, boolean, symbol, null, or undefined).  
let data: object = { key: "value" };

// for bigint
//: For integers larger than what the number type can represent ($2^{53} - 1$).
let bigNumber: bigint = 9007199254740991n;

//symbol
// Used to create unique identifiers.
let sym1: symbol = Symbol("id");

// for enum
//A way ofgiving more friendly names of sets of numeric values.

enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}
let move: Direction = Direction.Up;


// special types alias

// any
// : The "opt-out" type. It allows any type and disables type checking for that variable. Use this sparingly.

let strictlyAnything: any = "Hello";
strictlyAnything = 42; // No error

// unknown
// A safer alternative to any. You can assign anything to it, but you cannot use the value until you check its type (type narrowing)

let input: unknown = 5;
// input.toFixed(); // Error: Object is of type 'unknown'.
if (typeof input === 'number') {
    input.toFixed(); // OK
}

// void
// Used mostly on function return types to indicate the function returns nothing.

function logMessage(): void {
  console.log("This returns nothing");
}

// never 
//Represents values that never occur. Commonly used for functions that throw an error or have infinite loops (they never technically "return").
function throwError(msg: string): never {
  throw new Error(msg);
}