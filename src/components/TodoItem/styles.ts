import styled from 'styled-components'
import { device } from '../../styles/theme'

export const ListItem = styled.li`
  list-style: none;
  width: 80%;
  max-width: 80%;

  padding: 0.5rem 0;
  display: flex;
  align-items: center;

  gap: 0.5rem;

  p {
    padding: 0 0.5rem;
    flex: 1;
    color: ${({ theme }) => theme.colors.gray200};

    overflow-wrap: break-word;
    word-wrap: break-word;

    word-break: break-word;

    /* Adds a hyphen where the word breaks, if supported (No Blink) */
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
  }

  @media ${device.mobileSmMd} {
    width: 100%;
    max-width: 100%;
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
