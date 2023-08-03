import React, { useEffect, useState } from "react";
import { IUser } from "../types";
import { UserService } from "../endpoint/UserService";

export interface IState {
  loading: boolean;
  users: IUser[];
  errorMessage: string;
}

function UserDetails() {
  const [state, setState] = useState<IState>({
    loading: false,
    users: [] as IUser[],
    errorMessage: "",
  });

  const [search, setSearch] = useState("");

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

  const tableHeadData = ["ID", "Name", "User Name", "Email", "Phone"];
  return (
    <div className="p-8 flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-center">API FETCHING DATA</h1>
      {errorMessage && <p>{errorMessage}</p>}
      {loading && <p>LOading....</p>}
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 border-2 border-gray"
      />
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-white border-b dark:bg-green-500 dark:border-gray-700">
            {tableHeadData.map((item) => (
              <td
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                key={item}
              >
                {item}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="bg-blue-300 py-2">
          {users.length > 0 &&
            users.map((user) => (
              <tr
                key={user.id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.id}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.name}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.username}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.email}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.phone}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserDetails;
