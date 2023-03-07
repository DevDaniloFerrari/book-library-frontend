import React from 'react'
import Button from 'react-bootstrap/Button';

export default function SearchButton(params) {
    const { search } = params

    return (
        <div className='text-end' >
            <Button variant="success" onClick={search}>Search</Button>
        </div>
    )
}
