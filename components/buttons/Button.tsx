import { FC } from 'react'
import classNames from 'classnames'

import { buttonTypeEnum } from 'ts/enum'
import { ButtonInterface } from 'ts/interface'

import S from './Button.module.scss'

const Button: FC<ButtonInterface> = ({
  text,
  primary,
  type,
  className,
  onClick,
}) => {
  return (
    <button
      className={classNames(S.button, { [S.primary]: primary }, className)}
      type={type || buttonTypeEnum.button}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
