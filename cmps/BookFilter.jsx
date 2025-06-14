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
        <section>
            <h2>Filter Our Books</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Title:</label>
                <input className="input"
                    type="text"
                    id="title"
                    name="title"
                    value={filterBy.title}
                    onChange={handleChange}
                />

                <label htmlFor="maxPrice">Max Price:</label>
                <input className="input"
                    type="number"
                    id="maxPrice"
                    name="maxPrice"
                    value={filterBy.maxPrice}
                    onChange={handleChange}
                />
            </form>
        </section>
    );
}