import styled from 'styled-components'

export const Container = styled.div`
  width: ${({ theme }) => theme.width.base};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
`
