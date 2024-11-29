// API CONFIG
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

// GET API EMPLOYEES
app.get('/API/employees/json/', (req, res) => {
  res.json([
    {
      "id": 1234567,
      "name": "Carlos Ruiz",
      "address": "Calle 5, Madrid, España",
      "born_in_country": "Española",
      "gender": "Masculino",
      "isAdmin": true,
      "created": "2016-05-10T14:23:15Z"
    },
    {
      "id": 2345678,
      "name": "Laura Martínez",
      "address": "Avenida de la Paz, Bogotá, Colombia",
      "born_in_country": "Colombiana",
      "gender": "Femenino",
      "isAdmin": false,
      "created": "2017-11-23T08:45:30Z"
    },
    {
      "id": 3456789,
      "name": "Andrés García",
      "address": "Calle F, Buenos Aires, Argentina",
      "born_in_country": "Argentina",
      "gender": "Masculino",
      "isAdmin": false,
      "created": "2020-03-11T17:13:00Z"
    },
    {
      "id": 4567890,
      "name": "Sofia López",
      "address": "Carrera 7, Lima, Perú",
      "born_in_country": "Peruana",
      "gender": "Femenino",
      "isAdmin": false,
      "created": "2018-02-14T12:00:45Z"
    },
    {
      "id": 5678901,
      "name": "Miguel Sánchez",
      "address": "Plaza Mayor, Ciudad de México, México",
      "born_in_country": "Mexicana",
      "gender": "Masculino",
      "isAdmin": true,
      "created": "2019-08-20T09:50:20Z"
    },
    {
      "id": 6789012,
      "name": "Gabriela Pérez",
      "address": "Calle 8, Santiago, Chile",
      "born_in_country": "Chilena",
      "gender": "Femenino",
      "isAdmin": false,
      "created": "2021-05-05T16:30:25Z"
    },
    {
      "id": 7890123,
      "name": "Juan Antonio Díaz",
      "address": "Calle A, Caracas, Venezuela",
      "born_in_country": "Venezolana",
      "gender": "Masculino",
      "isAdmin": true,
      "created": "2016-10-12T18:20:50Z"
    },
    {
      "id": 8901234,
      "name": "Ana Gómez",
      "address": "Avenida 9, Quito, Ecuador",
      "born_in_country": "Ecuatoriana",
      "gender": "Femenino",
      "isAdmin": false,
      "created": "2020-09-15T14:45:10Z"
    },
    {
      "id": 9012345,
      "name": "Ricardo Fernández",
      "address": "Calle B, Montevideo, Uruguay",
      "born_in_country": "Uruguaya",
      "gender": "Masculino",
      "isAdmin": true,
      "created": "2017-06-02T11:30:55Z"
    },
    {
      "id": 1234500,
      "name": "Marta Silva",
      "address": "Calle C, San Salvador, El Salvador",
      "born_in_country": "Salvadoreña",
      "gender": "Femenino",
      "isAdmin": false,
      "created": "2022-01-25T10:00:35Z"
    },
    {
      "id": 2345601,
      "name": "Pedro Martínez",
      "address": "Calle D, La Paz, Bolivia",
      "born_in_country": "Boliviana",
      "gender": "Masculino",
      "isAdmin": false,
      "created": "2019-12-30T19:10:15Z"
    },
    {
      "id": 3456702,
      "name": "Carolina Rodríguez",
      "address": "Avenida 15, Asunción, Paraguay",
      "born_in_country": "Paraguaya",
      "gender": "Femenino",
      "isAdmin": true,
      "created": "2018-07-05T13:40:25Z"
    },
    {
      "id": 4567803,
      "name": "Luis Fernández",
      "address": "Calle 2, Guayaquil, Ecuador",
      "born_in_country": "Ecuatoriana",
      "gender": "Masculino",
      "isAdmin": true,
      "created": "2015-11-18T20:15:05Z"
    },
    {
      "id": 5678904,
      "name": "Olga Pérez",
      "address": "Calle 12, Monterrey, México",
      "born_in_country": "Mexicana",
      "gender": "Femenino",
      "isAdmin": false,
      "created": "2016-04-08T17:55:40Z"
    },
    {
      "id": 6789015,
      "name": "Carlos Hernández",
      "address": "Calle E, Lima, Perú",
      "born_in_country": "Peruana",
      "gender": "Masculino",
      "isAdmin": true,
      "created": "2021-02-03T11:10:25Z"
    },
    {
      "id": 7890126,
      "name": "Claudia Morales",
      "address": "Calle 14, Bogotá, Colombia",
      "born_in_country": "Colombiana",
      "gender": "Femenino",
      "isAdmin": false,
      "created": "2023-06-14T16:50:00Z"
    },
    {
      "id": 8901237,
      "name": "Javier Martín",
      "address": "Avenida 16, Buenos Aires, Argentina",
      "born_in_country": "Argentina",
      "gender": "Masculino",
      "isAdmin": false,
      "created": "2015-02-25T09:25:45Z"
    },
    {
      "id": 9012348,
      "name": "Sara Gómez",
      "address": "Calle 20, Santiago, Chile",
      "born_in_country": "Chilena",
      "gender": "Femenino",
      "isAdmin": false,
      "created": "2024-01-15T12:05:50Z"
    },
    {
      "id": 1234599,
      "name": "Alfredo Díaz",
      "address": "Calle 3, San José, Costa Rica",
      "born_in_country": "Costarricense",
      "gender": "Masculino",
      "isAdmin": false,
      "created": "2019-09-10T14:22:35Z"
    },
    {
      "id": 2345700,
      "name": "Isabel Torres",
      "address": "Calle H, Caracas, Venezuela",
      "born_in_country": "Venezolana",
      "gender": "Femenino",
      "isAdmin": false,
      "created": "2018-01-15T13:00:30Z"
    },
    {
      "id": 3456801,
      "name": "David Gómez",
      "address": "Avenida 18, Medellín, Colombia",
      "born_in_country": "Colombiana",
      "gender": "Masculino",
      "isAdmin": true,
      "created": "2020-04-10T17:18:05Z"
    },
    {
      "id": 4567902,
      "name": "Elena González",
      "address": "Calle 10, Quito, Ecuador",
      "born_in_country": "Ecuatoriana",
      "gender": "Femenino",
      "isAdmin": true,
      "created": "2021-11-21T19:33:10Z"
    },
    {
      "id": 5678913,
      "name": "José Rodríguez",
      "address": "Calle 13, Montevideo, Uruguay",
      "born_in_country": "Uruguaya",
      "gender": "Masculino",
      "isAdmin": false,
      "created": "2022-12-03T16:20:05Z"
    },
    {
      "id": 6789024,
      "name": "Raquel Fernández",
      "address": "Calle 4, La Paz, Bolivia",
      "born_in_country": "Boliviana",
      "gender": "Femenino",
      "isAdmin": true,
      "created": "2020-02-10T10:25:35Z"
    },
    {
      "id": 7890135,
      "name": "Felipe García",
      "address": "Avenida 11, Lima, Perú",
      "born_in_country": "Peruana",
      "gender": "Masculino",
      "isAdmin": false,
      "created": "2021-01-21T11:55:00Z"
    },
    {
      "id": 8901346,
      "name": "Verónica Díaz",
      "address": "Calle 19, Santiago, Chile",
      "born_in_country": "Chilena",
      "gender": "Femenino",
      "isAdmin": false,
      "created": "2024-03-18T18:50:15Z"
    },
    {
      "id": 9012457,
      "name": "Martín Pérez",
      "address": "Avenida 2, Ciudad de México, México",
      "born_in_country": "Mexicana",
      "gender": "Masculino",
      "isAdmin": true,
      "created": "2018-04-19T08:40:30Z"
    }
  ])
});

// Server running
app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});
