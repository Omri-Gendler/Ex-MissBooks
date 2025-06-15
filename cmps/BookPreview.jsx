import { bookService } from "../services/bookService.js"
export function BookPreview({ book }) {


    return (
        <article className="book-preview">

            <img className="img" src={book.thumbnail} />

            <h3>{book.title}</h3>

            <p>{book.listPrice.amount}{book.listPrice.currencyCode}</p>
            <p>{bookService.getSetPageCount(book.pageCount)}</p>

        </article>
    )
}