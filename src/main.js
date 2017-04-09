import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import index from './components/index.vue';
Vue.prototype.$http = axios;
Vue.use(VueRouter);
const routes = [
	{
		path:'/index',
		component:index,
	}
];
const router = new VueRouter({
	routes
})
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
