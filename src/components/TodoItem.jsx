import { useState, useEffect, useRef } from 'react'

const TodoItem = ({ value, onUpdate, onDelete }) => {
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
        <div className='input-group justify-content-between border align-items-center mb-1 ps-1'>
            <div className="form-check col-8">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id={`todo_item_${value.id}`}
                    checked={ isDone }
                    onChange={ () => setIsDone(!isDone) }
                    disabled={ isFiled }
                />
                <label className="form-check-label" htmlFor={`todo_item_${value.id}`}>
                    { value.description }
                </label>
            </div>
            <div className="col-4 d-flex justify-content-end">
                <button 
                    type='button'
                    className='btn btn-warning btn-sm rounded-0' 
                    title={titleFileBtn}
                    onClick={ () => setIsFiled(!isFiled) }>
                    <img src="/src/assets/box-archive-solid.svg" height='15px' width='15px' title={titleFileBtn}/>
                </button>
                <button 
                    type="button"
                    className='btn btn-danger btn-sm rounded-0' 
                    title='Excluir'
                    onClick={ () => onDelete(value.id) }>
                    <img src="/src/assets/trash-solid.svg" height='15px' width='15px' title='Excluir'/>
                </button>
            </div>
        </div>
    )
}

export default TodoItem
