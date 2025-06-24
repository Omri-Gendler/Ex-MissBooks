import { utilService } from "/util.service.js"
import { storageService } from "../services/async-storage.service.js"

const { Link, NavLink } = ReactRouterDOM

export const bookService = {
    query,
    getDefaultFilter,
    makeLorem,
    getSetPageCount,
    getPublishedDate,
    isSale,
    getById,
    remove,
    post,
    makeId,
    getRandomIntInclusive,
}


const BOOK_KEY = 'bookDB'

_createBooks()

// function _createBooks() {
//     let books = JSON.parse(localStorage.getItem(BOOK_KEY))

//     if (!books || !books.length) {
//         const demoBooks = [
//             { id: '1', title: 'Harry Potter', listPrice: { amount: 50, currencyCode: '$' }, thumbnail: `img/1.jpg` },
//             { id: '2', title: makeLorem(), listPrice: { amount: 80, currencyCode: '$' }, thumbnail: `img/2.jpg` },
//             { id: '3', title: makeLorem(), listPrice: { amount: 80, currencyCode: '$' }, thumbnail: `img/3.jpg` },
//             { id: '4', title: makeLorem(), listPrice: { amount: 80, currencyCode: '$' }, thumbnail: `img/4.jpg` },
//             { id: '5', title: makeLorem(), listPrice: { amount: 80, currencyCode: '$' }, thumbnail: `img/5.jpg` },
//             { id: '6', title: makeLorem(), listPrice: { amount: 80, currencyCode: '$' }, thumbnail: `img/6.jpg` },
//             { id: '7', title: makeLorem(), listPrice: { amount: 80, currencyCode: '$' }, thumbnail: `img/7.jpg` },
//             { id: '8', title: makeLorem(), listPrice: { amount: 80, currencyCode: '$' }, thumbnail: `img/8.jpg` },
//             { id: '9', title: makeLorem(), listPrice: { amount: 80, currencyCode: '$' }, thumbnail: `img/9.jpg` },
//             { id: '10', title: makeLorem(), listPrice: { amount: 80, currencyCode: '$' }, thumbnail: `img/10.jpg` },
//         ]
//         localStorage.setItem(BOOK_KEY, JSON.stringify(demoBooks))
//     }
// }

function _createBooks() {
    let books = JSON.parse(localStorage.getItem(BOOK_KEY))

    if (!books || !books.length) {


        const ctgs = ['Love', 'Fiction', 'Poetry', 'Computers', 'Religion']
        const books = []
        for (let i = 0; i < 20; i++) {
            const book = {
                id: utilService.makeId(),
                title: utilService.makeLorem(2),
                subtitle: utilService.makeLorem(4),
                authors: [
                    utilService.makeLorem(1)
                ],
                publishedDate: utilService.getRandomIntInclusive(1950, 2024),
                description: utilService.makeLorem(20),
                pageCount: utilService.getRandomIntInclusive(20, 600),
                categories: [ctgs[utilService.getRandomIntInclusive(0, ctgs.length - 1)]],
                thumbnail: `img/${i + 1}.jpg`,
                language: "en",
                listPrice: {
                    amount: utilService.getRandomIntInclusive(80, 500),
                    currencyCode: "EUR",
                    isOnSale: Math.random() > 0.7
                }
            }
            books.push(book)
        }
        localStorage.setItem(BOOK_KEY, JSON.stringify(books))
        console.log('books', books)
    }
}


function query() {
    return storageService.query(BOOK_KEY)
}

function getDefaultFilter() {
    return { title: '', maxPrice: '' }
}

function makeLorem() {
    return utilService.makeLorem(2)
}

function makeId() {
    return utilService.makeId(5)
}

function getRandomIntInclusive() {
    return utilService.getRandomIntInclusive(20, 600)
}

function remove(BOOK_KEY, bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function post(newBook) {
    return storageService.post(BOOK_KEY, newBook)
}

function getSetPageCount(pageCount) {
    if (pageCount > 500) return 'Difficult'
    if (pageCount > 200) return 'Medium'
    if (pageCount > 100) return 'Easy'
}

function getPublishedDate(publishDate) {
    if (publishDate > new Date() + 10) return 'Vintage'
    if (publishDate < new Date() - 1) return 'New'
}

function isSale(isOnSale) {
    if (isOnSale) return 'Sale'
}

function getById(bookId) {
    return storageService.get(BOOK_KEY, bookId);
}

