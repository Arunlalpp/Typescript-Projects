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
    UserService.getAllUsers()
      .then((res) => console.log(res.data))
      .catch();
  }, []);

  return (
    <div className="">
      Welcome
      <div></div>
    </div>
  );
}

export default App;
