import React from 'react'
import bookApi from '../service/book-api'

export default function SearchButton(params) {
    const { setBooks, property, value } = params

    const getBooks = () => {
        bookApi.getBooksFiltered(property, value).then(response => {
            setBooks(response.data)
        })
    }

    return (
        <div>
            <button onClick={getBooks}>Search</button>
        </div>
    )
}
