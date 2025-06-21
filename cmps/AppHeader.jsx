
const { Link, NavLink } = ReactRouterDOM



export function AppHeader() {
    return (
        <header className="app-header container">

            <section>
                <h1>React Car App</h1>
                <nav className="app-nav">
                    <NavLink to="/home" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/book" >Cars</NavLink>
                </nav>
            </section>

        </header>
    )
}