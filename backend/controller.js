// controller.js

// URL to API (reemplaza con la URL de tu API)
var url = 'http://localhost:3000/API/employees/json';

// Fetch to API Users
fetch(url)
.then(function(response) {
    if (!response.ok) {
      throw new Error(response.ok);
    }
    console.log(response);
    console.log(response.json);
    return response.json();
})
.then(function(data) {
    printEmployees(data);
})
.catch(function(error) {
    console.error('Error:', error);
});


function printEmployees() {
    // CODE HERE
}

function printYourFavoriteEmployee() {
    // CODE HERE
}
