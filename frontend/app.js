require('./styles/styles.css')
const UI = require('./UI');

document.addEventListener('DOMContentLoaded', ()=>{
    const ui = new UI();
    ui.renderBooks();
    
});

document.getElementById('book-form').addEventListener('submit', (e) =>{
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const image = document.getElementById('image').files;
    // console.log('El form-book',title,author,isbn,image);

    const formBook = new FormData();
    formBook.append('title',title);
    formBook.append('author',author);
    formBook.append('isbn',isbn);
    formBook.append('image',image[0]);

    const ui = new UI();
    ui.addNewBook(formBook);
    ui.rederMessage('New Book Added','success',3000);
    
});

document.getElementById('books-cards').addEventListener('click', (e) =>{
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        const ui = new UI();
        ui.deleteBook(e.target.getAttribute('_id'))
        // console.log(e.target.getAttribute('_id'))
        ui.rederMessage('Book Deleted','danger',3000);
    }
    
});