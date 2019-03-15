import React, {Component} from 'react';
import './todo.css';

class ToDo extends Component {

 constructor(props) {
   super(props);
 }

 dateAsDate = new Date(this.props.dueDate);


  render() {
    return (
        <li className={this.props.isFinished? "todo__item isFinished" :  "todo__item"}>
          <p className="todo__item--id">{this.props.id}</p>
          <p className="todo__item--task">{this.props.task}</p>
          <p className="todo__item--dueDate">{this.dateAsDate.toLocaleDateString()} {this.dateAsDate.toLocaleTimeString()}</p>
          <input className="todo__item--isFinished"
                 type="checkbox"
                 onChange={this.props.finishToDo}
                 defaultChecked={this.props.isFinished}
          />
        </li>
    );
  }
}

export default ToDo;
