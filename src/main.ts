import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// @ts-ignore
import installElementPlus from './plugins/element'
import '/public/index.css'
// @ts-ignore
const app = createApp(App)
installElementPlus(app)
app.use(store).use(router).mount('#app')
