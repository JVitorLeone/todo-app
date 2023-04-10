import { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import TodoList from '../components/TodoList'
import NewItem from '../components/NewItem'

function Home() {
  const { user, logOut } = UserAuth()

  const handleLogOut = async () => {
    await logOut()
  }

  return (
    <div>
      <h2>Bem vindo, {user.displayName}!</h2>
      <button onClick={handleLogOut}>Sair</button>
      <hr/>
      <div>
        <NewItem />
        <TodoList />
      </div>
    </div>
  )
}

export default Home