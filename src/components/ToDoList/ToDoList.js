import React, {Component} from 'react';
import ToDo from '../ToDo/ToDo'

class ToDoList extends Component {

  constructor(props) {
    super(props);
    this.finishToDo = this.finishToDo.bind(this);
  }

  finishToDo(id) {
    this.props.finishTodo(id);
  }

  render() {
    return (
        <ul className="todoList">
          {this.props.visibleToDos.map((todo) =>
              <ToDo id={todo.id}
                    task={todo.task}
                    dueDate={todo.dueDate}
                    key={this.props.visibleToDos.indexOf(todo)}
                    className={todo.isFinished ? 'isFinished' : null}
                    isFinished={todo.isFinished}
                    finishToDo={(e) => this.finishToDo(todo.id, e)}
              />
          )}
        </ul>
    )
  }
}

export default ToDoList
