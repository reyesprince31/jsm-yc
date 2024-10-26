import React from "react";

export default async function Books() {
  const response = await fetch("http://localhost:3000/api/books");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const books = await response.json();
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book: { id: number; title: string }) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}
