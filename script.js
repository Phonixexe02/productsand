
// api= application programming interface
// the functions that are called with in another function are called callback functions



const products = [
    {
        id: 1,
        name: "Product 1",
        price: 10.99,
        image: "./public/coke.jpg", 
        description: "This is product 1"
    },

    {
        id: 2,
        name: "Product 2",
        price: 9.99,
        image: "./public/camera.jpg",
        description: "This is product 2"
    },

    {
        id: 3,
        name: "Product 3",
        price: 12.99,
        image: "./public/watch.jpg",
        description: "This is product 3"
    }
];

const productlist = document.getElementById("product-list");
// const productslength = products.length;
products.forEach(products => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");
    productItem.innerHTML = `
    <h2>${products.name}</h2>
     <img src="${products.image}" alt="${products.name}">
    <p>Price: $${products.price}</p>
    <p>${products.description}</p>
    <button class="btn">Add to Cart</button>
    <button class="btn">Buy Now</button>
    <button class="btn">Wishlist</button>
    `;
    productlist.appendChild(productItem);
}
)