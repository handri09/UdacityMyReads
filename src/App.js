import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Books from './Books';
import Search from './Search';
import { debounce } from 'throttle-debounce';

class BooksApp extends Component {
   state = {
      myBooks: [],
      searchRes: [],
   }
   componentDidMount= () => {
      BooksAPI.getAll()
         .then((books) => {
            this.setState({ 
               myBooks : books })
         })
   }
   updateBook = (book, shelf) => {
      BooksAPI.update(book, shelf)
      .then(()=>{
         if (shelf === 'none') {
            this.setState((prev)=>{
               const searchresss = prev.searchRes.map((prevsearch)=>{
                  if (prevsearch.id === book.id) {
                     prevsearch.self = shelf;
                  }
                  return prevsearch;
               });

               return ({
                  myBooks: prev.myBooks.filter((b) => (b.id !== book.id)),
                  searchRes : searchresss,  
               })               
            })
         } else {
            this.setState((prev)=>{
               book.shelf =shelf;
               const searchress = prev.searchRes.map((prevsearc)=>{
                  if (prevsearc.id === book.id) {
                     prevsearc.self = shelf;
                  }
                  return prevsearc;
               });

               return ({
                  myBooks: prev.myBooks.filter(prevbook=>prevbook.id!==book.id).concat(book),
                  searchRes: searchress,
               })
            })
         }
      })
   }

   // Use debounce for input , 1000
   searching = debounce(1000, false,query => {
      query = query.trimLeft().trimRight();
      if (query.length === 0) {
         this.setState({searchRes: []});
      } else {
         BooksAPI.search(query)
            .then( (books) => {
               if (books.error) {
                  this.setState({searchRes: []});
               } else {
                  this.setState((currEvent)=> ({
                     searchRes: books.map((book)=>{
                        currEvent.myBooks.map(mybook=>{
                           if (mybook.id === book.id) {
                              book.shelf = mybook.shelf;
                           }
                           return mybook;
                        });
                        return book;
                     })
                  }));
               }
         });
      }
   });

   resetSearch = () => {
      this.setState({searchRes:[]});
   }

   render() {
      const { myBooks, searchRes } = this.state;
      return (
      
         <div className='app'>
            <Route 
               exact path='/' 
               render={() => (
                  <Books
                     myBooks={myBooks}
                     updateBook={this.updateBook}
                     />
               )}
            />

            <Route 
               path='/search' 
               render={()=>(
                  <Search
                     searchRes={searchRes}
                     searching={this.searching}
                     resetSearch={this.resetSearch}
                     updateBook={this.updateBook}
                     />
               )}
            />
         </div>
      )
   }
}

export default BooksApp;