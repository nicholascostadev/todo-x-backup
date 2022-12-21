import styled from 'styled-components'
import { device } from '../../styles/theme'

export const Container = styled.div`
  height: ${({ theme }) =>
    `calc(100vh - ${theme.sizes.header} - ${theme.sizes.footer})`};
  width: ${({ theme }) => theme.width.base};
  max-width: 100%;
  margin: 0 auto;
  padding-top: 80px;
  color: white;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media ${device.mobileSmMd} {
    grid-template-columns: 1fr;
  }
`
