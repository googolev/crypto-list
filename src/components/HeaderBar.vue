<template>
    <div class="flex justify-end w-full p-4 bg-orange-100 shadow-md">
        <BurgerMenu />
        <Search v-if="isLogined" class="mr-4" />
        <ConnectWallet />
    </div>
</template>

<script>
import ConnectWallet from './ConnectWallet.vue'
import Search from './Search.vue'
import BurgerMenu from './BurgerMenu.vue'
import { account } from '../utils/account'


export default {
    components: {
        ConnectWallet,
        BurgerMenu,
        Search,
    },
    computed: {
        isLogined() {
            return account.value && account.value.address
        }
    }
}
</script>