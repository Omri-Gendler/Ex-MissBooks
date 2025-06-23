
import { AppHeader } from "./cmps/AppHeader.jsx"
// import { NotFound } from "./cmps/NotFound.jsx"
import { HomePage } from "./cmps/HomePage.jsx"
import { AboutUs } from "./cmps/AboutUs.jsx"
import { BookIndex } from "./cmps/BookIndex.jsx"
import { BookDetails } from "./cmps/BookDetails.jsx"
import { BookAdd } from "./cmps/BookAdd.jsx"
// import { Team } from "./cmps/Team.jsx"
// import { Vision } from "./cmps/Vision.jsx"
// import { CarDetails } from "./pages/CarDetails.jsx"
// import { CarEdit } from "./pages/CarEdit.jsx"
// import { UserMsg } from "./cmps/UserMsg.jsx"

const Router = ReactRouterDOM.HashRouter
const { Routes, Route, Navigate } = ReactRouterDOM
// const Router = ReactRouterDOM.BrowserRouter

export function RootCmp() {

    return (
        <Router>
            <section className="app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/book" element={<BookIndex />} />
                        <Route path="/book/:bookId" element={<BookDetails />} />
                        {/* <Route path="/car/:carId" element={<CarDetails />} />
                        <Route path="/car/edit" element={<CarEdit />} />
                        <Route path="/car/edit/:carId" element={<CarEdit />} /> */}

                        {/* <Route path="*" element={<NotFound />} /> */}
                    </Routes>
                </main>
                {/* <UserMsg /> */}
            </section>
        </Router>
    )
} 