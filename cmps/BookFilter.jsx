export function BooksFilter({ filterBy, onSetFilter }) {

    function handleChange({ target }) {
        let { name: field, value, type } = target

        if (type === 'number') {
            value = +value || ''
        }

        onSetFilter({ ...filterBy, [field]: value })
    }

    function onSubmit(ev) {
        ev.preventDefault()
    }

    return (
        <section className="book-filter">
            <h2>Filter Our Books</h2>
            <form className="form-row" onSubmit={onSubmit}>
                <div className="input-group">

                    <label htmlFor="title">Title:</label>
                    <input className="input"
                        type="text"
                        id="title"
                        name="title"
                        value={filterBy.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-group">

                    <label htmlFor="maxPrice">Max Price:</label>
                    <input className="input"
                        type="number"
                        id="maxPrice"
                        name="maxPrice"
                        value={filterBy.maxPrice}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </section>
    );
}