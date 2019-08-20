import * as React from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify'
import { ToastProps, ToasterProps } from './interfaces'
import { titleWithMessage, titleWithoutMessage } from './components'
import 'react-toastify/dist/ReactToastify.min.css'

export const Toast: any = (
  type: ToastProps['type'],
  title: ToastProps['title'],
  message?: ToastProps['message'],
) =>
  type === 'error'
    ? message
      ? toast.error(titleWithMessage(title, message))
      : toast.error(titleWithoutMessage(title))
    : type === 'info'
    ? message
      ? toast.info(titleWithMessage(title, message))
      : toast.info(titleWithoutMessage(title))
    : type === 'success'
    ? message
      ? toast.success(titleWithMessage(title, message))
      : toast.success(titleWithoutMessage(title))
    : type === 'warning'
    ? message
      ? toast.warn(titleWithMessage(title, message))
      : toast.warn(titleWithoutMessage(title))
    : message
    ? toast(titleWithMessage(title, message))
    : toast(titleWithoutMessage(title))

export const Toaster = (props: ToasterProps) => (
  <ToastContainer
    autoClose={props.autoClose || 5000}
    hideProgressBar={props.hideProgressBar === false ? false : true}
    draggable={props.draggable === false ? false : true}
    transition={Slide}
    draggablePercent={35}
  />
)
