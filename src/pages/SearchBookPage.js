import React from 'react'
import SearchButton from '../components/SearchButton'
import SearchInput from '../components/SearchInput'
import SearchSelect from '../components/SearchSelect'
import Table from '../components/Table'

export default function SearchBookPage() {
    return (
        <>
            <SearchSelect />
            <SearchInput />
            <SearchButton />
            <Table />
        </>
    )
}
