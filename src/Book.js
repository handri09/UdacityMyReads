import React, { Component } from 'react';
import propTypes from 'prop-types';


class Book extends Component {

	handleChange = (event) => {
		this.props.onUpdate(this.props.book, event.target.value.trimLeft().trimRight())
	}

	render () {
		const { book } = this.props;

		return (
		<li key={book.id ? book.id: ''}>
		  <div className="book">
		    <div className="book-top">

		    	{/* take the picture of book for backgroup*/}
		      <div className="book-cover" style={{ 
		      	width: 128, 
		      	height: 193, 
		      	backgroundImage: `url(${ book.imageLinks ? book.imageLinks.thumbnail : ''})`
		      	}}>
		      </div>

		  		{/* SELECT option, handle error in case shelf is not defined*/}			      
		      <div className="book-shelf-changer">
			        <select key={book ? book.id : ''} defaultValue={book.shelf ? book.shelf : 'none'} onChange={this.handleChange}>
			          <option value="move" disabled>Move to...</option>
			          <option value="currentlyReading">Currently Reading</option>
			          <option value="wantToRead">Want to Read</option>
			          <option value="read">Read</option>
			          <option value="none">None</option>
			        </select>
		      </div>
		    </div>

		  	{/* Handle book title and authors error in case these are not defined*/}
		    <div className="book-title">{book.title ? book.title : 'Untitled'}</div>
		    <div className="book-authors">{book.authors ? book.authors :'Unknown'}</div>
		  </div>
		</li>
		);
	}
}

Book.propTypes = {
	onUpdate: propTypes.func.isRequired,
	book: propTypes.object.isRequired,
}

export default Book;