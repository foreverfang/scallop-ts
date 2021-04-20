(function() {
  class Person {
    /**
     * public修饰的属性 任意位置都可以访问
     * private 私有属性，只能在类内中访问
     * protected 受保护的属性，只能在当前类和其子类中访问
     */
    private _name: string
    private _age: number

    constructor(name: string, age: number) {
      this._name = name
      this._age = age
    }

    // getName(){
    //   return this.name
    // }

    // setName(value: string){
    //   this.name = value
    // }

    // getAge(){
    //   return this.age
    // }

    // setAge(value: number){
    //   if(value >=0){
    //     this.age = value
    //   }
    // }


    // ts中设置getter方法的方式
    get name() {
      return this.name
    }

    set name(value: string) {
      this._name = value
    }

    get age() {
      return this.age
    }

    set age(value: number) {
      this._age = value
    }
  }

  const per = new Person("fang", 18)

  per.name = "fang666"

  console.log(per.name)

  // console.log(per.getName())

  // per.setName("fang666")

  // console.log(per.getName())

  class A {
    protected name:string
    
    constructor(name: string){
      this.name = name
    }
  }

  class B extends A {
    test(){
      console.log(this.name)
    }
  }

  const b1 = new B("test1")
  b1.test()

  // 简洁写法
  class C {
    constructor(public name: string, public age: number){}
  }

  const c1 = new C("scallop", 19)
  console.log(c1.name)

})()