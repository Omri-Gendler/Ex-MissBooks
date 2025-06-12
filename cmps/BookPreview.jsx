

export function BookPreview({ book }) {
    return (
        <div className="books-preview-container">
            {book.title}
            {book.id}
            {book.listPrice}
        </div>
    )
}