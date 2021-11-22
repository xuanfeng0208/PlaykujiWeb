import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css/normalize.css'
// import Axios  from 'axios'

// createApp(App).use(axios).mount('#app')
// var app = createApp(App)
// app.config.globalProperties.Axios = Axios
createApp(App).use(router).mount('#app')
// Vue.use(axios)