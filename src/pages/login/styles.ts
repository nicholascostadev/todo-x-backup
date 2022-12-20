import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.div`
  width: 450px;
  min-width: 40%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 10rem;

  background-color: ${({ theme }) => theme.colors.indigo800};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: ${({ theme }) => theme.rounded.sm};
  background-color: ${({ theme }) => theme.colors.slate800};
  padding: 1rem;
  min-width: 450px;

  * {
    background-color: inherit;
    color: ${({ theme }) => theme.colors.gray200};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: center;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  label {
    font-size: ${({ theme }) => theme.fontSize.md}; }

  > input {
    border: 1px solid ${({ theme }) => theme.colors.slate700};
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: ${({ theme }) => theme.rounded.sm};
    font-size: ${({ theme }) => theme.fontSize.md};
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.colors.gray200};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray400};
    }
  }

  > div {
    display: flex;
    align-items: center;

    background: transparent;

    > div {
      border: 1px solid ${({ theme }) => theme.colors.gray200};
      height: 1px;
    }

    > p {
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize.md};
      color: ${({ theme }) => theme.colors.gray200};
    }

    * {
      background: transparent;
      flex: 1;
    }
  }

  > button {
    border: 0;
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.gray200};
    cursor: pointer;

    &[type='submit'] {
      border-radius: ${({ theme }) => theme.rounded.full};
      background-color: ${({ theme }) => theme.colors.indigo700};
      padding: 0.5rem 1rem;
      transition: background-color 0.5s ease-out;

      &:hover {
        background-color: ${({ theme }) => theme.colors.indigo800};
      }
    }

    &[name='google'] {
      background-color: #db4437;
      padding: 0.5rem 1rem;
      transition: background-color 0.5s ease-out;
      border-radius: ${({ theme }) => theme.rounded.full};

      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.5rem;

      svg {
        background-color: transparent;
        color: white;
      }

      &:hover {
        background-color: #db4440;
        padding: 0.5rem 1rem;
      }
    }
  }
`

export const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  width: 500px;
  height: 500px;
`
