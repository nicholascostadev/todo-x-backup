import { Trash } from 'phosphor-react'
import { useTodosStore } from '../../store/useTodos'
import { ListItem, TrashButton } from './styles'

type TodoItemProps = {
  todoText: string
  todoId: string
}
export const TodoItem = ({ todoText, todoId }: TodoItemProps) => {
  const deleteTodo = useTodosStore((state) => state.deleteTodo)

  const handleDeleteTodo = (todoId: string) => () => {
    deleteTodo(todoId)
  }
  return (
    <ListItem>
      <input type="checkbox" name="done" />
      <p>{todoText}</p>
      <TrashButton type="button" onClick={handleDeleteTodo(todoId)}>
        <Trash color="red" size={20} />
      </TrashButton>
    </ListItem>
  )
}
