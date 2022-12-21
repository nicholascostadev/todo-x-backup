import { Trash } from 'phosphor-react'
import { useTodosStore } from '../../store/useTodos'
import { ListItem, TodoText, TrashButton } from './styles'

type TodoItemProps = {
  todoText: string
  todoId: string
}
export const TodoItem = ({ todoText, todoId }: TodoItemProps) => {
  const { deleteTodo, doneTodos, toggleTodoDoneState } = useTodosStore(
    (state) => ({
      deleteTodo: state.deleteTodo,
      doneTodos: state.doneTodos,
      toggleTodoDoneState: state.toggleTodoDoneState,
    }),
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
