import {hi} from './m1'

function sum(a: number, b: number): number {
    return a + b
}

const obj = {
  name: 'fang',
  age: 18
}

console.log(obj)

console.log(sum(2, 3))

console.log('开启调试1')
hi()


// console.log(Promise)

const fn1 = (a:number,b:number)=>a+b

console.log(fn1(2,3))