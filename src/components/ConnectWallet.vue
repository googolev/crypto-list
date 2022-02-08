<template>
  <button @click="handleConnectWallet" type="button" class="w-40 h-12 flex justify-start items-center p-2 bg-orange-200 hover:bg-orange-300 rounded-lg">
    <img src="~/../assets/images/metamask.svg" class="w-12 pr-4" />
    <span class="truncate w-24" v-if="!loading">
      {{account ? account.address : 'Connect'}}
    </span>
    <span v-if="loading" class="w-full">
      <img src="~/../assets/images/loading.gif" class="w-8 h-8 ml-5" />
    </span>
  </button>
</template>

<script setup>
import { account, getAccount } from '../utils/account'
import { network } from '../utils/network'
import { createNotification } from '../utils/notification'
import { ref } from 'vue'

let loading = ref(false)

const handleConnectWallet = async () => {
  if (typeof window.ethereum !== 'undefined') {
    loading.value = true
    await getAccount()
    loading.value = false
  } else if (typeof window.ethereum === 'undefined') {
    loading.value = false
    createNotification({ type: 'error', message: 'Please install MetaMask' })
  }
}
</script>
