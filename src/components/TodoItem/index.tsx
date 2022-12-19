import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { useTodosStore } from '../../store/useTodos'
import { ListItem, TodoText, TrashButton } from './styles'

type TodoItemProps = {
  todoText: string
  todoId: string
}
export const TodoItem = ({ todoText, todoId }: TodoItemProps) => {
  const deleteTodo = useTodosStore((state) => state.deleteTodo)
  const doneTodos = useTodosStore((state) => state.doneTodos)
  const toggleTodoDoneState = useTodosStore(
    (state) => state.toggleTodoDoneState,
  )

  const done = doneTodos.findIndex((todo) => todo.id === todoId) !== -1

  const handleDeleteTodo = (todoId: string) => () => {
    deleteTodo(todoId)
  }

  const handleToggleTodoState = (todoId: string) => () => {
    toggleTodoDoneState(todoId)
  }

  return (
    <ListItem>
      <input
        type="checkbox"
        name="done"
        checked={done}
        defaultChecked={done}
        onChange={handleToggleTodoState(todoId)}
      />
      <TodoText done={done} onClick={handleToggleTodoState(todoId)}>
        {todoText}
      </TodoText>
      <TrashButton type="button" onClick={handleDeleteTodo(todoId)}>
        <Trash color="red" size={20} />
      </TrashButton>
    </ListItem>
  )
}
