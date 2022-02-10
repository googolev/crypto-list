<template>
    <div>
        <div class="relative w-56">
            <input type="text" class="border border-orange-500 rounded p-2 text-lg" @input="handleSearch" v-model="query" placeholder="Search..."/>
            <ul class="results absolute b-0 rounded overflow-hidden shadow-md" v-if="coins.length">
                <li>Results: {{coins.length}}</li>
                <li v-for="coin in coins" :key="coin.name" class="flex hover:bg-orange-400 p-2 cursor-pointer" @click="handlePushToken(coin)">
                    <img :src="coin.logo_url" class="w-6 h-6 mr-2"/>{{ coin.name }} ({{coin.symbol}})
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { debounce } from 'lodash'
import SearchService from '../services/SearchService'
import { search_result } from '../services/SearchService'
import { account } from '../utils/account'
import UserService from '../services/UserService'
import { user } from '../services/UserService'


export default defineComponent({
    data() {
        return {
            query: ''
        }
    },
    computed: {
        coins() {
            return search_result.value
        }
    },
    methods: {
        handleSearch: debounce(async function(e: any){
            if (e.target.value && e.target.value.length >= 2) {
                await SearchService.searchToken(e.target.value)
            }
            if (!e.target.value) {
                search_result.value = []
            }
        }, 500),

        async handlePushToken (coin) {
            if (user.value.watched_tokens.filter(token => token.id === coin.id).length === 0) {
                await UserService.pushToken(
                {
                    id: coin.id,
                    symbol: coin.symbol,
                    name: coin.name,
                    logo_url: coin.logo_url
                },
                account.value.address
                )
                this.query = ''
                search_result.value = []
            }
        }
    }
})
</script>

<style lang="css" scoped>
    .results {
        z-index: 100;
        position: absolute;
        width: inherit;
        text-align: left;
        background: wheat;
        max-height: 240px;
        overflow-y: auto;
    }
</style>
