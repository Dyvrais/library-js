let table = document.getElementById("table");
let submitBtn = document.querySelector(".submit-btn");
let list = document.getElementById("book-list");
let read = document.getElementById("read");
    let notread = document.getElementById("not-read");

function bookEntry (name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
}


function addBookToList(book){
    const row = document.createElement("tr");
    
    let result = "";

    if (read.checked == true){
         result = read.value + "";
    } else if (notread.checked == true) {
         result = notread.value + "";
    }
    console.log(result);
    row.innerHTML = `
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${result}</td>
        <td><input type="button" value="Remove" class="remove" onclick="removeBook(this)"></input></td>
    `;

    list.appendChild(row);
}

function clearFields(){
    document.querySelector('.name').value = '';
    document.querySelector('.author').value = '';
    document.querySelector('.pages').value = '';
    read.checked = false;
    notread.checked = false;
}

function removeBook(btn){
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault;

    const title = document.querySelector(".name").value;
    const author = document.querySelector(".author").value;
    const pages = document.querySelector(".pages").value;

    if (title == "" || author == "" || pages == ""){
        alert("Please fill all the fields");
    } else {
        const book = new bookEntry(title, author, pages);

        addBookToList(book);

        clearFields();
    }
});
