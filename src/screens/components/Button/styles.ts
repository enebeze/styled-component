import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: '100%';
  border-radius: 10px;
  background: ${(props) => props.theme.colors.secondary};
`
export const Text = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  padding: 10px;
`
