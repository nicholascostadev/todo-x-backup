import { Header } from '../../components/Header'
import { Todos } from '../../components/Todos'
import { Container } from './styles'

export default function TodosPage() {
  return (
    <>
      <Header />
      <Container>
        <Todos />
        <div></div>
      </Container>
    </>
  )
}
