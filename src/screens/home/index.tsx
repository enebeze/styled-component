import { Button } from '../components/Button'
import {
  Container,
  ForgotPasswordLink,
  LinkText,
  SubTitle,
  Title,
  SignUpLink,
  InputEmail,
  InputPassword,
} from './styles'

export const Home = () => {
  return (
    <Container>
      <Title>Welcome Back!</Title>
      <SubTitle>Please enter your account here</SubTitle>

      <InputEmail />
      <InputPassword />

      <ForgotPasswordLink>
        <LinkText align='right'>Forgot password?</LinkText>
      </ForgotPasswordLink>

      <Button onPress={() => {}} text='Log In' />

      <SignUpLink>
        <LinkText align='center'>Don't have any account? Sign Up</LinkText>
      </SignUpLink>
    </Container>
  )
}
