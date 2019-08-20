import * as React from 'react'
import { ToastProps } from './interfaces'

export const titleWithMessage = (title: ToastProps['title'], message: ToastProps['message']) => (
  <>
    <div className="titles" style={{ fontSize: '1.1em', fontWeight: 600 }}>
      {title}
    </div>
    <div>{message}</div>
  </>
)

export const titleWithoutMessage = (title: ToastProps['title']) => <div>{title}</div>
