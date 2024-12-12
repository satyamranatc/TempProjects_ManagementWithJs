let CartList = document.getElementById('CartList');


let a = localStorage.getItem('cartItems');

a = JSON.parse(a);

for (let i of a)
{
    let li = document.createElement('li');
    li.innerText = i.title;
    CartList.appendChild(li);
}