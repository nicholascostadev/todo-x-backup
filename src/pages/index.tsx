import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  height: 100vh;
  width: 100%;
`

export default function Home() {
  return <Wrapper>
    Hello World
  </Wrapper>
}
