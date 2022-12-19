import { FormEvent } from 'react'
import { Container, Input } from './styles'

export const Todos = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Começar uma nova tarefa" />
      </form>
    </Container>
  )
}
