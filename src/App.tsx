import './App.css'
import {AddTask} from "./components/AddTask.tsx";
import {InputTask} from "./components/InputTask.tsx";
import {RecoilRoot} from "recoil";

function App() {

  return (
      <RecoilRoot>
          <div className="task">
              <InputTask />
              <AddTask />
          </div>
      </RecoilRoot>
  )
}

export default App
