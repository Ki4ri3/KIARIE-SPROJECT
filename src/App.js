import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproducts from './components/Addproducts';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';
import Notfound from './components/Notfound';
import Form from './components/Signup copy';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h2>Welcome To Digital Farm Market</h2>
      </header>
      <nav>
        <Link to="/" className='btn btn-primary btn-lg'>Home</Link> 
        <Link to="/addproducts" className='btn btn-dark btn-lg'>AddProducts</Link>
        <Link to="/signin" className='btn btn-secondary  btn-lg'>SignIn</Link>
        <Link to="/signup" className='btn btn-success  btn-lg'>SignUp</Link>
       </nav>

      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/addproducts' element={<Addproducts/>}/>
        <Route path='/' element={<Getproducts/>}/>
        <Route path='/makepayment' element={<Makepayment/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
