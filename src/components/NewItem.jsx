import { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { addTodoItem } from '../api/service'

const TodoList = () => {
    const { user } = UserAuth()
    const [itemDescription, setItemDescription] = useState('')

    const handleNewItem = async () => {
        await addTodoItem(itemDescription, user.uid)
        setItemDescription('')
    }

    return (
        <div className='form-inline input-group mb-3'>
            <input
                type="text"
                id="new_item"
                className='form-control'
                placeholder="Novo item"
                value={ itemDescription }
                onChange={ (e) => setItemDescription(e.target.value) }
            />
            <button 
                id="new_item_button"
                className='btn btn-primary'
                onClick={ handleNewItem } 
            >
                +
            </button>
        </div>
    )
}

export default TodoList
