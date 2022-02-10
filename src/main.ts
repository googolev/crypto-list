import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'

declare global {
    interface Window {
        ethereum?: any;
    }
}

createApp(App).use(router).mount('#app')
