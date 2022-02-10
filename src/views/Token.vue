<template>
    <div>
        <div v-if="tokenInfo">
            <img :src="tokenInfo.image" class="w-64" />
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import PriceService from '../services/PriceService'

export default defineComponent({
    name: 'Instruction',
    data() {
        return {
            tokenInfo: null
        }
    },
    computed: {
        token() {
            return this.$route.params?.id
        }
    },
    async mounted() {
        this.tokenInfo = await PriceService.loadTokenPrice(this.token)
    }
})
</script>