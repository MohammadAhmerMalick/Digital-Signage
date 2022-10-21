import { FC } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { useRouter } from 'next/router'

import { RoutesEnum } from 'ts/enum'
import { useAppDispatch } from 'store'
import Button from 'components/buttons/Button'
import { updateUser } from 'store/slices/userSlice'

import S from './Navbar.module.scss'

const Navbar: FC = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const logout = () => {
    dispatch(updateUser({}))
  }

  return (
    <div className={S.navbar}>
      <nav>
        {Object.keys(RoutesEnum).map((link) => (
          <Link
            key={link}
            // @ts-ignore
            href={RoutesEnum[link]}
          >
            <a
              className={classNames(S.link, {
                // @ts-ignore
                [S.active]: router.pathname === RoutesEnum[link],
              })}
            >
              {link}
            </a>
          </Link>
        ))}
      </nav>
      <Button text="LogOut" onClick={logout} primary />
    </div>
  )
}

export default Navbar
