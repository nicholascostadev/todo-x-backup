import styled from 'styled-components'

export const Container = styled.aside`
  ul {
    list-style: none;
  }

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    h2 {
      color: ${({ theme }) => theme.colors.gray400};
    }
    svg {
      color: ${({ theme }) => theme.colors.gray400};
    }
  }
`

export const RecoverButton = styled.button`
  border: 0;
  background: none;
  color: ${({ theme }) => theme.colors.gray400};
  cursor: pointer;
  transition: color 0.5s ease;

  &:hover,
  &:hover svg {
    color: ${({ theme }) => theme.colors.indigo700};
  }
`

export const DoneTodoItem = styled.li`
  width: 50%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  text-decoration: line-through;

  border-radius: ${({ theme }) => theme.rounded.sm};

  padding: 0.5rem;

  &,
  svg {
    transition: color 0.3s ease;
  }

  color: ${({ theme }) => theme.colors.gray400};

  p {
    transition: color 0.3s ease;
    color: ${({ theme }) => theme.colors.gray400};

    flex: 1;
  }

  &:hover {
    text-decoration: none;
    p {
      color: ${({ theme }) => theme.colors.indigo700};
    }

    svg {
      color: ${({ theme }) => theme.colors.indigo700};
    }

    > button {
      > span {
        color: ${({ theme }) => theme.colors.indigo700};
      }
    }
  }
`

type CollapsibleContentProps = {
  active?: boolean
}

export const CollapsibleContent = styled.ul<CollapsibleContentProps>`
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  max-height: ${({ active }) => (active ? '500px' : '0px')};
`

export const CollapsibleTitle = styled.button`
  border: 0;
  cursor: pointer;
  background-color: inherit;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: white;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`
