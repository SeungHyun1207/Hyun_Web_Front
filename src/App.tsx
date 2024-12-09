import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ClientMain from "./views/client/clientMain";

function App() {

  return (
    <Routes>
      <Route path="main" element={<ClientMain />} />
    </Routes>
  )
}

export default App;
