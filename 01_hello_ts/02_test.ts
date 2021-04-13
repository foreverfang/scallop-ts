let a: number;

a = 10
// a = 'fang'  // a 的类型是number 代码会报错

// let b1 : boolean = true
// 声明和赋值同时进行时，ts会自动对变量进行类型检测
let b2 = true
b2 = false
// b = 123 // 报错

function sum(a: number, b: number): number {
    return a + b
}

console.log(sum(1, 2))

let result = sum(2, 3)

// unkown 实际上就是一个类型安全的any
// unkown 类型的变量，不能直接赋值给其他变量
let c1: unknown
// let c1
// let c1: any
c1 = 77
c1 = 'fang'
c1 = false

let s1: string
// s1 = c1 // 报错

// 类型断言，用来告诉解析器 变量的实际类型
s1 = c1 as string
s1 = <string>c1

function fn1(): void { }

function fn2(): never {
    throw new Error('报错了')
}

let a1: object
a1 = {}
a1 = function () { }

// {} 用来指定对象中可以包含哪些属性
// 属性名后面加上?，表示属性是可选的
let b1: { name: string, age?: number }
// b1 = {}
// b1 = { name: 'fang', age: 18}
b1 = { name: 'fang' }

// [propname: string]: any 任意类型的属性
let b22: { name: string, [propname: string]: any }
b22 = { name: "fang1", age: 19, address: 'wuhan' }

// 设置函数结构的类型声明
// 语法：(形参:类型, 形参:类型 ...) => 返回值
let b3: (a: number, b: number) => number

// b3 = function (a: number, b: number): number {
//     return a + b
// }

// let bbb: { name: string, [propname: string]: any }

// 数组类型声明
//   1.类型[]
//   2.Array<类型>
// string[] 字符串数组
let arr1: string[]
arr1 = ['sss', 'a']
// number[] 数值数组
let arr2: number[]
let arr3: Array<number>
arr3 = [1, 2, 3]


/**
 *  元组：固定长度的数组
*/
let h: [string, number]
h = ['aaa', 222]

/**
 *  enum: 枚举
 *
 */

enum Gender {
    male = 1,
    female = 0
}

let i: { name: string, gender: Gender }
i = {
    name: 'fang',
    gender: Gender.male
}

let j: string | number

let j1: { name: string } & { age: number }
j1 = {
    name: 'fang',
    age: 18
}

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5
let k1: myType
let k2: myType
