import styled from 'styled-components'
import { device } from '../../styles/theme'

export const Container = styled.div`
  max-width: 100%;

  @media ${device.mobileSmMd} {
    padding: 0 1rem;
  }
`

export const Input = styled.input`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  padding: 12px;
  width: 80%;
  border-radius: ${({ theme }) => theme.rounded.sm};
  color: ${({ theme }) => theme.colors.gray200};
  font-size: ${({ theme }) => theme.fontSize.md};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }

  @media ${device.mobileSmMd} {
    width: 100%;
  }
`

export const TodosContainer = styled.div`
  margin-top: 1rem;
`
