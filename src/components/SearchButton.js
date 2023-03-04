import React from 'react'
import bookApi from '../service/book-api'

export default function SearchButton(params) {
    const { setBooks } = params

    const getBooks = () => {
        bookApi.getBooks().then(response => {
            setBooks(response.data)
        })
    }

    return (
        <div>
            <button onClick={getBooks}>Search</button>
        </div>
    )
}
