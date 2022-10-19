import { ReactNode } from 'react'
import { TypeOptions as toastType } from 'react-toastify'
import { Id as toastId } from 'react-toastify/dist/types'

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

/* *********
  Utils
 ********* */

export interface ToasterInterface {
  success: (message: string) => void
  error: (message: string) => void
  info: (message: string) => void
  warn: (message: string) => void
  loading: (message: string) => toastId
  update: (id: toastId, message: string, type?: toastType) => void
}
