import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header'
import ToDoListData from "./data/ToDoListData";
import AddToDoForm from './components/Form/AddToDoForm'
import ToDoList from './components/ToDoList/ToDoList'

class App extends Component {

  constructor(props) {
    super(props);
    setInterval(() => {
      this.checkDueDates();
    }, 30000)
  }

  state = {
    todos: ToDoListData,
    finishedToDos: [],
    currentTime: Date.now(),
  };


  // Kontroluji, zda jsou jednotlivé úkoly po termínu
  // Pokud měl být úkol splněn, zobrazí se upozornění
  checkDueDates = () => {
    this.state.todos.forEach(todo => {
      if (todo.dueDate >= Date.now()) {
        alert(`Task: ${todo.task} is due`);
        this.setState(prevState => {
          todos: prevState.todos.splice(todo.id, 1);
        })
      }
    })
  };

  // Vytvářím nový úkol
  addToDo = (task, dueDate,) => {
    let dueDateAsDate = new Date(dueDate);
    this.setState(prevState => {
      return {
        todos: [
          ...prevState.todos,
          {
            id: prevState.todos.length,
            task: task,
            dueDate: dueDateAsDate.getTime(),
            isFinished: false,
          }
        ]
      }
    });
    this.filter('all');
  };

  componentDidMount() {
    this.getInitialData();
  }

  componentWillUpdate(nextProps, nextState, snapshot) {
    localStorage.setItem('todos', JSON.stringify(nextState.todos));
  }

  filter(option) {
    switch (option) {
      case 'finished':
        this.setState({
          finishedToDos: this.state.todos.filter(todo => todo.isFinished)
        });
        return;
      case 'unfinished':
        this.setState({
          finishedToDos: this.state.todos.filter(todo => !todo.isFinished)
        });
        return;
      case 'all':
        this.setState({
          finishedToDos: this.state.todos
        });
        return;
      default:
        this.setState({
          finishedToDos: this.state.todos
        });
    }
  }

  finishTodo = (id) => {
    this.setState(prevState => {
      return {
        isFinished: prevState.todos[id].isFinished = !prevState.todos[id].isFinished,
      }
    });
  };

  getInitialData = () => {
    const todosInLocalStorage = JSON.parse(localStorage.getItem('todos'));
    if (todosInLocalStorage) {
      this.setState({
        todos: todosInLocalStorage,
        finishedToDos: todosInLocalStorage,
      })
    } else {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  };

  render() {
    return (
        <div className="App">
          <Header/>
          <div className="buttons__filter">
            <button type="submit" onClick={(e) => this.filter('finished', e)}>Show Finished</button>
            <button type="submit" onClick={(e) => this.filter('unfinished', e)}>Show Unfinished</button>
            <button type="submit" onClick={(e) => this.filter('all', e)}>Show All</button>
          </div>
          <ToDoList visibleToDos={this.state.finishedToDos}
                    finishTodo={this.finishTodo}
          />
          <AddToDoForm addTodo={this.addToDo}/>
        </div>
    );
  }
}

export default App;
