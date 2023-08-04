import React, { useEffect, useState } from "react";
import ViewBooks from "./ViewBooks";

function HomePage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isBn, setIsBn] = useState(0);

  const getDataFromLS = () => {
    const data = localStorage.getItem("books");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };

  const [books, setBooks] = useState<string[] | any>(getDataFromLS());

  const handleAddBooksSubmit = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    let book = { title, author, isBn };
    setBooks([...books, book]);
    setTitle("");
    setAuthor("");
    setIsBn(0);
  };

  const handleDeleteISBN = (isBn: number) => {
    console.log("hai");

    setBooks((books: string[]) => {
      return books.filter((book: any) => book.isBn !== isBn);
    });
  };

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <div className="flex justify-between items-center gap-x-6">
      <div className="flex flex-col w-full h-full">
        <div className="text-center text-xl font-semibold pb-4 whitespace-nowrap">
          <h1>bookList App</h1>
          <p>Add and view your books using local storage</p>
        </div>
        <form
          autoComplete="off"
          className="flex flex-col justify-center bg-slate-600 shadow-2xl p-8 rounded-lg"
          onSubmit={handleAddBooksSubmit}
        >
          <label className="pb-3 text-lg font-medium text-gray-800">
            Title
          </label>
          <input
            type="text"
            required
            placeholder="Title"
            className="p-3 rounded-lg placeholder:text-black border-none outline-none"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <br />
          <label className="pb-3 text-lg font-medium text-gray-800">
            Author
          </label>
          <input
            type="text"
            required
            placeholder="Author"
            className="p-3 rounded-lg placeholder:text-black border-none outline-none"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
          <br />
          <label className="pb-3 text-lg font-medium text-gray-800">
            ISBN#
          </label>
          <input
            type="number"
            required
            placeholder="ISBN#"
            className="p-3 rounded-lg placeholder:text-black border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            onChange={(e: any) => setIsBn(e.target.value)}
            value={isBn && !isNaN(isBn) ? isBn : ""}
          />
          <br />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-700 w-1/2 rounded-lg p-3 shadow-2xl text-white text-lg font-semibold"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="bg-slate-500 w-full text-center p-4">
        <div>
          {books.length > 0 && (
            <>
              <table>
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-3 py-2">ISBN#</th>
                    <th className="px-3 py-2">Title</th>
                    <th className="px-3 py-2">Author</th>
                    <th className="px-3 py-2">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <ViewBooks books={books} handleDelete={handleDeleteISBN} />
                </tbody>
              </table>
            </>
          )}
        </div>
        {books.length < 1 && <div>No books are added yet</div>}
        <button
          type="button"
          onClick={() => setBooks([])}
          className="bg-red-700 p-2"
        >
          Remove All
        </button>
      </div>
    </div>
  );
}

export default HomePage;
