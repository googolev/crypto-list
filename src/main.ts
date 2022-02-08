import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

declare global {
    interface Window {
        ethereum?: any;
    }
}

createApp(App).mount('#app')
