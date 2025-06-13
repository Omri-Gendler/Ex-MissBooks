const { useState, useEffect, Fragment } = React;

import { BookList } from "./BookList.jsx"
import { bookService } from "../services/bookService.js"
import { BooksFilter } from "./BookFilter.jsx"


export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks(filterBy)
    }, [filterBy])

    function loadBooks() {
        bookService.query()
            .then(setBooks)
            .catch(err => console.error('Had issue to load the books', err))
    }

    function onSetFilter({ filterBy }) {
        setFilterBy(filterBy)
    }

    if (!books) return <div>Loading...</div>
    return (

        <section>

            <BooksFilter
                defaultFilter={filterBy}
                onSetFilter={onSetFilter}
            />
            <BookList books={books} />
        </section>
    )
}
