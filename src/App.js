import './App.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./UI/Navbar";
import AppRouter from "./componenets/AppRouter";


function App() {
  return (
    <BrowserRouter>
<Navbar/>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
