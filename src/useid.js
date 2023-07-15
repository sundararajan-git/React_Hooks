import React, { useId } from 'react'

export default function Useid() {
  const id = useId()
  return (
    <>
    <h1>{id}</h1>
    <label htmlFor={id}>Name</label>
    <input type='text' id={id} name='name' placeholder='your name'/>
    </>
  )
}
