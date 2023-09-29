import { TextProps } from 'react-native'
import { TextSyled } from './styles'

interface Props extends TextProps {}

export const Text = ({ ...props }: Props) => {
  return <TextSyled {...props} />
}
