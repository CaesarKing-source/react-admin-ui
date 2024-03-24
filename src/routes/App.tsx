import { Navbar, Menu, Footer } from '../components';
import { Outlet } from 'react-router-dom';
import '../styles/global.scss';

function App() {

  return ( 
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
  
}
export default App
