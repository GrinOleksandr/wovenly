# Wovenly project

**Task:**  Create 2 responsive pages

**Description:**
 I want to create 2 pages for my shop. First one, is a home page, and a second one - is a catalog page.
 Designers provided to me mockups(!JPG) for them, so you need to implement it right the same as on the pictures. Also, we need a server, where we can have our products, and if we make a call to this server, it should give us a list of products by the query. To simplify this, we have a JSON file with all products, descriptions, prices and assets. I want to be sure if these pages will be fully responsive.


**Functional requirements:**

BEM 

Node.js

Template builder: EJS

## Client-side
This site is fully responsive, so it looks well on any device including desktop.

I used HTML5, CSS, JavaScript, jQuery, Bootstrap, BEM.

A responsive slider built using Slick.

Templates built using EJS.

CatalogPage also has a client-side rendering, pagination and sorting.

**Preview HomePage** - https://wovenly.herokuapp.com/
 
**Preview CatalogPage** - https://wovenly.herokuapp.com/

## Server-side
Server is running on Node.JS. 

It serves all requests for products and product-related data as styles, colors and so on.

Server also has ability to parse all images from database and save them into it's local folder, then change link to images in database to the local ones.

## Server uses:
Node.js, WebPack, Babel, Express.

Server is deployed on heroku

**Sources** - https://github.com/GrinOleksandr/wovenly-server















       
