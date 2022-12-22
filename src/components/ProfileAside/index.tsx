import Image from 'next/image'
import { UserMinus, UserPlus } from 'phosphor-react'
import {
  ActionButton,
  Container,
  ImageWrapper,
  ProfileFollowCountContainer,
  ProfileNameContainer,
} from './styles'

type ProfileAsideProps = {
  follows?: boolean
  toggleFollow: () => void
  followers: number
  following: number
}

export const ProfileAside = ({
  follows,
  toggleFollow,
  followers,
  following,
}: ProfileAsideProps) => {
  return (
    <Container>
      <ImageWrapper>
        <div>
          <Image
            src="https://github.com/nicholascostadev.png"
            alt="Profile picture"
            fill
          />
        </div>
      </ImageWrapper>
      <div>
        <ProfileNameContainer>
          <h2>Nicholas Costa</h2>
          <p>@nicholascostadev</p>
        </ProfileNameContainer>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
          dignissim orci. Donec tortor justo, blandit sit amet rhoncus ut,
          vehicula in libero. Duis sollicitudin magna nec mi dictum, non
          aliquam.
        </p>

        <div>
          {follows ? (
            <ActionButton onClick={toggleFollow}>
              <UserMinus size={16} />
              UnFollow
            </ActionButton>
          ) : (
            <ActionButton onClick={toggleFollow}>
              <UserPlus size={16} />
              Follow
            </ActionButton>
          )}
        </div>
        <ProfileFollowCountContainer>
          <p>
            <strong>{followers}</strong> Followers
          </p>
          <p>
            <strong>{following}</strong> Following
          </p>
        </ProfileFollowCountContainer>
      </div>
    </Container>
  )
}
