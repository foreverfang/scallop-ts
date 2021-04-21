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
    // // 这里调用run方法，使蛇移动，但实际上不会移动，因为初始化时，direction还没有值 
    // this.run()
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

    // 修改蛇的移动坐标
    this.snake.X = X
    this.snake.Y = Y 
    
  }
}

export default GameControl