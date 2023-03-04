import React from 'react'

export default function Table(params) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Book Title</th>
                    <th>Publisher</th>
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
                            <td>{book.publisher}</td>
                            <td>{book.authors}</td>
                            <td>{book.type}</td>
                            <td>{book.isbn}</td>
                            <td>{book.category}</td>
                            <td>{book.availableCopies}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
