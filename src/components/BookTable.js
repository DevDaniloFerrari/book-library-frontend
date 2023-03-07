import React from 'react'
import Table from 'react-bootstrap/Table';

export default function BookTable(params) {
    return (
        <Table className='text-center' size='sm' striped bordered hover>
            <thead>
                <tr>
                    <th>Book Title</th>
                    <th>Authors</th>
                    <th>Type</th>
                    <th>ISBN</th>
                    <th>Category</th>
                    <th>Available Copies</th>
                </tr>
            </thead>
            <tbody>
                {params.books?.map(book => {
                    return (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.firstName + ' ' + book.lastName}</td>
                            <td>{book.type}</td>
                            <td>{book.isbn}</td>
                            <td>{book.category}</td>
                            <td>{book.totalCopies - book.copiesInUse}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}
