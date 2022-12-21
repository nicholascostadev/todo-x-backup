import styled from 'styled-components'

export const Container = styled.div`
  width: ${({ theme }) => theme.width.base};
  margin: 0 auto;
  display: grid;
  grid-template-columns: .2fr .8fr;
`
