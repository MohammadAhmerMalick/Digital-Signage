import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { updateUser } from 'store/slices/userSlice'
import { DefaultLayoutInterface } from 'ts/interface'
import { useAppDispatch, useAppSelector } from 'store'

const DefaultLayout: FC<DefaultLayoutInterface> = ({ children }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.userReducer)

  const logout = () => {
    dispatch(updateUser({}))
  }

  useEffect(() => {
    if (!user.email) router.push('/auth')
  }, [user, router])

  return (
    <div>
      <ToastContainer />

      {user.email && (
        <button type="button" onClick={logout}>
          logout
        </button>
      )}
      {children}
    </div>
  )
}

export default DefaultLayout
