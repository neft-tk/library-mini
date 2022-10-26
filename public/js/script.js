
const allBooksEl = document.querySelector('#allBooks');
const submitBtnEl = document.querySelector('#submitBtn');
const bookIdEl = document.querySelector('#bookId');
const bookTitleEl = document.querySelector('#bookTitle');
const bookAuthorEl = document.querySelector('#bookAuthor');

fetch("/books").then(res=>{
    return res.json()
}).then(data=>{
    console.log(data);
    data.forEach(book=>{
        const newLi = document.createElement('li');
        newLi.textContent = book.name
        allBooksEl.append(newLi)
    })
});

submitBtnEl.addEventListener("submit",e=>{
    e.preventDefault();
    const dataObj ={
        id:parseInt(bookIdEl.value),
        title:bookTitleEl.value,
        author: bookAuthorEl.value,
    }
    console.log(dataObj);
    fetch("/books",{
        method:"POST",
        body:JSON.stringify(dataObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        } 
    })
})