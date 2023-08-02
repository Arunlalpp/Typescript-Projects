import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [column, setColumn] = useState<string[]>([]);
  const [record, setRecord] = useState<string[]>([]);
  const url = "https://jsonplaceholder.typicode.com/comments";
  useEffect(() => {
    fetch(url)
      .then((response: { json: () => any }) => response.json())

      .then((json: any) => {
        console.log({ json });
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <div className="bg-slate-700">
      <table>
        <thead>
          <tr>
            {column.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {record.map((d, i) => {
            return (
              <tr key={i}>
                <td>{d}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
