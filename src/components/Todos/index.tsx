import { FormEvent, useState } from 'react'
import { useTodosStore } from '../../store/useTodos'
import { TodoItem } from '../TodoItem'
import { Container, Input, TodosContainer } from './styles'

export default function Todos() {
  const [newTodo, setNewTodo] = useState('')
  const { todos, addTodo } = useTodosStore(({ todos, addTodo }) => ({
    todos,
    addTodo,
  }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    addTodo(newTodo)

    setNewTodo('')
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Começar uma nova tarefa"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </form>

      <TodosContainer>
        <ul>
          {todos?.map((todo) => (
            <TodoItem key={todo.id} todoId={todo.id} todoText={todo.text} />
          ))}
        </ul>
      </TodosContainer>
    </Container>
  )
}
