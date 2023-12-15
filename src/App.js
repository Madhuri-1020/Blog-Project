import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../src/Components/Header';
import Home from '../src/Components/Home';
import Contact from '../src/Components/Contact';
import CreateBlog from '../src/Components/CreateBlog';
import SignIn from '../src/Components/SignIn';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Register from './Components/Register';
import SingleBlog from './Components/SingleBlog';
import { ToastContainer } from 'react-bootstrap';

function App() {
  return (
    <div>
    <ToastContainer></ToastContainer>
       <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:blogId" element={<SingleBlog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/create-blog" element={<CreateBlog />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;

