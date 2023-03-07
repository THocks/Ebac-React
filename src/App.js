
import { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {

   const handleSubmit = (e) => {

    e.preventDefault()

    alert('Hello World')
  }

  const [initial] = useState("Hello World")

    const arraydeArgumentos = ["Hello World", "Teste", "Teste", "Teste"]
  return (
    <div className="App">
    <Header name={"HelloWorld Estou Vindo Pro Props"}/>
     <h1>Hello World</h1>
     <input type="text" placeholder ="HelloWorld" />
     <br /><br />
     <button>Hello World</button>
     <br /> <br /> 
     <select name="" id="" placeholder="Hello World">
      <option value="Hello World">Hello World</option>
     </select>
      <br /> <br /> 
      <form onSubmit={handleSubmit}>
        <label htmlFor=""> Hello World</label>
        <br /> <br />
        <button>Clique em mim</button>
      </form>
      <br /> <br />
      {arraydeArgumentos.filter(eles => eles ==="Hello World").map(ele =>(
          <li>
          Estou vindo de um Filter e Map... <strong>{ele}</strong>
          </li>
      ))}
      <br /> <br />
      <div>
      Estou vindo de um State  {initial}
      </div>


       
    </div>
  );
}

export default App;
