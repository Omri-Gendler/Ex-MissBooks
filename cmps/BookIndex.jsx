const { useState, useEffect, Fragment } = React;

import { BookList } from "./BookList.jsx"
import { bookService } from "../services/bookService.js"
import { BooksFilter } from "./BookFilter.jsx"


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

    if (!books) return <div>Loading...</div>

    const filteredBooks = books.filter(book => {
        const titleMatch = (book.title || '').toLowerCase().includes((filterBy.title || '').toLowerCase())
        const priceMatch = filterBy.maxPrice ? book.listPrice.amount <= filterBy.maxPrice : true
        return titleMatch && priceMatch
    })

    return (

        <section>

            <BooksFilter
                filterBy={filterBy}
                onSetFilter={onSetFilter}
            />
            <BookList books={filteredBooks} />
        </section>
    )
}
