import React, { useState } from 'react'
import SearchButton from '../components/SearchButton'
import SearchInput from '../components/SearchInput'
import SearchSelect from '../components/SearchSelect'
import Table from '../components/Table'

export default function SearchBookPage() {
    const [books, setBooks] = useState()

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
                <SearchSelect />
                <SearchInput />
                <SearchButton setBooks={setBooks} />
            </div>
            <Table books={books}/>
        </div>
    )
}
