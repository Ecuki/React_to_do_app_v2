import React from "react";

const Task = props => {
  const { id, text, active, priority, date, finishDate } = props.task;
  const taskStyle = { color: "red" };
  return (
    <div className="task">
      <span
        className="task-text"
        style={priority ? { color: taskStyle.color } : { color: "" }}
      >
        {text}
      </span>
      <span className="date-text">
        {"Wykonać do: "}
        {date}
      </span>
      {active && (
        <button className="button-done" id={id} onClick={props.done}>
          Zrealizowane
        </button>
      )}
      {
        <button className="button-delete" id={id} onClick={props.delete}>
          X
        </button>
      }
      {!active ? <p>Zadanie wykonane dnia {finishDate}</p> : ""}
    </div>
  );
};
export default Task;
