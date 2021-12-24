import App from './App.vue';
import Home from './Home.vue';
import Sobre from './Sobre.vue';
import NotFound from './NotFound.vue';
import Bitcoin from './Bitcoin.vue';
import Login from './Login.vue';
import Sair from './Sair.vue';

const router = new VueRouter({
    routes:[
        { path:'/', name:'home', component:Home },
        { path:'/login', name:'login', component:Login },
        { path:'/sair', name:'sair', component:Sair },
        { path:'/sobre', name:'sobre', component:Sobre },
        { path:'/bitcoin', name:'bitcoin', component:Bitcoin},
        { path:'*', component:NotFound }
    ]
});

new Vue({
    el:'#app',
    router:router,
    render:h => h(App)
});