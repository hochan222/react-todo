import React, { Component } from 'react';

const TodoPage = ({children}) => {
    return (
        <>
            <h1>일정관리</h1>
            <div>
                {children}
            </div>
        </>
    )
}

export default TodoPage;
