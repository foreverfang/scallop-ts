import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'

// 定义一个游戏控制器，控制其他所有类
class GameControl{
  // 定义三个属性
  // 蛇
  snake: Snake
  // 食物
  food: Food
  // 记分牌
  scorePanel: ScorePanel
  // 用来存储蛇的移动方向（也就是按键的方向）
  direction: string = ''

  // 记录游戏是否结束
  isLive = true

  constructor(){
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()

    this.init()
  }

  // 游戏初始化，调用后游戏开始
  init(){
    // this需要指向当前游戏控制器对象
    document.addEventListener("keydown", this.keydownHandler.bind(this))
    // 没有定时调用时，实际上蛇不会移动，因为初始化时，direction还没有值，有值也只会移动一次 
    // // 调用run方法，使蛇移动
    this.run()
  }

  /**
   * 上下左右按键的key值，在chrome和ie中不同
   * ArrowUp     Up
   * ArrowDown   Down
   * ArrowLeft   Left
   * ArrowRight  Right
   */ 
  // 创建一个键盘按下的响应函数
  keydownHandler(event: KeyboardEvent){
    // 需要判断event.key的值是否合法（是否按了正确的按键）

    // 修改direction属性
    // console.log(event.key)
    this.direction = event.key

    // // 这里调用run方法，蛇只会按一下动一下，与游戏设定不符
    // this.run()
  }

  // 创建一个控制蛇移动的方法
  run(){
    /**
     * 根据方向（this.direction）来使蛇的位置改变
     *    向上 top 减少
     *    向下 top 增加
     *    向左 left 减少
     *    向右 left 增加
     */

    // 获取蛇现在的坐标
    let X = this.snake.X
    let Y = this.snake.Y

    switch(this.direction) {
      case "ArrowUp":
      case "Up": 
        // 向上移动 top 减少
        Y-= 10
        break;
      case "ArrowDown":
      case "Down": 
        // 向下移动 top 增加
        Y+= 10
        break;
      case "ArrowLeft":
      case "Left": 
        // 向左移动 left 减少
        X -= 10
        break;
      case "ArrowRight":
      case "Right": 
       // 向左移动 left 增加
        X+= 10
        break;
    }

    // 检查蛇是否吃到了食物
    this.checkEat(X, Y)

    // 修改蛇的移动坐标 捕获蛇类抛出的异常
    try{
      this.snake.X = X
      this.snake.Y = Y 
    }catch(err){
      // 进入catch，说明出现了异常，游戏结束，弹出提示消息
      alert(err.message + 'GAME OVER')
      // 结束游戏
      this.isLive = false;
    }

    // 开启定时调用
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    
  }


  // 定义一个方法，用来检查蛇是否吃到食物
  checkEat(X: number, Y: number){
    if(X === this.food.X && Y === this.food.Y) {
      console.log("吃到食物了")
      // 食物的位置要进行重置
      this.food.change()
      // 分数增加
      this.scorePanel.addScore()
      // 蛇要增加一节
      this.snake.addBody()
    }
  }

}

export default GameControl