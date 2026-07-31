import axios from "axios";
import { useEffect, useState } from "react";

const API = () => {
  const [apidata, setApidata] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setApidata(res.data))
      .catch((err) => console.log("Not Fetch", err));
  }, []);

  return (
    <>
      <h1>This is API Page</h1>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {apidata.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.title}</td>
              <td>{e.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default API;