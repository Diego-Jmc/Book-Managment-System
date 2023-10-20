import { Book } from '@/interfaces/interfaces';
import React from 'react';



export default function BookCard(book:Book) {
  return (
    <div className="card">
      <img className="card-img-top" src={book.image_url} alt="Book cover" />
      <div className="card-body">
        <h5 className="card-title">{book.name}</h5>
        <p className="card-text">Stock:{book.stock}</p>
        <a href="#" className="btn btn-primary">
          information
        </a>
      </div>
    </div>
  );
}
