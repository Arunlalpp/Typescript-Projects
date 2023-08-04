import React from "react";

export interface VBooks {
  isbn: number;
  title: string;
  author: string;
}

export interface viewBooksProps {
  books: VBooks[];
  handleDelete: (value: number) => void;
}

function ViewBooks({ books, handleDelete }: viewBooksProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      {books.map((b) => (
        <tr key={b.isbn}>
          <td className="bg-slate-600 p-2">{b.isbn}</td>
          <td className="bg-slate-600 p-2">{b.title}</td>
          <td className="bg-slate-600 p-2">{b.author}</td>
          <td onClick={() => handleDelete(b.isbn)} role="button">
            Delete
          </td>
        </tr>
      ))}
    </div>
  );
}

export default ViewBooks;
