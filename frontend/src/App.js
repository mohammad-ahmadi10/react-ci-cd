import './App.css';
import React , {useState , useEffect} from "react";
import axios from "axios";


function App() {
  const [username, setUsername] = useState();
  
  useEffect(() =>{
    getNames();
  }, [])

  const getNames = async () =>{
    
    const response = await axios.get("/names");

    const {data} = response;
    setUsername(data);
  }

  return (
    <div className="App">
      <h1>my frontend</h1>
      <h3>my name is {username}</h3>
    </div>
  );
}

export default App;
