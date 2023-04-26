import { FC, useState, useEffect } from "react";
import { IUserGit } from "./interfaces/interfaces";
import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import Body from "./Components/Body/Body";
import axios from "axios";

import "./index.scss";

function App(): ReturnType<FC> {
  const [username, setUsername] = useState<string>("petrosyanSerg");
  const [data, setData] = useState<IUserGit | {}>({});
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getUser = async () => {
      const resp = await axios.get(`https://api.github.com/users/${username}`);
      const userData = (await resp.data) as IUserGit;
      setData(userData);
      setError(false);
    };

    getUser().catch((err) => setError(true));
  }, [username]);

  function SearchUser(user: string) {
    return setUsername(user);
  }
  return (
    <main className="container">
      <Header />
      <Search Search={SearchUser} />
      {error ? <h1 className="error">User Not Found</h1> : <Body data={data} />}
    </main>
  );
}

export default App;
