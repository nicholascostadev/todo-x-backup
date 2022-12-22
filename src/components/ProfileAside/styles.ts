import styled from 'styled-components'

export const Container = styled.aside`
  border-radius: ${({ theme }) => theme.rounded.sm};
  background-color: ${({ theme }) => theme.colors.slate700};

  padding: 1rem;

  position: relative;

  height: 600px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: ${({ theme }) => theme.colors.gray50};

    text-align: center;

    p {
      color: ${({ theme }) => theme.colors.gray200};
      margin: 0.5rem 0;

      font-size: ${({ theme }) => theme.fontSize.sm};
    }
  }
`

export const ImageWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 1rem;

  width: 100%;

  > div {
    width: 200px;
    height: 200px;

    position: relative;

    img {
      border-radius: ${({ theme }) => theme.rounded.full};
    }
  }
`

export const ActionButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.indigo700};
  background-color: transparent;
  border-radius: ${({ theme }) => theme.rounded.sm};

  cursor: pointer;

  padding: 0.5rem 1rem;

  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.gray50};

  transition: background-color, border 0.3s ease;

  text-transform: uppercase;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.indigo500};
    border: 1px solid ${({ theme }) => theme.colors.indigo500};
  }
`

export const ProfileNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ProfileFollowCountContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  margin: 1rem 0;
`
