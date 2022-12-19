import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  width: ${({ theme }) => theme.width.base};
  margin: 24px auto;
  color: white;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
