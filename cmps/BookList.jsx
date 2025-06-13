import { demoBooks } from "../services/bookService.js"
import { BookPreview } from "./BookPreview.jsx"

export function BookList({books}) {

    return (
        <section>
            <h1>My books</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>

                        <BookPreview book={book} />
                    </li>
                ))}
            </ul>
        </section>
    )

}