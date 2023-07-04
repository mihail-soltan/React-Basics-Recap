import './App.css';
import Hello from './Hello';
import List from './List';
import { useState } from 'react';
import TaskList from './TaskList';
import Register from './Register';
import { SayHello } from "./Hello2"
import { Counter } from './Counter';
import { Lista } from './Lista';

function App() {
  const [name, setName] = useState("Bob")
  const [age, setAge] = useState(30)
  let variabila = "MIhai";
  function changeName(param) {
    setName(param)
  }
  return (
    <div className="App">
      <SayHello name={variabila} />
      <Counter />
      <Lista />
      <Hello name={name} age={age} changeName={changeName} />
      <List />
      <TaskList />
      <hr />
      <Register />
    </div>
  );
}

export default App;
