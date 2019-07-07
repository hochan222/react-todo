import React, { Component } from 'react';

const TodoInput = ({value, onChange, onInsert}) => {
    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            onInsert();
        }
    }
    return (
        <div>
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress}></input>
            <button onClick={onInsert}>추가</button>
        </div>
    );
}
export default TodoInput;