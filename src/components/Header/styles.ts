import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};

  > div {
    height: 70px;
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
  }
`

export const ProfileButton = styled.button`
  height: 46px;
  width: 46px;
  border-radius: 9999999px;

  border: 0;
  background: none;
  cursor: pointer;

  > img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 99999999px;
  }
`
