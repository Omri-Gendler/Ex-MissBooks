import { demoBooks } from "../services/bookService.js"
import { BookPreview } from "./BookPreview.jsx"

export function BookList({books}) {

    return (
        <section>
            <ul className="books-preview-container">
            <h1>My books</h1>
                {books.map((book) => (
                    <li key={book.id}>

                        <BookPreview book={book} />
                    </li>
                ))}
            </ul>
        </section>
    )

}