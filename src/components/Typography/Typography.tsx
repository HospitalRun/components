import React from 'react'

interface Props {
  /**
   * Defines the HTML variant of typography
   * @default 'p'
   */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  /**
   * Defines the CSS styling of typography
   * @default 'p'
   */
  styleAs?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'display-1'
    | 'display-2'
    | 'display-3'
    | 'display-4'
  /**
   * Children to be rendered between Typography tags.
   */
  children?: React.ReactNode
}

const Typography = (props: Props) => {
  const { variant, styleAs, children } = props

  return (
    <>
      {variant === 'h1' ? (
        <h1 className={styleAs || 'h1'}>{children}</h1>
      ) : variant === 'h2' ? (
        <h2 className={styleAs || 'h2'}>{children}</h2>
      ) : variant === 'h3' ? (
        <h3 className={styleAs || 'h3'}>{children}</h3>
      ) : variant === 'h4' ? (
        <h4 className={styleAs || 'h4'}>{children}</h4>
      ) : variant === 'h5' ? (
        <h5 className={styleAs || 'h5'}>{children}</h5>
      ) : variant === 'h6' ? (
        <h6 className={styleAs || 'h6'}>{children}</h6>
      ) : (
        <p className={styleAs || 'p'}>{children}</p>
      )}
    </>
  )
}

export { Typography }
