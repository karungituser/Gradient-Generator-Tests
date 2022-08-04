import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(${props => props.gradientValue});
  background-size: cover;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: #ededed;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`
export const TextDirection = styled.p`
  font-family: 'Roboto';
  font-size: 22px;
  color: #ffffff79;
`
export const OrderedListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    width: 40%;
  }
`
export const GenerateButton = styled.button`
  border: none;
  background-color: #00c9b7;
  border-radius: 7px;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  padding: 10px;
  cursor: pointer;
  margin-top: 15px;
  width: 100px;
`
export const CustomInput = styled.input`
  margin-right: 7px;
  padding: 0px;
  outline: none;
  width: 80px;
  height: 45px;
`
export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

export const ColorValue = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const ColorPickerContainer = styled.div`
  display: flex;
`
