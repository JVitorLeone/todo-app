import { useState, useEffect, useRef } from 'react'

const TodoItem = ({ value, onUpdate }) => {
    const [isDone, setIsDone] = useState(value.done)
    const [isFiled, setIsFiled] = useState(value.filed)
    
    const firstUpdate = useRef(true)
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false 
            return
        }

        onUpdate({
            ...value,
            done: isDone,
            filed: isFiled,
        })
        return
    }, [isDone, isFiled])

    return (
        <li>
            <input 
                type="checkbox"
                id={`todo_item_${value.id}`}
                checked={ isDone }
                onChange={ () => setIsDone(!isDone) }
            />
            <label htmlFor={`todo_item_${value.id}`}>
                { value.description }
            </label> 
            <br/>

        </li>
    )
}

export default TodoItem
