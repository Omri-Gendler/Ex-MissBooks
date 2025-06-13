const { useState, useEffect } = React

export function BooksFilter({ defaultFilter, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState({ ...defaultFilter })

    const { title, maxPrice } = filterByToEdit

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        const value = target.value

        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    return (
        <section>
            <h2>Filter our cars</h2>

            <form>
                <label htmlFor="title">Book title</label>
                <input onChange={handleChange} value={title} name="title" id="title" />

                <label htmlFor="maxPrice">Book price</label>
                <input onChange={handleChange} value={maxPrice} name="maxPrice" id="maxPrice" type="number" />

                <button>Submit</button>
            </form>
        </section>
    )
}