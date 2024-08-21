export class User {
    constructor() {
        this.books = [];
    }

    borrow(book, library) {
        if(library.getBooks().includes(book)){
            this.books.push(book);
            library.removeBook(book);
            return true;
        }
        return false;
    }

    hasBook(book) {
        return this.books.includes(book);
    }

    return(book, library) {
        if(this.books.includes(book) && !library.getBooks().includes(book)){
            this.books = this.books.filter(b => b !== book);
            library.addBook(book);
            return true;
        }
        return false;
    }

    getBookNames() {
        let bookNames = [];
        for(const book of this.books){
            bookNames.push(book.name);
        }
        return bookNames;
    }
}