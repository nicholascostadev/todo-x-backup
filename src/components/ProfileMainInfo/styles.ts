import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    color: ${({ theme }) => theme.colors.gray50};
    background-color: ${({ theme }) => theme.colors.slate700};
    border-radius: ${({ theme }) => theme.rounded.sm};
    padding: 0.5rem;

    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.5rem;
  }

  > h2 {
    font-size: ${({ theme }) => theme.fontSize.lg};
    color: ${({ theme }) => theme.colors.gray50};
  }
`
