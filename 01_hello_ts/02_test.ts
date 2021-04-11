let a: number;

a = 10
// a = 'fang'  // a 的类型是number 代码会报错

// let b1 : boolean = true
// 声明和赋值同时进行时，ts会自动对变量进行类型检测
let b2 = true
b2 = false
// b = 123 // 报错

function sum (a:number, b:number) : number{
  return a+b
}

console.log(sum(1,2))

let result = sum(2,3)