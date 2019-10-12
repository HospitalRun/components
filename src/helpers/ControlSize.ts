interface KeyValuePair {
  key: string
  value: any
}

const sizes: KeyValuePair[] = [{ key: 'small', value: 'sm' }, { key: 'large', value: 'lg' }]

export function getControlSize(size: string | undefined): 'sm' | 'lg' | undefined {
  const controlSize = sizes.find(s => s.key == size)
  return controlSize ? controlSize.value : undefined
}
