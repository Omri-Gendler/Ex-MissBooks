import { demoBooks } from "../services/bookService.js"
import { BookPreview } from "./BookPreview.jsx"

export function BookList({ books, onRemoveBook, onAddBook }) {

    return (
        <section className="book-preview-container">
            <ul className="book-list">
                {books.map((book) => (
                    <li key={book.id}>
                        <BookPreview
                            book={book}
                            onRemoveBook={onRemoveBook}
                            onAddBook={onAddBook}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )

}