export const setInput = (payload) => ({
  type: 'set_input',
  payload,
});

export const setTodo = (payload) => ({
  type: 'set_todo',
  payload,
});

export const checkTodo = (payload) => ({
  type: 'check_todo',
  payload,
});

export const checkAllTodo = (payload) => ({
  type: 'checkAll_todo',
  payload,
});

export const clearAllTodo = (payload) => ({
  type: 'clearAll_todo',
  payload,
});

export const deleteTodo = (payload) => ({
  type: 'delete_todo',
  payload,
});

export const editTodo = (payload, id) => ({
  type: 'edit_todo',
  payload,
  id,
});

export const completed = (payload) => ({
  type: 'completed_todo',
  payload,
});
// export const active = (payload) => ({
//   type: 'active_todo',
//   payload,
// });
// export const all = (payload) => ({
//   type: 'all_todo',
//   payload,
// });
