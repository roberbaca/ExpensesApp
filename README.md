# ExpensesApp
Expenses Tracker app - PostgreSQL + Prisma + Heroku


# Endpoints - Category

POST - Crear una nueva categoria:
https://expenses-tracker-nucba.herokuapp.com/api/category/add 

GET - Consultar el listado de todos las categorias creadas:
https://expenses-tracker-nucba.herokuapp.com/api/category/all 


# Endpoints - Expenses

POST - Crear un nuevo gasto:
https://expenses-tracker-nucba.herokuapp.com/api/expenses/add

Ejemplo:

{    
    "title": "circo",
    "amount": 6.74,
    "category": 4
}


GET - buscar todos los gastos de una determinada categoria
https://expenses-tracker-nucba.herokuapp.com/api/expenses/search

Ejemplo:

{
    "category": 4
}
 
GET - Consultar el monto total:
https://expenses-tracker-nucba.herokuapp.com/api/expenses/balance

 
GET - Consultar el monto total de una determinada categoria:
https://expenses-tracker-nucba.herokuapp.com/api/expenses/balance-by-category

Ejemplo:

{
    "category": 3
}


GET - Consultar el listado de todos los gastos creados:
https://expenses-tracker-nucba.herokuapp.com/api/expenses/all

