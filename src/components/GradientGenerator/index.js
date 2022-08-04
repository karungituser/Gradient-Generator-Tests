import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  Heading,
  TextDirection,
  OrderedListContainer,
  GenerateButton,
  CustomInput,
  CustomInputAndColorContainer,
  ColorValue,
  ColorPickerContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].directionId,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323,#014f7b`,
  }

  onChangeFromColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeToColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  onGenerate = () => {
    const {activeDirection, fromColorInput, toColorInput} = this.state

    this.setState({
      gradientValue: `to ${activeDirection},${fromColorInput},${toColorInput}`,
    })
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeDirection: direction})
  }

  render() {
    const {
      activeDirection,
      fromColorInput,
      toColorInput,
      gradientValue,
    } = this.state

    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <TextDirection>Choose Direction</TextDirection>
        <OrderedListContainer>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              key={eachDirection.directionId}
              directionDetails={eachDirection}
              isActive={eachDirection.value === activeDirection}
              clickGradientDirectionItem={this.clickGradientDirectionItem}
            />
          ))}
        </OrderedListContainer>
        <TextDirection>Pick the Colors</TextDirection>
        <ColorPickerContainer>
          <CustomInputAndColorContainer>
            <ColorValue>{fromColorInput}</ColorValue>
            <CustomInput
              type="color"
              value={fromColorInput}
              onChange={this.onChangeFromColor}
            />
          </CustomInputAndColorContainer>
          <CustomInputAndColorContainer>
            <ColorValue>{toColorInput}</ColorValue>
            <CustomInput
              type="color"
              value={toColorInput}
              onChange={this.onChangeToColor}
            />
          </CustomInputAndColorContainer>
        </ColorPickerContainer>
        <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator
