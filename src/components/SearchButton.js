import React from 'react'
import bookApi from '../service/book-api'

export default function SearchButton() {

    const getBooks = () => {
        bookApi.getBooks().then(response => {
            console.log(response.data)
        })
    }

    return (
        <div>
            <button onClick={getBooks}>Search</button>
        </div>
    )
}
