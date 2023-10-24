import { Book } from '@/interfaces/interfaces';
import Link from 'next/link';
import React from 'react';



export default function BookCard(book:Book) {
  return (
    <div className="card">
      <img className="card-img-top" src={book.image_url} alt="Book cover" />
      <div className="card-body">
        <h5 className="card-title">{book.name}</h5>
        <p className="card-text">Stock:{book.stock}</p>
       <button className="btn btn-dark">
       <Link className="nav-link" href={`/book/${book.id}`}>Information</Link>
       </button>
      </div>
    </div>
  );
}
