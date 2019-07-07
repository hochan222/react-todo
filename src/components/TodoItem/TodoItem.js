import React, {Component} from 'react';

class TodoItem extends Component {
    render() {
        const {done, children, onToggle, onRemove} = this.props;
        return (
            <>
                <div onClick={onToggle}>
                    <input type="checkbox" checked={done}/>
                    <span>{children} </span>
                    <span onClick={(e)=>{
                            onRemove();
                            e.stopPropagation();
                        }
                    }>[지우기]</span>
                </div>
            </>
        )
    }
}

export default TodoItem;