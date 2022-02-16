import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";

/* pages */
import Details from "./Pages/Details";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import New from "./Pages/New";
import PageNotFound from "./Pages/PageNF";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/snacks" element={<Home />} />
            <Route path="/snacks/:id" element={<Details />} />
            <Route path="/snacks/new" element={<New />} />
            <Route path="/snacks/:id/edit" element={<Edit />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
