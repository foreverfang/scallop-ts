(function () {
    // 定义一个父类
    class Animal {
        name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        sayHello() {
            console.log("hello " + this.name)
        }
    }

    // 继承 子类拥有父类的所有属性和方法
    class Dog extends Animal {
        // 子类有自己的方法
        run() {
            console.log(`${this.name}跑起来`)
        }

        // 子类重写父类方法
        sayHello() {
            console.log("hello阿黄啊 666")
        }
    }

    class Cat extends Animal {
        // 子类重写父类方法
        sayHello() {
            console.log("皮皮真皮")
        }
    }

    const dog1 = new Dog("阿黄", 2)
    const cat1 = new Cat("皮皮", 1)

    dog1.sayHello()
    dog1.run()
    cat1.sayHello()

})()