import React from 'react'

export default function SearchInput(params) {
    const { value, setValue } = params

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <text>Search Value:</text>
            <input value={value} onChange={event => setValue(event.target.value)}></input>
        </div>
    )
}
