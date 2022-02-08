<template>
  <div>
    <HeaderBar />
    <div class="flex">
      <SideBar />
      <div class="content flex-auto">
        <div class="flex w-full flex-wrap" v-if="user && user.watched_tokens.length">
            <Coin v-for="coin in user.watched_tokens" :key="coin.symbol" :coin="coin"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, onMounted, ref } from 'vue'
import { getAccount, account } from './utils/account'
import UserService from './services/UserService'
import PriceService from './services/PriceService'
import { user } from './services/UserService'

declare global {
    interface Window {
        ethereum?: any;
    }
}

// interface User {
//   address: string,
//   coins: [string]
// }

const handleGetUser = async () => {
    await UserService.getByAddress(account.value.address)
}

const handleGetPrice = async () => {
  await PriceService.loadTokenPrices()
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

const Coin = defineAsyncComponent(
  () => import('./components/Coin.vue')
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
