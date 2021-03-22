import Vue from "vue";
import VueRouter from 'vue-router';
import ProductCreate from './components/product/ProductCreate.vue';
import ProductEdit from './components/product/ProductCreate.vue';
import ProductDetails from './components/product/ProductCreate.vue';
import ProductList from './components/product/ProductCreate.vue';
import Login from './components/user/Login.vue';
import Register from './components/user/Register.vue';
import Home from './components/home/Home.vue';
import NotFound from './components/core/NotFound.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/product', component: ProductList },
    { path: '/product/create', component: ProductCreate },
    { path: '/product/edit/:id', component: ProductEdit },
    { path: '/product/:id', component: ProductDetails },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/:notFound(.*)', component: NotFound }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;