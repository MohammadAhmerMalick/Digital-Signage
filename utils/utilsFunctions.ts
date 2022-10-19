import { toast, ToastOptions } from 'react-toastify'

import { ToasterInterface } from 'ts/interface'

const toasterOptions: ToastOptions = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

export const toaster: ToasterInterface = {
  success: (message) => toast.success(message, toasterOptions),
  error: (message) => toast.error(message, toasterOptions),
  info: (message) => toast.info(message, toasterOptions),
  warn: (message) => toast.warn(message, toasterOptions),
  loading: (message) => toast.loading(message, toasterOptions),
  update: (id, message, type) =>
    toast.update(id, {
      render: message,
      type: type || 'success',
      isLoading: false,
      ...toasterOptions,
    }),
}

export const capitalize = (string: string | undefined) =>
  string ? string.charAt(0).toUpperCase() + string.slice(1) : ''

export const uuid = () => Math.floor(Math.random() * 10 ** 15)
