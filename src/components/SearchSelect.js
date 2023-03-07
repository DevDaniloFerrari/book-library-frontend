import React from 'react'

export default function SearchSelect(params) {
  const { setProperty } = params

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <text>Search By:</text>
      <select onChange={event => setProperty(event.target.value)}>
        <option value={'Title'}>Book Title</option>
        <option value={'Author'}>Authors</option>
        <option value={'Type'}>Type</option>
        <option value={'Isbn'}>ISBN</option>
        <option value={'Category'}>Category</option>
      </select>
    </div>
  )
}
