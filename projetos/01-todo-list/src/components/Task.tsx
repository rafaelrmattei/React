import { ChangeEvent } from 'react'
import { ButtonDelete } from './ButtonDelete'
import { Checkbox } from './Checkbox'

import styles from './Task.module.css'

export interface TaskType {
  id: string
  title: string
  isConcluded: boolean
}

interface TaskProps {
  task: TaskType
  onChangeStatusTask: (id: string, status: boolean) => void
  onDeleteTask: (id: string) => void
}

export function Task({ task, onChangeStatusTask, onDeleteTask }: TaskProps) {

  function handleToggleTask(event: ChangeEvent<HTMLInputElement>) {
    onChangeStatusTask(task.id, event.target.checked)
  }

  function handleDeleteTask(){
    onDeleteTask(task.id)
  }

  return (
    <li className={`${styles.task} ${styles.taskConcluded}`}>
      <Checkbox
        title={task.title}
        onChange={handleToggleTask}
      />
      <ButtonDelete onClick={handleDeleteTask} />
    </li>
  )
}