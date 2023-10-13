import { Routes, Route} from "react-router-dom";
import * as Pages from "./pages";
import { NavBar} from "./components";

function App() {

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Pages.HomePage />} />
      </Route>     
    </Routes>
  )
}

export default App
