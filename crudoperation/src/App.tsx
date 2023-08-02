import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [column, setColumn] = useState<string[]>([]);
  const [record, setRecord] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res: any) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log({ column, record });

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
