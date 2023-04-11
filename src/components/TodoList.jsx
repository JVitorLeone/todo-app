import { useState, useEffect } from 'react'
import { onTodoItemSnapshot, updateTodoItem } from '../api/service'
import TodoItem from './TodoItem'

const TodoList = () => {
    const [todoItems, setTodoItems] = useState([])
    const [filedItems, setFiledItems] = useState([])
    const [isShownFiledItems, setIsShownFiledItems] = useState(false)

    useEffect(() => {
        const subscribe = onTodoItemSnapshot(data => {
            let todoItems = data.filter(i => !i.filed)
            let filedItems = data.filter(i => i.filed)

            setTodoItems(todoItems)
            setFiledItems(filedItems)
        })
        return () => subscribe()
    }, [])

    const handleUpdate = async (todoItem) => {
        updateTodoItem(todoItem.id, todoItem.done, todoItem.filed)
    }

    return (
        <div>
            <div>
                { todoItems.map((item, index) => {
                    return (
                        <TodoItem 
                            key={ index }
                            value={ item } 
                            onUpdate={ handleUpdate }
                        />
                    )
                })}
            </div>
            <hr/>
            <button 
                className="btn btn-primary col-12"
                onClick={() => setIsShownFiledItems(!isShownFiledItems)}>
                Itens arquivados 
            </button>
            { isShownFiledItems && (
                <div className="pt-2">
                    { filedItems.map((item, index) => {
                        return (
                            <TodoItem 
                                key={ index }
                                value={ item } 
                                onUpdate={ handleUpdate }
                            />
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default TodoList
