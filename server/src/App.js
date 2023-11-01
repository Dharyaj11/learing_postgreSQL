
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './screens/Home';
import Update from './screens/Update';
function App() {
  return (
    <>
      <Router>

      <div className='container'>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/update" element={<Update/>}/>
          
        </Routes>
      </div>
</Router>
    </>
  );
}

export default App;
