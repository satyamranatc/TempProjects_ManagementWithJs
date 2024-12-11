let BookContainer = document.getElementById("BookContainer");

let allBooks = [
    { title: "Book 1", author: "Author 1",price:623, poster: "https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg" },
    { title: "Book 2", author: "Author 2",price:213, poster: "https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg" },
    { title: "Book 3", author: "Author 3",price:905, poster: "https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg" },
    { title: "Book 4", author: "Author 4",price:983, poster: "https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg" },
    { title: "Book 5", author: "Author 5",price:763, poster: "https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg" }
]

function DisplayAllBooksData(arr)
{

    for(let i of arr)
    {
        BookContainer.innerHTML += `
            <div class="BookCard">
                <img src="${i.poster}" alt="Book Cover">
                <div class="BookInfo">
                    <h3>${i.title}</h3>
                    <p>${i.author}</p>
                    <p>${i.price}$</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `

    }

}

DisplayAllBooksData(allBooks);




