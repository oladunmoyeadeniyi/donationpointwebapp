
import NavBar from '../sideNav/NavBar';
import Campaigns from '../components/Campaigns';
import Header from '../sideNav/Header';
import '../components/Fetchstyle.css'

function App() {
  return (
    <div className="sideSplit" id="MainPage">
      <NavBar/>
      <div className="rightSide"> 
       <Header>
         <h1>Cyber Store</h1>
         
       </Header>
      <Campaigns/>
      </div>
    </div>
  );
}

export default App;
