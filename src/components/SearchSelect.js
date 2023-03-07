import React from 'react'
import Form from 'react-bootstrap/Form';

export default function SearchSelect(params) {
  const { setProperty, setValue } = params

  const onChangeProperty = (value) => {
    setProperty(value)
    setValue('')
  }

  return (
    <Form.Group className="mb-3" controlId="selectProperty">
      <Form.Label>Search By:</Form.Label>
      <Form.Select size="sm" onChange={event => onChangeProperty(event.target.value)}>
        <option value={'Title'}>Book Title</option>
        <option value={'Author'}>Authors</option>
        <option value={'Type'}>Type</option>
        <option value={'Isbn'}>ISBN</option>
        <option value={'Category'}>Category</option>
      </Form.Select>
    </Form.Group>
  )
}
