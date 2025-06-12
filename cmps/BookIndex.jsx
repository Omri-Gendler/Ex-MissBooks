import { demoData } from "../services/bookService.js"


export function BookIndex() {
    return (
        <section>
            <h1>My books</h1>
            <ul>
                {demoData.map((book) => (
                    <li key={book.id}>
                        {book.title}
                        {book.id}
                        {book.listPrice}
                    </li>
                ))}
            </ul>
        </section>
    )
}