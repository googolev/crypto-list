<template>
  <div>
    <HeaderBar />
    <div class="flex">
      <SideBar />
      <div class="content flex-auto">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, onMounted, ref } from 'vue'
import { getAccount, account } from './utils/account'
import { user } from './services/UserService'

declare global {
    interface Window {
        ethereum?: any;
    }
}

onMounted(async () => {
  // setInterval(async () => {
  //   await PriceService.loadTokenPrices()
  // }, 30000)
})
const HeaderBar = defineAsyncComponent(
  () => import('./components/HeaderBar.vue')
)

const SideBar = defineAsyncComponent(
  () => import('./components/SideBar.vue')
)

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
