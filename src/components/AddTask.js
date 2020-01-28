import React, { Component } from "react";

class AddTask extends Component {
  state = {
    text: "",
    priority: false,
    date: new Date().toISOString().slice(0, 10)
  };
  handleChangeText = e => {
    const text = e.target.value;
    this.setState({
      text
    });
  };
  handleChangePriority = e => {
    const priority = e.target.checked;
    this.setState({
      priority
    });
  };
  handleDateChange = e => {
    const date = e.target.value;
    this.setState({
      date
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const add = this.props.add(
      this.state.text,
      this.state.priority,
      this.state.date
    );
    if (add) {
      this.setState({
        text: "",
        priority: false,
        date: new Date().toISOString().slice(0, 10)
      });
    }
  };

  render() {
    const { text, priority, date } = this.state;
    const actualYear = date.slice(0, 4);
    const actualMonthDay = date.slice(4, 10);
    const maxDate = actualYear * 1 + 1 + actualMonthDay;
    const minDate = actualYear * 1 - 1 + actualMonthDay;
    return (
      <div>
        <h1>Jak zostać królem</h1>
        <div>przewodnik interaktywny</div>
        <form>
          <input
            type="text"
            placeholder="wpisz zadanie"
            value={text}
            onChange={this.handleChangeText}
          />
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              checked={priority}
              onChange={this.handleChangePriority}
            />
            sprawa wagi państwowej
          </label>
          <label htmlFor="date">
            Termin realizacji:{" "}
            <input
              type="date"
              date={date}
              min={minDate}
              max={maxDate}
              onChange={this.handleDateChange}
            />
          </label>
          <button onClick={this.handleSubmit}>Dodaj</button>
        </form>
        <hr />
      </div>
    );
  }
}
export default AddTask;
