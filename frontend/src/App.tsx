import Datatable from 'components/DataTable/Index';
import Footer from 'components/Footer/Footer';
import NavBar from 'components/NavBar/Navbar';
import React from 'react';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Hello People</h1>
        
        <Datatable/>
      </div>

      <Footer/>
    </>
  );
}

export default App;
