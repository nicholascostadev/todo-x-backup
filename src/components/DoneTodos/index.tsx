import { ArrowArcLeft, CaretDown, CaretUp } from 'phosphor-react'
import { useState } from 'react'
import { useTodosStore } from '../../store/useTodos'
import {
  CollapsibleContent,
  CollapsibleTitle,
  Container,
  DoneTodoItem,
  RecoverButton,
} from './styles'

export default function DoneTodos() {
  const [collapsed, setCollapsed] = useState(true)
  const doneTodos = useTodosStore((state) => state.doneTodos)
  const toggleTodoDoneState = useTodosStore(
    (state) => state.toggleTodoDoneState,
  )

  const recoverTodo = (todoId: string) => () => {
    toggleTodoDoneState(todoId)
  }

  return (
    <Container>
      <div>
        <CollapsibleTitle onClick={() => setCollapsed((prev) => !prev)}>
          Tarefas concluídas{' '}
          {collapsed ? <CaretDown size={20} /> : <CaretUp size={20} />}
        </CollapsibleTitle>
      </div>
      <CollapsibleContent active={collapsed}>
        {doneTodos.map((todo) => (
          <DoneTodoItem key={todo.id}>
            <p onClick={recoverTodo(todo.id)}>{todo.text}</p>
            <RecoverButton type="button" onClick={recoverTodo(todo.id)}>
              <ArrowArcLeft size={20} />
            </RecoverButton>
          </DoneTodoItem>
        ))}
      </CollapsibleContent>
    </Container>
  )
}
