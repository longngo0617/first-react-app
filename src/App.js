
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/index';
import Profile from './pages/profile/index';
import CourseDetails from './pages/coursedetails/index';
import Register from './pages/register';

function App() {
  return (
    <div className="App">
        <Header/>
        <main>
          {/* <Home/> */}
        {/* <Profile/> */}
        {/* <CourseDetails/> */}
        <Register/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
