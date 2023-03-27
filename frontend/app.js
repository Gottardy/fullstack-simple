require('./styles/styles.css')
const BookServices = require('./services/BookServices');

document.getElementById('book-form').addEventListener('submit', (e)=>{
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const image = document.getElementById('image').files;
    console.log('El form-book',title,author,isbn,image);

    const formBook = new FormData();
    formBook.append('title',title);
    formBook.append('author',author);
    formBook.append('isbn',isbn);
    formBook.append('image',image[0]);

    const bookservices = new BookServices();
    // console.log('enviando request POST:\n',formBook)
    bookservices.postBook(formBook);
})