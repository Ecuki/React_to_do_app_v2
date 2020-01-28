import React from "react";
import Task from "./Task.js";

const TaskList = props => {
  const doneTasksShow = 5;
  const tasks = [...props.tasks];
  const activeTasks = tasks
    .filter(task => task.active)
    .sort((a, b) => a.text.toLowerCase().localeCompare(b.text.toLowerCase()));
  const doneTasks = tasks
    .filter(task => !task.active && task)
    .sort((a, b) => {
      if (a.finishDate > b.finishDate) return -1;
      if (a.finishDate < b.finishDate) return 1;
      return 0;
    });

  const activeList = tasks => {
    if (tasks.length > 0) {
      return tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          done={props.done}
          delete={props.delete}
          add={props.add}
        />
      ));
    } else if (tasks.length === 0 && doneTasks.length === props.counter) {
      return <p>Brawo! Jesteś królem. Rządź odpowiedzialnie.</p>;
    }
    return <p>Brak aktywnych zadań</p>;
  };
  const doneList = tasks => {
    if (tasks.length > 0 && tasks.length <= doneTasksShow) {
      return tasks.map(task => (
        <Task key={task.id} task={task} delete={props.delete} />
      ));
    } else if (tasks.length > doneTasksShow) {
      return (
        <>
          <p>{`Wyświetlano ${doneTasksShow} ostatnio wykonanych zadań`}</p>
          {tasks
            .map(task => (
              <Task key={task.id} task={task} delete={props.delete} />
            ))
            .slice(0, doneTasksShow)}
        </>
      );
    }
    return <p>Wypełniaj zadania na drodze do chwały</p>;
  };

  return (
    <div className="taskList">
      <h2>{`zadania do zrobienia (${activeTasks.length})`}</h2>
      <div className="activeTasks">{activeList(activeTasks)}</div>
      <div className="doneTasks">
        <h2>{`osiagnięte cele (${doneTasks.length})`}</h2>
        {doneList(doneTasks)}
      </div>
    </div>
  );
};
export default TaskList;
