import { GithubLogo } from 'phosphor-react'
import { Container } from './styles'

export const Footer = () => {
  return (
    <Container>
      <a
        href="https://github.com/nicholascostadev/todo-x"
        target="_blank"
        rel="noreferrer"
      >
        Source Code
        <GithubLogo />
      </a>
    </Container>
  )
}
