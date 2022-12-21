import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};

  > div {
    height: ${({ theme }) => theme.sizes.header};
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: white;

    @media (max-width: 768px) {
      padding: 0 1rem;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

export const ProfileButton = styled.button`
  height: 46px;
  width: 46px;
  border-radius: ${({ theme }) => theme.rounded.full};

  border: 0;
  background: none;
  cursor: pointer;

  > img {
    max-width: 100%;
    max-height: 100%;
    border-radius: ${({ theme }) => theme.rounded.full};
  }
`
