import {Input} from '../../components/Input';
import {Task} from '../../components/Task';
import React, {useContext} from 'react';

import {TaskContext} from '../../contexts/task';

export function Home() {
  const {tasks} = useContext(TaskContext);

  return (
    <>
      <Input />
      {tasks.map(task => (
        <Task key={task.title} title={task.title} isChecked={task.isChecked} />
      ))}
    </>
  );
}
