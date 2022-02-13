$(function () {
    //获取上一个切换图标
    let $prev = $("#prev")
    //获取下一个切换图标
    let $next = $("#next")
    //获取图片div
    let $container = $("#container")
    //获取所有圆点
    let $points = $("#pointsDiv > span")
    //获取图片列表
    let $list = $("#list")
    //设置偏移量
    const PAGE_WIDTH = 600
    //设置移动时间
    const Time = 400
    //设置单元移动间隔时间
    const ITEM_TIME = 20
    //获取当前圆点的个数也可以当作有多少张图片
    let imgCount = $points.length
    //当前下标
    let index = 0
    //目标下标
    let targetIndex = 0
    //默认翻页动作为false
    let moving = false

    $prev.click(function () {
        //点击后将nextpage设置为true
        nextpage(true)
    })
    $next.click(function () {
        //点击后将nextpage设置为false
        nextpage(false)
    })
    //设置自动翻转的定时器
    let IntervalID = setInterval(function (){
        nextpage(false)
    },2000)
    //设置鼠标经过后将定时器关闭，鼠标移开将IntervalID重新设置自动翻转定时器
    $container.hover(function (){
            clearInterval(IntervalID)
        },function (){
            IntervalID = setInterval(function (){
                nextpage(false)
            },2000)
        })
    //点击圆点图标切换到对应的页
    $points.click(function (){
        let targetIndex = $(this).index()
        console.log('点击的圆点下标：'+targetIndex)
        //判断点击的圆点下标是否是当前的小标，如果不是则切换，如果是则不切换
        if (targetIndex != index){
            nextpage(targetIndex)
        }
    })
    function nextpage(next) {
        //moving为true，结束当前函数
        if (moving){
            return
        }
        moving = true //为true说明正在翻页
        //获取当前list的left偏移量并取整因为浏览器的left并没有准确到整数位
        let currLeft = parseInt($list.position().left)
        //总的偏移量
        let offset = 0
        //next 可能是boolean也可能是数值
        if (typeof next === "boolean"){
            //判断图片向左和向右的+-
            offset = next ? PAGE_WIDTH : -PAGE_WIDTH
        } else {
            //当next是数值时被传过来的next为目标的下标
            offset = -(next - index) * PAGE_WIDTH
        }
        //获取目标left
        let targetLeft = currLeft + offset
        //设置单元移动偏移量
        let itemoffset = offset / (Time / ITEM_TIME)
        //设置定时器
        let IntervalId = setInterval(function () {
            //计算出最新的left
            currLeft += itemoffset
            //判断当前位置是否到达目标位置
            if (currLeft === targetLeft) {
                //关闭定时器
                clearInterval(IntervalId)
                //翻页结束，将moving设置为未在翻页的状态
                moving = false
                //如果到达最后一张1.jpg则修改life
                if (currLeft === (imgCount+1) * offset){
                    currLeft = -PAGE_WIDTH
                //如果到达第一张5.jpg则修改left
                }else if (currLeft === 0){
                    currLeft = -imgCount * offset
                }
                console.log(currLeft)
            }
            //设置left
            $list.css("left", currLeft)
            //console.log('当前的left：'+currLeft)
        }, ITEM_TIME)
        //到达目的点后更新圆点
        updataPoints(next)
    }
    //更新圆点
    function updataPoints(next) {
        //next 可能是boolean也可能是数值
        if (typeof next === "boolean"){
            //如果next是false则向右翻转
            if (next){
                //目标地址减1
                targetIndex = index - 1
                //如果目标地址超出了最小的圆点数则将目标地址设置成最后一个圆点
                if (targetIndex === -1){
                    targetIndex = imgCount - 1
                }
            }else{
                //目标地址加1
                targetIndex = index + 1
                //如果目标的值超出了圆点的下标5，则将目标的值设置成0
                if (targetIndex === imgCount){ //imgCOunt=5
                    targetIndex = 0
                }
            }
        }else {
            //目标的下标则就是next传过来的下标直接用来切换就行
            targetIndex = next
        }


        //删除圆点的class属性，然后给下一个圆点添加class属性
        $points.eq(index).removeClass("on")
        $points.eq(targetIndex).addClass("on")
        //将原本的index圆点设置成当前的圆点
        index = targetIndex;

    }
})