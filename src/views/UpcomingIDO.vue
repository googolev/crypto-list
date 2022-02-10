<template>
    <div>
        <h1 class="font-bold m-4 text-2xl">UPCOMING IDO</h1>
        <ul>
            <li v-for="ido in upcomingIDO" :key="ido.ticker + ido.provider" class="flex flex-col sm:flex-row justify-center items-center sm:items-start bg-orange-200 rounded p-4 m-4 shadow-md">
                <img :src="ido.image" class="w-24" style="height: fit-content" />
                <ul class="text-left ml-4 w-full">
                    <li class="text-xl mb-4">{{ido.name}} <b>({{ido.symbol}})</b></li>
                    <li>Platform Link:  <a class="text-orange-400" :href="ido.url" target="_blank">{{ido.provider}}</a></li>
                    <li v-for="(value, key, index) in ido.data" :key="index" class="pt-1 pb-1" style="border-top: 1px solid gray;">
                        <span class="capitalize font-bold">{{key.replace(/_/g, ' ') }}:</span> {{value}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import IdoService from '../services/IdoService'
import { upcomingIDO } from '../services/IdoService'
import { defineAsyncComponent, onMounted, ref } from 'vue'

onMounted(async () => {
    await IdoService.loadUpcomingIDO()
})
</script>
