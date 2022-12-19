import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { useTodosStore } from '../../store/useTodos'
import { ListItem, TodoText, TrashButton } from './styles'

type TodoItemProps = {
  todoText: string
  todoId: string
}
export const TodoItem = ({ todoText, todoId }: TodoItemProps) => {
  const [done, setDone] = useState(false)
  const deleteTodo = useTodosStore((state) => state.deleteTodo)

  const handleDeleteTodo = (todoId: string) => () => {
    deleteTodo(todoId)
  }
  return (
    <ListItem>
      <input
        type="checkbox"
        name="done"
        checked={done}
        defaultChecked={done}
        onChange={(e) => setDone(e.target.checked)}
      />
      <TodoText done={done} onClick={() => setDone(prev => !prev)}>{todoText}</TodoText>
      <TrashButton type="button" onClick={handleDeleteTodo(todoId)}>
        <Trash color="red" size={20} />
      </TrashButton>
    </ListItem>
  )
}
