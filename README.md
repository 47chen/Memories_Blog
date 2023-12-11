# Memories

Memories is a full-stack social media web application, where users can add/delete/update/like the posts and view others' posts.

## Link

[Memories Live Site](https://655f892c12e90f1675d6c142--merry-crostata-197f9d.netlify.app/posts) currently deployed on Netlify.

## Content

- [Installation](#Installation)
- [.env example](#.env-example)
- [Features](#Features)
- [Tack Stack](#Tack-Stack)
- [Database Schema](#Database-Schema)

## Installation

Clone the repo from the following command

```bash
git clone https://github.com/47chen/Memories_Blog.git
```

Direct to client folder and server folder to install needed packages.

```bash
cd client
cd server
```

Then use the package manager npm to install all needed packages.

```bash
npm install
```

## .env example

```python
# You can change your PORT for whatever you want on your local ex.5000
# If you are going to deploy your server on the cloud ex. AWS EC2 / Heroku
# Remember to change the port here
PORT = "PORT"

# Place your MondoDB connect URL here
CONNECTION_URL = "mongodb URL"
```

## Features

- Authentication(Login/SignUp) with Google OAuth2.0 and Jason Web Token(JWT)
- Create and update posts
- Like and delete posts
- View other users' posts
- Display recommended posts that share the same tags
- Pagination for limits posts on one page
- Search functionality through tags/titles that users type in
- Separating frontend and backend
- Leave comments on posts
- Isolated server deployed on **AWS EC2**

## Tack Stack

**Frontend**

- ReactJS, ES6
- Material UI
- Redux/Redux-Thunk for _state management_

**Backend**

- NodeJS
- ExpressJS
- Mongoose - _Node.js-based Object Data Modeling (ODM) library for MongoDB_
- MongoDB Atlas
- Nodemon for testing API endpoints

**Cloud Service**

- AWS EC2 for _running server_

## Database Schema

### Table: PostMessage

**title**: String - Title of the post

**message**: String - Message of the post

**name**: String - Author of the post

**creator**: String - _Unique ID_ of the author

**tags**: String[ ] - tags of the post

**selectedFile**: String - The uploaded image of the post by using Base64 encoding

**likes**: String[ ] | default:[ ] - store the IDs of the users to display the number of likes of the post

**comments**: String[ ] | default:[ ] - the comments of the post

**createAt**: Date | default: new Date( ) - record the time-stamp once the post create

### Table: User

**name**: String - the name of the user, **required field**

**email**: String - the email of the user, **required field**

**password**: String - the password of the user, **required field**

**id**: String - the ID of the user, **required field**
