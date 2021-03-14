import logo from './logo.svg';
import './App.css';
import { Greet }from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Messages from './components/Messages'
import Counter from './components/Counter'
import FunctopnClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'


function App() {
  return (
    <div className="App">
      <ClassClick />
      <FunctopnClick />
      {/* <Counter /> */}
      {/* <Messages /> */}
      {/* <Greet name="Bruce" heroName='Batman'>
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName='Wonder Woman'/> */}
      {/* <Welcome />
      <Hello /> */}
    </div>
  );
}

export default App;
