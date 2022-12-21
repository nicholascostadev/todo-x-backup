import Image from 'next/image'
import { GoogleLogo } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Container,
  Form,
  FormContainer,
  ImageContainer,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../../components/Input'

const SignupSchema = z
  .object({
    email: z.string().min(1, 'Email é obrigatório').email('Email inválido'),
    password: z.string().min(1, 'Senha é obrigatória'),
    confirmPassword: z.string().min(1, 'Senha é obrigatória'),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'As senhas devem ser iguais',
        path: ['confirmPassword'],
      })
    }
  })

type Signup = z.infer<typeof SignupSchema>

export default function SignupPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Signup>({
    resolver: zodResolver(SignupSchema),
  })
  const handleFormSubmit = (data: Signup) => {
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
          <h2>Registrar</h2>
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
          <label htmlFor="confirmPassword">Confirmar senha</label>
          <Input
            type="password"
            placeholder="Confirmação de senha"
            id="confirmPassword"
            error={errors.confirmPassword}
            {...register('confirmPassword')}
          />
          <button type="submit">Registrar</button>
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
