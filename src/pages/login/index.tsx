import Image from 'next/image'
import { GoogleLogo } from 'phosphor-react'
import { FormEvent } from 'react'
import { Container, Form, FormContainer, ImageContainer } from './styles'

export default function LoginPage() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }
  return (
    <Container>
      <ImageContainer>
        <Image
          src="/todo-illustration.svg"
          alt="Mulher confirmando tarefas completas"
          fill
        />
      </ImageContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="email" >Email</label>
          <input
            type="text"
            placeholder="email@exemplo.com"
            name="email"
            id="email"
          />
          <label htmlFor="password">Senha</label>
          <input
            type="text"
            placeholder="Senha"
            name="password"
            id="password"
          />
          <button type="submit">Entrar</button>
          <div>
            <div />
            <p>OU</p>
            <div />
          </div>
          <button type="button" name="google">
            <GoogleLogo />
            Entrar com o Google
          </button>
        </Form>
      </FormContainer>
    </Container>
  )
}
