import { TodoInput } from './Todo/TodoInput';
import './App.css';
import {TodoList} from './Todo/TodoList'
// 

function App() {
  // const {todos}=useSelector((state)=>state);
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
