import Vue from "vue";
import App from "./App.vue";
import Store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import Bootstrap from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

// plugins and mixins
Vue.use(Bootstrap);
Vue.use(VueAxios, axios);

new Vue({
	store: Store,
	render: h => h(App)
}).$mount("#app");
