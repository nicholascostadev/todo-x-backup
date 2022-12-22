import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.slate700};
  padding: 0.5rem;

  height: 500px;

  border-radius: ${({ theme }) => theme.rounded.sm};

  p {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`
