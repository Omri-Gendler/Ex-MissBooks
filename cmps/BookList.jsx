import { demoData } from "../services/bookService.js"
import { BookPreview } from "./BookPreview.jsx"

const books = demoData

export function BookList() {


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