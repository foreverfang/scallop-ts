class Dog {
  name: string
  age: number
  constructor(name: string, age:number){
    this.name = name
    this.age = age
  }

  bark(){
    // this表示当前对象
    console.log("hello"+this.name)
  }
}

const dog1 = new Dog("小黑",1)
const dog2 = new Dog("阿狗", 2)

console.log(dog1,dog2)
dog1.bark()