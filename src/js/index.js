import App from './App.vue';
import Home from './Home.vue';
import Sobre from './Sobre.vue';
import NotFound from './NotFound.vue';
import Bitcoin from './Bitcoin.vue';
import Login from './Login.vue';

const router = new VueRouter({
    routes:[
        { path:'/', component:Home },
        { path:'/login', component:Login },
        { path:'/sobre', component:Sobre },
        { path:'/bitcoin', component:Bitcoin},
        { path:'*', component:NotFound }
    ]
});

new Vue({
    el:'#app',
    router:router,
    render:h => h(App)
});