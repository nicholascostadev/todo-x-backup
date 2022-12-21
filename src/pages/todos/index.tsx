import dynamic from 'next/dynamic'
import Head from 'next/head'
import Router from 'next/router'
import { useEffect } from 'react'
import { MoonLoader } from 'react-spinners'
import { Footer } from '../../components/Footer'
import { useUserStore } from '../../store/useUser'
import { Container } from './styles'

const Header = dynamic(() => import('../../components/Header'), {
  ssr: false,
})
const Todos = dynamic(() => import('../../components/Todos'), {
  ssr: false,
  loading: () => (
    <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '80%' }}>
      <MoonLoader color="#4338CA" size={20} />
    </div>
  ),
})
const DoneTodos = dynamic(() => import('../../components/DoneTodos'), {
  ssr: false,
  loading: () => (
    <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '50%' }}>
      <MoonLoader color="#4338CA" size={20} />
    </div>
  ),
})

export default function TodosPage() {
  const { user } = useUserStore((state) => ({ user: state.user }))

  useEffect(() => {
    if (!user.email) {
      Router.push('/login')
    }
  }, [user.email])

  return (
    <>
      <Head>
        <title>My Todos</title>
      </Head>
      <Header />
      <Container>
        <Todos />
        <DoneTodos />
      </Container>
      <Footer />
    </>
  )
}
