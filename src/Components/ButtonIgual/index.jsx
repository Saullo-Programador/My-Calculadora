import React from 'react'
import * as B from './styles'

const Button = ({Numero, value, onClick }) => {
  return (
    <>
      <B.BoxButton >
        <B.TextButton onClick={onClick} value={value}>{Numero}</B.TextButton>
      </B.BoxButton>
    </>
  )
}

export default Button