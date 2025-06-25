
import { AppHeader } from "./cmps/AppHeader.jsx"
import { HomePage } from "./cmps/HomePage.jsx"
import { BookIndex } from "./cmps/BookIndex.jsx"
import { BookDetails } from "./cmps/BookDetails.jsx"
import { BackButton } from "./cmps/BackButton.jsx"
import { UserMsg } from "./cmps/UserMsg.jsx"

const Router = ReactRouterDOM.HashRouter
const { Routes, Route, Navigate } = ReactRouterDOM

export function RootCmp() {

    return (
        <Router>
            <section className="app">
                <AppHeader />
                <BackButton />
                <main>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/book" element={<BookIndex />} />
                        <Route path="/book/:bookId" element={<BookDetails />} />
                        {/* <Route path="/book" element={bookService.onBack} /> */}
                        {/* <Route path="/car/:carId" element={<CarDetails />} />
                        <Route path="/car/edit" element={<CarEdit />} />
                        <Route path="/car/edit/:carId" element={<CarEdit />} /> */}

                        {/* <Route path="*" element={<NotFound />} /> */}
                    </Routes>
                </main>
                <UserMsg />
            </section>
        </Router>
    )
} 