
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/index';
import Profile from './pages/profile/index';
import CourseDetails from './pages/coursedetails/index';
import Register from './pages/register';
import RegisterSuccess from './pages/registersuccess';
import CFDTeam from './pages/cfdteam';
import Collaborate from './pages/collaborate';

function App() {
  return (
    <div className="App">
        <Header/>
        <main>
          {/* <Home/> */}
          <Profile/>
          {/* <CourseDetails/> */}
          {/* <Register/> */}
          {/* <RegisterSuccess/> */}
          {/* <CFDTeam/> */}
          {/* <Collaborate/> */}
        </main>
        <Footer/>
    </div>
  );
}

export default App;
