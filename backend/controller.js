// controller.js

// URL to API
const server_url = 'http://localhost:3000';
let get_employees_URL = '/API/employees/json';
// UPDATE URL TO CALL SERVICE
let url = server_url.concat(get_employees_URL);

// Fetch to API Users

fetch(url)
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
