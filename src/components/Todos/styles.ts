import styled from 'styled-components'

export const Container = styled.div``

export const Input = styled.input`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  padding: 12px;
  width: 80%;
  border-radius: ${({ theme }) => theme.rounded.sm};
  color: ${({ theme }) => theme.colors.gray200};
  font-size: ${({ theme }) => theme.fontSize.md};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`
