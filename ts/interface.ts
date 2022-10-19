import { ReactNode } from 'react'

/* *********
   slices
  ********* */
export interface UserSliceInterface {
  id: string
  role: string
  name: string
}

/* *********
   component
  ********* */

export interface DefaultLayoutInterface {
  children: ReactNode
}
