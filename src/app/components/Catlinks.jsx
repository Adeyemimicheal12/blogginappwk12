import React from 'react'

export default function Catlinks({title, bg}) {
  return (
    <span className={`inline-block py-4 px-6 ${bg} m-3 uppercase`}>{title}</span>
  )
}
