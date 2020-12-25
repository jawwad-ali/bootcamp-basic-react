import React, { useEffect, useState } from 'react';

function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {

    setInterval(() => {
      async function callMockServer() {
        let api = await fetch("/api/books")
        let res = await api.json()
        setBooks(res)
      }
      callMockServer()
    }, 2000)

  }, [])

  if (!books.length)
    return <h6>Loading</h6>

  const addBook = () => {
    const title = prompt("Add Book")
    const author = prompt("Add Author")

    if (!title)
      return false
    if (!author)
      return false

    fetch("/api/add", {
      method: "POST",
      body: JSON.stringify({ title, author })
    }).then(res => res.json())
      .then(data => data)
  }
  return (
    <div className="App">
      <h4>Books Available</h4>
      <table border="1">
        <thead>
          <tr>
            <th>Books</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((bookObj, ind) => {
              return (
                <tr key={ind}>
                  <td>{bookObj.title}</td>
                  <td>{bookObj.author}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <button onClick={addBook}>Add Book</button>
    </div>
  );
}

export default App;
