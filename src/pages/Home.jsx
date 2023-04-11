import { UserAuth } from '../context/AuthContext'
import TodoList from '../components/TodoList'
import NewItem from '../components/NewItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const { user, logOut } = UserAuth()

  const handleLogOut = async () => {
    await logOut()
  }

  return (
    <div className='container border rounded shadow  d-flex flex-column align-items-center p-3'>
      <ul className="nav w-100 justify-content-between">
        <li className="nav-item d-flex align-items-center pt-2">
          <h6>Bem vindo, {user.displayName}!</h6>
        </li>
        <button 
          className="btn btn-outline-primary my-2 my-sm-0 ms-2"
          onClick={handleLogOut}
          title='Sair'
        >
          <FontAwesomeIcon icon={ faSignOut } />
        </button>
      </ul>
      <hr/>
      <div className='w-100'>
        <NewItem />
        <TodoList />
      </div>
    </div>
  )
}

export default Home