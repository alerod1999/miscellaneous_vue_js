

import { createApp } from 'vue'

import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { routes } from './routes';
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })
createApp(App).use(router).mount('#app')
