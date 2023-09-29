import styled from 'styled-components/native'
import { TextInput } from '../components/TextInput'
import { icons } from '../../images/icons'
import { Text } from '../components/Text'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 24px;
  background-color: ${(props) => props.theme.colors.primary};
`

export const Title = styled(Text)`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 8px;
  letter-spacing: 0.48px;
`

export const SubTitle = styled(Text)`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-bottom: 40px;
`

const LinkButton = styled.TouchableOpacity`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.5px;
`

export const ForgotPasswordLink = styled(LinkButton)`
  margin-bottom: 40px;
`

export const SignUpLink = styled(LinkButton)`
  margin-top: 52px;
`

type LinkTextProps = {
  align: 'right' | 'center' | 'left'
}

export const LinkText = styled(Text)<LinkTextProps>`
  font-weight: 600;
  text-align: ${(props) => props.align};
  font-size: 14px;
  letter-spacing: 0.5px;
`
export const InputEmail = styled(TextInput).attrs((props) => ({
  placeholder: 'Email',
  icon: icons.email,
}))`
  margin-bottom: ${(props) => props.theme.margin}px;
`

export const InputPassword = styled(TextInput).attrs(() => ({
  placeholder: 'Password',
  icon: icons.password,
  showEye: true,
}))`
  margin-bottom: ${(props) => props.theme.margin}px;
`
