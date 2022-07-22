import React, { useState } from 'react';
import './Todos.css';
import { useContext } from 'react';
import { StoreContext } from '../../store';
import { checkTodo, deleteTodo, editTodo } from '../../store/Action';

function Todos() {
  const { state, dispatch, isEdit, setIsEdit } = useContext(StoreContext);
  const { listJob } = state;
  const [editTodoInput, setEditTodoInput] = useState('');

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
    setIsEdit('');
  };

  const handleChangeEdit = (id) => {
    setIsEdit(id);
  };

  const handleCheckTodo = (id) => {
    dispatch(checkTodo(id));
    setIsEdit('');
  };

  const handleChangeTodo = (value, id, e) => {
    if (e.keyCode === 13) {
      if (value === '') {
        dispatch(deleteTodo(id));
        return;
      }
      dispatch(editTodo(value, id));
      setEditTodoInput('');
      setIsEdit('');
    }
  };
  return (
    <>
      <div className="todoList__todos">
        {listJob.map((job) => (
          <div className="todoList__todo" key={job.id}>
            <input
              type="checkbox"
              className="todoList__todoCheck"
              checked={job.isCompleted}
              onChange={() => {
                handleCheckTodo(job.id);
              }}
            />
            {isEdit === job.id ? (
              <input
                type="text"
                value={editTodoInput}
                className={
                  job.isCompleted === false
                    ? 'todoList__edit'
                    : 'todoList__edit--active'
                }
                onChange={(e) => setEditTodoInput(e.target.value)}
                onKeyDown={(e) => handleChangeTodo(editTodoInput, job.id, e)}
              />
            ) : (
              <p
                className={
                  job.isCompleted === false
                    ? 'todoList__edited'
                    : 'todoList__edited--acitve'
                }
                onDoubleClick={() => {
                  handleChangeEdit(job.id);
                }}
              >
                {job.title}
              </p>
            )}

            <i
              className="fa-regular fa-xmark-large todoList__delete"
              onClick={() => {
                handleDeleteTodo(job.id);
              }}
            ></i>
          </div>
        ))}
      </div>
    </>
  );
}

export default Todos;
