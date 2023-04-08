import { useEffect, useState } from 'react'
import { GoogleButton } from 'react-google-button'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function SignIn() {
  const { googleSignIn, user } = UserAuth()
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    await googleSignIn();
  }

  useEffect(() => {
    if (user != null) navigate('/home')
  }, [user]);

  return (
    <div>
      <h2>Faça o seu login!</h2>
      <GoogleButton onClick={handleGoogleSignIn}/>
    </div>
  )
}

export default SignIn