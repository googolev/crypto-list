<template>
    <div class="flex flex-col relative w-64 bg-orange-200 p-4 m-4 rounded-md shadow-md"
        @click.stop="onClick"
        @mouseover="showButtons = true"
        @mouseleave="handleHideButtons">
        <router-link :to="{name: 'Token', params: {id: coin.id}}">
            <div class="flex w-56">
                <div class="flex flex-col w-1/3">
                    <img class="w-16 h-16" :src="coin.logo_url"/>
                </div>
                <div class="flex flex-col items-end w-2/3 justify-start">
                    <div class="text-2xl font-bold">{{price}}$</div>
                    <div class="change" :class="change >= 0 ? 'long' : 'short'" v-if="change">{{change}}%</div>
                </div>
            </div>
            <div class="pt-2 text-left">{{coin.name}} <b>({{coin.symbol}})</b></div>
        </router-link>
        
        <div class="remove absolute cursor-pointer bg-orange-400 rounded-full" @click="handleRemoveToken">
            <i class="bx bx-x text-xl"></i>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, defineEmits } from 'vue'
import PriceService from '../services/PriceService'
import { pricesMap } from '../services/PriceService'
import UserService from '../services/UserService'

export default defineComponent({
    props: {
        coin: {
            type: Object,
            required: true
        }
    },
    emits: ['click'],
    setup(props, { emit }) {
        return {
            onClick () {
                emit('click')
            }
        }
    },
    computed: {
        price() {
            return pricesMap.value[this.coin.id] && pricesMap.value[this.coin.id].price
        },
        change() {
            return pricesMap.value[this.coin.id] && pricesMap.value[this.coin.id].change
        }
    },
    methods: {
        async handleRemoveToken() {
            await UserService.removeToken(this.coin)
        }
    }
})
</script>

<style lang="css" scoped>
    .remove {
        width: 25px;
        height: 25px;
        right: -10px;
        top: -10px;
    }

    .remove i {
        position: relative;
        bottom: 2px;
    }

    .change.long {
        color: green;
    }

    .change.short {
        color: red;
    }
</style>
