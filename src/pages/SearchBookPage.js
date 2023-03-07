import React, { useState, useEffect } from 'react'
import SearchButton from '../components/SearchButton'
import SearchInput from '../components/SearchInput'
import SearchSelect from '../components/SearchSelect'
import Table from '../components/Table'
import bookApi from '../service/book-api'

export default function SearchBookPage() {
    const [books, setBooks] = useState()
    const [value, setValue] = useState()
    const [property, setProperty] = useState('Title')

    const search = () => {
        bookApi.getBooksFiltered(property, value).then(response => {
            setBooks(response.data)
        })
    }

    useEffect(() => {
        getBooks()
    }, [])

    const getBooks = () => {
        bookApi.getBooks().then(response => {
            setBooks(response.data)
        })
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 100
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                border: '2px solid black',
                borderRadius: '20px',
                margin: '50px',
                padding: '10px'
            }}>
                <SearchSelect setProperty={setProperty} setValue={setValue} />
                <SearchInput value={value} setValue={setValue} getBooks={getBooks} />
                <SearchButton search={search} />
            </div>
            <Table books={books} />
        </div>
    )
}
