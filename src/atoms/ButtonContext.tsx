import React from 'react'

export default function ButtonContext(children) {
  return (
    <label>
        <input
          type="checkbox"
          checked={children === 'dark'}
          onChange={(e) => {
            children(e.target.checked ? 'dark' : 'light')
          }}
        />
        Usar modo oscuro
    </label>
  )
}
