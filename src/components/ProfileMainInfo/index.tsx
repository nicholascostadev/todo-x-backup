import { MainStatusItem } from '../MainStatusItem'
import { ProfileMarkdown } from '../ProfileMarkdown'
import { Container } from './styles'

export const ProfileMainInfo = () => {
  return (
    <Container>
      <ProfileMarkdown />
      <h2>Status</h2>
      <div>
        <MainStatusItem amount={10} text={'Tasks Done today'} />
        <MainStatusItem amount={42} text={'Tasks Done'} />
        <MainStatusItem amount={18} text={'Undoned Tasks'} />
      </div>
    </Container>
  )
}
