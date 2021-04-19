(function () {
    class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }

        sayHello() {
            console.log(`hello${this.name}`)
        }
    }

    class Dog extends Animal {
        age: number
        constructor(name: string, age: number) {
            // 子类的构造函数中，必须调用父类的构造函数
            super(name)
            this.age = age
        }
    }

    const dog = new Dog("阿黄", 3)
    dog.sayHello()
})()