import { bookService } from "../services/bookService.js"
import { eventBusService, USER_MSG } from '../services/event-bus.service.js'

const { Link, NavLink } = ReactRouterDOM


export function BookPreview({ book, onRemoveBook }) {

    return (

        <article className="book-preview">

            <div className="book-image-container"><img src={book.thumbnail} /></div>
            <h3>{book.title}</h3>
            <div className="book-preview-content">
                <p>{book.listPrice.amount}{book.listPrice.currencyCode}</p>
                <p>{bookService.getSetPageCount(book.pageCount)}</p>
                <p>{bookService.getPublishedDate(book.publishedDate)}</p>
                <p>{bookService.makeLorem(20)}</p>
            </div>
            {book.listPrice.isOnSale && <span className="sale-sign">On Sale!</span>}
            <Link to={`/book/${book.id}`}>
                <button>Details</button>
            </Link>
            <button onClick={() => onRemoveBook(book.id)} >
                Remove
            </button>
        </article >
    )
}