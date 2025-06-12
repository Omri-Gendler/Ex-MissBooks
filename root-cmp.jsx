const { useState } = React

import { HomePage } from "./cmps/HomePage.jsx"
import { AppHeader } from "./cmps/AppHeader.jsx"
import { AboutUs } from "./cmps/AboutUs.jsx"
import { BookIndex } from "./cmps/BookIndex.jsx"

export function RootCmp() {

    const [page, setPage] = useState('home')

    return (
        <section>
            <AppHeader onSetPage={(page) => setPage(page)} />
            <main>
                {page === 'home' && <HomePage />}
                {page === 'about' && <AboutUs />}
                {page === 'books' && <BookIndex />}
            </main>
        </section>
    )
}