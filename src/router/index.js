import Vue from 'vue'
import VueRouter from 'vue-router'
import goods from '../views/goods.vue'
import demo from '../views/demo.vue'
import outIn from '../views/outIn.vue'
import all from '../views/all.vue'

Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/demo"
}, {
    path: "/demo",
    name: "demo",
    component: demo,
    children: [{
            path: "/goods",
            name: "goods",
            component: goods
        },
        {
            path: "/outIn",
            name: "outIn",
            component: outIn
        }, {
            path: "/all",
            name: "all",
            component: all
        }, {
            path: "/goods",
            name: "goods",
            component: goods
        }
    ]
}]

const router = new VueRouter({
    routes
})

export default router