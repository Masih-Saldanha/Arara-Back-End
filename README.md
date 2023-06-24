<p align="center">
  <a href="https://github.com/$username-github/$nome-repositorio">
    <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4ac.svg" alt="readme-logo" width="80" height="80"> <!-- src="image-link" -->
  </a>

  <h3 align="center">
    Certi Amazônia Chat Back-end
  </h3>
</p>

## Description

This is the back-end of the application Certi Amazonia Chat.

## Database deploy link

https://certi-amazonia-chat.onrender.com/

## Usage

```bash
$ git clone https://github.com/Masih-Saldanha/Certi-Amazonia-Chat-Back-End.git

$ cd Certi-Amazonia-Chat-Back-End

$ npm install

$ npm run dev
```

## API:

### Auth Routes:

```
- POST /auth/signup
    - Route to register a user (username of at least 3 characters and password of at least 8 characters with at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character)
    - headers: {}
    - body: {
        "username": "Some username",
        "password": "1Password!"
    }
```
```
- POST /auth/signin
    - Route for the user to log in and receive a token through the response body
    - headers: {}
    - body: {
        "username": "Some username",
        "password": "1Password!"
    }
```
    
### Comment Routes:

```
- POST /comment/register
    - Route for user to register a comment in chat
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {
        "comment": "Testing comments",
        "userId": 1
    }
```
```
- PUT /comment/edit
    - Route for user to edit an own comment in chat
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {
        "comment": "Testing comments",
        "userId": 1,
        "commentId": 1
    }
```
```
- DELETE /comment/delete/:commentId
    - Route for user to delete an own comment in chat
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
```
```
- GET /comment/get/:page
    - Route for user to retrieve chat comments by pagination. Eg: if comments size is 30 (0 - 29), 'page = 0' returns comments from 20 to 29, 'page = 1' returns comments from 10 to 19 and so on
    - headers: {
        "Authorization": "Bearer token"
    }
    - body: {}
```
