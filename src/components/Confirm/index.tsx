import { confirmAlert } from 'react-confirm-alert'
import Modal from './modal'
import { ConfirmProps } from './interfaces'

export const Confirm = (props: ConfirmProps) =>
  confirmAlert({
    customUI: Modal(props),
  })
