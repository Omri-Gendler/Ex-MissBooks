import { utilService } from "/util.service.js"
import { storageService } from "../services/async-storage.service.js"

export const bookService = {
    query,
    getDefaultFilter,
    // getById,
}


const BOOK_KEY = 'bookDB'

_createBooks()

function _createBooks() {
    let books = JSON.parse(localStorage.getItem(BOOK_KEY))

    if (!books || !books.length) {
        const demoBooks = [
            { id: '1', title: 'Harry Potter', listPrice: { amount: 50, currencyCode: '$' }, thumbnail: 'img/1.jpg' },
            { id: '2', title: 'Elon Musk', listPrice: { amount: 80, currencyCode: '$' }, thumbnail: '/img/2.jpg' },
        ]
        localStorage.setItem(BOOK_KEY, JSON.stringify(demoBooks))
    }
}


function query() {
    return storageService.query(BOOK_KEY)
}

function getDefaultFilter() {
    return { title: '', maxPrice: '' }
}

