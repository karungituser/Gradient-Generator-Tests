import styled from 'styled-components'

export const ItemContainer = styled.li`
  width: 45%;
  margin: 5px;
  padding-left: 0px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const DirectionButton = styled.button`
  color: ${props => (props.isActive ? '#1e293b' : '#334155')};
  font-family: 'Roboto';
  background-color: #ededed;
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  padding: 8px;
  width: 100%;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
