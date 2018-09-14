# My Reads App Project

This project is #6 of the Udacity FEND Grow with Google Nanodegree program 2018.
We were to alter the existing app to use React with components and React Router as per the requirements in the Project Rubric.


## Table of Contents
* [Live Viewing](#liveview)
* [Instructions](#instructions)
* [Dependecies](#dependecies)
* [Contributing](#contributing)
* [Backend Server](#backendserver)
* [Important](#important)


## Live Viewing
Here is a link to view the site/app live:  xxx


## Instructions
_Run this on your device_

You can either clone or download the zip file.  Once on your computer, navigate to the location/folder you saved it.  Open your terminal at this location (either the command line or git bash on windows, or terminal on mac).

* install all project dependencies with `npm install`
* start the development server with `npm start` (this will launch your default browser and open the app for viewing)
* open your code editor to edit the code 


## Dependecies
All dependecies are included in the package.json file.  There shouldn't be anything you need to add to run this code.


## Contributing
Please contact me if you would like to contribute to this application.

NOTE:  This YouTube video by a fellow Udacity Grow with Google classmate (Maeva NAP) helped me to understand what all needed to be done as an overview to get me started.  Want to give credit to her:  https://www.youtube.com/watch?v=i6L2jLHV9j8


## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.