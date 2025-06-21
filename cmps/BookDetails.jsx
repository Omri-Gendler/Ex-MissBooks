import { bookService } from '../services/bookService.js'

const { useParams } = ReactRouterDOM
const { useState, useEffect } = React

export function BookDetails() {
    const [book, setBook] = useState(null)
    const { bookId } = useParams()

    useEffect(() => {
        bookService.getById(bookId)
            .then(book => {
                setBook(book)
            })
            .catch(err => {
                console.log('Had issues getting book details', err)
            })
    }, [bookId])

    if (!book) return <div>Loading book details...</div>

    return (
        <section className="book-preview">
            <h1>{book.title}</h1>
            <h2>{book.subtitle}</h2>
            <img src={book.thumbnail} />
            <p>Price: {book.listPrice.amount}{book.listPrice.currencyCode}</p>
            <p>{book.description}</p>
        </section>
    )
}