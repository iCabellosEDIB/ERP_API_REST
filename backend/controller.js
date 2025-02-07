// controller.js

// URL to API
const server_url = 'http://localhost:3000';
let get_employees_URL = '/API/employees/json/';
let get_products_URL = '/API/products/json/';

// UPDATE URL TO CALL SERVICE
let url_employees = server_url.concat(get_employees_URL);
let url_products = server_url.concat(get_products_URL);

// Fetch to API Users
fetch(url_employees)
.then(function(response) {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(function(data) {
    let employees = data.map(employee => ({
        id: employee.id,
        name: employee.name,
        country: employee.born_in_country,
        gender: employee.gender,
        isAdmin: employee.isAdmin,
        createdAt: new Date(employee.created).toLocaleDateString()
    }));
    // CALL PRINT FUNCTIONS HERE
    console.log(employees);
})
.catch(function(error) {
    console.error('Error:', error);
});

fetch(url_products)
.then(function(response) {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(function(data) {
    let products = data.map(product => ({
        id: product.id,
        type: product.type,
        p: product.p,
        price: product.price,
        stock: product.stock
    }));
    // CALL PRINT FUNCTIONS HERE
    printAllProducts(products);
    printRecommendedProduct(products);

})
.catch(function(error) {
    console.error('Error:', error);
});
function printAllProducts(products) {
    let table = document.querySelector("#display_products table:first-of-type");

    // Creamos el encabezado de la tabla
    table.innerHTML = `
        <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Image</th>
        </tr>
    `;

    // Recorremos los productos y los agregamos a la tabla
    products.forEach(product => {
        let row = table.insertRow();
        
        row.innerHTML = `
        <td>${product.p}</td>
        <td>$${product.price}</td>
        <td class="image-cell">
            <img src="../static/img/esports_${product.id}.webp" alt="${product.p}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 8px;">
        </td>
        `;
    });
}

function printRecommendedProduct(products) {
    let filteredProducts = products.filter(product => product.price < 20);

    if (filteredProducts.length === 0) {
        console.warn("No hay productos recomendados disponibles.");
        return;
    }

    // Seleccionamos un producto aleatorio de la lista filtrada
    let randomProduct = filteredProducts[Math.floor(Math.random() * filteredProducts.length)];

    let table = document.querySelector("#display_products table:last-of-type");

    // Creamos el encabezado para el producto recomendado
    table.innerHTML = `
        <tr>
        <th>Name</th>
        <th>Price</th>
        </tr>
    `;

    // Agregamos el producto recomendado a la tabla
    let row = table.insertRow();
    row.innerHTML = `
        <td>${randomProduct.p}</td>
        <td>$${randomProduct.price}</td>
    `;
}