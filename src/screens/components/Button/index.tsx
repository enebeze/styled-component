import { Container, TextButton } from './styles'

type Props = {
  text: string
  onPress(): void
}

export const Button = ({ text, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <TextButton>{text}</TextButton>
    </Container>
  )
}
