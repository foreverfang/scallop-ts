/**
 * 定义函数或类时，类型不确定就可以用泛型
 */

function fn<T>(a: T): T {
  return a
}

fn(19) // 不指定泛型，ts可以自动类型推断
fn<string>('hello') // 指定泛型

// 泛型可以同时指定多个
function fn2 <T, K>(a: T, b: K): T{
  console.log("b", b)
  return a
}

fn2<number, string>(12, 'fang')

interface Inter {
  len: number
}

// T extends Inter 表示：泛型T必须是Inter的实现类（子类）
function fn3<T extends Inter>(a: T): number{
  return a.len
}

fn3({len: 12})


class myClass<T> {
  name: T
  constructor(name: T){
    this.name = name
  }
}

const my1 = new myClass<string>('fang')