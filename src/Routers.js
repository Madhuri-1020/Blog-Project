import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/Components/Home';
import Contact from '../src/Components/Contact';
import CreateBlog from '../src/Components/CreateBlog';
import SignIn from '../src/Components/SignIn';

function Routers(){
    retur(
<Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
    )
}
export default Routers;