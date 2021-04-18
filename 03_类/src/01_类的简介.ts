class Person {
  /**
   * 静态属性，前面加static
   * 只读属性，前面加readonly
   * 
   */

  // 定义实例属性
  name: string = "fang"
  age: number = 19

  // readonly name: string = "fang"

  // 在属性前使用static关键字，可以定义类属性（静态属性）
  // static age: number = 19
  constructor() {

  }

  // 以static开头，表示静态方法，直接通过类调用Person.sayHelle()
  sayHello(){
    console.log('hello fang1')
  }
}

const per = new Person()
console.log(per)
// console.log(Person.age)
per.name = "fang 77"
per.sayHello()