import axios from '../utils/axios'
import { ref } from 'vue'

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3'

export const search_result = ref<any>([])

interface SearchTokenResponse {
    categories: Array<any>,
    coins: Array<any>,
    exchanges: Array<any>
}

class SearchService {
    async searchToken(query: string) {
        const response: SearchTokenResponse = await axios.get(`${COINGECKO_API_URL}/search?query=${query}`)
        console.log(response)
        search_result.value = response.coins.map(coin => {
            return {
                id: coin.id,
                logo_url: coin.large,
                name: coin.name,
                symbol: coin.symbol,
                price: '-'
            }
        })
        console.log(search_result.value)
    }
}

export default new SearchService();