import { FormEvent, useState } from 'react'
import type { NextPage } from 'next'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { auth } from 'config/firebaseConfig'

import S from './index.module.scss'

const Auth: NextPage = () => {
  const [email, setEmail] = useState('admin@email.com')
  const [password, setPassword] = useState('adminadmin')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const res = await signInWithEmailAndPassword(auth, email, password)

      const user = await res.user

      console.log({ user })
    } catch (error: any) {
      console.log({ code: error.code })
      console.log({ message: error.message })
    }
  }

  return (
    <div className={S.auth}>
      <div className={S.wrapper}>
        <h1 className={S.heading}>Login</h1>
        <form onSubmit={handleSubmit} className={S.form}>
          <label htmlFor="email">
            Email
            <input
              className={S.input}
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              className={S.input}
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </label>
          <button className={S.submit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Auth
