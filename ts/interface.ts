import { ReactNode } from 'react'

/* *********
   slices
  ********* */
export interface UserSliceInterface {
  user: { email?: string }
}

/* *********
   component
  ********* */

export interface DefaultLayoutInterface {
  children: ReactNode
}
