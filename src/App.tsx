import './App.css'
import {AddTask} from "./components/AddTask.tsx";
import {InputTask} from "./components/InputTask.tsx";

function App() {

  return (
    <div className="task">
        <InputTask />
        <AddTask />
    </div>
  )
}

export default App
