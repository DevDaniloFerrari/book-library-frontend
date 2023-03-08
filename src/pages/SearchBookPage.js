import React, { useState, useEffect } from 'react'
import BookTable from '../components/BookTable'
import SearchButton from '../components/SearchButton'
import SearchInput from '../components/SearchInput'
import SearchSelect from '../components/SearchSelect'
import bookApi from '../service/book-api'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import ErrorToast from '../components/ErrorToast'

export default function SearchBookPage() {
    const [books, setBooks] = useState()
    const [value, setValue] = useState()
    const [property, setProperty] = useState('Title')
    const [showSpinner, setShowSpinner] = useState(false)
    const [showToast, setShowToast] = useState(false)

    useEffect(() => {
        getBooks()
    }, [])

    const search = () => {
        setShowSpinner(true)
        bookApi.getBooksFiltered(property, value)
            .then(response => {
                setBooks(response.data)
            })
            .catch(() => setShowToast(true))
            .finally(() => setShowSpinner(false))
    }

    const getBooks = () => {
        setShowSpinner(true)
        bookApi.getBooks()
            .then(response => {
                setBooks(response.data)
            })
            .catch(() => setShowToast(true))
            .finally(() => setShowSpinner(false))
    }

    return (
        <div className='m-2'>
            <h1 className='text-center'>Book Library</h1>
            <Card className='m-2'>
                <Card.Body>
                    <Form>
                        <SearchSelect setProperty={setProperty} setValue={setValue} getBooks={getBooks}/>
                        <SearchInput value={value} setValue={setValue} getBooks={getBooks} />
                    </Form>
                    <SearchButton search={search} />
                </Card.Body>
            </Card>

            {showSpinner ? <div className='text-center'><Spinner /></div> : <BookTable books={books} />}
            <ErrorToast show={showToast} setShow={setShowToast}/>
        </div>
    )
}
