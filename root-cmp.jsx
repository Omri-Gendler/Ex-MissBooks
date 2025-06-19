const { useState } = React

import { HomePage } from "./cmps/HomePage.jsx"
import { AppHeader } from "./cmps/AppHeader.jsx"
import { AboutUs } from "./cmps/AboutUs.jsx"
import { BookIndex } from "./cmps/BookIndex.jsx"

const Router = ReactRouterDom.HashRouter
const { Routes, Route } = ReactRouterDom

export function RootCmp() {

    const [page, setPage] = useState('books')

    return (
        <Router>
            <section className="app">
                <AppHeader onSetPage={(page) => setPage(page)} />
                <main className="content-grid">
                    <Routes>
                        <Route path="/" element={<Navigate to="/Home" />} />
                        <Route path="/Home" element={<HomePage />} />
                        <Route path="/About" element={<AboutUs />} />
                        <Route path="/book" element={<BookIndex />} />

                        <Route path="/*" />
                    </Routes>
                </main>
            </section>
        </Router>
    )
}