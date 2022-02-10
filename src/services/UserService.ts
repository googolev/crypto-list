
import { db } from "../utils/firebase";
import { ref } from 'vue'
import PriceService from "./PriceService";
import { account } from '../utils/account'

import { collection, getDocs, setDoc, doc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import router from '../router'

const users = collection(db, 'users')

interface Token {
  symbol: string;
  name: string;
  logo_url: string;
  id: string;
}

interface User {
  address: string;
  watched_tokens: Array<Token>;
}

export const user = ref<User | any>(null)

class TutorialDataService {
  async getAll() {
    const querySnapshot = await getDocs(users);
    const docs: any[] = []
    querySnapshot.forEach((doc) => {
      docs.push({
        id: doc.id,
        data: doc.data()
      })
    });

    return docs;
  }

  async getByAddress(address: string) {
    const querySnapshot = await getDoc(doc(db, 'users', address))
    if (querySnapshot.exists()) {
      user.value = querySnapshot.data()
      return querySnapshot.data()
    } else {
      return Promise.reject(Error('No such document: ' + address ))
    }
  }

  async pushToken(token: Token, address: string) {
    const querySnapshot = doc(db, 'users', address)
    await updateDoc(querySnapshot, {
      watched_tokens: arrayUnion(token)
    })
    user.value.watched_tokens.push(token)
    await PriceService.loadTokenPrices()
  }

  async removeToken(token: Token) {
    const querySnapshot = doc(db, 'users', account.value.address)
    console.log(token)
    await updateDoc(querySnapshot, {
      watched_tokens: arrayRemove(token)
    })
    user.value.watched_tokens = user.value.watched_tokens.filter((watched_token) => {
      return watched_token.name !== token.name
    })

  }

  async register(address: string) {
    const querySnapshot = await getDoc(doc(db, 'users', address))
    router.push({name: 'WatchList'})
    if (querySnapshot.exists()) {
      return
    } else {
      const user = {
        address: address,
        watched_tokens: []
      }
      await setDoc(doc(db, 'users', address), user)
    }
  }

//   create(tutorial) {
//     return db.add(tutorial);
//   }

//   update(id, value) {
//     return db.doc(id).update(value);
//   }

//   delete(id) {
//     return db.doc(id).delete();
//   }
}

export default new TutorialDataService();