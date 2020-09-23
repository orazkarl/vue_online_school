import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DetailCourse from '../views/DetailCourse.vue'
import Login from "../views/Profile/Login.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/course/:id',
        name: 'DetailCourse',
        component: DetailCourse,
        props: true,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,

    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router
