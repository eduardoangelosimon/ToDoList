import React, {createContext, useState} from 'react';
import {TaskType} from '../components/Task';

interface TaskContextProps {
  tasks: TaskType[];
  updateIsChecked: (id: number, newIsChecked: boolean) => void;
  deleteTask: (id: number) => void;
  createTask: (newTask: TaskType) => void;
}

export const TaskContext = createContext<TaskContextProps | undefined>(
  undefined,
);

const initialTasks: TaskType[] = [
  {id: 1, title: 'teste', isChecked: true},
  {id: 2, title: 'teste2', isChecked: false},
];

function TaskProvider({children}: any) {
  const [tasks, setTasks] = useState<TaskType[]>(initialTasks);

  const createTask = (newTask: TaskType): void => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const updateIsChecked = (id: number, newIsChecked: boolean): void => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? {...task, isChecked: newIsChecked} : task,
      ),
    );
  };

  const deleteTask = (id: number): void => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{tasks, updateIsChecked, deleteTask, createTask}}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
