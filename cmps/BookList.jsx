import { demoBooks } from "../services/bookService.js"
import { BookPreview } from "./BookPreview.jsx"

export function BookList({ books }) {

    return (
        <section className="book-preview-container">
            <ul className="book-list">
                {books.map((book) => (
                    <li key={book.id}>
                        <BookPreview book={book} />
                    </li>
                ))}
            </ul>
        </section>
    )

}