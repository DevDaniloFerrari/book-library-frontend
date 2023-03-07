import React from 'react'
import Form from 'react-bootstrap/Form';

export default function SearchInput(params) {
    const { value, setValue, getBooks } = params

    const onChangeInput = (value) => {
        setValue(value)

        if (value === '')
            getBooks()
    }

    return (
        <Form.Group className="mb-3">
            <Form.Label id="serach-value">Search Value:</Form.Label>
            <Form.Control
                aria-describedby="serach-value"
                value={value}
                onChange={event => onChangeInput(event.target.value)}
            />
        </Form.Group>
    )
}
