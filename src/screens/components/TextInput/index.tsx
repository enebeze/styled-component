import { ImageSourcePropType, TextInputProps } from 'react-native'
import { Container, TextInputStyled, Icon } from './styles'
import { icons } from '../../../images/icons'

interface Props extends TextInputProps {
  icon?: ImageSourcePropType
  showEye?: boolean
}

export const TextInput = ({ placeholder, icon, showEye, style }: Props) => {
  return (
    <Container style={style}>
      <Icon source={icon!} />

      <TextInputStyled placeholder={placeholder} />

      {showEye && <Icon source={icons.eye} />}
    </Container>
  )
}
