import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";

class App extends Component {
  counter = 9;
  state = {
    tasks: [
      {
        id: 0,
        text: "Zostać królem",
        priority: true,
        active: true,
        date: "2020-01-29",
        finishDate: null
      },
      {
        id: 1,
        text: "Infiltrować opozycję",
        priority: false,
        active: true,
        date: "2020-01-29",
        finishDate: null
      },
      {
        id: 2,
        text: "Ściąć zdrajców",
        priority: true,
        active: true,
        date: "2020-01-29",
        finishDate: null
      },
      {
        id: 3,
        text: "Wykryć szpiegów",
        priority: false,
        active: true,
        date: "2020-01-29",
        finishDate: null
      },
      {
        id: 4,
        text: "Stworzyć propagandę wszechobecnej szczęśliwości",
        priority: false,
        active: true,
        date: "2020-01-29",
        finishDate: null
      },
      {
        id: 5,
        text: "Wybudować tron z kości wrogów",
        priority: true,
        active: true,
        date: "2020-01-29",
        finishDate: null
      },
      {
        id: 6,
        text: "Wygłościć przemówienie chwytające za serca",
        priority: false,
        active: true,
        date: "2020-01-29",
        finishDate: null
      },
      {
        id: 7,
        text: "Zawładnąć umysłami poddanych",
        priority: true,
        active: true,
        date: "2020-01-26",
        finishDate: null
      },
      {
        id: 8,
        text: "Porwać księżniczkę",
        priority: false,
        active: true,
        date: "2020-01-29",
        finishDate: null
      }
    ]
  };
  getFinishDate = () => {
    const date = new Date().toISOString();
    const ymd = date.slice(0, 10);
    const time = date.slice(11, 19);
    return `${ymd} ${time}`;
  };
  handleDoneTask = e => {
    const tasks = this.state.tasks;
    const id = e.target.id;
    tasks.forEach(task => {
      if (task.id.toString() === id) {
        task.active = false;
        task.finishDate = this.getFinishDate();
      }
    });
    this.setState({
      tasks
    });
  };
  handleDeleteTask = e => {
    let tasks = this.state.tasks;
    const id = e.target.id;
    tasks = tasks.filter(task => !(task.id.toString() === id));
    this.setState({
      tasks
    });
  };
  handleAddTask = (text, priority, date) => {
    let textLenght = [...text].length;
    if (textLenght > 2) {
      const task = {
        id: this.counter,
        text,
        priority,
        active: true,
        date,
        finishDate: null
      };
      const tasks = [...this.state.tasks, task];
      this.setState({
        tasks
      });
    } else {
      return alert("zadanie za krótkie");
    }
    this.counter = this.counter + 1;
    return true;
  };
  render() {
    return (
      <div className="app">
        <AddTask add={this.handleAddTask} />
        <TaskList
          tasks={this.state.tasks}
          done={this.handleDoneTask}
          delete={this.handleDeleteTask}
          counter={this.counter}
        />
      </div>
    );
  }
}
export default App;
