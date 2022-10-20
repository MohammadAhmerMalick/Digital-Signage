import { FC } from 'react'

import { ButtonInterface } from 'ts/interface'

import S from './Button.module.scss'

const Button: FC<ButtonInterface> = ({ text, onClick }) => {
  return (
    <button className={S.button} type="button" onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
