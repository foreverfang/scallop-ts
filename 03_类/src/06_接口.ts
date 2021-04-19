(function () {
    // 定义一个对象类型
    type myType = {
        name: string
        age: number
        // [propName: string]: any
    }

    /**
     * 接口用来定义一个类结构，也可以当成类型声明去使用
     */
    interface Person {
        name: string
        age: number
        dance(): void
    }

    // interface Person {
    //     gender: string
    // }

    const obj1: myType = {
        name: "fang",
        age: 18
    }

    const obj2: Person = {
        name: "fang",
        age: 18,
        dance() {
            console.log("跳舞666")
        }
    }

    // 实现接口
    class scallop implements Person {
        name: string
        age: number
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
        dance() {
            console.log(`scallop跳舞${this.name}`)
        }
    }
})()