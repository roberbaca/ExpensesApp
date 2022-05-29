# ExpensesApp
Expenses Tracker app - PostgreSQL + Prisma + Heroku :rocket:


# Endpoints - Category

:heavy_check_mark: POST - Crear una nueva categoria:
https://expenses-tracker-nucba.herokuapp.com/api/category/add 

:heavy_check_mark: GET - Consultar el listado de todos las categorias creadas:
https://expenses-tracker-nucba.herokuapp.com/api/category/all 


# Endpoints - Expenses

:heavy_check_mark: POST - Crear un nuevo gasto:
https://expenses-tracker-nucba.herokuapp.com/api/expenses/add

Ejemplo:

{    
    "title": "circo",
    "amount": 6.74,
    "category": 4
}


:heavy_check_mark: GET - buscar todos los gastos de una determinada categoria
https://expenses-tracker-nucba.herokuapp.com/api/expenses/search

Ejemplo:

{
    "category": 4
}
 
:heavy_check_mark: GET - Consultar el monto total:
https://expenses-tracker-nucba.herokuapp.com/api/expenses/balance

 
:heavy_check_mark: GET - Consultar el monto total de una determinada categoria:
https://expenses-tracker-nucba.herokuapp.com/api/expenses/balance-by-category

Ejemplo:

{
    "category": 3
}


:heavy_check_mark: GET - Consultar el listado de todos los gastos creados:
https://expenses-tracker-nucba.herokuapp.com/api/expenses/all

