import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.input};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
  padding: 16px;
  border-radius: 12px;
  flex-direction: row;
`

export const TextInputStyled = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.placeholder,
}))`
  flex: 1;
`

export const Icon = styled.Image`
  height: 24px;
  width: 24px;
  margin-right: 6px;
`
