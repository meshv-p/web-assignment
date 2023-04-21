import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './Compo/Navbar';
import { Home } from './Compo/Home';

function App() {
  const [data, setData] = useState([])  


    useEffect(() => {

      fetch('https://backend-ohlocal-development.umnsbhcb5nb6a.ap-south-1.cs.amazonlightsail.com/api/test_web_assignment/').then((res) =>  res.json()).then((data) => setData(data))
    }, [])
    



  return (
    <div className="App">
      <Navbar data={data}/>
        <Home data={data}/>
    </div>
  );
}

export default App;
