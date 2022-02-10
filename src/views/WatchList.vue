<template>
    <div class="flex w-full flex-wrap" v-if="user && user.watched_tokens.length">
        <Coin v-for="coin in user.watched_tokens" :key="coin.symbol" :coin="coin"/>
    </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { user } from '../services/UserService'

const Coin = defineAsyncComponent(
    () => import('../components/Coin.vue')
)
</script>