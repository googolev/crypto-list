import { ref } from 'vue'
import { user } from './UserService'
import axios from '../utils/axios'

export const pricesMap = ref<any>({})
const CRYPTOCOMPARE_API_KEY = '4d3dc4e619e6c02f733c57231ae8ce7f3f2843bcb938662a24e629d2e4bfedca'
const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3'
// https://min-api.cryptocompare.com/data/pricemulti?fsyms=${symbols}&tsyms=USD&api_key=${CRYPTOCOMPARE_API_KEY}

class PriceService {
    async loadTokenPrices() {
        let symbols = ''
        user.value.watched_tokens.forEach((token: any) => {
            symbols += `${token.id},`
        })
        const response = await axios.get(`${COINGECKO_API_URL}/simple/price?ids=${symbols}&vs_currencies=usd&include_24hr_change=true`)
        for (const id in response) {
            pricesMap.value[id] = {
                price: response[id].usd,
                change: response[id].usd_24h_change ? response[id].usd_24h_change.toFixed(2) : null
            }
        }
        console.log(pricesMap.value)
    }

    async loadTokenPrice(id: string) {
        const response = await axios.get(`${COINGECKO_API_URL}/coins/markets?vs_currency=usd&ids=${id}`)
        return response[0]
    }
}

export default new PriceService();