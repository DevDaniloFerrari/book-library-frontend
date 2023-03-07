import React from 'react'

export default function SearchButton(params) {
    const { search } = params

    return (
        <div>
            <button onClick={search}>Search</button>
        </div>
    )
}
