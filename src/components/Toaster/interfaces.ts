import { PositionOptions } from 'react-toastify'

export interface ToasterProps {
  autoClose?: number
  hideProgressBar?: boolean
  draggable?: boolean
}

export interface ToastProps {
  type: 'success' | 'info' | 'warning' | 'error'
  title: string
  message?: string
  position?: PositionOptions
}
