import VueRouter from "vue-router";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Details from "../pages/Details";

const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
}

const router = new VueRouter({
        mode: "history",
        routes: [
            {
                name: "about",
                path: "/about",
                component: About
            },
            {

                name: "home",
                path: "/home",
                component: Home,
                children: [
                    {
                        meta: {isAuthorization: true},
                        name: "news",
                        path: "news",
                        component: News,
                        /*
                        独享路由守卫
                        通过路由即将进入该组件时调用*/
                        beforeEnter(to,from,next){
                            if (to.meta.isAuthorization) {
                                if (localStorage.username === "mouk") {
                                    next()
                                } else {
                                    alert("用户名错误！")
                                }
                            } else {
                                next()
                            }
                        }
                    },
                    {
                        meta: {
                            isAuthorization: true
                        },
                        name: "message",
                        path: "message",
                        component: Message,
                        /*
                        独享路由守卫
                        通过路由即将进入该组件时调用*/
                        /*beforeEnter(to,from,next){
                            if (to.meta.isAuthorization) {
                                if (localStorage.username === "mouk") {
                                    next()
                                } else {
                                    alert("用户名错误！")
                                }
                            } else {
                                next()
                            }
                        },*/
                        children: [
                            {
                                name: "details",
                                /*发送params参数需要提前在路由中声名占位符接收*/
                                // path: "details/:id/:title",
                                path: "details",
                                component: Details,
                                //使用对象的方式传递（只能传死数据）
                                /*props:{id:"001",title:"message1"}*/
                                //使用布尔值的方式传递，将params以props的方式传递到路由中（不能传递query参数）
                                // props:true
                                //使用函数的方式传递,函数能接收到当前的路由$route,返回值将作为props传递给路由
                                //该方法能传递query,params参数
                                /*props(route){
                                    return {
                                        id: route.params.id,
                                        title:route.params.title
                                    }
                                }*/
                                props(route) {
                                    return {
                                        id: route.query.id,
                                        title: route.query.title
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
)

//前置路由守卫
//进入路由组件之前调用
/*router.beforeEach((to, from, next) => {
    if (to.meta.isAuthorization) {
        if (localStorage.username === "mouk") {
            next()
        } else {
            alert("用户名错误！")
        }
    } else {
        next()
    }

});*/

//后置路由守卫
//进入路由组件之后调用
router.afterEach((to) => {
    document.title = to.name
})

export default router