// 定义食物类 Food
class Food{
  element: HTMLElement

  constructor(){
    // "!" 表示不会为空
    this.element = document.getElementById('food')!
  }

  /**
   * offsetLeft  当前元素左上角相对于  HTMLElement.offsetParent 节点的左边界偏移的像素值
   * 设置了position属性值，只要不为static,那么offsetParent就是父元素，否则就是body
   */
  // 定义一个获取食物X轴坐标的方法
  get X(){
    return this.element.offsetLeft
  }

  // 定义一个获取食物Y轴坐标的方法
  get Y(){
    return this.element.offsetTop
  }

  // 修改食物位置
  change(){
    // 生成随机位置 注意范围
    // 食物的位置，X和Y轴偏移范围一致：最小0 最大 300 - 10 = 290
    // 蛇移动一次就是一格，一格大小就是10，所以食物的坐标必须是10的整数倍
    // 可扩展性 不一定是29  
    const left = Math.round(Math.random() * 29) * 10 
    const top = Math.round(Math.random() * 29) * 10 

    this.element.style.left = left + "px"
    this.element.style.top = top + "px"
  }
}

export default Food