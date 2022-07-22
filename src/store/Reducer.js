const initState = {
  listJob: [],
  title: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'set_input':
      return {
        ...state,
        title: action.payload,
      };

    case 'set_todo':
      return {
        ...state,
        listJob: [action.payload, ...state.listJob],
        title: '',
      };

    case 'delete_todo':
      return {
        ...state,
        listJob: state.listJob.filter((todo) => todo.id !== action.payload),
      };

    case 'edit_todo':
      return {
        ...state,
        listJob: state.listJob.map((item) => {
          if (item.id === action.id) {
            item = {
              ...item,
              title: action.payload,
            };
          }
          return item;
        }),
      };

    case 'check_todo':
      const check = state.listJob.map((jobCheck) => {
        if (jobCheck.id === action.payload) {
          jobCheck.isCompleted = !jobCheck.isCompleted;
        }
        return jobCheck;
      });
      return {
        ...state,
        listJob: check,
      };

    case 'checkAll_todo':
      const checkAll = state.listJob.map((jobCheckAll) => {
        if (jobCheckAll.isCompleted == false) {
          jobCheckAll.isCompleted = true;
        }
        return jobCheckAll;
      });
      return {
        ...state,
        listJob: checkAll,
      };

    case 'clearAll_todo':
      return {
        ...state,
        listJob: [],
      };

    case 'completed_todo':
      let arrayOld = state.listJob;
      const newArray = arrayOld.filter((todoCompleted) => {
        switch (action.payload) {
          case 'active':
            return todoCompleted.isCompleted === false;
          case 'completed':
            return todoCompleted.isCompleted === true;
          case 'all':
            return todoCompleted;
          default:
            break;
        }
      });
      return {
        ...state,
        listJob: newArray,
      };

    default:
      throw new Error('sai ');
  }
}

export { initState };

export default reducer;
