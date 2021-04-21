// 定义记分牌的类
class ScorePanel {
  // 用来记录分数和等级
  score = 0
  level = 1

  // 分数和等级所在的元素，在构造函数中进行初始化
  scoreEle: HTMLElement
  levelEle: HTMLElement

  // 设置一个变量 限制等级 默认10级
  maxLevel: number

  // 设置一个变量 表示多少分时升级 默认10分
  upScore: number

  constructor(maxLevel: number = 10, upScore: number = 10){
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('score')!

    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  // 设置一个加分方法
  addScore(){
    // 分数自增，innerHTML接收字符串
    this.scoreEle.innerHTML = ++this.score + ''
    // 判断分数是多少
    if (this.level % this.upScore === 0){
      // 默认每10分升一级
      this.levelUp()
    }
  }

  // 设置等级提升的方法
  levelUp(){
    // 限制最高等级
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + ''
    }
  }
}

export default ScorePanel