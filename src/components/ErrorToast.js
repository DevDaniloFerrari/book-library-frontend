import React from 'react'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer'

export default function ErrorToast(params) {
    const { show, setShow } = params

    return (
        <ToastContainer position='top-end'>
            <Toast
                className="d-inline-block m-1"
                bg='danger'
                delay={3000}
                autohide
                show={show}
                onClose={() => setShow(false)}
            >
                <Toast.Header>
                    <strong className="me-auto">Error</strong>
                </Toast.Header>
                <Toast.Body>
                    Error when trying to fetch books.
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}
