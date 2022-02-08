<template>
    <div class="flex justify-end w-full p-4 bg-orange-100 shadow-md">
        <Search v-if="isLogined" class="mr-4" />
        <ConnectWallet />
    </div>
</template>

<script>
import ConnectWallet from './ConnectWallet.vue'
import Search from './Search.vue'
import { account } from '../utils/account'


export default {
    components: {
        ConnectWallet,
        Search,
    },
    computed: {
        isLogined() {
            return account.value && account.value.address
        }
    }
}
</script>