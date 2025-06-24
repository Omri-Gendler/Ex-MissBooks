import { BookList } from "./BookList.jsx"
import { bookService } from "../services/bookService.js"
import { BooksFilter } from "../cmps/BookFilter.jsx"
import { BookDetails } from "./BookDetails.jsx"

const { useState, useEffect, Fragment } = React
const { Link, Outlet } = ReactRouterDOM
const BOOK_KEY = 'bookDB'

export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks(filterBy)
    }, [])

    function loadBooks() {
        bookService.query()
            .then(booksFromService => {
                console.log("🚀 ~ loadBooks ~ booksFromService:", booksFromService)
                setBooks(booksFromService)
            })
            .catch(err => console.error('Had issue to load the books', err))
    }

    function onSetFilter(newFilter) {
        setFilterBy(newFilter)
    }

    function onRemoveBook(bookId) {

        bookService.remove(BOOK_KEY, bookId)
            .then(() => {
                setBooks(books => books.filter(book => book.id !== bookId))
            })
            .catch(err => {
                console.log('err:', err)
            })
    }

    function onAddBook() {
        const title = prompt('Enter title')
        const price = +prompt('price')

        const newBook = {
            id: bookService.makeId(),
            title,
            subtitle: bookService.makeLorem(4),
            authors: [
                bookService.makeLorem(1)
            ],
            publishedDate: bookService.getRandomIntInclusive(1950, 2024),
            description: bookService.makeLorem(20),
            pageCount: bookService.getRandomIntInclusive(20, 600),
            thumbnail: `img/1.jpg`,
            language: "en",
            listPrice: {
                amount: price,
                currencyCode: "EUR",
                isOnSale: Math.random() > 0.7
            }
        }
        bookService.post(newBook)
            .then(() => {
                console.log('Book added successfully!')
                loadBooks()
            })
            .catch(err => {
                console.error('Failed to add book', err)
            })
    }

    if (!books) return <div>Loading...</div>

    const filteredBooks = books.filter(book => {
        const titleMatch = (book.title || '').toLowerCase().includes((filterBy.title || '').toLowerCase())
        const priceMatch = filterBy.maxPrice ? book.listPrice.amount <= filterBy.maxPrice : true
        return titleMatch && priceMatch
    })

    return (

        <section>
            <button onClick={onAddBook}>Add</button>
            <BooksFilter
                filterBy={filterBy}
                onSetFilter={onSetFilter}
            />
            <BookList
                books={filteredBooks}
                onRemoveBook={onRemoveBook}
            />
        </section>
    )
}
