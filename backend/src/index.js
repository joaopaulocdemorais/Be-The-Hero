const express = require ('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/* 
    Metodos HTTP:
    O metodo GET busca uma informação no back-end
    O metodo POST cria uma informação no back-end
    O metodo PUT altera uma informação back-end
    O metodo DELETE deleta uma informação no back-end 
*/

/* 
    Tipos de parenamentros: 

    Query Params: Parâmetros nomeados enviados nas rotas após o "?", (Filtros, Pagianção)
    Route Params: Parãmetros ultilizados para indentificar recursos
    Request Body: Corpo da requisição, ultilizado para criar ou alterar recursos
*/

/* 
    Bancos de dados

    SQL: MuSQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    NoSQL: MongoDB, CouchDB, etc
*/

/* 
    Driver: SELECT * FROM users
    Query Builder: table('users').select('*').where()
*/