import * as React from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify'

import { titleWithMessage, titleWithoutMessage } from './components'
import { ToastProps, ToasterProps } from './interfaces'
import './toaster.scss'

export const Toast: any = (
  type: ToastProps['type'],
  title: ToastProps['title'],
  message?: ToastProps['message'],
  position?: ToastProps['position'],
) => {
  const messageToShow = message ? titleWithMessage(title, message) : titleWithoutMessage(title)
  let toastToShow
  const actualPosition = position || toast.POSITION.TOP_RIGHT

  switch (type) {
    case 'error':
      toast.error(messageToShow, { position: actualPosition })
      break
    case 'info':
      toast.info(messageToShow, { position: actualPosition })
      break
    case 'success':
      toast.success(messageToShow, { position: actualPosition })
      break
    case 'warning':
      toast.warn(messageToShow, { position: actualPosition })
      break
    default:
      toast.error(messageToShow, { position: actualPosition })
  }

  return toastToShow
}

export const Toaster = (props: ToasterProps) => {
  const { autoClose, hideProgressBar, draggable } = props

  return (
    <ToastContainer
      autoClose={autoClose || 5000}
      hideProgressBar={hideProgressBar !== false}
      draggable={draggable !== false}
      transition={Slide}
      draggablePercent={35}
    />
  )
}
