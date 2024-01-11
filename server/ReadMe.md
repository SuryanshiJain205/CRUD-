Book Management REST API

This Node.js application provides a RESTful API for managing books using Express.js and MySQL. We can perfrom CRUD operations on books by interacting with the provided endpoints.

#Project Description
This Node.js application allows users to perfrom Create,Read,Update and Delete (CRUD) operations on book records. The book data is stored in a MySQL database.
-Retreive all books.
-Retrieve a specific book by its ID.
-Create a new book
-Update an existing book by its ID.
-Delete a book by its ID.

#Dependencies to be installed:
-Node.js
-npm
-MySQL server
-Postman

npm install express mysql2 body-parser
npm install -g nodemon

#DATABASE setup

host:localhost
user:root
password:12345
database:booksdb

#creating a table

CREATE TABLE books (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255) NOT NULL,
author VARCHAR(255) NOT NULL,
genre VARCHAR(255) NOT NULL,
publication_year INT NOT NULL
);

#Starting a server
nodemon index.js

#API endpoints

1. GET /books
   = to get all the books.

2. GET /books/:id
   = to get a particular book with an id.

3. POST /books
   = to create a new book by sending a json request with the book details(title,author_name,genre,publication_year).

4. PUT /books/:id
   = to update a particular record of a book by sending a json request body containing the updated book details.

5. DELETE /books/:id
   = to delete a particular book by its ID.

#SAMPLE REQUEST
POST /books

{
"title": "The Great Gatsby",
"author": "F. Scott Fitzgerald",
"genre": "Classic",
"publication_year": 1925
}

PUT /books/:id
{
"title": "Updated Book Title",
"author": "New Author Name",
"genre": "Updated Genre",
"publication_year": 2022
}
