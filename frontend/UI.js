const BookServices = require('./services/BookServices');
const bookservices = new BookServices();
const { format } = require('timeago.js');

class UI{

    async renderBooks(){
        const listBooks = await bookservices.getBooks();
        // console.log(listBooks);
        const booksCardContainer = document.getElementById('books-cards');
        booksCardContainer.innerHTML='';
        listBooks.forEach(book => {
            const div = document.createElement('div');
            div.className='';
            div.innerHTML=`
            <div class="card mb-2">
                <div class="row">
                    <div class="col-md-4 py-4">
                        <img src="http://localhost:8081${book.imagePath}" alt="" class="img-fluid img-thumbnail"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body px-2">
                            <h4 class="card-title">${book.title}</h4>
                            <p class="card-text">${book.author}</p>
                            <a href="#" class="btn btn-danger delete" _id="${book._id}">X</a>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    ${format(book.create_at)}
                </div>
            </div>            
            `;
            booksCardContainer.appendChild(div);
        });
    }

    

    async addNewBook(book){
        await bookservices.postBook(book);
        this.clearFormBook();
        this.renderBooks();
    }

    clearFormBook(){
        document.getElementById('book-form').reset()
    }

    rederMessage(message, colorMessage, secondsToHide){
        const div = document.createElement('div');
        div.className=`alert alert-${colorMessage} message`;
        div.append(document.createTextNode(message));

        const container = document.querySelector('.col-md-4');
        const bookForm = document.querySelector('#book-form');

        container.insertBefore(div,bookForm);
        setTimeout(()=>{
            document.querySelector('.message').remove();
        }, secondsToHide);
    }

    async deleteBook(bookID){
        await bookservices.deleteBook(bookID);
        this.renderBooks();
    }
}

module.exports = UI