
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './screens/Home';
import Update from './screens/Update';
import { ShopContextProvider } from './context/ShopContext';
import ShopDetails from './screens/ShopDetails';
function App() {
  return (
    <>
      <ShopContextProvider>

      <Router>

      <div className='container'>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/shops/:id/update" element={<Update/>}/>
          <Route exact path="/shops/:id" element={<ShopDetails/>}/>
          
        </Routes>
      </div>
</Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
