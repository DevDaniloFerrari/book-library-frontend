import React from 'react'

export default function SearchSelect() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
    }}>
      <text>Search By:</text>
      <select>
        <option>Book Title</option>
        <option>Publisher</option>
        <option>Authors</option>
        <option>Type</option>
        <option>ISBN</option>
        <option>Category</option>
      </select>
    </div>
  )
}
