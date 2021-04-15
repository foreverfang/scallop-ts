// import { hi } from './m.js'
console.log('src/index.ts')
let a223 = 18
console.log(a223)

// document.getElementById('id')

// a223 = "fang"

enum Person {
    male = 1,
    female = 2
}

// 隐式的any类型
function fn1(a, b) {
    return a + b
}

// 不明确类型的this
function fn2() {
    // console.log(this)
}

// tsconfig.json 配置strictNullChecks为true，可以检查null的情况
const box1 = document.getElementById("box1")
box1?.addEventListener('click', function () {
    console.log('click')
})