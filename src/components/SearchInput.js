import React from 'react'

export default function SearchInput(params) {
    const { value, setValue, getBooks } = params

    const onChangeInput = (value) => {
        setValue(value)

        if (value == '')
            getBooks()
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <text>Search Value:</text>
            <input value={value} onChange={event => onChangeInput(event.target.value)}></input>
        </div>
    )
}
