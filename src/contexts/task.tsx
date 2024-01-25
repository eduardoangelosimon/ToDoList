import React, {createContext, useState} from 'react';

export const TaskContext = createContext({
  tasks: [
    {title: 'teste', isChecked: true},
    {title: 'teste2', isChecked: false},
  ],
});

function TaskProvider({children}: any) {
  return (
    <TaskContext.Provider
      value={{
        tasks: [
          {title: 'teste', isChecked: true},
          {title: 'teste2', isChecked: false},
        ],
      }}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
