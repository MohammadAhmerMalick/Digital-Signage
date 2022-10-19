import { FC } from 'react'

import { DefaultLayoutInterface } from '@/ts/interface'

const DefaultLayout: FC<DefaultLayoutInterface> = ({ children }) => {
  return <div>{children}</div>
}

export default DefaultLayout
