import React, {useState} from 'react';
import './App.css';
import TodoPage from './components/TodoPage'
import Todolist from './components/Todolist/Todolist';
import TodoInput from './components/TodoInput/TodoInput';

function App() {
  const [inputText, setInputText] = useState('')
  const [id, setId] = useState(2)
  const [todos, setTodos] = useState([
    { id:0, text: '리액트 공부하기', done: true},
    { id:1, text: '컴포넌트 스타일링 해보기', done: false},
    { id:2, text: '오 세번쨰야', done: false}
  ])

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  const getId = () => {
    return setId(id + 1);
  }

  const handleInsert = () => {
    const newTodo = {
      text: inputText,
      done: false,
      id: getId()
    };

    setTodos([...todos, newTodo]);
    setInputText('');
  }

  const handleToggle = (id) => {
    const index = todos.findIndex(todo => todo.id === id);

    const toggled = {
      ...todos[index],
      done: !todos[index].done
    };

    setTodos([
      ...todos.slice(0,index),
      toggled,
      ...todos.slice(index+1, todos.length)
    ])
  };

  const handleRemove = (id) => {
    const index = todos.findIndex(todo => todo.id === id);

    setTodos([
      ...todos.slice(0, index),
      ...todos.slice(index + 1, todos.length)
    ])
  };

  return (
    <>
      <div className="re">나의 첫 Todo</div>
      <TodoPage>
        <TodoInput onChange={handleChange} onInsert={handleInsert} value={inputText}/>
        <Todolist todos={todos} onToggle={handleToggle} onRemove={handleRemove}></Todolist>
      </TodoPage>
    </>
  );
}

export default App;
