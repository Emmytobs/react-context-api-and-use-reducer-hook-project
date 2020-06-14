import React, { useReducer, createContext } from 'react';
import reducer from './reducer';

const initialState = ['MUN','Holland College','Seneca College'];

export const Context = createContext();

export const Provider = ({ children }) => {

  const [ state, dispatch ] = useReducer(reducer, initialState);
  
  React.useEffect(() => console.log(state, dispatch), []);

  // Actions
  const addSchool = (school_name) => {
    dispatch({
      type: 'ADD_SCHOOL',
      payload: school_name
    })
  }

  return (
    <Context.Provider value={{
      schools: state,
      addSchool
    }}>
      {children}
    </Context.Provider>
  )
}