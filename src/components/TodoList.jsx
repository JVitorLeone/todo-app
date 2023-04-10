import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, onSnapshot, updateDoc, doc } from 'firebase/firestore'
import TodoItem from './TodoItem'

const TodoList = () => {
    const [todoItems, setTodoItems] = useState([])
    const todoItemCollectionRef = collection(db, 'todo-item')

    useEffect(() => {
        const subscribe = onSnapshot(todoItemCollectionRef, querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    }
                })

                setTodoItems(data)
            })

        return () => subscribe()
    }, [])

    const handleUpdate = async (todoItem) => {
        const todoItemDoc = doc(db, 'todo-item', todoItem.id)
        await updateDoc(todoItemDoc, {
            done: todoItem.done,
            filed: todoItem.filed
        })
    }

    return (
        <ul>
            { todoItems.map((item, index) => {
                return (
                    <TodoItem 
                        key={ index }
                        value={ item } 
                        onUpdate={ handleUpdate }
                    />
                )
            })}
        </ul>
    )
}

export default TodoList
