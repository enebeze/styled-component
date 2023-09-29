import styled from 'styled-components/native'

import { Text } from '../Text'

export const Container = styled.TouchableOpacity`
  width: 100%;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.secondary};
`
export const TextButton = styled(Text)`
  text-align: center;
  font-weight: 600;
  padding: 10px;
  color: ${(props) => props.theme.colors.primary};
`
