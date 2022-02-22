# MyReads Project

My reads project will allow you to categories your favorites books into 3 shelves : 
- Currently Reading
- Want to Read
- Read

To get started installing right away:

* install all project dependencies with `npm install`
* install router `npm install --save react-router-dom`
* install debounce `npm install throttle-debounce`
* start the development server with `npm start`

## You have 4 js files
```bash
├── App.js # containing the main page of the project
├── Search # handle the component Search for search page
├── Books  # for your favorites books, categories into 3 shelves
├── Book   # invoke shelf changing based on select of each book
```
4 JS files have been created to separate each important component to facilate its modification and update

### If you want to go deep on Backend Server
Below fetching methods have already been creating :
* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

#### Fonctionality 
* The main page `App.js` contains the routes to browse to `Books` and `Search` pages
* `Books` contains the list of categoriesed books, where you can update each book and updates automatically the shelf
* `Search` contains the bar for searching the book and the list of searched books list.
* `Book` is handling all the book's changing/udate and select

once started, it should launch automatically a new brower with https://localhost:3000
If it does not, then open your favorite browser and type on url `https://localhost:3000`

Start and enjoy!

NB: for debouce, you need to install : `npm install 'throttle-debounce'`