import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import propTypes from 'prop-types';

class Search extends Component {
	// Use state to save query and render after state update
	state = {
		query: '',
		searchRes: [],		
	}

	// handle the change and invoke searching method
	handleChange = (event) => {
		const value = event.target.value;
		if (value.length > -1) {
			this.setState({ query: value }, () => {
				this.props.searching(value);
			});
			if (value.length === 0) {
				this.props.resetSearch();
				this.setState({query:''});
			}
		}
	}



	// Invoke updateBook parent's method and send (book and shelf) value
  	updateBook = (book, shelf) => {
    	this.props.updateBook(book, shelf);
  	}

	render () {

		// Destructure the props value into each props
		const  { searchRes, resetSearch } = this.props;

		return (
			<div className="search-books">
				{/* Search Bar*/}
        		<div className="search-books-bar">
          	
          		{/* Close Button link to MyRead page */}
          		<Link to="/"><button className="close-search" onClick={resetSearch}>Close</button></Link>
          
          		{/* Input */}
          		<div className="search-books-input-wrapper">
            		<input 
              			type="text" 
              			value={this.state.query} 
              			placeholder="Search by title or author" 
              			onChange={this.handleChange}
              			/>
          		</div>
        		</div>

        		{/* Search Result*/}
        		<div className="search-books-results">
          		<ol className="books-grid">
            		{searchRes.map((book, index)=>{
                    return (<Book key={book.id} book={book} onUpdate={this.updateBook}/>)
                  })}
          		</ol>
				</div>
			</div>
		);
	}
}

// Define proptypes to avoid getting bad value 
Search.propTypes = {
	searchRes: propTypes.array.isRequired, 
	searching: propTypes.func.isRequired,
	resetSearch: propTypes.func.isRequired,
}

export default Search;