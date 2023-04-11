import { useState, useEffect, useRef } from 'react'

const TodoItem = ({ value, onUpdate }) => {
    const [isDone, setIsDone] = useState(value.done)
    const [isFiled, setIsFiled] = useState(value.filed)
    let titleFileBtn = isFiled ? 'Desarquivar' : 'Arquivar'

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
        <div className='form-inline input-group justify-content-between border align-items-center mb-1 ps-1'>
            <div className="form-check col-10">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id={`todo_item_${value.id}`}
                    checked={ isDone }
                    onChange={ () => setIsDone(!isDone) }
                />
                <label className="form-check-label" htmlFor={`todo_item_${value.id}`}>
                    { value.description }
                </label>
            </div>
            <button 
                className='btn btn-danger btn-sm' 
                title={titleFileBtn}
                onClick={ () => setIsFiled(!isFiled) }>
                -
            </button>
        </div>
    )
}

export default TodoItem
