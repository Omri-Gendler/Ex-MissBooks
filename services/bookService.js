import { utilService } from "/util.service.js"
import { storageService } from "../services/async-storage.service.js"

export const bookService = {
    query,
    getDefaultFilter,
    // getById,
}

const BOOK_KEY = 'bookDB'


function query() {
    return storageService.query(BOOK_KEY)
}

function getDefaultFilter() {
    return { title: '', maxPrice: '' }
}

// Demo date 
export const demoData = [
    { id: '1', title: 'Harry Potter', listPrice: '50$' },
    { id: '2', title: 'Elon Musk', listPrice: '50$' },
]
