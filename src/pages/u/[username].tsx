import dynamic from 'next/dynamic'
import { useState } from 'react'
import { ProfileAside } from '../../components/ProfileAside'
import { ProfileMainInfo } from '../../components/ProfileMainInfo'
import { Container } from './styles'

const Header = dynamic(() => import('../../components/Header'), {
  ssr: false,
})

export default function UserProfilePage() {
  const [following, setFollowing] = useState(false)

  const toggleFollow = () => {
    setFollowing((prev) => !prev)
  }

  return (
    <>
      <Header />
      <Container>
        <ProfileAside
          follows={following}
          toggleFollow={toggleFollow}
          following={10}
          followers={3}
        />
        <ProfileMainInfo />
      </Container>
    </>
  )
}
