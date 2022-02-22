import React from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const Books = ({myBooks, updateBook}) => {
  return (
    <div className="list-books">

      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>

          {/* Currently Reading Shelf*/}
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol key='currentlyReading' className="books-grid">
                {/* Iterate through myBooks and get respective shelf */}
                {myBooks.map((book,index)=>{
                  return (book.shelf === 'currentlyReading'
                          && (<Book
                                key={book.id}
                                book={book}
                                onUpdate={updateBook}/>));
                })}
              </ol>
            </div>
          </div>

          {/* Want to Read Shelf*/}
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol key='wantToRead' className="books-grid">
                {/* Iterate through myBooks and get respective shelf */}
                {myBooks.map((book,index)=>{
                  return (book.shelf === 'wantToRead'
                          && (<Book
                                key={book.id}
                                book={book}
                                onUpdate={updateBook}/>));
                })}
              </ol>
            </div>
          </div>

          {/* Read Shelf*/}
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol key='read' className="books-grid">
                {/* Iterate through myBooks and get respective shelf */}
                {myBooks.map((book,index)=>{
                  return (book.shelf === 'read'
                          && (<Book
                                key={book.id}
                                book={book}
                                onUpdate={updateBook}/>));
                })}
              </ol>
            </div>
          </div>

        </div>
      </div>

      {/* The button to switch to search page*/}
      <div className="open-search">
        <Link to="/search"><button>Add a Book</button></Link>
      </div>

    </div>
  );
}

Books.propTypes = {
  updateBook : propTypes.func.isRequired,
  myBooks: propTypes.array.isRequired,
}

export default Books;