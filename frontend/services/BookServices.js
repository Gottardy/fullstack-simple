class BookService{
    constructor(){
        this.URI = 'http://localhost:8081/api/books'
    }

    async getBooks(){
        const response = await fetch(this.URI);
        const books = await response.json();
        return books;
    }

    async postBook(book){
        const response = await fetch(this.URI,{
            method:'POST',
            body: book
        });
        const data = await response.json();
        console.log(data);
        return data;
    }

    async deleteBook(bookID){
        const response = await fetch(`${this.URI}/${bookID}`,{
            headers:{
                'Content-Type':'application/json'
            },
            method:'DELETE'
        });
        const data = await response.json();
        console.log(data);
        return data;
    }
}

module.exports = BookService