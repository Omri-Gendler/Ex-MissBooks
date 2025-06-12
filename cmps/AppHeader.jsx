
export function AppHeader({ onSetPage }) {

    return (
        <header>
            <section className="app-header">
                <h1>Miss Books</h1>
                <nav>
                    <a onClick={() => onSetPage('home')}>Home</a>
                    <a onClick={() => onSetPage('about')}>About</a>
                    <a onClick={() => onSetPage('books')}>Books</a>
                </nav>
            </section>
        </header>
    )
}