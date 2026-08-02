import { Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Counter from "./component/Counter";
import Users from "./component/Users";
import Api from "./component/Api";


function App(){

    return(
        <>

            <Navbar />

            <Routes>

                <Route path="/" element={<Api />} />

                <Route path="/counter" element={<Counter />} />

                <Route path="/users" element={<Users />} />

            </Routes>

        </>
    )
}

export default App;