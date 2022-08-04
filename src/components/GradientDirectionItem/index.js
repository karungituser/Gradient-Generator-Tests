import {ItemContainer, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, isActive, clickGradientDirectionItem} = props
  const {displayText, value} = directionDetails

  const onClickGradientDirection = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <ItemContainer>
      <DirectionButton
        type="button"
        isActive={isActive}
        onClick={onClickGradientDirection}
      >
        {displayText}
      </DirectionButton>
    </ItemContainer>
  )
}

export default GradientDirectionItem
