class Library {
    constructor() {
        this.shelf = [];
    }

    shelve(book) {
        const err = "The arguement to shelve method must be an object.";
        if (typeof book !== 'object') throw err;
        this.shelf.push(book);
        this.shelf.sort((book1, book2) => (book1.title > book2.title ? 1 : -1))
        return this;
    }

    findByTitle(str) {
        for (let book of this.shelf) {
            if (book.title.toLowerCase().includes(str.toLowerCase())) {
                return console.log(book);
            }
        }
    }

    list() {
        return console.log(this.shelf);
    }

}

class Book {
    constructor(title, author, edition) {
        this.title = title;
        this.author = author;
        this.edition = edition;
    }
}

const eloquentJS = new Book("Eloquent Javascript", ["Marijn Haverbeke"], 3);
const speakingJS = new Book("Speaking JavaScript", ["Dr. Axel Rauschmayer"], 1);
const theRustProgLang = new Book("The Rust Programming Language", ["Steve Klabnik", "Carol Nichols"], 2);


const myLibrary = new Library();

myLibrary.shelve(theRustProgLang).shelve(speakingJS).shelve(eloquentJS);
console.log(myLibrary)

console.log('\n\nSearch Result: \n');
myLibrary.findByTitle('Java')

console.log('\n\nList of Books: \n');
myLibrary.list();
