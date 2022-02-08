import { CurrentNetwork, Transaction } from '../interfaces/Network'
import { ref } from 'vue'
import { web3, fromWei, toWei, fromWeiToGwei } from './web3'
import { ACCEPT_NETWORK } from '../constants/network'
import { getAccount, updateBalance } from './account'
import { createNotification } from '../utils/notification'
import { TransactionReceipt } from 'web3-core'

export const network = ref<CurrentNetwork | null>(null)

export const transaction = ref<Transaction>({
  from: '',
  to: '',
  value: '',
  txProcessing: false
})

// export const sendTransaction = async ({ from, to, value }:Transaction):Promise<TransactionReceipt> => {
//   const expectedBlockTime = 1000
//   transaction.value = {
//     from,
//     to,
//     value,
//     txProcessing: true
//   }
//   return await web3.eth.sendTransaction({
//     from: from,
//     to: to,
//     value: toWei(value, 'ether')
//   } as Transaction, async (err, transactionHash) => {
//     if (err) {
//       transaction.value.txProcessing = false
//       createNotification({ type: 'error', message: err.message })
//     } else {
//       transaction.value.hash = transactionHash
//       let transactionReceipt:TransactionReceipt = null
//       while (transactionReceipt == null) {
//         transactionReceipt = await web3.eth.getTransactionReceipt(transactionHash)
//         await new Promise(resolve => setTimeout(resolve, expectedBlockTime))
//       }
//       transaction.value.txProcessing = false
//       createNotification({ type: 'success', message: `Tx #${transactionHash} confirmed` })
//       await updateBalance()
//     }
//   })
// }
