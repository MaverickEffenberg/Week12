API TEST COMMANDS (POSTMAN)

CUSTOMERS

POST    http://localhost:3000/api/customers
GET     http://localhost:3000/api/customers
GET     http://localhost:3000/api/customers/:id
PUT     http://localhost:3000/api/customers/:id
DELETE  http://localhost:3000/api/customers/:id

RESTAURANTS

POST    http://localhost:3000/api/restaurants
GET     http://localhost:3000/api/restaurants
GET     http://localhost:3000/api/restaurants?status=open
GET     http://localhost:3000/api/restaurants?status=closed
GET     http://localhost:3000/api/restaurants/:id
PUT     http://localhost:3000/api/restaurants/:id
DELETE  http://localhost:3000/api/restaurants/:id


ORDERS

POST    http://localhost:3000/api/orders
GET     http://localhost:3000/api/orders
GET     http://localhost:3000/api/orders/:id
GET     http://localhost:3000/api/orders?customerId=1
GET     http://localhost:3000/api/orders?restaurantId=1
DELETE  http://localhost:3000/api/orders/:id

