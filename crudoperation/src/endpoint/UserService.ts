import axios from "axios";

export class UserService {
  private static URL: string = "https://jsonplaceholder.typicode.com";

  public static getAllUsers() {
    let userURL: string = `${this.URL}/users`;
    return axios.get(userURL);
  }
}
