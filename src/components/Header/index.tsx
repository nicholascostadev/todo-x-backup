import Image from 'next/image'
import { Container, ProfileButton } from './styles'

export const Header = () => {
  return (
    <Container>
      <div>
        <h1>TODO APP</h1>

        <ProfileButton>
          <img
            src="https://github.com/nicholascostadev.png"
            alt="Profile image"
          />
        </ProfileButton>
      </div>
    </Container>
  )
}
