import React, { useContext, useState } from 'react';
import './Filter.css';
import { StoreContext } from '../../store';
import { completed, clearAllTodo } from '../../store/Action';

function Filter() {
  const { state, dispatch, isEdit, setIsEdit, openClear, setOpenClear } =
    useContext(StoreContext);
  const { listJob, title } = state;
  const [active, setActive] = useState('');

  const handleFilter = (id) => {
    dispatch(completed(id));
    // console.log(id);
  };

  const handleClearAll = () => {
    dispatch(clearAllTodo());
    setOpenClear('0');
  };

  return (
    <>
      <div className="todoList__filter">
        <p className="todoList__totalItem">{listJob.length} item left</p>

        <div className="todoList__status">
          <p
            className="todoList__status-item"
            onClick={() => {
              // todoList__status--active
              handleFilter('all');
            }}
          >
            All
          </p>
          <p
            className="todoList__status-item"
            onClick={() => {
              handleFilter('active');
            }}
          >
            Active
          </p>
          <p
            className="todoList__status-item"
            onClick={() => {
              handleFilter('completed');
            }}
          >
            Complete
          </p>
        </div>

        <div
          className="todoList__clearAll"
          onClick={() => {
            handleClearAll();
          }}
          style={{ opacity: openClear }}
        >
          Clear Completed
        </div>
      </div>
    </>
  );
}

export default Filter;
