import { bookService } from "../services/bookService.js"


const { Link, NavLink } = ReactRouterDOM


export function BookPreview({ book }) {


    return (
        <article className="book-preview">

            <img className="img" src={book.thumbnail} />

            <h3>{book.title}</h3>

            <p>{book.listPrice.amount}{book.listPrice.currencyCode}</p>
            <p>{bookService.getSetPageCount(book.pageCount)}</p>
            <p>{bookService.getPublishedDate(book.publishedDate)}</p>
            <p>{bookService.isSale(book.listPrice.isOnSale)}</p>
            <Link to={`/book/${book.id}`}>
                <img src={book.thumbnail} alt={book.title} />
                <h3>{book.title}</h3>
                <button>Details</button>
            </Link>
        </article>
    )
}