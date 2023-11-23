# Memories_Blog
[Live-Site](https://655f892c12e90f1675d6c142--merry-crostata-197f9d.netlify.app/posts)

# Intro
![截圖 2022-02-17 下午4 09 36](https://user-images.githubusercontent.com/44563581/154572424-07e8d477-0f22-4f56-9bfd-04c7cefc32e7.png)
![截圖 2022-02-17 下午4 22 12](https://user-images.githubusercontent.com/44563581/154572909-aa568a56-bda4-45e1-bae8-e996e4f707e7.png)


Using MERN stack to implement a full-stack web application. People can upload interesting images and messages into a post on the website. Also, user can login with Email (JWT) and Google OAuth Authentication to like, edit and delete their posts. When clicking a single post, you can see the post detail and relative recommendate posts with same others posts that have the same tags.

## What is the MERN stack?
MERN stands for **MongoDB**, **Express**,** React**, **Node**, after the four key technologies that make up the stack.
*MongoDB - document database
*Express(.js) - Node.js web framework
*React(.js) - a client-side JavaScript framework
*Node(.js) - the premier JavaScript web server

## How does MERN stack work?
The MERN architecture allows you to easily construct a 3-tier architecture (frontend, backend, database) entirely using JavaScript and JSON.
![截圖 2022-02-17 下午4 17 14](https://user-images.githubusercontent.com/44563581/154572389-c49710f2-cf6d-4863-8e1d-954bd9fc2118.png)

**React.js Front End**

The top tier of the MERN stack is React.js, the declarative JavaScript framework for creating dynamic client-side applications in HTML. React lets you build up complex interfaces through simple Components, connect them to data on your backend server, and render them as HTML.

React’s strong suit is handling stateful, data-driven interfaces with minimal code and minimal pain, and it has all the bells and whistles you’d expect from a modern web framework: great support for forms, error handling, events, lists, and more.

**Express.js and Node.js Server Tier**

The next level down is the Express.js server-side framework, running inside a Node.js server. Express.js bills itself as a “fast, unopinionated, minimalist web framework for Node.js,” and that is indeed exactly what it is. Express.js has powerful models for URL routing (matching an incoming URL with a server function), and handling HTTP requests and responses.

By making XML HTTP Requests (XHRs) or GETs or POSTs from your React.js front-end, you can connect to Express.js functions that power your application. Those functions in turn use MongoDB’s Node.js drivers, either via callbacks for using Promises, to access and update data in your MongoDB database.

**MongoDB Database Tier**

If your application stores any data (user profiles, content, comments, uploads, events, etc.), then you’re going to want a database that’s just as easy to work with as React, Express, and Node.

That’s where MongoDB comes in: JSON documents created in your React.js front end can be sent to the Express.js server, where they can be processed and (assuming they’re valid) stored directly in MongoDB for later retrieval. Again, if you’re building in the cloud, you’ll want to look at Atlas. If you’re looking to set up your own MERN stack, read on!
