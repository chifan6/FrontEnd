$(function () {

    //将下拉菜单显示
    $("[name=show_hide]").hover(function () {
        $(this).children(":last").show()
    }, function () {
        $(this).children(":last").hide()
    })

    //所有商品分类下面的对应分类显示菜单
    $("[class=cate_item]").hover(function () {
        $(this).children(":last").show()
    }, function () {
        $(this).children(":last").hide()
    })

    //搜索框
    //focus  获得焦点
    $("#txtSearch").on("keyup focus", function () {
        var txt = $(this).val().trim()
        if (txt) {
            $("#search_helper").show()
        }
        //blur   失去焦点
    }).blur(function () {
        $("#search_helper").hide()
    })

    //迷你购物车
    $("#minicart").hover(function () {
        $(this).addClass("minicart").children(":last").show()
    }, function () {
        $(this).removeClass("minicart").children(":last").hide()
    })

    //分享按钮
    shareMore()

    function shareMore() {
        let isOpen = false
        let $as = $("#dd > a[style]")
        let $dd = $("#dd")
        $("#shareMore").click(function () {
            let $b = $(this).children()
            if (isOpen) {
                $b.removeClass("backword")
                $dd.css("width", 155)
                $as.hide()
            } else {
                $b.addClass("backword")
                $dd.css("width", 200)
                $as.show()
            }
            isOpen = !isOpen
        })
    }

    //显示地址信息
    store_select()

    function store_select() {
        $("#store_select").hover(function () {
            $(this).children(":gt(0)").show()//当前的this是store_select下面的div
        }, function () {
            $(this).children(":gt(0)").hide()
        }).children(":last").click(function () {
            $(this).parent().children(":gt(0)").hide()//当前的this是关闭的那个❌
        })
    }

    //地址信息标签
    store_tabs()

    function store_tabs() {
        let index = 0
        let $lis = $("#store_tabs > li")
        //console.log($lis[0])
        $("#store_tabs > li").click(function () {
            let $target = $(this).index()
            if ($target != index) {
                this.className = "hover"
                $lis[index].className = ""
                index = $target

            }
        })
    }

    //产品细节
    product_detail()

    function product_detail() {
        let $lis = $("#product_detail > ul > li")
        let $contents = $("#product_detail > div:gt(0)")
        $lis.click(function () {
            $lis.removeClass('current')
            $(this).addClass('current')
            $contents.hide()
            //将所有的div给隐藏
            let index = $(this).index()
            //显示所有的div
            $contents.eq(index).show()
        })
    }


    //移动小图片
    SmallPhoto()

    function SmallPhoto() {
        let $as = $("#preview > h1 > a")
        //向左的图标
        let $backward = $as.first()
        //向右的图标
        let $forward = $as.last()
        //获取全部的ul
        let $Ul = $("#icon_list")
        //设置默认显示有五张图片
        const SHOW_COUNT = 5
        //获取一共有多少张图片
        const imgCount = $Ul.children().length
        let moveCount = 0
        //获取一张图片有多宽
        let liWidth = $Ul.children(":first").width()


        if (imgCount > SHOW_COUNT) {
            $forward.attr("class", "forward")
        }
        //点击向右移动进行的操作
        $forward.click(function () {
            $backward.attr("class", "backward")
            if (moveCount === imgCount - SHOW_COUNT) {
                return
            }
            moveCount++
            if (moveCount === imgCount - SHOW_COUNT) {
                $forward.attr("class", "forward_disabled")
            }
            $Ul.css({
                left: -moveCount * liWidth
            })
        })

        //点击向左移动进行的操作
        $backward.click(function () {
            $forward.attr("class", "forward")
            if (moveCount === 0) {
                return
            }
            moveCount--
            if (moveCount === 0) {
                $backward.attr("class", "backward_disabled")
            }
            $Ul.css({
                left: -moveCount * liWidth
            })
        })
    }

    //鼠标经过小图片切换对应的大图片
    hoverMiniPhot()

    function hoverMiniPhot() {
        //获取到经过该变的小图片
        let $lists = $("#icon_list > li > img")
        let $bigPhot = $("#mediumImg")
        $lists.hover(function () {
            this.className = "hoveredThumb"
            //获取到中图片的路径
            let newSrc = $(this).attr("src").replace(".jpg", "-m.jpg")
            //将获取的到的中图片设置为当前显示的新图片
            $bigPhot.attr('src', newSrc)
        }, function () {
            this.className = ""
        })
    }

    //大图片
    bigImg()

    function bigImg() {
        //获取中图片的src
        let $mediumImg = $("#mediumImg").attr("src")
        //获取小黄块
        let $mask = $("#mask")
        //获取悬于中图片上的透明图层
        let $maskTop = $("#maskTop")
        //获取正在加载的图片
        let $loading = $("#loading")
        //获取大图片
        let $largeImg = $("#largeImg")
        //获取展示大图的框
        let $largeImgContainer = $("#largeImgContainer")
        //获取到小黄块的宽度
        let $maskWidth = $mask.width()
        //获取到小黄块的高度
        let $maskHeigth = $mask.height()
        //获取中图片的宽度
        let maskTopWidth = $maskTop.width()
        //获取中图片的高度
        let maskTopHeigth = $maskTop.height()

        $maskTop.hover(function (event) {
            ///显示小黄块
            $mask.show()
            //显示加载中得圈圈
            $loading.show()
            //显示大图片
            $largeImgContainer.show()
            //设置大图片的路径
            let src = $mediumImg.replace("-m", "-l")
            $largeImg.attr("src", src)
            $largeImg.on("load", function () {
                $loading.hide()
                //获取大图的尺寸
                let largeWidth = $largeImg.width()
                let largeHeigth = $largeImg.height()
                // 设置展示大图的框
                $largeImgContainer.css({
                    width: largeWidth / 2,
                    height: largeHeigth / 2
                })
                $largeImg.show()

                $maskTop.mousemove(function (event) {
                    //获取到当前的坐标然后除去小黄块的一半的宽度既可以将鼠标设置到小黄块中间
                    let left = event.offsetX - $maskWidth / 2
                    let top = event.offsetY - $maskHeigth / 2
                    //如果小黄块移动到了0则一直将小黄块的坐标设置为0不能为负数
                    if (left < 0) {
                        left = 0
                        //将中图片的宽度减去小黄块的宽度就可以得到移动的最大的位置
                        //如果小黄块超出了最大的位置立即把位置设置为最大的位置
                    } else if (left > maskTopWidth - $maskWidth) {
                        left = maskTopWidth - $maskWidth
                    }
                    if (top < 0) {
                        top = 0
                    } else if (top > maskTopHeigth - $maskHeigth) {
                        top = maskTopHeigth - $maskHeigth
                    }

                    $mask.css({
                        left: left,
                        top: top
                    })

                    //开始移动大图
                    //获取到大图片的位置
                    //大图片的尺寸除以中图片的尺寸然后乘以小黄块的坐标就得到移动得坐标
                    let largImgLeft = -left * largeWidth / maskTopWidth
                    let largImgTop = -top * largeHeigth / maskTopHeigth
                    $largeImg.css({
                        left: largImgLeft,
                        top: largImgTop
                    })
                })

            })
        }, function () {
            //隐藏小黄块
            $mask.hide()
            //隐藏展示的大图片
            $largeImgContainer.hide()
        })
    }
})