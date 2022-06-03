import VueRouter from "vue-router";
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Details from "../pages/Details";

export default new VueRouter({
        routes: [
            {
                name: "about",
                path: "/about",
                component: About
            },
            {
                path: "/home",
                component: Home,
                children: [
                    {
                        path: "news",
                        component: News
                    },
                    {
                        path: "message",
                        component: Message,
                        children:[
                            {
                                name: "details",
                                path: "details",
                                component:Details
                            }
                        ]
                    }
                ]
            }
        ]
    }
)