import Button from 'components/Button'
import Loader from 'components/Loader'
import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { auth } from 'lib/firebase'
import { GoogleLogo, TwitterLogo } from 'phosphor-react'
import { useState } from 'react'

const Login = (props: { onClick: () => void; user: any }) => {
  const googleProvider = new GoogleAuthProvider()
  const twitterProvider = new TwitterAuthProvider()
  const [loggingIn, setLoggingIn] = useState(false)

  const googleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      // console.log(result.user);
      return result
    } catch (error) {
      console.log(error)
    }
  }

  const twitterLogin = async () => {
    try {
      const result = await signInWithPopup(auth, twitterProvider)
      // console.log(result.user);
      return result
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h2 className="mb-1 text-2xl font-bold">Welcome to matchmaking</h2>
      <h3 className="mb-6">Log in and join the fun!</h3>
      {loggingIn ? (
        <div className="flex h-12 items-center gap-2">
          <p className="font-medium">Logging in with another window</p>
          <Loader />
        </div>
      ) : (
        <nav className="flex w-full gap-3">
          <Button
            onClick={() => {
              setLoggingIn(true)
              googleLogin()
            }}
            text="Log in with Google"
            type="primary"
          >
            <GoogleLogo weight="bold" />
          </Button>
          <Button
            onClick={() => {
              setLoggingIn(true)
              twitterLogin()
            }}
            text="Log in with Twitter"
            type="primary"
          >
            <TwitterLogo weight="bold" />
          </Button>
        </nav>
      )}
    </>
  )
}

export default Login