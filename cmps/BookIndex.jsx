const { useState, useEffect } = React;

import { BookList } from "./BookList.jsx"
import { bookService } from "../services/bookService.js"


export function BookIndex() {

    const [books, setBooks] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        bookService.query()
            .then(setBooks)
            .catch(err => console.error('Had issue to load the books', err))
    }

    return (

        <section>

            <BookList books={books} />
        </section>
    )
}