import { MouseEventHandler, MouseEvent, ReactNode } from 'react'
import { TypeOptions as toastType } from 'react-toastify'
import { Id as toastId } from 'react-toastify/dist/types'
import { buttonTypeEnum } from './enum'

/* *********
   slices
  ********* */
export interface UserSliceInterface {
  user: { email?: string }
}

export interface TemplateSliceInterface {
  selected: string
}

/* *********
   component
  ********* */

export interface DefaultLayoutInterface {
  children: ReactNode
}

export interface ButtonInterface {
  text: string
  primary?: boolean
  className?: string
  type?: buttonTypeEnum
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

export interface CustomImageInterface {
  src: string | undefined
  height?: number
  width?: number
  alt?: string
  placeholder?: string
  className?: string
  onClick?(): MouseEvent<HTMLImageElement, MouseEvent> | void
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

export interface ImageNaturalDimensionInterface {
  naturalHeight: number
  naturalWidth: number
}
