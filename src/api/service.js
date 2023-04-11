import { db } from '../firebase'
import { 
    collection, 
    onSnapshot, 
    updateDoc, 
    addDoc, 
    doc, 
    serverTimestamp 
} from 'firebase/firestore'

const todoItemCollectionRef = collection(db, 'todo-item')

export const onTodoItemSnapshot = (onUpdateFn) => {
    return onSnapshot(todoItemCollectionRef, querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data(),
            }
        }).sort((a, b) => a.created_at > b.created_at ? 1 : -1)

        onUpdateFn(data);
    })
}

export const updateTodoItem = async (id, done, filed) => {
    const todoItemDoc = doc(db, 'todo-item', id)

    await updateDoc(todoItemDoc, {
        done: done,
        filed: filed
    })
}

export const addTodoItem = async (itemDescription, userUid) => {
    const todoItem = {
        created_at: serverTimestamp(),
        description: itemDescription,
        done: false,
        filed: false,
        user_ui: userUid,
    }

    await addDoc(todoItemCollectionRef, todoItem)
}