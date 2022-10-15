import './App.css';
import React , {useState , useEffect} from "react";
import axios from "./axios";


function App() {
  const [username, setUsername] = useState();
  const [foreignName , setForeignName] = useState();
  const [response, setResponse] = useState();

  useEffect(() =>{
    getNames();
  }, [])

  const getNames = async () =>{
    const response = await axios.get("/names");
    const {data} = response;
    setUsername(data);
  }

  const onNameSend = async (e) =>{
    e.preventDefault()
    const res = await axios.post("/hello", {
      foreignName
    })
    try {
    const serverRes = res.data;
    setResponse(serverRes)
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="App">
      <h1>my frontend</h1>
      <h3>my name is {username}</h3>
      <form onSubmit={onNameSend}>
        <input type="text" id='name' onChange={(e) => setForeignName(e.target.value)}  placeholder='yourname'/>
        <input type="submit" value="Say Hello"/>
      </form>
      <h2>{response}</h2>
    </div>
  );
}

export default App;
