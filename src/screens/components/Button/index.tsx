import { Container, Text } from './styles'

type Props = {
  text: string
  onPress(): void
}

export const Button = ({ text, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Text>{text}</Text>
    </Container>
  )
}
