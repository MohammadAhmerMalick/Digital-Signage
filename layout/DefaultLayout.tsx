import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { DefaultLayoutInterface } from 'ts/interface'
import { useAppSelector } from 'store'
import Navbar from 'components/navbar/Navbar'

const DefaultLayout: FC<DefaultLayoutInterface> = ({ children }) => {
  const router = useRouter()
  const { user } = useAppSelector((state) => state.userReducer)

  useEffect(() => {
    if (!user.email && !router.pathname.includes('auth')) router.push('/auth')
  }, [user, router])

  return (
    <>
      <ToastContainer />

      {user.email ? (
        <>
          <Navbar />
          <main>{children}</main>
        </>
      ) : (
        children
      )}
    </>
  )
}

export default DefaultLayout
