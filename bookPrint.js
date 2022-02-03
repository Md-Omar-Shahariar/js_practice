function bookPrint(book1,book2,book3){
    const book1Pages = 100
    const book2Pages = 200
    const book3Pages = 300

    let totalBook1Pages = book1 * book1Pages
    let totalBook2Pages = book2 *book2Pages
    let totalBook3Pages = book3 *book3Pages

    let totalPages = totalBook1Pages + totalBook2Pages +totalBook3Pages
    return totalPages
}

console.log(bookPrint(1,2,1));