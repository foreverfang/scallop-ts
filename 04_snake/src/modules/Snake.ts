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
    this.head.style.left = value + 'px'
  }

  set Y(value: number){
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