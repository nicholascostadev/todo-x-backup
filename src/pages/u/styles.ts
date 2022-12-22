import styled from 'styled-components'

export const Container = styled.div`
  width: ${({ theme }) => theme.width.base};
  max-width: 100%;

  margin: 5rem auto;

  display: grid;
  gap: 5rem;
  grid-template-columns: 0.35fr 1fr;
  justify-content: center;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`
