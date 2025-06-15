

function getBookLevelPages({ pageCount }) {
    if (pageCount > 500) {
        console.log('Difficult')
        return 'Difficult'
    } else if (pageCount > 300) {
        console.log('Difficult')
        return 'Medium'
    } else if (pageCount > 150) {
        console.log('Difficult')
        return 'Easy'
    } else {
        return ''
    }
}