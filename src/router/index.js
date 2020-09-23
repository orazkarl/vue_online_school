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
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresNotAuth: true
        }

    }
];


const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!localStorage.getItem("auth_token")) {
            next({name: 'Login'})
        } else {
            next()
        }
    } else {
        next()
    }
    if (to.matched.some(record => record.meta.requiresNotAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (localStorage.getItem("auth_token")) {
            next({name: 'Home'})
        } else {
            next()
        }
    } else {
        next()
    }

})
export default router
