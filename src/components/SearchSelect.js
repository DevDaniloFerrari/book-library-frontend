import React from 'react'

export default function SearchSelect(params) {
  const { setProperty, setValue } = params

  const onChangeProperty = (value) => {
    setProperty(value)
    setValue('')
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <text>Search By:</text>
      <select onChange={event => onChangeProperty(event.target.value)}>
        <option value={'Title'}>Book Title</option>
        <option value={'Author'}>Authors</option>
        <option value={'Type'}>Type</option>
        <option value={'Isbn'}>ISBN</option>
        <option value={'Category'}>Category</option>
      </select>
    </div>
  )
}
