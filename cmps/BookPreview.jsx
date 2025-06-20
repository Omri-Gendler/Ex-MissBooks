import { bookService } from "../services/bookService.js"


const { Link, NavLink } = ReactRouterDOM


export function BookPreview({ book }) {


    return (
        <article className="book-preview">

            <div className="book-image-container"><img src={book.thumbnail} /></div>
            <h3>{book.title}</h3>
            <div className="book-preview-content">
                <p>{book.listPrice.amount}{book.listPrice.currencyCode}</p>
                <p>{bookService.getSetPageCount(book.pageCount)}</p>
                <p>{bookService.getPublishedDate(book.publishedDate)}</p>
                {book.listPrice.isOnSale && <span className="sale-sign">On Sale!</span>}
            </div>
            <Link to={`/book/${book.id}`}>
                <button>Details</button>
            </Link>
        </article >
    )
}