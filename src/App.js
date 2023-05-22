import { RouterProvider } from "react-router-dom";
import Routes from "./Routes";
import './App.css';

function App() {
  return (
    <>
      <RouterProvider router = {Routes}/>
    </>
  );
}

export default App;