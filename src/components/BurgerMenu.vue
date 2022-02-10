<template>
    <div style="margin-right: auto;" class="relative block sm:hidden">
        <span class="inline-flex items-center justify-center h-12 w-12 text-2xl text-gray-400">
            <i class="bx bx-menu" @click="toggleMenu"></i>
        </span>
        <div v-if="open">
            <div class="absolute top-10 left-0 flex flex-col w-56 bg-orange-100 overflow-hidden" @click="toggleMenu">
                <ul class="flex flex-col py-4">
                <li>
                    <router-link :to="{name: 'WatchList'}" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
                    <span class="text-sm font-medium">Watch list</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'Instruction'}" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-book-open"></i></span>
                    <span class="text-sm font-medium">Instruction</span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'UpcomingIDO'}" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                    <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-sitemap"></i></span>
                    <span class="text-sm font-medium">IDO Aggregator</span>
                    </router-link>
                </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            open: false,
        }
    },
    methods: {
        toggleMenu() {
            this.open = !this.open
        }
    }
})
</script>
