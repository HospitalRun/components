export interface ConfirmProps {
  title: string
  message: string
  ok: {
    callback(): void
    label?: string
  }
  cancel: {
    callback(): void
    label?: string
  }
}
