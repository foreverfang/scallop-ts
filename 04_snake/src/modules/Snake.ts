// 定义一个蛇类
class Snake {
  // 表示蛇头的元素
  head: HTMLElement
  // 表示蛇的身体(包含蛇头)
  bodies: HTMLCollection
  // 获取蛇的容器
  element: HTMLElement

  constructor(){
    this.element = document.getElementById('snake')!

    this.head = document.querySelector("#snake>div") as HTMLElement

    this.bodies = this.element.getElementsByTagName('div')
  }

  // 获取蛇的坐标（蛇头的坐标）

  get X(){
    return this.head.offsetLeft
  }

  get Y(){
    return this.head.offsetTop
  }

  // 待完善
  set X(value: number){
    // 如果新值和就值相同，则不再修改
    if(this.X === value){
      return;
    }
    // X的范围是0-290 
    if (this.X < 0 || this.X > 290) {
      // 进入判断说明蛇撞墙了
      throw new Error("蛇撞墙了")
    }

    this.head.style.left = value + 'px'
  }

  set Y(value: number){
    if(this.Y === value){
      return;
    }

    // Y的范围是0-290 
    if (this.Y < 0 || this.Y > 290) {
      // 进入判断说明蛇撞墙了，抛出一个异常
      throw new Error("蛇撞墙了")
    }

    this.head.style.top = value + 'px'
  }

  // 设置蛇增加身体的方法（增加div）
  addBody(){
    /**
     * insertAdjacentHTML() 方法将指定的文本解析为 Element 元素，
     * 并将结果节点插入到DOM树中的指定位置。它不会重新解析它正在使用的元素，
     * 因此它不会破坏元素内的现有元素。这避免了额外的序列化步骤，
     * 使其比直接使用innerHTML操作更快
     * element.insertAdjacentHTML(position, text);
     * 向蛇的容器element中添加一个div
     * 'beforeend'：插入元素内部的最后一个子节点之后。
     */ 
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }
}

export default Snake