import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - ${({ theme }) => theme.sizes.header});
  width: ${({ theme }) => theme.width.base};
  margin: 0 auto;
  padding-top: 80px;
  color: white;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
