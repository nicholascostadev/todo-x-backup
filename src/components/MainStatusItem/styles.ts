import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.slate800};
  padding: 1.5rem;

  font-size: ${({ theme }) => theme.fontSize.md};

  border-radius: ${({ theme }) => theme.rounded.sm};

  flex: 1;
  span {
    font-weight: bold;
  }
`
