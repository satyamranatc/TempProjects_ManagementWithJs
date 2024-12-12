let BookContainer = document.getElementById("BookContainer");

let cartItems = [];

let allBooks = [
  {
    title: "Book 1",
    author: "Author 1",
    price: 623,
    poster:
      "https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg",
  },
  {
    title: "Book 2",
    author: "Author 2",
    price: 213,
    poster:
      "https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg",
  },
  {
    title: "Book 3",
    author: "Author 3",
    price: 905,
    poster:
      "https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg",
  },
  {
    title: "Book 4",
    author: "Author 4",
    price: 983,
    poster:
      "https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg",
  },
  {
    title: "Book 5",
    author: "Author 5",
    price: 763,
    poster:
      "https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg",
  },
];

function DisplayAllBooksData(arr) {
  for (let i of arr) {
    let BookCard = document.createElement("div");
    BookCard.classList.add("BookCard");
    BookCard.innerHTML += `
        <img src="${i.poster}" alt="Book Cover">
        `;
    let BookInfo = document.createElement("div");
    BookInfo.classList.add("BookInfo");
    BookInfo.innerHTML += `
            <div class="BookInfo">
                    <h3>${i.title}</h3>
                    <p>${i.author}</p>
                    <p>${i.price}$</p>
                </div>
        `;
    let CartBtn = document.createElement("button");
    CartBtn.innerText = "Add to Cart";
    CartBtn.onclick = ()=>{
        cartItems.push(i);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };

    BookInfo.appendChild(CartBtn);
    BookCard.appendChild(BookInfo);

    BookContainer.appendChild(BookCard);
  }
}

DisplayAllBooksData(allBooks);

function A() {
  console.log("Jiiii");
}
