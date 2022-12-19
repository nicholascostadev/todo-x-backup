import styled from 'styled-components'

export const ListItem = styled.li`
  list-style: none;
  max-width: 80%;

  padding: 0.5rem 0;
  display: flex;
  align-items: center;

  p {
    padding: 0 0.5rem;
    flex: 1;
    color: ${({ theme }) => theme.colors.gray200};
  }
`

export const TrashButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`

type TodoTextProps = {
  done?: boolean
}

export const TodoText = styled.p<TodoTextProps>`
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
  cursor: pointer;
`
