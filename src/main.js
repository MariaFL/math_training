import Vue from 'vue'
import App from './App.vue'
import AppStartScreen from './compomemts/StartScreen.vue'
import AppQuestion from './compomemts/Question.vue'
import AppMessage from './compomemts/Message.vue'
import AppResaultScreen from './compomemts/ResaultScreen.vue'

Vue.component('AppStartScreen', AppStartScreen);
Vue.component('AppQuestion', AppQuestion);
Vue.component('AppMessage', AppMessage);
Vue.component('AppResaultScreen', AppResaultScreen);

new Vue({
  el: '#app',
  render: h => h(App),
})

