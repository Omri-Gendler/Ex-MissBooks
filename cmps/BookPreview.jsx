import { bookService } from "../services/bookService.js"
export function BookPreview({ book }) {


    return (
        <article className="book-preview">

            <img className="img" src={book.thumbnail} />

            <h3>{book.title}</h3>

            <p>{book.listPrice.amount}{book.listPrice.currencyCode}</p>
            <p>{bookService.getSetPageCount(book.pageCount)}</p>
            <p>{bookService.getPublishedDate(book.publishedDate)}</p>
            <p>{bookService.isSale(book.listPrice.isOnSale)}</p>
            <button className="details" onClick={bookService.onDetails}>Details</button>

        </article>
    )
}