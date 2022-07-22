import React from 'react';
import Context from './Context';
import { useReducer, useState } from 'react';
import reducer, { initState } from './Reducer';

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  const [isEdit, setIsEdit] = useState('');
  const [openClear, setOpenClear] = useState('0');
  const value = { state, dispatch, isEdit, setIsEdit, openClear, setOpenClear };
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
