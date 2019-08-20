import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import Modal from './modal'
import { ConfirmProps } from './interfaces'

export const Confirm = (props: ConfirmProps) =>
  confirmAlert({
    customUI: Modal(props),
  })
