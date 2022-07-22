import React from "react";
import AddTodo from "./addTodo/AddTodo";
import Todos from "./todos/Todos";
import Filter from "./filter/Filter";
import "./TodoList.css";

function TodoList() {
  return (
    <>
      <div className="todoList">
        <div className="todoList__title">todos</div>
        <div className="todoList__dashboard">
          <AddTodo />
          <Todos />
          <Filter />
        </div>
      </div>
    </>
  );
}

export default TodoList;
