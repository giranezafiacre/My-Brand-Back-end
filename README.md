
# blog-api-backend

[![Build Status](https://travis-ci.org/giranezafiacre/blog-api-backend.svg?branch=develop)](https://travis-ci.org/giranezafiacre/blog-api-backend)

[![Coverage Status](https://coveralls.io/repos/github/giranezafiacre/blog-api-backend/badge.svg?branch=develop)](https://coveralls.io/github/giranezafiacre/blog-api-backend?branch=develop)


# Project Overview

blog-api-backend is  a server side for blog related website

# Deployment

- A heroku app for API can be found at : 
 <a href="https://fiacre-blog-api.herokuapp.com/"> https://fiacre-blog-api.herokuapp.com/</a>
  

# Built With

- Node.js
- Express framework

# users Api Endpoints

- POST    /user                             - Create user account 
- GET     /user/login                       - Login a user
- GET     /user                             - User can get all users                 
- GET     /user/:id                         - User can get specific user  
- PUT     /user/:id                         - User can update his/her information
- DELETE  /user/:id                         - User can delete his/her information 


# blogs Api Endpoints

- POST    /post                              - User can create a blog
- GET     /post                              - User can get all blogs  
- GET     /post/:id                          - User can get a specific blog 
- PUT     /post/:id                          - User can update a blog      
- DELETE  /post/:id                          - User can delete a blog 


# comments Api Endpoints

- POST    /comment                              - User can create a comment
- GET     /comment                              - User can get all comments  
- GET     /comment/:id                          - User can get a specific comment 
- PUT     /comment/:id                          - User can update a comment     
- DELETE  /comment/:id                          - User can delete a comment


# messages Api Endpoints

- POST    /message                              - User can create a message
- GET     /message                              - User can get all messages  
- GET     /message/:id                          - User can get a specific message 
- PUT     /message/:id                          - User can update a message     
- DELETE  /message/:id                          - User can delete a message

# Installation
- Run git clone https://github.com/giranezafiacre/blog-api-backend
- Run npm `install` to download and install all packages
- Run npm `start` to start the server
- Run npm `test` to test all API
- And then Test the end points using postman or your browser

# Contributing
> You can contribute to this project by forking the project  https://github.com/giranezafiacre/blog-api-backend 

> And then submit your changes by creating a new pull request  https://github.com/giranezafiacre/blog-api-backend/compare

### Author

[GIRANEZA Fiacre](https://github.com/giranezafiacre/blog-api-backend)

# Acknowledgments

- [Andela Kigali](https://andela.com/)
