import {Input} from '../../components/Input';
import {Task, TaskType} from '../../components/Task';
import React, {useContext} from 'react';
import {TaskContext} from '../../contexts/task';

export function Home() {
  const {tasks} = useContext(TaskContext);

  return (
    <>
      <Input />
      {tasks.map((task: TaskType) => (
        <Task id={task.id} title={task.title} isChecked={task.isChecked} />
      ))}
    </>
  );
}
