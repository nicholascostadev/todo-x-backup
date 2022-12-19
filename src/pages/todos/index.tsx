import dynamic from 'next/dynamic'
import { Header } from '../../components/Header'
import { Container } from './styles'
const Todos = dynamic(() => import('../../components/Todos'), {
  ssr: false,
})

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
