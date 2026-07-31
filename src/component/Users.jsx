import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <h1>Show User Data</h1>

            {
                user.map((item) => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.email}</p>
                        <p>{item.body}</p>
                    </div>
                ))
            }
        </>
    );
}

export default Users;