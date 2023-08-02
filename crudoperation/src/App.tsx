import React, { useEffect, useState } from "react";
import { IUser } from "./types";
import { UserService } from "./endpoint/UserService";

export interface IState {
  loading: boolean;
  users: IUser[];
  errorMessage: string;
}

function App() {
  const [state, setState] = useState<IState>({
    loading: false,
    users: [] as IUser[],
    errorMessage: "",
  });

  // Network request
  useEffect(() => {
    setState({ ...state, loading: true });
    UserService.getAllUsers()
      .then((res) => setState({ ...state, loading: false, users: res.data }))
      .catch((err) =>
        setState({ ...state, loading: false, errorMessage: err.message })
      );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { loading, users, errorMessage } = state;

  return (
    <div className="">
      <div>
        {errorMessage && <p>{errorMessage}</p>}
        {loading && <p>LOading....</p>}
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>User Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
