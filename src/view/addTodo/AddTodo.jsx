import React from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../store';
import { setInput, setTodo, checkAllTodo } from '../../store/Action';

import './AddTodo.css';

function AddTodo() {
  const { state, dispatch, isEdit, setIsEdit, setOpenClear } =
    useContext(StoreContext);
  const { listJob, title } = state;

  const handleChangeInput = (e) => {
    dispatch(setInput(e.target.value));
    setIsEdit('');
  };

  const handleAddTodo = (e) => {
    if (e.keyCode == 13) {
      if (title == '') {
        alert('ban chua nhapp j ');
        return;
      }
      dispatch(
        setTodo({
          id: new Date().getTime(),
          title,
          isCompleted: false,
        })
      );
    }
  };

  const handleCheckAll = (id) => {
    listJob.forEach((job) => {
      if (job.isCompleted === id) {
        setOpenClear('1');
      } else {
        setOpenClear('0');
      }
      dispatch(checkAllTodo(id));
    });
  };

  return (
    <div>
      <div className="todoList__addTodo">
        <i
          className="fa-regular fa-chevron-down  todoList__checkAll"
          onClick={() => {
            handleCheckAll(false);
          }}
        ></i>
        <input
          type="text"
          placeholder="What need to be done?"
          className="todoList__add"
          value={title}
          onChange={(e) => handleChangeInput(e)}
          onKeyDown={(e) => {
            handleAddTodo(e);
          }}
        />
      </div>
    </div>
  );
}

export default AddTodo;
