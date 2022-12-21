import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.slate800};
  color: ${({ theme }) => theme.colors.gray200};

  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({ theme }) => theme.sizes.footer};

  > a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: inherit;
    text-decoration: none;

    padding: 0.5rem 1rem;
  }
`
