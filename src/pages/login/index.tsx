import Image from 'next/image'
import { GoogleLogo } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Container, Form, FormContainer, ImageContainer } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../../components/Input'

const loginSchema = z.object({
  email: z.string().min(1, 'Email é obrigatório').email('Email inválido'),
  password: z.string().min(1, 'Senha é obrigatória'),
})

type Login = z.infer<typeof loginSchema>

export default function LoginPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Login>({
    resolver: zodResolver(loginSchema),
  })
  const handleFormSubmit = (data: Login) => {
    // no server currently
    return data
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
        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            placeholder="email@exemplo.com"
            id="email"
            error={errors.email}
            {...register('email')}
          />
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            placeholder="Senha"
            id="password"
            error={errors.password}
            {...register('password')}
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
