import { utilService } from "/util.service.js"
import { storageService } from "../services/async-storage.service.js"

export const bookService = {
    query,
    // getById,
}

const BOOK_KEY = 'bookDB'


function query() {
    return storageService.query(BOOK_KEY)
}

// Demo date 
export const demoData = [
    { id: '1', title: 'Harry Potter', listPrice: '50$' },
    { id: '2', title: 'Elon Musk', listPrice: '50$' },
]
