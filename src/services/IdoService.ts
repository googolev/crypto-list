import { ref } from 'vue'
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

export const upcomingIDO = ref<any>([])

class IdoService {
    async loadUpcomingIDO() {
        const ido = collection(db, 'ido')
        const querySnapshot = await getDocs(ido);
        const docs: any[] = []
        querySnapshot.forEach((doc) => {
            docs.push(doc.data())
        });

        upcomingIDO.value = docs;
    }
}

export default new IdoService();