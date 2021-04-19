(function () {
    /**
     * 抽象类 abstract 关键字，不能用来创建对象
     *   抽象类就是专门用来被继承的类
     *   抽象类中可以添加抽象方法
     */
    abstract class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }

        // 抽象方法
        // 抽象方法没有方法体，子类必须重写抽象方法
        abstract sayHello(): void
    }

    class Dog extends Animal {
        sayHello() {
            console.log(`子类：${this.name}hello`)
        }
    }

    // const an = new Animal() // 无法创建抽象类的实例
    const dog = new Dog("阿黄")
    dog.sayHello()
})()