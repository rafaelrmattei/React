import { ChangeEvent, FormEvent, useState } from 'react'
import { useEffect } from 'react'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { ButtonCreate } from './components/ButtonCreate'
import { EmptyList } from './components/EmptyList'
import { Task, TaskType } from './components/Task'

import './global.css'
import styles from './App.module.css'

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [taskTitle, setTaskTitle] = useState('')
  const [taskCount, setTaskCount] = useState(0)
  const [taskConcludedCount, setTaskConcludedCount] = useState(0)

  function generateHash() {
    return Math.random().toString(36).substring(2, 9) + Date.now().toString(36)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([{
      id: generateHash(),
      title: taskTitle,
      isConcluded: false
    }, ...tasks])

    setTaskTitle('')
  }

  function handleNewTitle(event: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value)
  }

  function handleChangeStatusTask(id: string, status: boolean) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isConcluded: status }
      }
      return task
    })

    setTasks(updatedTasks)
  }

  function handleDeleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== id
    })

    setTasks(tasksWithoutDeletedOne)
  }

  useEffect(() => {
    setTaskCount(tasks.length)
    setTaskConcludedCount(tasks.filter(task => task.isConcluded).length)
  }, [tasks])

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <form onSubmit={handleCreateNewTask} className={styles.addTaskContainer}>
            <Input
              placeholder='Adicione uma nova tarefa'
              name="title"
              onChange={handleNewTitle}
              value={taskTitle}
              required
            />
            <ButtonCreate type='submit' />
          </form>
          <div>
            <header className={styles.taskListHeader}>
              <div className={styles.taskListTitleCreated}>
                <strong>Tarefas Criadas</strong>
                <span>{taskCount}</span>
              </div>
              <div className={styles.taskListTitleConcluded}>
                <strong>Concluídas</strong>
                <span>{taskConcludedCount}</span>
              </div>
            </header>
            <ul className={styles.taskList}>
              {tasks.length > 0 ? tasks.map(task => (
                <Task
                  key={task.id}
                  task={task}
                  onChangeStatusTask={handleChangeStatusTask}
                  onDeleteTask={handleDeleteTask}
                />
              )) : (
                <EmptyList />
              )}
            </ul>
          </div>
        </main>
      </div>
    </>
  )
}