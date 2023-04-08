import { useState } from 'react'
import { UserAuth } from '../context/AuthContext'

function Home() {
  const { user, logOut } = UserAuth()

  const handleLogOut = async () => {
    await logOut()
  }

  return (
    <div>
      <h2>Bem vindo, {user.displayName}!</h2>
      <button onClick={handleLogOut}>Sair</button>
    </div>
  )
}

export default Home