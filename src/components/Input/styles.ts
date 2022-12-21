import styled from 'styled-components'

type InputProps = {
  error: boolean
}

export const InputWrapper = styled.input<InputProps>`
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.red500 : theme.colors.slate700};
  outline: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red500 : 'auto')};
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: ${({ theme }) => theme.rounded.sm};
  font-size: ${({ theme }) => theme.fontSize.md};
  padding: 0.5rem 1rem;
  color: ${({ theme, error }) =>
    error ? theme.colors.red500 : theme.colors.gray200};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`

export const InputError = styled.span`
  color: ${({ theme }) => theme.colors.red500}; `
