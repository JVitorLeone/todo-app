import { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const TodoList = () => {
    const { user } = UserAuth()
    const [itemDescription, setItemDescription] = useState('')
    const todoItemCollectionRef = collection(db, 'todo-item')

    const handleNewItem = async () => {
        const todoItem = {
            created_at: serverTimestamp(),
            description: itemDescription,
            done: false,
            filed: false,
            user_ui: user.uid,
        }

        await addDoc(todoItemCollectionRef, todoItem)
        setItemDescription('')
    }

    return (
        <div>
            <input
                type="text"
                id="new_item"
                placeholder="Novo item"
                value={ itemDescription }
                onChange={ (e) => setItemDescription(e.target.value) }
            />
            <button 
                id="new_item_button"
                onClick={ handleNewItem } 
            >
                +
            </button>
        </div>
    )
}

export default TodoList
