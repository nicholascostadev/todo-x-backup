import { Container } from './styles'
type MainStatusItemProps = {
  amount: number
  text: string
}

export const MainStatusItem = ({ amount, text }: MainStatusItemProps) => {
  return (
    <Container>
      <p>
        <span>{amount}</span> {text}
      </p>
    </Container>
  )
}
