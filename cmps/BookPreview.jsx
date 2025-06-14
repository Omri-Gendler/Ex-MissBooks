export function BookPreview({ book }) {
    return (
        <article className="book-preview">

            <img className="img" src={book.thumbnail}/>

            <h3>{book.title}</h3>

            <p>Price: {book.listPrice.amount}{book.listPrice.currencyCode}</p>

        </article>
    )
}