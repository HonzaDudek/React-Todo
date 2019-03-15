import React, {Component} from 'react';
import './AddToDoForm.css'

class AddToDoForm extends Component {

  taskDescription = React.createRef();
  dueDate = React.createRef();

  addToDo = (e) => {
    e.preventDefault();
    let dueDateAsDate = new Date();
    dueDateAsDate = this.dueDate.current.value;
    this.props.addTodo(this.taskDescription.current.value,
                       dueDateAsDate);
    this.setState({
      description: '',
      dueDate: '',
    })
  };

  render() {
    return (
        <form action="">
          <input type="text"
                 id="todoDescription"
                 placeholder="Enter new ToDo item..."
                 ref={this.taskDescription}
          />
          <input type="datetime-local"
                 id="todoDueDate"
                 ref={this.dueDate}
          />
          <button type="submit"
                  onClick={this.addToDo}
          >Add ToDo
          </button>
        </form>
    );
  }
}

export default AddToDoForm;
