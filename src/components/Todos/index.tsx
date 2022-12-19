import { FormEvent, useState } from 'react'
import { useTodosStore } from '../../store/useTodos'
import { Container, Input } from './styles'

export default function Todos() {
  const [newTodo, setNewTodo] = useState('')
  const { todos, addTodo } = useTodosStore(({ todos, addTodo }) => ({
    todos,
    addTodo,
  }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    addTodo(newTodo)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Começar uma nova tarefa"
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </form>

      <div>
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
