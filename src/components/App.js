
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

const App = () => {
  return (
    <Router>
        {/* Do not remove the main div */}
        <Routes>
          <Route path="/" element={<ItemList/>}/>
          <Route path="/items/:id" element={<ItemDetail/>}/>
        </Routes>
    </Router>
  )
}

export default App
