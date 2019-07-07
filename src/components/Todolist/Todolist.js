import React, {Component} from 'react';
import TodoItem from '../TodoItem/TodoItem';

class Todolist extends Component {
    render() {
        const {todos} = this.props;
        const todoList = todos.map(
            todo => (
                <TodoItem
                 key={todo.id}
                 done={todo.done}
                 onToggle={()=> this.props.onToggle(todo.id)}
                 onRemove={()=> this.props.onRemove(todo.id)}>
                 {todo.text}
                </TodoItem>
            )
        );

        return (
            <>
                {todoList}
            </>
        )
    }
}

export default Todolist;