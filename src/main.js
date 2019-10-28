import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";
import Vue from "vue";
import store from "./store";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
