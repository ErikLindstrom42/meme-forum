import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { auth } from "./firebase";

Vue.config.productionTip = false;

let userLoaded = false;

auth.onAuthStateChanged(() => {
  if (!userLoaded) {
    new Vue({
      router,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
    userLoaded = true;
  }
})

// new Vue({
//   router,
//   vuetify,
//   render: h => h(App)
// }).$mount("#app");
