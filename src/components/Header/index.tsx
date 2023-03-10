import Image from 'next/image'
import { useUserStore } from '../../store/useUser'
import { Container, ProfileButton } from './styles'

const Header = () => {
  const { user } = useUserStore()
  return (
    <Container>
      <div>
        <h1>TODO APP</h1>

        <div>
          <p>{user.email}</p>
          <ProfileButton>
            <Image
              src="https://github.com/nicholascostadev.png"
              alt="Profile image"
              fill
            />
          </ProfileButton>
        </div>
      </div>
    </Container>
  )
}

export default Header
