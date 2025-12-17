let books = [];

function renderBooks() {
const tbody = document.querySelector("#bookTable tbody");
tbody.innerHTML = "";
books.forEach((book, index) => {
const row = document.createElement("tr");
row.innerHTML = `<td>${book.title}</td><td>${book.author}</td>
<td><button onclick="deleteBook(${index})">Delete</button></td>`;
tbody.appendChild(row);
});
}

function addBook(title, author) {
if(title.trim() === "" || author.trim() === "") {
alert("Please enter both Title and Author!");
return;
}
books.push({title, author});
renderBooks();
}

function deleteBook(index) {
books.splice(index, 1);
renderBooks();
}

document.getElementById("bookForm").addEventListener("submit", function(e){
e.preventDefault();
const title = document.getElementById("title").value;
const author = document.getElementById("author").value;
addBook(title, author);
this.reset();
});