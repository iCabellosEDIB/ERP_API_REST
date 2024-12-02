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
    // CALL FUNCTIONS TO PROCESS DATA HERE
})
.catch(function(error) {
    console.error('Error:', error);
});


// TEST 1

function printEmployeesSortedByID(employees) {
    // CODE HERE
}

function printARandomWoman(employee) {
    /**
    Print a random Female Employee
    */
    // CODE HERE
}

function printARandomMen(employee) {
    /**
    Print a random Male Employee
    */
    // CODE HERE
}

// TEST 2

function selectAllUsersFromACountry(country, employees) {
    // CODE HERE
}
