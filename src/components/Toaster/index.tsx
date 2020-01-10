import * as React from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify'
import { ToastProps, ToasterProps } from './interfaces'
import { titleWithMessage, titleWithoutMessage } from './components'
import './toaster.scss'

export const Toast: any = (
  type: ToastProps['type'],
  title: ToastProps['title'],
  message?: ToastProps['message'],
) => {
  const messageToShow = message ? titleWithMessage(title, message) : titleWithoutMessage(title)
  let toastToShow

  switch (type) {
    case 'error':
      toast.error(messageToShow)
      break
    case 'info':
      toast.info(messageToShow)
      break
    case 'success':
      toast.success(messageToShow)
      break
    case 'warning':
      toast.warn(messageToShow)
      break
    default:
      toast.error(messageToShow)
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
