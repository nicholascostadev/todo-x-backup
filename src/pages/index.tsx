import Head from 'next/head'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  height: 100vh;
  width: 100%;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Wrapper>Hello World</Wrapper>
    </>
  )
}
