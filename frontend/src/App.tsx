import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/login" Component={Login}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
